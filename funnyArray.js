/*
 * /!\ À faire seul !
 * 
 * L'objectif est le suivant :
 *
 * - Si le nombre d'éléments dans le tableau est impair, je retourne l'élément du milieu, exemple :
 * ary = ['un', 'petit', 'tableau'] alors midArray(ary) retournera 'petit'
 * - Si le nombre d'éléments dans le tableau est pair, je retourne une concaténation des éléments exemple :
 * ary = [1,2,3,4] alors funnyArray(ary) retournera 2 + 3 soit 5
 * ary = ['un', 'plus', 'grand', 'tableau'] alors midArray(ary) retournera 'plusgrand'
 * - Si le tableau est vide, je retourne le mot 'rien'
 */
function funnyArray(ary) 
{
  let tableau = ary;
  let nbelements = tableau.length;
  let result;
  if (nbelements == 0)
  {
    result = 'rien'; 
  }
  else
  {
    if (nbelements%2 == 0)
    {
      result = tableau[(nbelements/2)-1] + tableau[nbelements/2];
    }
    else
    {
      result = tableau[(nbelements-1)/2];
    }
  }
  return result;
}



export { funnyArray };