document.addEventListener('DOMContentLoaded', function () {
  var isDirty = false
  var result = 1
  var chain = ''
  var resultBox = document.getElementById('result')

  var btns = document.getElementsByClassName('operations')
  var digits = document.getElementsByClassName('digits')

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function (e) {
      if (this.getAttribute('data-operation') === 'equal') {
        if (!isDirty) return false
        result = eval(chain)
        resultBox.innerText = result
        chain = result
        return true
      }

      if (this.getAttribute('data-operation') === 'clear') {
        resultBox.innerText = '0'
        chain = ''
        isDirty = false
        return true
      }

      if (!isDirty) return false

      resultBox.innerText += this.innerText
      chain += this.getAttribute('data-operation')
    })
  }

  for (var j = 0; j < digits.length; j++) {
    digits[j].addEventListener('click', function (e) {
      if (!isDirty) {
        resultBox.innerText = this.innerText
        chain += this.innerText
        isDirty = true
      } else {
        resultBox.innerText += this.innerText
        chain += this.innerText
      }
    })
  }
})

