let result = "";

for (let i = 0; i < 12; i++) {
  if (i % 3 == 0 && i > 1) {
    result += "_";
  }
  result += String.fromCharCode(
    Math.round(Math.random() * 25) + 97
  );
}

console.log(result);
