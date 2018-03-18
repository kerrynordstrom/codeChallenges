function kebabize(str) {
  str = str.replace(/[\d]/g, '')
  str = str.charAt(0).toLowerCase() + str.slice(1);
  return str.replace(/([A-Z])/g, char => `-${char.toLowerCase()}`); 
  
}