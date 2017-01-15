document.addEventListener('DOMContentLoaded', function () {
  function sum (num, total) {
    return total + num
  }
  function sub (num, total) {
    return total - num
  }
  function div (num, total) {
    if (num === 0) return false
    return total / num
  }
  function mult (num, total) {
    return total * num
  }

  var operations = {
    sum: sum,
    sub: sub,
    div: div,
    mult: mult
  }

  var result = 0

  var userInput = document.getElementById('userInput')
  var resultBox = document.getElementById('result')

  var btns = document.getElementsByClassName('operations')
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function (e) {
      result = (this.getAttribute('data-operation') === 'equal') ? result : operations[this.getAttribute('data-operation')](Number(userInput.value), result)
      if (this.getAttribute('data-operation') === 'equal') resultBox.innerText = result
      else resultBox.innerText += ' ' + userInput.value + ' ' + this.innerText
    })
  }
})

