// Archivo para interactuar con el mapa
// clase para modelar la etiqueta path

  class CountryPath{
    constructor(element) {
        this.element = element;
     }
   fill(color){
       this.element.setAttribute("fill", color);
     }
  setPopulation(population){
      this.element.setAttribute("population",population);
   }
    static finByname(name){
      return new CountryPath(document.getElementById(name));
   }
  }

   const countryPath=CountryPath.finByname("COL1404")
   countryPath.fill("white")
  countryPath.setPopulation(3000000)

//  CountryPath.finByname("COL1404").fill("green")

//  const path=document.getElementById("COL1404");
//  path.setAttribute('clik',dispararFunction);
//  function dispararFunction(){
//     path.fill="blue";
//     console.log("Se disparo la función.")
//  }