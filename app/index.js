document.addEventListener('DOMContentLoaded', function () {
  var result = 1
  var chain = ''
  var resultBox = document.getElementById('result')

  var btns = document.getElementsByClassName('operations')
  var digits = document.getElementsByClassName('digits')

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function (e) {
      if (this.getAttribute('data-operation') === 'equal') {
        result = eval(chain)
        resultBox.innerText = result
        chain = result
        return true
      }

      if (this.getAttribute('data-operation') === 'clear') {
        resultBox.innerText = ''
        chain = ''
        return true
      }

      resultBox.innerText += this.innerText
      chain += this.getAttribute('data-operation')
    })
  }

  for (var j = 0; j < digits.length; j++) {
    digits[j].addEventListener('click', function (e) {
      resultBox.innerText += this.innerText
      chain += this.innerText
    })
  }
})

