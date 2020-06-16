


function isAFull(cards) 
{
  let firstchar = [];
  let full = false;
  let occurrences = { };
  for (let i = 0; i < cards.length; i++) 
  {
    firstchar[i] = cards[i].substr(0, 1);
    occurrences[firstchar[i]] = (occurrences[firstchar[i]] || 0) + 1;
  }
  let occ = Object.values(occurrences);
  let occ_occ ={};
  for (let j = 0; j < occ.length; j++) 
  {
    occ_occ[occ[j]] = (occ_occ[occ[j]] || 0) + 1;
  }
  if (occ.includes(3) || occ.includes(4))
  {
    if(occ_occ['3']>1 || occ.includes(2))
    {
      full = true;
    }
  }
  return full;
}
export { isAFull };