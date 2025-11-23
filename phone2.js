let a = document.querySelector('#a');
let a1 = document.querySelector('#a1');
let a2 = document.querySelector('#a2');
let a3 = document.querySelector('#a3');
let a4 = document.querySelector('#a4');



// function backg(color){
	// a.style.background = color;

// }
// function backg1(color){
	// a1.style.background = color;
// }
// function backg2(color){
	// a2.style.background = color;
// }
// function backg3(color){
	// a3.style.background = color;
// }
// function backg4(color){
	// a4.style.background = color;
	// a4.style.color = black;
// }



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

    a2.style.backgroundColor = "#fff";
    a2.style.color = "#000";
// function changeBackgnav(backg) {
    // let Linknav = document.getElementsByTagName("a");
    // for (let i = 0; i < Linknav.length; i++) {
        // Linknav[i].style.backgroundColor = "";
		// Linknav[i].style.color = "";
		
    // }
    // let chgback = document.getElementById(backg);
    // chgback.style.backgroundColor = "#fff";
	// chgback.style.color = "#000";
// }

    // a2.style.backgroundColor = "#fff";
    // a2.style.color = "#000";