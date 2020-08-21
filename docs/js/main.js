const divRoot = document.querySelector("#root");
const navegation = document.createElement("nav");
navegation.innerHTML = `
<div class="navbar-fixed">

    <nav class="#40c4ff light-blue accent-2" role="navigation">
        <div class="nav-wrapper container">
            <a id="logo-container" href="#" class="brand-logo black-text">
                S I P D
               <i class="material-icons">code</i>
            </a>
            <a href="#" data-target="nav-mobile" class="sidenav-trigger">
                <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
                <li><a class="black-text" id="btnInicio">Inicio</a></li>
                <li><a class="black-text" id="projects">Proyectos</a></li>
                <li><a class="black-text" id="about">Acerca de mi</a></li>
            </ul>
            <ul id="nav-mobile" class="sidenav">
                <li><a>Inicio</a></li>
                <li><a id="projects2">Proyectos</a></li>
                <li><a>Acerca de mi</a></li>
            </ul>
        </div>
    </nav>
</div>`
const divRoot2 = document.createElement("div");
divRoot2.innerHTML = `
<div class="#00b8d4 cyan accent-4 caption center-align">
<img src="https://cdn.dribbble.com/users/1018278/screenshots/3870893/hello_world.gif" width="100%">
</div>
`     
divRoot.appendChild(navegation);
divRoot.appendChild(divRoot2);





