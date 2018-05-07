function roundToNext5(n){
  return (n % 5 === 0) ? n 
    : (n > 0) ? parseInt( (n + 5) - (n % 5) )
    : parseInt( (n + 5) - (n % 5) - 5 );
}