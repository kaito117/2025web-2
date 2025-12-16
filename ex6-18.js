function changeImage() {
  var img = document.getElementById("boll");
  img.src = "./image/サッカーボール2.jpg";
  setTimeout(function () {
    img.src = "./image/サッカーボール1.jpg";
  }, 3000);}

