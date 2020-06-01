const tail = function (array) {
  //console.log('array is ' +  array);
  if (array === [] || array.length === 1) console.log([]);
  else {
    let x = array.slice(1, array.length);
    console.log(x);
  }
};

// TEST CODE

module.exports = tail;
