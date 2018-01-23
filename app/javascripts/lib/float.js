const toMoney = function(value) {
  if (typeof(value) == 'string') {
    return parseInt(value.replace(/^\$/, ''));
  }
  else {
    return parseInt(value) == 0 ? '' : '$' + value.toFixed(2).toString();
  }
};

export {toMoney};
