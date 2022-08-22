const selector = document.getElementById('selector-img')
let month = document.getElementsByClassName('month')

let price = document.getElementsByClassName('price')
console.log([...price].forEach(e => {
  console.log(e.innerHTML)
}))
let clicks = 0
selector.addEventListener('click', function () {
  clicks += 1
  changeAll(clicks)
})

function changeAll(click) {
  let tempSelector = selector
  if (click % 2 === 1) {
    tempSelector.src = 'images/selector_right.png';
    [...month].forEach(e => {
      e.innerHTML = ' /year'
    })
      ;[...price].forEach(e => {
        if (e.innerHTML == '$4.99') {
          e.innerHTML = '$49.99'
        } else {
          e.innerHTML = '$129.99'
        }
      })
  } else {
    tempSelector.src = 'images/selector.png'
      ;[...month].forEach(e => {
        e.innerHTML = ' /month'
      })
      ;[...price].forEach(e => {
        if (e.innerHTML == '$49.99') {
          e.innerHTML = '$4.99'
        } else {
          e.innerHTML = '$12.99'
          
        }
      })
  }

  return tempSelector
}