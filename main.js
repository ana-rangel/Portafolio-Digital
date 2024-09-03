let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #cb65ff;">Soy estudiante de Ingenieria en Tecnologias de la información e innovación digital y tome un curso de Front-end.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
