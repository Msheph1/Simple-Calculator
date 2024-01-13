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
        else {
          num1 += button.textContent;
          document.querySelector(".display").textContent = num1;
        }
      } else {
        alert("Only 8 digits allowed");
      }
    } else {
      if (op !== "" && num1 == "") {
        document.querySelector(".display").textContent = "ERROR";
      } else {
        if (num2.length < 8) {
          if (button.textContent == ".") {
            if (num2.includes(".")) {
              alert("Only 1 decimal point allowed");
            } else {
              num2 += button.textContent;
              document.querySelector(".display").textContent =
                num1 + " " + op + " " + num2;
            }
          }
          else {
            num2 += button.textContent;
            document.querySelector(".display").textContent = num1 + " " + op + " " + num2;
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
    if(op == "" && num1 !== "")
    {
    op = ops.textContent;
    document.querySelector(".display").textContent = num1 + " " + op;
    }
  });
});

let eq = document.querySelector(".eq");
eq.addEventListener("click", function() {
  let ans = "";
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  if(op == "+")
  {
    ans = num1 + num2;
  }
  else if(op == "-")
  {
    ans = num1 - num2;
  }
  else if(op == "/")
  {
    ans = num1 / num2;
  }
  else if(op =="X")
  {
    ans = num1 * num2;
  }
  if(ans.toString().includes("."))
  {
  ans = ans.toFixed(3);
  }
  num1 = ans.toString();
  op = "";
  num2 = "";
  console.log(ans);
  document.querySelector(".display").textContent = ans;
});

let clear = document.querySelector(".AC");
clear.addEventListener("click", function()
{
  num1 = "";
  num2 = "";
  op = "";
  document.querySelector(".display").textContent = "0";
});

let del = document.querySelector(".del");
del.addEventListener("click", function()
{
  let dis = document.querySelector(".display").textContent;
  console.log(dis);
  console.log(dis.substring(0,dis.length - 1));
  if(dis.charAt(dis.length-1) == " ")
  {
    document.querySelector(".display").textContent = dis.substring(0,dis.length - 2);
  }
  else{
  document.querySelector(".display").textContent = dis.substring(0,dis.length - 1);
  }
  if(num2 != "")
  {
    num2 = num2.substring(0, num2.length -1);
  }
  else if(op != "")
  {
    op = "";
  }
  else{
    num1 = num1.substring(0,num1.length-1);
  }
});

