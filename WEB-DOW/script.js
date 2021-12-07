const dowBtn = document.querySelector('#dow');
const dowText = document.querySelector('#showtext');
dowText.setAttribute("style",'display : none;')
dowBtn.onclick = function showTextContent() {
    let showtext = document.getElementById("showtext");
    if (showtext.style.display === "none") {
        dowBtn.textContent='🎄 MERRY CHRISTMAS NAKA 🎄';
        showtext.style.display = "block";
    } else {
 
        dowBtn.textContent='✨ PLEASE CLICK HERE ✨';
        showtext.style.display = "none";
    }
  }
