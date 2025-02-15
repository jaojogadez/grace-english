const root = document.querySelector("#root");
document.addEventListener("DOMContentLoaded", () => loadHome())
document.querySelector("nav ul").addEventListener("click", (e) => {
  target = e.target.textContent;
  switch (target) {
    case "Home":
      clearRoot();
      loadHome()
      console.log("Bem vindo a", target);
      break;
    case "The teacher":
      clearRoot();
      console.log("Bem vindo a", target);
      break;
    case "Cursos":
      clearRoot();
      console.log("Bem vindo a", target);
      break;
    case "Área do Aluno":
      clearRoot();
      console.log("Bem vindo a", target);
      break;
    case "Contato":
      clearRoot();
      console.log("Bem vindo a", target);
      break;
    case "Cadastro":
      clearRoot;
      console.log("Bem vindo a", target);
      break;
  }
});

let clearRoot = () => {
  return (root.innerHTML = "");
};

let loadHome = () => {
    root.innerHTML = `
        <section class="row container align-items-center m-auto gx-5 mb-5">
            <div class="col-md-6 order-lg-2">
                <img
                    src="../images/home/home-person.png"
                    alt="English teacher image"
                    class="img-fluid"
                />
            </div>
            <div class="col-md-6">
                <p class="lh-sm text-center">
                    Seja bem-vindo à Grace English, onde aprendizado e diversão se
                    encontram! Na Grace English, oferecemos uma experiência de ensino
                    dinâmica e envolvente para crianças e adultos que desejam dominar o
                    idioma inglês.
                </p>
            </div>
      </section>
      <section class="row container align-items-center m-auto gx-5 mb-5">
            <div class="col-md-6 text-center mb-4">
                <img
                    src="../images/home/home-girl.png"
                    alt="English student image"
                    class="img-fluid rounded-circle"
                />
            </div>
            <div class="col-md-6">
                <p class="lh-sm text-center">
                    Nossa abordagem única e adaptável é projetada para atender às
                    necessidades individuais de cada aluno, seja você um jovem aprendiz
                    curioso ou um adulto buscando aprimorar suas habilidades
                    linguísticas. Com professor qualificado e materiais educativos de
                    alta qualidade, nossas aulas proporcionam um ambiente estimulante e
                    encorajador para explorar o idioma inglês de maneira confiante e
                    eficaz. Junte-se a nós e embarque em uma jornada emocionante de
                    descoberta e aprendizado!
                </p>
            </div>
      </section>
        `;
}