function checkYear() {
  let year = Number(document.getElementById("year").value);
  let result = document.getElementById("result");

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    result.textContent = year + "年は「うるう年」です";
  } else {
    result.textContent = year + "年は「平年」です";
  }
}
