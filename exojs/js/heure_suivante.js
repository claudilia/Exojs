let heure = prompt("Quelle heure est-il?").toLowerCase();
let minute = prompt("Quelle minutes?").toLowerCase();
let Seconde = prompt("enfin les secondes?").toLowerCase();

if(
heure>= 0 &&
heure<= 23 &&
minute<=0 &&
minute>=59 &&
seconde>=0 &&
seconde<= 50 

)

secone++;
if (seconde === 60){
    secode = 0;

    minute++;
    if(minute === 60) {
minute = 0;
heure++;
if(heure === 24){

    heure = 0;
}

    }

}

document.write(`<p>Dans une seconde il sera : ${heure}h ${minute}m ${sevonde}s</p>)`) 
