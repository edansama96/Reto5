// Archivo para interactuar con el mapa
// clase para modelar la etiqueta path

//  class CountryPath{
//     constructor(element) {
//        this.element = element;
//     }
//   fill(color){
//        this.element.setAttribute("fill", color);
//     }
//   setPopulation(population){
//        this.element.setAttribute("population",population);
//    }
//     static finByname(name){
//       return new CountryPath(document.getElementById(name));
//    }
//  }

//   const countryPath=CountryPath.finByname("COL1404")
//   countryPath.fill("white")
//  countryPath.setPopulation(3000000)

// CountryPath.finByname("COL1404").fill("green")

// const path=document.getElementById("COL1404");
// path.setAttribute('clik',dispararFunction);
// function dispararFunction(){
//    path.fill="blue";
//    console.log("Se disparo la función.")
// }



//  const path= document.getElementById("COL1283");
//  path.onmouseenter=mostrarAlerta;
//   const path= document.getElementById("COL1283" );
//   path.onclick=mostrarAlertaa;

 function mostrarAlerta(elemento){
      
      document.getElementById(elemento).setAttribute('fill','blue');
      console.log(elemento);
      //  const item =document.getElementById(elemento );
      //  item.setAttribute("fill","blue");
       return elemento;
 
    // document.getElementById("COL1404" ).setAttribute('fill','white'); 
 }



 // document.getElementById("COL1283" ).setAttribute('fill','white');

//  function mostrarAlertaa(){
//     alert("Evento onclick");
//     document.getElementById("COL1283" ).setAttribute('fill','red');
  
//  }
 function cambioColor() {
   document.eleme
   if(document.getElementById('check1').checked ){
      // fondo.style.backgroundColor = 'gray';
      document.getElementById("_x33_8" ).setAttribute('fill','green');
      
      
   }
   
}