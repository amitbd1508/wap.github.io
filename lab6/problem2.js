function printNumber(from, to) {
  let id = setInterval(() => {
    if (from === to) {
      clearInterval(id);
    }
    console.log(from);
    from++;
  }, 1000);
}

printNumber(3, 7);
