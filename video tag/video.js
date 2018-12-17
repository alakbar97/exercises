var Video=document.querySelector("video")
var MainP=document.querySelector(".mainP")
var MainImage=document.querySelector(".mainimage")
var CivilWar=document.querySelector(".civilwar")
var Iron=document.querySelector(".iron")
var DP=document.querySelector(".DP")
var Thor=document.querySelector(".thor")
CivilWar.addEventListener("click",CW)
function CW(params) {
    Video.src="Civil War.mp4"
    Video.play()
    MainP.innerHTML="With many people fearing the actions of super heroes, the government decides to push for the Hero Registration Act, a law that limits a hero's actions. This results in a division in The Avengers. Iron Man stands with this Act, claiming that their actions must be kept in check otherwise cities will continue to be destroyed, but Captain America feels that saving the world is daring enough and that they cannot rely on the government to protect the world."
    MainImage.src="civil-war.jpg"
}
Iron.addEventListener("click",IM)
function IM(params) {
    Video.src="Iron Man.mp4"
    Video.play()
    MainP.innerHTML="After being kidnapped by a powerful terrorist organization, brilliant industrialist Tony Stark narrowly escapes using an iron suit he crafted from scrap metal and spare parts. Upon returning home, he devotes all of his time and resources to perfecting the iron man suit, and using it to fight evil, sometimes in the place where he least expects it."
    MainImage.src="iron.jpg"
}
DP.addEventListener("click",dead)
function dead(params) {
    Video.src="DP.mp4"
    Video.play()
    MainP.innerHTML="This is the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life."
    MainImage.src="DP.jpg"
}
Thor.addEventListener("click",TH)
function TH(params) {
    Video.src="Thor.mp4"
    Video.play()
    MainP.innerHTML="A war is waged between the frost giants and Thor's homeland. Loki fights for his right to the throne. Thor is cast out of Asgard by his father and sent to earth as punishment for his arrogance and disobedience in his battle. He loses his powers of the hammer until it returned to him on earth and he pulls it from the ground. In his fight for his own freedom on earth he meets a scientist; Jane Foster and has an affair with her. Thor then battles the evil forces of his brother Loki along with a robotic giant destroyer that attacks a town."
    MainImage.src="thor.jpg"
}

