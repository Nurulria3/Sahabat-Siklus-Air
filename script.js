function showPage(id){

document.getElementById("menu").style.display="none";

let pages=document.getElementsByClassName("page");

for(let i=0;i<pages.length;i++){

pages[i].style.display="none";

}

document.getElementById(id).style.display="block";

}

function backMenu(){

document.getElementById("menu").style.display="block";

let pages=document.getElementsByClassName("page");

for(let i=0;i<pages.length;i++){

pages[i].style.display="none";

}

}

const soal=[

{

q:"Perubahan air menjadi uap disebut...",

a:["Kondensasi","Evaporasi","Presipitasi"],

b:1

},

{

q:"Perubahan yang terjadi pada air secara berulang dalam suatu pola tertentu disebut ...",

a:["Siklus Udara","Siklus Angin","Siklus Air"],

b:2

},

{

q:"Turunnya hujan disebut...",

a:["Presipitasi","Evaporasi","Penguapan"],

b:0

},
{
    q:"Air di bumi tidak pernah habis walaupun terus-terusan digunakan. Hal ini dikarenakan air mengalami ...",
    a:["Penambahan", "Perputaran","Percampuran"],
    b:1
},
{
    q:" Terjadinya siklus air sangat dipengaruhi oleh ...",
    a:["Cahaya Matahari", "Bebatuan","Bangunan"],
    b:0
},


];

let html="";

soal.forEach((s,i)=>{

html+=`

<p><b>${i+1}. ${s.q}</b></p>

`;

s.a.forEach((pil,j)=>{

html+=`

<input type="radio"

name="soal${i}"

value="${j}">

${pil}<br>

`;

});

});

document.getElementById("quiz").innerHTML=html;

function cekJawaban(){

let skor=0;

soal.forEach((s,i)=>{

let pilih=document.querySelector(`input[name="soal${i}"]:checked`);

if(pilih){

if(Number(pilih.value)==s.b){

skor++;

}

}

});

document.getElementById("hasil").innerHTML=

"Nilai Anda : "+(skor*100/soal.length);

}