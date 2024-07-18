// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// VS Extensions to install
// 1. Prettier

console.log();

// TODO;

const measureKelvin = function () {
  const measure = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees celsius: ")),
  };

  console.table(measure);

  const kelvin = measure.value + 273;
  return kelvin;
};

console.log(measureKelvin());
