/*
 * /!\ À faire seul !
 *
 * Retourne un boolean qui indique si le tableau cards contient une pair, exemple : 
 * cards = ["As", "10d", "Jd", "Qs", "Ah", "2h", "3c"] isPaired(cards) retournera true
 * cards = ["As", "10d", "Jd", "Qs", "2h", "3c", "5d"] isPaired(cards) retournera false
 * 
 * Attention, une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte : 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte : s => ♠, h => ♥, c => ♣, d => ♦
 */

function isAPair(cards) 
{
  let tableau = cards;
  let firstchar = [];
  firstchar.length = tableau.length;
  let pair = false;
  let occurrences = { };
  for (let i = 0; i < tableau.length; i++) 
  {
    firstchar[i] = tableau[i].substr(0, 1);  //let firstChar = chaine.substr(0);
    occurrences[firstchar[i]] = (occurrences[firstchar[i]] || 0) + 1;
    if (occurrences[firstchar[i]] > 2)
    {
      pair = false;
    }
    else if (occurrences[firstchar[i]] == 2)
    {
      pair = true;
    }
  }
  return pair;
}
export { isAPair };