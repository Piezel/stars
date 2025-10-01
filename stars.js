const sky = document.querySelector("#sky")
const numOfStars = 100

const leoneed = () => {
    const img = document.querySelector("#img")
    img.src = "image.png"
    const audio = new Audio("yes im bored.ogg")
    audio.volume = 0.5
    audio.loop = true
    audio.play()
}

const random = (min,max) => {
    return Math.random()*(max-min)+min
}

const pitagoras = (a,b) => {
    return Math.sqrt(Math.pow(a,2)+Math.pow(b,2))
}

const createStars = () => {
    sky.innerHTML = ""
    const maxTop = window.innerHeight*0.8
    const maxLeft = window.innerWidth*0.8
    for (let i = 0; i < numOfStars; i++) {
        const star = document.createElement("div")
        star.classList.add("star")
        star.textContent = "+"
        let num = 2;
        if(window.innerWidth<1000) num = 3
        if(i%num!=0) {
            star.style.top = Math.floor(random(0,maxTop))+"px"
        } else {
            star.style.left = Math.floor(random(0,maxLeft))+"px"
        }
        let max = pitagoras(window.innerHeight,window.innerWidth)+500
        let min = max * 0.55
        sky.append(star)
        
        const animation = star.animate([
            {transform:"rotate(200deg) translateX(0)",opacity: 0.5},
            {opacity: 1},
            {opacity: 0.7},
            {transform:`rotate(200deg) translateX(${-1*Math.floor(random(min,max))}px)`,opacity: 0}
        ],{
            duration: random(500,3000),
            iterations:Infinity
        })

    }
}

window.addEventListener("resize",e=>{
    createStars()
})

createStars()