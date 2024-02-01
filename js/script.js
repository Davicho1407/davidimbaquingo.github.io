/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    let menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

  /* ----- EFECTO MAQUINA DE ESCRIBIR ----- */
 let typingEffect = new Typed(".typedText",{
  strings : ["Data Scientist","Desarrollador","Ciberanalista","Investigador"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})

function sendEmail(){
  var email = document.getElementById("email").value;
  var nombre = document.getElementById("nombre").value;
  var mensaje = document.getElementById("mensaje").value;

  emailjs.send("service_mdn75jw","template_0osqc3t",{
    from_name: email,
    to_name: nombre,
    message: mensaje,
    }).then(
      mensaje => {
        alert("Correo enviado correctamente");
        resetFields();
      }
      );
}


function resetFields(){
  document.getElementById("email").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById("mensaje").value = "";
}