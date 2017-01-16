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

  var result = 1
  var currentNum = 0
  var resultBox = document.getElementById('result')

  var btns = document.getElementsByClassName('operations')
  var digits = document.getElementsByClassName('digits')

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function (e) {

    })
  }

  for (var j = 0; j < digits.length; j++) {
    digits[j].addEventListener('click', function (e) {

    })
  }
})

