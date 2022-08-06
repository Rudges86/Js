/*let n = "Rudge";

function soma(x){
    for(let i = 0 ; i < n.length ; i++){
        console.log(n[i])
    }
    
}

soma(n);

let vetor = n.split("");
vetor.forEach((x)=>console.log(x));
console.log(vetor.filter((x)=> x == "R"))
console.log(vetor.map((x)=> x + "udge" ))
console.log(vetor.reduce((x)=>x + "u"))
*/

/*let abrevNome = "Samuel Haroldo Mucho";
let vetor = abrevNome.split("");
let ina = "";

vetor.filter((x)=>{
    if(x == x.toUpperCase()){
        ina += x;
    }
})

ina = ina.replace(/ /g,".");
console.log(ina)*/


let abrevNome = "Samuel Haroldo Mucho BLOALASLAOAODAs";
let vetor = abrevNome.toUpperCase().split(" ");

let abv = ""
for(let i = 0; i < vetor.length ; i++){
    for(let j = 0; j < vetor[i].length ; j++){
        if(j == 0){
            abv += vetor[i][j];
        }
    }
}
abv = abv.split("").join(".");

console.log(vetor[1][3]);
console.log(abv)