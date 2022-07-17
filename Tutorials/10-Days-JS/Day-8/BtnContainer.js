// JS
const ids = [1, 2, 3, 6, 9, 8, 7, 4]; // start positions ids in clockwise order
let nums = [1, 2, 3, 6, 9, 8, 7, 4]; // rotating in clockwise order
let btn5 = document.getElementById("btn5");
btn5.onclick = function() {
  nums.unshift(nums.pop());
  for (i = 0; i <= 7; i++) {
    document.getElementById("btn" + ids[i]).innerHTML = nums[i];
  }
};

/*HTML File 
<!-- Enter your HTML code here -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Buttons Grid</title>
    </head>
    <body>
        <div id="btns">
            <button id="btn1">1</button>
            <button id="btn2">2</button>
            <button id="btn3">3</button>
            <button id="btn4">4</button>
            <button id="btn5">5</button>
            <button id="btn6">6</button>
            <button id="btn7">7</button>
            <button id="btn8">8</button>
            <button id="btn9">9</button>
        </div>
    </body>
</html>
*/

/*CSS File
  #btns {
    width: 75%;
  }
  button {
    width: 30%;
    height: 48px;
    font-size: 24px;
  }
*/