function stringLength(string) {
    if (string.length >= 1 && string.length < 10) {
    return string.length;
  }
  throw new Error('String length must be at least 1 and not longer than 10');
    
  }

  function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

  function capitalize(string){
    return string.charAt(0).toUpperCase()+ string.slice(1)
  }


  module.exports = { stringLength, reverseString, capitalize }; 