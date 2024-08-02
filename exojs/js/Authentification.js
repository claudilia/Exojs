let nom = prompt("Entrez votre nom").toLowerCase();
let age = prompt("Entrez votre age");


if(nom == "Mira"){
    document.write(`<p>Le nom ${nom} est le bon`);
} else if (nom!= "Mira"){
    document.write(`<p>Le nom ${nom} n'est pas le bon </p>`);
}



if(age == 19){
    document.write(`<p>votre age ${age} est le bon </p>`);
} else if (age != 19){

    document.write(`<p>votre age ${age} n'est pas le bon </p>`);
}


if(nom === null || nom.trim() === "") {
    alert("Le champ nom ne peut pas etre vide, indique ton nom.");
}
   

if(age === null || age.trim() === ""){
    alert("Le champs age ne peut pas etre vide, veuillez indiquer votre age");
}