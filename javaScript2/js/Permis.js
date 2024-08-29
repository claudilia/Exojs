let age = prompt ("Entrez votre age");
let ask = prompt ("Avez-vous le permis de conduire?");

if (age<18 && ask === "oui"){
   document.write("Vous etes trop jeune...")
} else if (age>=18 && ask === "oui"){
    document.write("Vous avez le permis!")

} else if (age<=18 && ask === "non"){
    document.write("Erreur")

}else if (age>=18 && ask === "non"){
    document.write("Erreur")
}

else {
 document.write ("Veuillez indiquer quelque chose")
}





// if(ask="non"){
//     document.write("Veuillez vous inscrire a une auto ecole")
// }

// if (age>18){
//     document.write("Vous avez le permis!")
// }
 
