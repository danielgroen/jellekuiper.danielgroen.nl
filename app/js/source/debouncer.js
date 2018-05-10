function debounce(callback, time) {
  var timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(callback, time);
  };
};