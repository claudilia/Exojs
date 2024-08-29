let choixuser = parseInt(prompt("Choissisez un nombre entre 0 et 10"));
let nombre = Math.floor(Math.random() * 10) + 1;


if (choixuser === ordi){
    alert("Tu as trouvé, bravo!");
}

else if( choixuser>10 || choixuser <1 || isNaN(choixuser)){

    // isNAN => is not a number on verifie si l'utilisateur a bien entre un chiffre
    alert("Choissisez un nombre entre 0 et 10");
}

else if(choixuser>nombre){
    alert("trop haut ! reesaye"); 
}

else if(choixuser<nombre){
    alert("trop bas ! recommence"); 
}

else{
    alert("looser !!");
}

console.log(math.floor(math.random()*11));
console.log();
// math.random() genre un chiffre aleatoire compris entre 0 et 1 sas jamais etre 0 ni 1 pile
// math.loor() arrondi a l'entier le plus proche 
math.floor(math.random());


