
function replacedCharcters(str) {
  let result = ""
  for(let i = 0; i < str.length; i++)


}

if (require.main === module) {

    console.log("Expecting: 'bcd'")
    console.log('=>', replacedCharcters('abc'))
}

//Benchmark

const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    replacedCharcters('abc');
  }

  const avgTime = (Date.now() - startTime) / 1000;
  console.log(avgTime);



