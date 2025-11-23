let img = document.querySelector('.img');
let container = document.querySelector('.container');
let a = document.querySelector('#a');
let a1 = document.querySelector('#a1');
let a2 = document.querySelector('#a2');
let a3 = document.querySelector('#a3');
let a4 = document.querySelector('#a4');
function phones(){
	img.src = "logoPhoto/phone0.png";
}
function phones1(){
	img.src = "logoPhoto/phone1.jpg";
}
function phones2(){
	img.src = "logoPhoto/phone2.jpg";
}
function phones3(){
	img.src = "logoPhoto/phone3.jpg";
}
function phones4(){
	img.src = "logoPhoto/phone4.jpg";
}
function phones5(){
	img.src = "logoPhoto/phone5.png";
}



function colors(color){
	container.style.background = color;
}



function backg(color){
	a.style.background = color;

}
function backg1(color){
	a1.style.background = color;
}
function backg2(color){
	a2.style.background = color;
}
function backg3(color){
	a3.style.background = color;
}
function backg4(color){
	a4.style.background = color;
	a4.style.color = black;
}



function changeBackground(backgr) {
    let Link = document.getElementsByTagName("a");
    for (let i = 0; i < Link.length; i++) {
        Link[i].style.backgroundColor = "";
		Link[i].style.color = "";
    }
    let chgback = document.getElementById(backgr);
    chgback.style.backgroundColor = "#fff";
	chgback.style.color = "#000";
}
    a.style.backgroundColor = "#fff";
	a.style.color = "#000";
// document.querySelectorAll("img"){"mouseover",function(){
	// container.backgroundColor:red;
// }}