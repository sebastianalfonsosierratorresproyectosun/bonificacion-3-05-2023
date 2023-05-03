function consumirAPI(){
    var h1Principal = document.getElementById("h1Principal");
    h1Principal.innerText = "Datos de Países";

    console.log("INICIANDO BUSQUEDA");


    var url = 'https://restcountries.com/v3.1/independent?status=true';
    var tablaPaises = document.getElementById("tablaPaises");
    fetch(url)
    .then(response => response.json())
    .then(json =>{

        for (item of json) {

            
            var fila = tablaPaises.insertRow();

            var nombreComunColumna = fila.insertCell(0);
            nombreComunColumna.innerHTML = item.name.common;

            var nombreOficialColumna = fila.insertCell(1);
            nombreOficialColumna.innerHTML = item.name.official;    

            var capitalColumna = fila.insertCell(2);
            capitalColumna.innerHTML = item.capital;

            var monedaColumna = fila.insertCell(3);
            monedaColumna.innerHTML = Object.values(item.currencies)[0].name;
            

            

           var olLanguaje = document.createElement("ol");
           var idiomasColumna = fila.insertCell(4);
           
           for(let i = 0 ; i<Object.values(item.languages).length ; i++){
                var li = document.createElement("li");

                li.innerText = Object.values(item.languages)[i];
                olLanguaje.appendChild(li);
                console.log(Object.values(item.languages)[i]);
            }

           
            idiomasColumna.appendChild(olLanguaje);
           
           
            var banderaColumna = fila.insertCell(5);
            var img = document.createElement("img")
            img.src = item.flags.png;

            banderaColumna.appendChild(img);



            var escudosArmasColumna = fila.insertCell(6);

            var olEscudosArmas = document.createElement("ol")
            
            var li1 = document.createElement("li")
            
            olEscudosArmas.appendChild(li1);

            var imagenEscudoArma1 = document.createElement("img");
            imagenEscudoArma1.src = item.coatOfArms.png;
            imagenEscudoArma1.style.width = "50%"
            li1.appendChild(imagenEscudoArma1);

            //escudosArmasColumna.appendChild(olEscudosArmas)


            var li2 = document.createElement("li")
            
            olEscudosArmas.appendChild(li2);

            var imagenEscudoArma2 = document.createElement("img");
            imagenEscudoArma2.src = item.coatOfArms.svg;
            imagenEscudoArma2.style.width = "50%"
            li2.appendChild(imagenEscudoArma2);

            escudosArmasColumna.appendChild(olEscudosArmas)


            var poblacionColumna = fila.insertCell(7);
            poblacionColumna.innerText = item.population;



          
           
            

            /*
            var identificadorColumna = fila.insertCell(0);
            
            var nombreColumna = fila.insertCell(1);
            var descripcionColumna = fila.insertCell(2);
            var imagenColumna = fila.insertCell(3);

            identificadorColumna.innerHTML = item.id;
            nombreColumna.innerHTML = item.name;
            descripcionColumna.innerHTML = item.description;
           
            var urlImage = item.thumbnail.path + "." + item.thumbnail.extension;
            console.log(urlImage);


            */
        }


    });
}