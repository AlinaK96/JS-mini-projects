
const cols = document.querySelectorAll('.col')

document.addEventListener('keydown', (event) => {
    event.preventDefault()
    if (event.code.toLocaleLowerCase() === 'space' || event.code.toLocaleLowerCase() === 'enter'){
        setRandomColors()
    }
})

document.addEventListener('click', (event) => {
    const type = event.target.dataset.type 

    if (type === 'lock'){
        //определить куда именно мы кликаем
        const node = event.target.tagName.toLocaleLowerCase() === 'i' ? event.target : event.target.children[0]
        node.classList.toggle ('fa-lock-open')
        node.classList.toggle ('fa-lock')
    } else if (type === 'copy'){
        copyColor(event.target.textContent)
        
    }
})

function generateColor(){    // FF0000 00FF00 0000FF
    const hexCode = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++){
        color += hexCode[Math.floor(Math.random() * hexCode.length)]
    }
    return '#' + color
}

function copyColor (text){
    return navigator.clipboard.writeText(text)
}

function setRandomColors (isInitial){
    const colors =isInitial ? getColorsFromHash() : []

    cols.forEach((col, index) => {
        const isLocked = col.querySelector('i').classList.contains('fa-lock')
        const text = col.querySelector('h2')
        const button = col.querySelector('button')

        
        if (isLocked) {
            colors.push(text.textContent)
            return
        }

        const color = isInitial 
            ? colors[index] 
                ? colors[index]
                : generateColor()
            : generateColor()

        if (!isInitial){
            colors.push(color)
        }
        
        text.textContent = color
        col.style.background = color

        setTextColor(text, color)
        setTextColor(button,color)
    })

    updateHash(colors)
}

function setTextColor(text, color){
    const luminance = chroma(color).luminance()
    text.style.color = luminance > 0.4 ? 'black' : 'white'
}

function updateHash (colors = []){
    document.location.hash = colors.map(col => {
        return col.toString().substring(1)
    }).join('-')
}

function getColorsFromHash(){
    if (document.location.hash.length > 1){
        return  document.location.hash.substring(1).split('-').map((color) => '#' + color)
    } return []
}

setRandomColors(true)