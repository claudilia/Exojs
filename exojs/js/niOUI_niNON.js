let userAnswer = "";
let round = 0;

while (
userAnswer !== "oui" &&
userAnswer !== "non" &&
userAnswer !== "Oui" &&
userAnswer !== "Non" &&
userAnswer !== "OUI" &&
userAnswer !== "NON"
) {
userAnswer = prompt("On joue Ã ni oui ni non?");
round++;
}
if (round === 1) {
document.write(
`<p style="color:red">Tu as perdu au bout de ${round} tour.</p>`,
);
} else {
document.write(
`<p style="color:red">Tu as perdu au bout de ${round} tours.</p>`,
);
}



   // ** CORRECTION **\\


 for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
   console.log(i + " est pair");
      } else {
       console.log(i + " est impair");
     }  }
 
                            let nb = parseInt(prompt("donne moi un nombre"));
                            let nbMax = nb + 9;
                            for (let list = nb; list <= nbMax; list++) {
                            if (list % 2 === 0) {
                            document.write(
                            "<p style='color:blue'> c'est un nombre pair " + list + "</p>",
                            );
                            } else {
                            document.write(
                            "<p style='color:blue'> c'est un nombre impair " + list + "</p>",
                            );
                            }
                            }
                            
                            // let number = parseInt(prompt("donne moi un nombre"));
                            // let numberMax = number + 9;
                            // while (number <= numberMax) {
                            // if (number % 2 === 0) {
                            // document.write(
                            // "<p style='color:red'> c'est un nombre pair " + number + "</p>",
                            // );
                            // } else {
                            // document.write(
                            // "<p style='color:red'> c'est un nombre impair " + number + "</p>",
                            // );
                            // }
                            // number++;
                            // }