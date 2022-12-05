import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { newStrategyScore, strategyScore } from "./day2.ts";

const strategyGuide = `A Y
B X
C Z`;

Deno.test("the total score will be 15", () => {
  assertEquals(strategyScore(strategyGuide), 15);
});

Deno.test("with the new rules, the score should be 12", () => {
  assertEquals(newStrategyScore(strategyGuide), 12);
});
