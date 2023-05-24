const down = document.querySelector('.down-button')
const up = document.querySelector('.up-button')
const container = document.querySelector('.container')

const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const  slidesCont = mainSlide.querySelectorAll('div').length

sidebar.style.top = `-${(slidesCont - 1) * 100}vh`


let activeSlideIndex = 0



up.addEventListener('click', () =>{
    changeSlide('up')
})

down.addEventListener('click', () => {
    changeSlide('down')
})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp'){
        changeSlide('up')
    }else if (event.key === 'ArrowDown'){
        changeSlide('down')
    }
})

function changeSlide(direction){
    if (direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex === slidesCont){
            activeSlideIndex = 0
        }
    } else if (direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0 ){
            activeSlideIndex = slidesCont - 1
        }
    }

    const height = container.clientHeight
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}