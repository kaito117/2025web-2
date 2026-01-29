function checkYear() {
  let year = Number(document.getElementById("year").value);
  let result1 = document.getElementById("result");

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    result1.textContent = year + "年は「うるう年」です";
  } else {
    result1.textContent = year + "年は「平年」です";
  }
}
