module.exports = {
  formatInteger: (strInt) => {
    const number = new Number(strInt);
    return number.toLocaleString();
  }
}
