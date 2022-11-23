let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'C') {
      string = ""
      document.querySelector('input').value = string;
    }
    else {
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})
comsole.log("This Calculator Cannot work with Keyboard inputs and Keyboard Arithimatic operators kindly use screen touches or use mouse for entries!")