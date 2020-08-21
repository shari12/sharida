const btnProjects = document.querySelector("#projects")

btnProjects.addEventListener("click", () => {
    divRoot2.innerHTML = `
    <h3 class="header center">Proyectos</h3>
<div class="allCards">
    <div class="row">

      <div class="col m6">
            <div class="card sticky-action medium">
              <div class="card-image waves-effect waves-block waves-light caption" id="divImgBq">
               <img class="activator" id="imgBq" src="./img/bq.gif">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">BurgerQueen<i class="material-icons right">more_vert</i></span>
              </div>
              <div class="card-action">
                <div class="flex">
                  <p><a href=" https://shari12.github.io/CDMX009-BurgerQueen/#/">Demo</a></p>
                  <p><a href="https://github.com/shari12/CDMX009-BurgerQueen">Repo</a></p>
                </div>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">BurgerQueen<i class="material-icons right">close</i></span>
                <p class="center">App diseñada para ipad Pro, que se encarga de administrar el flujo de comensales,
                  ayudando a las tareas de los meseros (saber con exactitud, de manera rápida y sencilla 
                  el estado de las mesas activas) y cocineros (ver el flujo de las ordenes por preparar)
                  para no tener confusiones y reducir los tiempos de pedido-entrega. 
                  Tecnologías utilizadas:  REACT, BOOTSTRAP, FIREBASE, JS, HTML5, CSS3.
                </p>
              </div>
            </div>
        </div>
      <div class="col m6">
            <div class="card sticky-action medium">
              <div class="card-image waves-effect waves-block waves-light" id="divImgRed">
                <img class="activator" id="imgRed" src="./img/estudia.gif">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">estuDÍA<i class="material-icons right">more_vert</i></span>
              </div>
              <div class="card-action">
                <div class="flex">
                <p><a href="https://danleonca.github.io/CDMX009-Social-Network/">Demo</a></p>
                <p><a href="https://github.com/shari12/CDMX009-Social-Network">Repo</a></p>
                </div>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">estuDÍA<i class="material-icons right">close</i></span>
                <p class="center">App enfocada a la educación,dirigida a cualquier persona que tenga el interés de ingresar a nivel superior,
                 donde los principales usuarios pueden compartir herramientas de aprendizaje
                 para prepararse y apoyarse durante su proceso de selección/admisión a nivel superior. 
                Principales características técnicas SPA, responsive, implementando 
                Tecnologías utilizadas: JS, HTML5, CSS3 y FIREBASE.</p>
              </div>
            </div>
        </div>

        <div class="col m6">
            <div class="card sticky-action medium">
              <div class="card-image waves-effect waves-block waves-light" id="divImgData">
                <img class="activator" id="imgData" src="./img/datalovers.gif" >
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">DataLovers<i class="material-icons right">more_vert</i></span>
              </div>
              <div class="card-action">
                <div class="flex">
                  <p><a href="https://shari12.github.io/CDMX009-Data-Lovers/">Demo</a></p>
                  <p><a href="https://github.com/shari12/CDMX009-Data-Lovers">Repo</a></p>
                </div>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">DataLovers<i class="material-icons right">close</i></span>
                <p class="center">Data digital que facilita la consulta 
                de información de los Pokemons que hay en la región “Kanto”,
                 clasifica en tipo de pokemon y debilidad que estos tienen, 
                 también muestra cuantos dulces necesita para poder evolucionar y 
                 podemos visualizar las características específicas de cualquier Pokemon que pertenezca a esta región.
                Principales características técnicas: Web responsive.
                Tecnología utilizada: HTML5, CSS3, JS.</p>
              </div>
            </div>
        </div>

        

      
    </div>      
</div>
`

})



