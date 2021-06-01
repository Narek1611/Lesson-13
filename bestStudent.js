let getBestStudent = (obj) => {
  let bestStudent;
  let bestGrade = 0;

  for (let key in obj) {
    let average = obj[key].reduce((acc, current, index, arr) => {
      if (index === arr.length - 1) {
        acc += current;
        return acc / arr.length;
      }

      return acc + current;
    });

    if (average > bestGrade) {
      bestGrade = average;
      bestStudent = key;
    }
  }

  return `${bestStudent}'s average is ${bestGrade.toFixed(1)}`;
};

let grades = {
  John: [100, 90, 80],
  Bob: [100, 70, 80],
  Narek: [100, 99, 97],
};

console.log(getBestStudent(grades));
