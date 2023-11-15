let countSecs = 5;
const paceSecs = 1;

function pace() {
  window.setTimeout(function () {
    countSecs = countSecs - paceSecs;
    let elem = document.getElementById("secs");
    elem.innerHTML = countSecs;
    if (countSecs <= 0) {
      window.location.href = "https://devsuperior.com.br";
    } else {
      pace();
    }
  }, paceSecs * 1000);
}

pace();
