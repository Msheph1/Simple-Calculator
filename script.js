let num1 = "";
let num2 = "";
let op = "";
let numbuttons = document.querySelectorAll(".num");
numbuttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (num1 == "" || op == "") {
      if (num1.length < 8) {
        if (button.textContent == ".") {
          if (num1.includes(".")) {
            alert("Only 1 decimal point allowed");
          } else {
            num1 += button.textContent;
            document.querySelector(".display").textContent = num1;
          }
        }
      } else {
        alert("Only 8 digits allowed");
      }
    } else {
      if (op !== "" && num1 == "") {
        document.querySelector(".display").textContent = "ERROR";
      } else {
        if (num1.length < 8) {
          if (button.textContent == ".") {
            if (num1.includes(".")) {
              alert("Only 1 decimal point allowed");
            } else {
              num2 += button.textContent;
              document.querySelector(".display").textContent =
                num1 + " " + op + " " + num2;
            }
          }
        } else {
          alert("Only 8 digits allowed");
        }
      }
    }
  });
});

let ops = document.querySelectorAll(".op");
ops.forEach((ops) => {
  ops.addEventListener("click", () => {
    op = ops.textContent;
    num1 = document.querySelector(".display").textContent;
    document.querySelector(".display").textContent = num1 + " " + op;
  });
});
