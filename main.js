var magicNumber = 111333321;

function multiply(magicNumber) {

  magicNumber = magicNumber.toString();

  var product = 0;
  var answer = -Infinity;

  for (var i = 0; i < magicNumber.length; i++) {
    product = magicNumber[i] * magicNumber[i+1] * magicNumber[i+2] * magicNumber[i+3] * magicNumber[i+4];

    if (product > answer) {
      answer = product;
    }
  }

  return answer;
}
console.log(multiply(magicNumber));
