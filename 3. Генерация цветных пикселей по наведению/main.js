const board = document.querySelector('#board')
const colors = ['#FBCEB1', '#FDD9B5', '#F6F6F6', '#8785A2', '#2B2E4A', '#E84545', '#E23E57', '#FFD460', '#FF9A3C']
const SQUARES_NUMBER  = 460

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element){
    const color = RandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px  ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px black`

}

function RandomColor(){
   const index =  Math.floor(Math.random() * colors.length)
   return colors[index]
}