const btnAbout=document.querySelector("#about")

btnAbout.addEventListener("click",()=>{
  divRoot2.innerHTML=`
  <div class="containerAbout">
    <div class="row center-align">
      <div class="col caption center-align">
        <div class="card horizontal">
          <div class="card-image">
            <img height="200px" src="https://scontent.fmex10-2.fna.fbcdn.net/v/t1.0-9/117134541_3099425493460681_356524877242777018_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeFpvWcbDgHR534DoYatwIiLqBl-VPrJiEGoGX5U-smIQYdzXysUDd5tdJ5LmPNmC1yV4bUMrR9u8srVNLWIhYUj&_nc_ohc=Yw3DpMtRCmAAX85QRJF&_nc_ht=scontent.fmex10-2.fna&oh=74a61e38e32783f8ad38b50a815e1ead&oe=5F61645C">
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <p>Hola :), me llamo Sharida y soy front end developer, egresada de Laboratoria, un bootcamp de formación
               profesional basado en metodologías agile, donde pude desarrollar distintos proyectos utilizando diferentes
               herramientas de desarrollo web, que me permitieron ir conociendo, aprendiendo y adaptando a cada una de estas.
               Gracias a lo anterior pude reafirmar lo que realmente me apasiona y mueve mi mundo el desarrollo web, pues cuando 
               haces lo que te gusta, superas todas la barreras que se presentan y aprendes de ellas... Esto solo es el comienzo!
              </p>
              <br>

              <div class = "tech">
               <div class ="basico">
               <h5>Básico</h5>
               <img id ="git" src="img/git.svg"/>
               <img id ="fire" src ="img/fire.svg"/>
               <img id ="my" src ="img/mysql.svg"/>
               <img id ="mon" src ="img/mongo.svg"/>
               <img id ="mat" src ="img/materialzee.svg"/>
               <img id ="nod" src ="img/node.svg"/>
               

               </div>
               <div class="inter"> 
               <h5>Intermedio</h5>
               <img id ="rea" src ="img/react.svg"/>
               <img id ="js" src="img/js.svg"/>
               <img id ="html" src ="img/html.svg"/>
               <img id ="css" src ="img/css.svg"/>
               <img id ="figma" src ="img/figma.svg"/>
               <img id ="boo" src ="img/bootstrap.svg"/>
               </div>
              </div>
            </div>
            <div class="card-action">
            <h5>Aquí puedes encontrarme</h5>
            <div class="links">
            <p id="userGitHub"><img src="img/gitHub.svg" id="imgGitHub" />
            shari12</p>
            <p id="profileLinkenid"> <img src="img/in.svg" id="imgLinkenid" />
            Sharida Perez</p>
           <p id="email"> <img src="img/gmail.svg" id="imgGmail" />
            perezdsharida@gmail.com</p>
            </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </div>

  `
  function openLinkGitHub() {
    window.open("https://github.com/shari12");
  }
  
  function openLinkenid() {
    window.open("https://www.linkedin.com/in/sharida-perez/");
  }
  
  function openEmail() {
    window.open("mailto:perezdsharida@gmail.com");
  }
  
  const btnGitHub = document.querySelector("#imgGitHub");
  btnGitHub.addEventListener("click", () => {
    openLinkGitHub();
  });
  const gitHub = document.querySelector("#userGitHub");
  gitHub.addEventListener("click", () => {
    openLinkGitHub();
  });
  
  const btnLinkenid = document.querySelector("#imgLinkenid");
  btnLinkenid.addEventListener("click", () => {
    openLinkenid();
  });
  
  const linkenid = document.querySelector("#profileLinkenid");
  linkenid.addEventListener("click", () => {
    openLinkenid();
  });
  const btnGmail = document.querySelector("#imgGmail");
  btnGmail.addEventListener("click", () => {
    openEmail();
  });
  
  const email = document.querySelector("#email");
  email.addEventListener("click", () => {
    openEmail();
  });
})
