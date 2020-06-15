/*
 * /!\ À faire seul !
 * Le but de cette fonction est de générer deux tableaux contenants 5 cartes différentes
 * il ne doit y avoir aucun doublon dans les tableaux !
 * 
 * Exemple dealer() => [["As", "3s", "2h", "8d", "8s"], ["As", "3s", "2h", "8d", "8s"]]
 * 
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 * 
 */

const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
const TYPES = ["d", "c", "h", "s"]

function dealer() {
///////////////////////////////creer un jeu de 52 cartes (tabeau à deux dimentions)////////////////////////////
let jeux =[];
let k = 0;
  for (let i = 0; i < VALUES.length ; i++){
    for(let j = 0; j < TYPES.length ; j++){
    jeux[k] = VALUES[i] + TYPES[j]; 
    k++;
    }
  }
///////////////////////////////////////////////on rempli un tableau deux dimentions representant 2 main de 5 cartes//////
let main = new Array(2);
main[0] =new Array(5);
main[1] =new Array(5);
  loop1:
  for (let l = 0; l < 2; l++) {
    loop2:
    for (let k = 0; k < 5; k++) {
      ind = Math.floor(Math.random()*52);
      if(main[0].includes(jeux[ind]) || main[1].includes(jeux[ind])){
        k -= 1;
        continue loop2;
      }
      else{
        main[l][k] = jeux[ind];
      }
    }
  }
  return main;
}
export { dealer };
