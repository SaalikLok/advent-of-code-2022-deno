export const calculateMostCalories = (
  foodList: string,
  topNumElves = 1,
): number => {
  const topCaloriesArray = caloriesPerElf(foodList).slice(0, topNumElves);
  return topCaloriesArray.reduce((a, b) => a + b, 0);
};

const caloriesPerElf = (foodList: string): number[] => {
  const foodListPerElf = foodList.split("\n\n");

  const sumCaloriesPerElf = foodListPerElf.map((elf) => {
    const caloriesArray = elf.split("\n").map(Number);
    return caloriesArray.reduce((a, b) => a + b, 0);
  });

  return sumCaloriesPerElf.sort((a, b) => b - a);
};

const inputFile = await Deno.readTextFile("day1/day-1-input.txt");

// Part 1: Max Calorie Elf
console.log(calculateMostCalories(inputFile));

// Part 2: Top 3 Calories Elf
console.log(calculateMostCalories(inputFile, 3));
