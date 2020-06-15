/*
 * /!\ À essayer seul, me mp si trop compliqué !
 * Le but de cette fonction est de réorganiser un tableau de cartes de la meilleur à la moins bonnes :
 * cards = ["Ad", "7h", "8d", "As", "Qs"] alors orderCards(cards) retournera ["As", "Ad", "Qs", "8d", "7h"]
 * 
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 * 
 * On considère que la valeur de la carte prime sur le type de la carte
 */

const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
const TYPES = ["d", "c", "h", "s"]

function orderCards(cards) 
{
  let ordre = [];
  let rand = [];
  ////////////////////on rempli un tableau rand dans l'orde de valeur de chaque carte//////////////////
  let k = 0;
  for (let i = 0; i < VALUES.length ; i++){
    for(let j = 0; j < TYPES.length ; j++){
      rand[k] = VALUES[i] + TYPES[j]; 
      k++;
    }
  }
  let m = 0;
    for (let l = 0; l < rand.length; l++){
      if (cards.includes(rand[l])){
        ordre[m] = rand[l];            ///on parcours le tableau rand dans l'ordre : des qu'un element de rand est présent dans cards, on le passe dans ordre
        m++;
      }
      else{
        continue;
      }
    }
  return ordre.reverse(); ////reverse pour afficher du plus fort au plus faible
}

export { orderCards };