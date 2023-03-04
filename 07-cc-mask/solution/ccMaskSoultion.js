// return masked string
function maskify(cc) {
  
  if (cc.length <= 4) {
      return cc
  } else {
  
  let masked = ""
  
  for (let i = 0; i < cc.length; i++) {
    if (i < cc.length -4) {
      masked += '#'
    } else {
      masked += cc.charAt(i)
    }
  }
    return masked
  }
}

console.log(maskify('1234567890'))

function maskify2(str) {
    if (str.length <= 4) {
      // If the string has 4 characters or less, return it as is
      return str;
    } else {
      // Otherwise, mask all but the last four characters
      const maskedChars = str.slice(0, -4).split('').map(() => '#').join('');
      const lastChars = str.slice(-4);
      return maskedChars + lastChars;
    }
  }

  console.log(maskify2('1234567890'))
  