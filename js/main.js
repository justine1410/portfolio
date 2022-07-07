let techno = document.getElementById("techno");
let projet = document.getElementById("projet")

window.onscroll = function() {slideTechno(), opacityProjet()};

function slideTechno(){
  if(document.documentElement.scrollTop > 1000){
    techno.className="active"
  } else{
    techno.className=""
  }
}

function opacityProjet(){
  if(document.documentElement.scrollTop > 1900){
    projet.className="active"
  } else{
    projet.className=""
  }

}

