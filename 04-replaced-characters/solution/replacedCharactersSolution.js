
function replacedCharcters(inputString) {
  let result = "";
  for (let i = 0; i < inputString.length; i++) {
    let charCode = inputString.charCodeAt(i);
    console.log(charCode)
    if (charCode === 122) { // 'z'
      result += "a";
    } else {
      result += String.fromCharCode(charCode + 1);
    }
  }
  return result;
}



function replaceWithNextChar(inputString) {
  return inputString.split("").map((char) => {
    if (char === "z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt(0) + 1);
    }
  }).join("");
}


if (require.main === module) {

    console.log("Expecting: 'bcde'")
    console.log('=>', replacedCharcters('abcd'))
}

//Benchmark

const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    replacedCharcters('abc');
  }

  const avgTime = (Date.now() - startTime) / 1000;
  console.log(avgTime);



