const stars = document.querySelectorAll(".star")

const leoneed = () => {
    const img = document.querySelector("#img")
    img.src = "image.png"
}

const random = (min,max) => {
    return Math.random()*(max-min)+min
}

const pitagoras = (a,b) => {
    return Math.sqrt(Math.pow(a,2)+Math.pow(b,2))
}

const randomStars = () => {
    stars.forEach((el,i)=>{
        let num = 2
        if(window.innerWidth<1000) num=3;
        if(i%num==0) {
            el.style.left = Math.floor(random(0,window.innerWidth*0.75))+"px"
        } else {
            el.style.top = Math.floor(random(0,window.innerHeight*0.75))+"px"
        }
        let max = pitagoras(window.innerWidth-Number(el.style.left.split("px")[0]),window.innerHeight-Number(el.style.top.split("px")[0]))-200
        let min = max*0.5
        const fallingStar = [
            {
                transform: "rotate(200deg) translateX(0)",
                opacity: 1
            },
            {
                opacity: 0.7
            },
            {
                transform: `rotate(200deg) translateX(${-1*Math.floor(random(min,max))}px)`,
                opacity: 0
            }
        ]
        const animtiming = {
            duration: random(1000,3000),
            iterations: Infinity,
        }
        el.animate(fallingStar,animtiming)
    })
}

window.addEventListener("resize",e=>{
    randomStars()
})

randomStars()