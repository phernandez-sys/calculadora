console.log("app cargado")
window.onload = function (){
  let firstValue
  let secondValue
  let selectedOperator

  const display = document.getElementById("display")
  const btnMC = document.getElementById("btnMC")
  const btnMadd = document.getElementById("btnMadd")
  const btnMsub = document.getElementById("btnMsub")
  const btnDiv = document.getElementById("btnDiv")
  const btnSeven = document.getElementById("btnSeven")
  const btnEight = document.getElementById("btnEight")
  const btnNine = document.getElementById("btnNine")
  const btnMult = document.getElementById("btnMult")
  const btnFour = document.getElementById("btnFour")
  const btnFive = document.getElementById("btnFive")
  const btnSix = document.getElementById("btnSix")
  const btnSub = document.getElementById("btnSub")
  const btnOne = document.getElementById("btnOne")
  const btnTwo = document.getElementById("btnTwo")
  const btnThree = document.getElementById("btnThree")
  const btnAdd = document.getElementById("btnAdd")
  const btnC = document.getElementById("btnC")
  const btnZero = document.getElementById("btnZero")
  const btnPoint = document.getElementById("btnPoint")
  const btnEqual = document.getElementById("btnEqual")

const numberOnclick = function (event){
  display.innerText += event.target.textContent
}


btnSeven.onclick = numberOnclick
btnEight.onclick = numberOnclick
btnNine.onclick = numberOnclick
btnFour.onclick = numberOnclick
btnFive.onclick = numberOnclick
btnSix.onclick = numberOnclick
btnOne.onclick = numberOnclick
btnTwo.onclick = numberOnclick
btnThree.onclick = numberOnclick
btnZero.onclick = numberOnclick
btnPoint.onclick = numberOnclick

btnC.onclick = function(){
  display.innerText = ""
}

const operatorfunction = function(event){
  firstValue = parseFloat(display.innerText)
  display.innerText = ""
  selectedOperator = event.target.textContent
}

btnDiv.onclick = operatorfunction
btnMult.onclick = operatorfunction
btnSub.onclick = operatorfunction
btnAdd.onclick = operatorfunction


btnEqual.onclick = function(event){
  secondValue = parseFloat(display.innerText)
/*  let result
  switch (selectedOperator) {
    case '+':
      result = firstValue + secondValue
      break
    case '-':
      result = firstValue - secondValue
      break;
    case '*':
      result = firstValue * secondValue
      break;
    case '/':
      result = firstValue / secondValue
      break;
    default:
      break;
  }
  display.innerText = result*/

  const options = {
  baseURL: "http://localhost:3000/",
  timeout: 5000,
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  }
  }
  fetch(`http://localhost:3000/getresult/${firstValue}/${secondValue}/${selectedOperator}`, options)
.then(res => res.json())
.then((response) => {
  console.log(response)
  display.innerText = response.result
  })
}

  /*btnOne.onclick = function(event){
    display.innerText += parseFloat(event.target.textContent)

  }*/
  //console.log(event.target.textContent)
  //console.log(btnOne)
  //console.dir(display)
}
