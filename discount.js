/*
 * /!\ À faire seul !
 *
 * Le but de cette fonction est de retourne le prix après réduction :
 * price = 100, percent = 30 alors discount(price, percent) retournera "70€"
 * 
 * Attention, le prix est une chaîne de caractère suivi du symbole €
 */

function discount(price, percent) {
  let prix = price*(100 - percent)/100 + '€';
  return prix;
}

export { discount };