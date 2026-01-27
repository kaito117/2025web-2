function nazo() {
  var ans = document.getElementById("answer1").value;

  // 等しい比較（練習問題7-5）
  if (ans == "夢") {
    document.getElementById("result").textContent = "あたり！";
  } else {
    document.getElementById("result").textContent = "はずれ";
  }
}
