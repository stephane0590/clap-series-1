/*
 * /!\ À faire seul !
 *
 * Retourne un boolean qui indique si le tableau cards contient une couleur (5 cartes de même type), exemple : 
 * cards = ["As", "10s", "Js", "Qs", "Ah", "2s", "3c"] isFlushed(cards) retournera true
 * cards = ["As", "10d", "Jd", "Qs", "2h", "3c", "5d"] isFlushed(cards) retournera false
 * 
 * Attention, une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte : 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte : d => ♦, c => ♣, h => ♥, s => ♠
 */

function isAFlush(cards)
{
  let tableau = cards;
  let lastchar = [];
  lastchar.length = tableau.length;
  let flush = false;
  let occurrences = { };

  for (let i = 0; i < tableau.length; i++) 
  {
    lastchar[i] = tableau[i].substr(tableau[i].length - 1);  //let lastChar = chaine.substr(chaine.length - 1); 
    occurrences[lastchar[i]] = (occurrences[lastchar[i]] || 0) + 1;

    if (occurrences[lastchar[i]] >= 5)
    {
      flush = true;
    }
  }
  return flush;
}

export { isAFlush };