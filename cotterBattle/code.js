let lpCotter =500
let lpRobot =2000
let lpCotterElement =document.getElementById("livePointsCotter")
lpCotterElement.textContent= lpCotter
let attackButtom = document.getElementById("attackButtom")
let livePointsRobot = document.getElementById("livePointsRobot")
livePointsRobot.textContent= lpRobot
attackButtom.addEventListener("click",()=>{
    lpRobot-=20
    livePointsRobot.textContent= lpRobot
})
console.log(livePointsRobot)