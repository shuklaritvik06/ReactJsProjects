function performComputation(value) {
  let result = 0;
  for (let i = 0; i < value; i++) {
    result += i;
  }
  return result;
}

onmessage = function (event) {
  const inputValue = event.data;
  const result = performComputation(inputValue);
  postMessage(result);
};
