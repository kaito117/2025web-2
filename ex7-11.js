function checkYear() {
  let year = Number(document.getElementById("year").value);
  let result11 = document.getElementById("result11");

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    result11.textContent = year + "年は「うるう年」です";
  } else {
    result11.textContent = year + "年は「平年」です";
  }
}
