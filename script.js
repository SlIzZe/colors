function changeColor() {
  let hexNumbers = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
  let color = "";

  for (let i = 0; i <= 5; i++) {
    let random = Math.floor(Math.random() * 16);
    color += hexNumbers[random];
  }

  const back = document.querySelector(".container");
  back.style.background = "#" + color;
  
  const back_text = document.querySelector("#hex_code");
  back_text.textContent = color;
}