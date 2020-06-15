/*
 * /!\ À faire seul !
 * L'objectif est d'additionner les valeurs des deux tableaux :
 * si arr1 = [5, 6, 7]
 * et arr2 = [5, 4, 3]
 * alors plusArray(arr1, arr2) retournera 30 
 */
function plusArray(arr1, arr2) 
{
  let somme1 = 0;
  let somme2 = 0;
  for (let i = 0 ; i < arr1.length; i++){
    somme1 = somme1 + arr1[i];
  }
  for (let i = 0 ; i < arr2.length; i++){
    somme2 = somme2 + arr2[i];
  }
  let resultat = somme1 + somme2;
  return resultat;
}

export { plusArray };