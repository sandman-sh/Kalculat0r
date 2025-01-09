let string = "";
let keys = document.querySelectorAll(".key");
let result = document.querySelector(".result");

Array.from(keys).forEach((key) => {
  key.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      result.style.color = "darkgreen";
      string = eval(string);      
      document.querySelector("textarea").value = string;
    } else if (e.target.innerHTML == "C") {
      result.style.color = "black";
      string = "";
      document.querySelector("textarea").value = string;
    } else {
      console.log(e.target.innerHTML);
      string = string + e.target.innerHTML;
      document.querySelector("textarea").value = string;
    }
  });
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    result.style.color = "green";
    string = eval(string);
    document.querySelector("textarea").value = string;
  } else if (e.key === "C") {
    result.style.color = "black";
    string = "";
    document.querySelector("textarea").value = string;
  } else if (e.key == "Backspace") {
    result.style.color = "black";
    string = string.slice(0, -1); 
    document.querySelector("textarea").value = string;
  } else if (/^[0-9+\-*/().\s]$/.test(e.key)) {
    console.log(e.key);
    string = string + e.key;
    document.querySelector("textarea").value = string;
  }
});
