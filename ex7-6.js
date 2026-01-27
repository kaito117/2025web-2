function nazo() {
  var ans = document.getElementById("answer2").value;

  // 等しくない比較（練習問題7-6）
  if (ans != "夢") {
    document.getElementById("result1").textContent = "あたり！";
  } else {
    document.getElementById("result1").textContent = "はずれ";
  }
}
