const startButton = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')

const timeChoice = document.querySelector('#time-list')
let time = 0
let score = 0

const timeLeft = document.querySelector('#time')

const board = document.querySelector('#board')
const colors = ['#DC143C', '#B22222', '#C71585', '#DB7093', '#FF6347', '#FFA500', '#EE82EE', '#FFD460', '#6A5ACD','#EE82EE', '#F4A460', '#A52A2A', '#6495ED', '#B0C4DE', '#40E0D0', '#3CB371', '#ADFF2F', '#00FF00' ]


startButton.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeChoice.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')){
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createCircle()

    }
})

function startGame(){
    setInterval(timeRun, 1000)
    createCircle()
    setTime(time)
}

function timeRun(){
    if (time === 0){
        finishGame()
    } else {
        let current = --time
        if (current < 10){
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime (value){
    timeLeft.innerHTML = `00: ${value} c`

}

function finishGame(){
    timeLeft.parentNode.classList.add('hide')
    board.innerHTML = `<h2>Время вышло! <br> Счёт: <span class=primary>${score}<span></h2>`

}

function createCircle () {
    const circle = document.createElement('div')
    circle.classList.add('circle')

    const size = getRandomNumber(10,60)
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`

    //доска размером 500 * 500
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber (0, height - size)

    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    const color = RandomColor()
    circle.style.backgroundColor = color

    board.append(circle)
}

function getRandomNumber (min, max){
    return Math.round(Math.random() * (max - min) + min)
}

function RandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}