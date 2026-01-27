function calcBMI() {
  const h = Number(document.getElementById("height").value);
  const w = Number(document.getElementById("weight").value);

  const bmi = w / (h * h);
  let result = "";

  if (bmi < 18.5) {
    result = "低体重";
  } else {
    if (bmi < 25) {
      result = "普通";
    } else {
      result = "肥満";
    }
  }

  alert("BMI：" + bmi.toFixed(1) + "\n判定：" + result);
}
