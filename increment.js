/*
 * /!\ À faire seul !
 *
 * On passe un nombre à notre fonction et il faut que la fonction increment retourne le nombre + 1, exemple : 
 * number = 12 increment(number) retournera 13
 * 
 * Attention, si number n'est pas un nombre on affichera "number doit être un nombre !"
 * number = "bonjour" retournera "bonjour doit être un nombre !"
 */

function increment(number) {
  if (typeof number == 'number'){
    number = number + 1;
  }
  else{
    number = number.concat(' doit être un nombre !');
  }
 return number;
}
export { increment };