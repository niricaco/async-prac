const loadDouble = require("./load");

//---------------------------------------------------------------------------

//const result = loadDouble(5).then((solution) => console.log(solution));

//---------------------------------------------------------------------------

/* const promiseOfSolution = loadDouble(5);
promiseOfSolution
.then((solution) => console.log(solution))
.catch((error) => console.log(error)); */

//---------------------------------------------------------------------------

/* const run = async () => {
  try {
    const solution = await loadDouble(5);
    console.log(solution);
  } catch (error) {
    console.log(error);
  }
};

run(); */

//---------------------------------------------------------------------------

/* const numbers = [1, 2, 35, 76, 24, 17, 9, 55];

const run = () => {
  let promisesOfSolutions = [];
  for (const number of numbers) {
    const solution = loadDouble(number).then((result) =>
      console.log(result)
    );
    promisesOfSolutions.push(solution);
  }
  try {
    const results = await Promise.all(promisesOfSolutions);
    console.log(results);
    for (const result of results) {
      console.log(result);
    }
  } catch (error) {
    console.log(error);
  }
};

run(); */

//---------------------------------------------------------------------------

/* const numbers = [1, 2, 35, 76, 24, 17, 9, 55];

const run = () => {
  for (const number of numbers) {
    loadDouble(number).then((result) => console.log(result));
  }
};

run(); */

//---------------------------------------------------------------------------

const numbers = [1, 2, 35, 76, 24, 17, 9, 55];

const run = async () => {
  const result = await Promise.all(numbers.map(loadDouble));
  console.log(result);
};

run();
