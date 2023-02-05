document.addEventListener("DOMContentLoaded", (event) => {
  // Slå dig løs her
}); // Afslutter: DOMContentLoaded
 
//opgave Del1
const navn = document.querySelector("#aktuelle-person-navn");
const alder = document.querySelector("#aktuelle-person-alder");

const personer = [
  { navn: "Mickey", alder: 50 },
  { navn: "Fedtmule", alder: 40 },
  { navn: "Anders", alder: 60 },
];
 
let randomNumber = Math.floor(Math.random() * personer.length);

navn.textContent = personer[randomNumber].navn;
alder.textContent = personer[randomNumber].alder;

console.log(`Person: ${navn.textContent} - Navn: ${alder.textContent}`);


//opgave Del2
const farve = document.querySelector("#aktuelle-person-farve");

let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

console.log(`rgb(${r},${g},${b})`);
farve.style.backgroundColor = `rgb(${r},${g},${b})`;

//opgave Del3
const forrige = document.querySelector("#btn-person-forrige").addEventListener("click", back);
const naeste = document.querySelector("#btn-person-naeste").addEventListener("click", next);
 
let rows = document.querySelectorAll(".row");
console.log(rows);

let indexAktuel;
for (let i=0; i<rows.length;i++){
	if (rows[i].classList.contains("aktuelle-person")) {
		indexAktuel = i;
		break;
	}
}

console.log(indexAktuel);

function next(){
	console.log("next");
	rows[indexAktuel].classList.remove("aktuelle-person");
	
	if(++indexAktuel >= rows.length){
		indexAktuel = 0; 
	}

	rows[indexAktuel].classList.add("aktuelle-person");
}

function back(){
	console.log("back");
	rows[indexAktuel].classList.remove("aktuelle-person");
	
	if(--indexAktuel < 0){
		indexAktuel = rows.length-1;
	}

	rows[indexAktuel].classList.add("aktuelle-person");
}
