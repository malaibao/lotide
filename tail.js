const tail = function (array) {
  //console.log('array is ' +  array);
  if (array === [] || array.length === 1) return [];
  else {
    return array.slice(1, array.length);
  }
};

module.exports = tail;
