function cambioColor(elemento) {
   const item =document.getElementById(elemento );
   console.log(elemento);
   if (document.getElementById('check1').checked  ){
      if (elemento === 0 || elemento=== null ){
         return false;
      }
   document.getElementById(elemento).setAttribute("fill","rgba(20, 23, 212, 0.797)"); 
    
}else if (document.getElementById('check2').checked ) {
 if (elemento === 0 || elemento=== null ){
   return false;
}
  document.getElementById(elemento).setAttribute("fill","rgba(33, 209, 225, 0.982)"); 
    
} else  if (document.getElementById('check3').checked ){
 if (elemento === 0 || elemento=== null ){
   return false;
}
 document.getElementById(elemento).setAttribute("fill","brown"); 
 
}else  if (document.getElementById('check4').checked ){
 if (elemento === 0 || elemento=== null ){
   return false;
}
 document.getElementById(elemento).setAttribute("fill","rgb(230, 177, 32)"); 

}else  if (document.getElementById('check5').checked ){
 if (elemento === 0 || elemento=== null ){
   return false;
}
 document.getElementById(elemento).setAttribute("fill","rgb(7, 129, 70)"); 
 
}else  if (document.getElementById('check6').checked ){
 if (elemento === 0 || elemento=== null ){
   return false;
}
 document.getElementById(elemento).setAttribute("fill","white"); 

}

  return elemento;

}