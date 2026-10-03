import assert from "node:assert/strict";
import { test } from "node:test";
import { createCalendar, parseContributions } from "../src/lib/github-calendar.ts";

test("pairs reordered day attributes with their own tooltip counts", () => {
  const html = `<td data-level="4" id="day-b" data-date="2026-10-02"></td>
    <td id="day-a" data-date="2026-10-01" data-level="0"></td>
    <tool-tip for="day-a">No contributions on October 1st.</tool-tip>
    <tool-tip for="day-b">1,234 contributions on October 2nd.</tool-tip>`;
  assert.deepEqual(parseContributions(html), [
    { date: "2026-10-01", count: 0, level: 0 },
    { date: "2026-10-02", count: 1234, level: 4 },
  ]);
});

test("rejects missing counts instead of displaying invented zero activity", () => {
  assert.throws(() => parseContributions(`<td id="day" data-date="2026-10-01" data-level="2"></td>`));
  assert.throws(() => parseContributions("<html>Unavailable</html>"));
});

function daysBetween(start, end) {
  const days = [];
  for (let date = new Date(`${start}T00:00:00Z`); date.toISOString().slice(0, 10) <= end; date.setUTCDate(date.getUTCDate() + 1)) {
    days.push({ date: date.toISOString().slice(0, 10), count: 1, level: 1 });
  }
  return days;
}

test("totals only the three-month range and aligns days Sunday to Saturday", () => {
  const calendar = createCalendar(daysBetween("2026-07-01", "2026-10-04"), new Date("2026-10-03T18:00:00Z"));
  assert.equal(calendar.start, "2026-07-04");
  assert.equal(calendar.end, "2026-10-03");
  assert.equal(calendar.total, 92);
  assert.equal(calendar.weeks[0][0], null);
  assert.equal(calendar.weeks[0][6].date, "2026-07-04");
  assert.equal(calendar.weeks.at(-1)[6].date, "2026-10-03");
});

test("clamps month-end subtraction and handles crossing a year", () => {
  const may = createCalendar(daysBetween("2024-02-01", "2024-05-31"), new Date("2024-05-31T00:00:00Z"));
  assert.equal(may.start, "2024-03-01");
  const january = createCalendar(daysBetween("2025-10-01", "2026-01-05"), new Date("2026-01-05T00:00:00Z"));
  assert.equal(january.start, "2025-10-06");
  assert.equal(january.weeks.at(-1)[2], null);
});

test("rejects incomplete range data", () => {
  assert.throws(() => createCalendar([{ date: "2026-10-03", count: 5, level: 2 }], new Date("2026-10-03T00:00:00Z")), /missing/);
});
