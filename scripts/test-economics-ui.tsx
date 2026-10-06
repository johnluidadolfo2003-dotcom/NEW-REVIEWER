import { JSDOM } from "jsdom";
import assert from "node:assert/strict";
const dom = new JSDOM("<!doctype html><html><body></body></html>", {
  url: "http://localhost",
});
Object.defineProperties(globalThis, {
  window: { value: dom.window },
  document: { value: dom.window.document },
  navigator: { value: dom.window.navigator },
  localStorage: { value: dom.window.localStorage },
  HTMLElement: { value: dom.window.HTMLElement },
  MutationObserver: { value: dom.window.MutationObserver },
});
const React = await import("react");
const { render, fireEvent, within, cleanup } =
  await import("@testing-library/react");
const { EconomicsStudyHub, readEconomicsProgress } =
  await import("../src/components/EconomicsStudy");
const view = render(<EconomicsStudyHub />);
assert.ok(view.getByText("Finish your seven-day plan to unlock practice"));
assert.equal(
  view.queryByText("Problem 1 · Inflation and real purchasing power"),
  null,
);
for (let day = 1; day <= 7; day++) {
  fireEvent.click(view.getByRole("button", { name: `Day ${day}` }));
  fireEvent.click(
    view.getByRole("button", { name: `Mark day ${day} complete` }),
  );
}
assert.equal(readEconomicsProgress().length, 7);
assert.equal(
  view.queryByText("Finish your seven-day plan to unlock practice"),
  null,
);
// Walk every practice page to verify all requested questions are rendered in-app.
const numericalSeen = new Set<number>();
for (let page = 1; page <= 9; page++) {
  for (const label of view.getAllByText(/^Problem \d+ ·/))
    numericalSeen.add(Number(label.textContent!.match(/Problem (\d+)/)![1]));
  if (page < 9) fireEvent.click(view.getByRole("button", { name: "Next" }));
}
assert.equal(numericalSeen.size, 175);
for (let page = 9; page > 1; page--)
  fireEvent.click(view.getByRole("button", { name: "Previous" }));
const first = view
  .getByText("Problem 1 · Inflation and real purchasing power")
  .closest("article")!;
assert.equal(first.querySelector("details")!.open, false);
fireEvent.click(within(first).getByRole("button", { name: "A. 15030.03" }));
first.querySelector("details")!.open = true;
assert.ok(within(first).getByText("Answer: A"));
assert.ok(within(first).getByText("Your selected answer matches."));
fireEvent.change(
  view.getByRole("textbox", { name: "Search sample problems" }),
  { target: { value: "gives no final amount" } },
);
assert.ok(view.getByText("Problem 95 · Continuous compounding"));
assert.ok(view.getByText("Source question needs a correction"));
fireEvent.click(view.getByRole("button", { name: "Terms · 100" }));
assert.ok(view.getByText("Terms question 1"));
assert.ok(
  within(view.getByText("Terms question 1").closest("article")!).getByText(
    "Intended answer: D",
  ),
);
const termsSeen = new Set<number>();
for (let page = 1; page <= 5; page++) {
  for (const label of view.getAllByText(/^Terms question \d+$/))
    termsSeen.add(Number(label.textContent!.match(/(\d+)$/)![1]));
  if (page < 5) fireEvent.click(view.getByRole("button", { name: "Next" }));
}
assert.equal(termsSeen.size, 100);
assert.equal(document.querySelector('a[href*="drive.google.com"]'), null);
fireEvent.click(view.getByRole("button", { name: "Formula bank" }));
assert.ok(
  view.getByRole("heading", { name: "Ordinary annuity — present worth" }),
);
assert.equal(document.querySelectorAll(".katex-error").length, 0);
fireEvent.click(view.getByRole("button", { name: "Canon techniques" }));
assert.ok(view.getByRole("heading", { name: "Canon F-789SGA" }));
fireEvent.click(view.getByRole("button", { name: "Topic lessons" }));
assert.equal(document.querySelectorAll("[data-topic-id]").length, 25);
assert.ok(
  view.getByRole("heading", { name: "Engineering Economics topic lessons" }),
);
assert.equal(document.querySelector('a[href*="drive.google.com"]'), null);
assert.ok(
  view.getByText(
    "Future amount ₱1,210; interest ₱210. For nominal r compounded m times/year, use i=r/m and n=m×years.",
  ),
);
cleanup();
const reload = render(<EconomicsStudyHub />);
assert.ok(reload.getByText("7/7 days complete"));
fireEvent.click(reload.getByRole("button", { name: "Day 1" }));
fireEvent.click(reload.getByRole("button", { name: "Day 1 complete · undo" }));
assert.ok(reload.getByText("Finish your seven-day plan to unlock practice"));
cleanup();
localStorage.setItem("economics-source-week-v1", '[1,1,8,"2",null]');
assert.deepEqual(readEconomicsProgress(), [1]);
localStorage.setItem("economics-source-week-v1", "broken");
assert.deepEqual(readEconomicsProgress(), []);
console.log(
  "PASS: lesson completion, practice gate/relock, persistence, expanded answers, search, terms, formula rendering, calculator guide, all topic lessons, and no Drive review links.",
);
