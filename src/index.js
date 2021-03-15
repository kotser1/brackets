module.exports = function check(str, bracketsConfig) {
    
    let bracesArray  = [];
  
    bracketsConfig.forEach((item) => {
        bracesArray.push(item.join(''));
    });
    
    for (let i = 0; i < bracesArray.length; i++) {
      if (str.includes(bracesArray[i])) {
        str = str.replace(bracesArray[i], '');
        i = -1;
      }
    }

    if (str.length == 0) {
        return true;
    } else {
        return false;
    }
};
