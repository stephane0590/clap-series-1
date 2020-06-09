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
function dealer() 
{
  let valeur = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  let type = ['d', 'c', 'h', 's']
  let main1 = [5];
  let main2 = [5];
  let main = [2];

  for (let i = 0; i < 5; i++) 
  {
    let randvaleur = Math.random();
    let intvaleur = Math.floor(randvaleur*13); 
    let randtype = Math.random();
    let inttype = Math.floor(randtype*4); 
    main1[i] = valeur[intvaleur]+type[inttype];
  }
  for (let i = 0; i < 5; i++) 
  {
    let randvaleur = Math.random();
    let intvaleur = Math.floor(randvaleur*13); 
    let randtype = Math.random();
    let inttype = Math.floor(randtype*4); 
    main2[i] = valeur[intvaleur]+type[inttype];
  }

  main[0] = main1;
  main[1] = main2;
  return main;
}

export { dealer };
