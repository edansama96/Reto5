//  function mostrarAlerta(elemento){
//       const item =document.getElementById(elemento );
//       item.setAttribute("fill","blue");
//     console.log(elemento);
//      return item;
//  }




 function cambioColor(elemento) {
    const item =document.getElementById(elemento );
    console.log(elemento);
    if (document.getElementById('check1').checked  ){
       if (elemento === 0 || elemento=== null ){
          return false;
       }
    document.getElementById(elemento).setAttribute("fill","green"); 
     
 }else if (document.getElementById('check2').checked ) {
  if (elemento === 0 || elemento=== null ){
    return false;
 }
   document.getElementById(elemento).setAttribute("fill","yellow"); 
     
 } else  if (document.getElementById('check3').checked ){
  if (elemento === 0 || elemento=== null ){
    return false;
 }
  document.getElementById(elemento).setAttribute("fill","blue"); 
  
 }else  if (document.getElementById('check4').checked ){
  if (elemento === 0 || elemento=== null ){
    return false;
 }
  document.getElementById(elemento).setAttribute("fill","gray"); 
 
 }else  if (document.getElementById('check5').checked ){
  if (elemento === 0 || elemento=== null ){
    return false;
 }
  document.getElementById(elemento).setAttribute("fill","purple"); 
  
 }else  if (document.getElementById('check6').checked ){
  if (elemento === 0 || elemento=== null ){
    return false;
 }
  document.getElementById(elemento).setAttribute("fill","white"); 

 }
 
   return elemento;
//   if(document.getElementById('check1').checked ){
//      document.getElementById(elemento ).setAttribute('fill','green');
//      console.log(elemento);
//        return elemento;
 
//     }
 
 }

// function cambioColor(elemento) {
//     const item =document.getElementById(elemento );
//     if (document.getElementById('check1').checked  ){
//     document.getElementById(elemento).setAttribute("fill","green"); 
//     console.log(elemento);
// }
 
// }