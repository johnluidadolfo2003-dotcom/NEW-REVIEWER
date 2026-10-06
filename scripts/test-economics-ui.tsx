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
fireEvent.click(view.getByRole("button", { name: "Formula bank" }));
assert.ok(
  view.getByRole("heading", { name: "Ordinary annuity — present worth" }),
);
assert.equal(document.querySelectorAll(".katex-error").length, 0);
fireEvent.click(view.getByRole("button", { name: "Canon techniques" }));
assert.ok(view.getByRole("heading", { name: "Canon F-789SGA" }));
fireEvent.click(view.getByRole("button", { name: "Original sheets" }));
assert.equal(view.getAllByText("Open source folder ↗").length, 20);
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
  "PASS: lesson completion, practice gate/relock, persistence, expanded answers, search, terms, formula rendering, calculator guide, and 20 sheets.",
);
