import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { calculateMostCalories } from "./day1.ts";

const testList = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

Deno.test("find the most calories a single elf carries", () => {
  assertEquals(calculateMostCalories(testList), 24000);
});

Deno.test("find the total calories of top 3 elves", () => {
  assertEquals(calculateMostCalories(testList, 3), 45000);
});
