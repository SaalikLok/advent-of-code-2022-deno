let totalScore = 0;

export const strategyScore = (rawStrategy: string): number => {
  totalScore = 0
  const eachRound = rawStrategy.split("\n");
  eachRound.forEach((roundString) => {

    if (roundString.includes("X")) {
      chooseRock();
      
      if (roundString.includes("A")) {
        draw();
      }

      if (roundString.includes("B")) {
        lose();
      }

      if (roundString.includes("C")) {
        win();
      }
    }

    if (roundString.includes("Y")) {
      choosePaper();

      if (roundString.includes("A")) {
        win();
      }

      if (roundString.includes("B")) {
        draw();
      }

      if (roundString.includes("C")) {
        lose();
      }
    }

    if (roundString.includes("Z")) {
      chooseScissors();

      if (roundString.includes("A")) {
        lose();
      }

      if (roundString.includes("B")) {
        win();
      }

      if (roundString.includes("C")) {
        draw();
      }
    }
  });

  return totalScore;
};

export const newStrategyScore = (rawStrategy: string): number => {
  totalScore = 0
  const eachRound = rawStrategy.split("\n");
  
  eachRound.forEach(roundString => {
    // they choose rock
    if (roundString.includes("A")) {
      if (roundString.includes("X")) {
        lose();
        chooseScissors();
      }

      if (roundString.includes("Y")) {
        draw();
        chooseRock();
      }

      if (roundString.includes("Z")) {
        win();
        choosePaper();
      }
    }

    // they choose paper
    if (roundString.includes("B")) {
      if (roundString.includes("X")) {
        lose();
        chooseRock();
      }

      if (roundString.includes("Y")) {
        draw();
        choosePaper();
      }

      if (roundString.includes("Z")) {
        win();
        chooseScissors();
      }
    }

    // they choose scissors
    if (roundString.includes("C")) {
      if (roundString.includes("X")) {
        lose();
        choosePaper();
      }

      if (roundString.includes("Y")) {
        draw();
        chooseScissors();
      }

      if (roundString.includes("Z")) {
        win();
        chooseRock();
      }
    }
  })

  return totalScore;
}

const chooseRock = () => {
  totalScore += 1
}

const choosePaper = () => {
  totalScore += 2
}

const chooseScissors = () => {
  totalScore += 3
}

const win = () => {
  totalScore += 6
}

const lose = () => {
  totalScore += 0
}

const draw = () => {
  totalScore += 3
}

const inputFile = await Deno.readTextFile("day2/day-2-input.txt");
console.log(`Round 1: ${strategyScore(inputFile)}`)
console.log(`Round 2: ${newStrategyScore(inputFile)}`)
