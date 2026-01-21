<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Grace English</title>
  <link rel="shortcut icon" href="./images/logo.png" type="image/x-icon" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
    crossorigin="anonymous" />
  <link rel="stylesheet" href="./assets/css/style.css" />
</head>

<body>
  <button type="button" class="btn btn-success">
    <img
      src="./images/whatsapp_2504957.png"
      alt="icone-do-whatsapp"
      width="25" />
    Fale Conosco
  </button>
  <nav class="navbar navbar-expand-lg mb-4 shadow-sm">
    <div class="container col-11">
      <a class="navbar-brand logo" href="#">
        <img
          src="./images/logo.png"
          alt="Logo do Grace English"
          class="img-fluid" />
        <div class="d-flex flex-column text-center">
          <span>Grace</span>
          <span>English</span>
        </div>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <i class="bi bi-list text-light"></i>
      </button>
      <div class="collapse navbar-collapse" id="collapse">
        <ul class="navbar-nav gap-3">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="home.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="the-teacher.html">The teacher</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="cursos.html">Cursos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="student-area.html">Área do Aluno</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.php">Contato</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="cadastre.php">Cadastro</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Offcanva -->
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasNavbarLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
      <button
        type="button"
        class="btn-close btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close">
        <i class="bi bi-x-lg text-white"></i>
      </button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav nav-underline me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a
            class="nav-link"
            aria-current="page"
            href="home.html"
            data-aos="fade-up"
            data-aos-delay="100">
            <i class="bi bi-house"></i> Home
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="the-teacher.html"
            data-aos="fade-up"
            data-aos-delay="200">
            <i class="bi bi-card-text"></i> The Theacher
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="cursos.html"
            data-aos="fade-up"
            data-aos-delay="300">
            <i class="bi bi-motherboard"></i> Cursos
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="student-area.html"
            data-aos="fade-up"
            data-aos-delay="400">
            <i class="bi bi-window-fullscreen"></i> Área do Aluno
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="contact.php"
            data-aos="fade-up"
            data-aos-delay="600">
            <i class="bi bi-wechat"></i> Contato
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="cadastre.php"
            data-aos="fade-up"
            data-aos-delay="600">
            <i class="bi bi-person-lines-fill"></i> Cadastro
          </a>
        </li>
      </ul>
    </div>
  </div>
  <main class="mx-5 d-flex gap-4">
    <div class="row flex-column">
      <div class="container text-light text-center mb-5">
        <h3 class="text-uppercase">Facilidade de Aprendizagem</h3>
        <p>
          As crianças têm uma capacidade incrível de aprender novas línguas de
          forma mais natural e rápida do que os adultos. Elas absorvem novos
          sons e estruturas gramaticais com mais facilidade.
        </p>
      </div>
      <div class="container text-light text-center mb-5">
        <h3 class="text-uppercase">
          Oportunidades acadêmicas e profissionais
        </h3>
        <p>
          ​O inglês é uma língua global, amplamente utilizada em negócios,
          ciência, tecnologia e entretenimento. Ter fluência em inglês pode
          abrir portas para melhores oportunidades educacionais e de carreira
          no futuro.
        </p>
      </div>
      <div class="container text-light text-center">
        <h3 class="text-uppercase">
          Acesso a recursos
        </h3>
        <p>
          ​Muitas das melhores fontes de informação, como livros, filmes,
          programas de TV e recursos educacionais, estão disponíveis em
          inglês. Ter conhecimento da língua pode ampliar o acesso a esses
          materiais.
        </p>
      </div>
    </div>
    <section class="row col-6 m-auto justify-content-center mb-5" id="formContainer">
      <div
        id="successCadastre"
        class="text-center p-5 d-none">
        <div class="card shadow-lg border-0">
          <div class="card-body p-5">
            <h2 class="text-success mb-3">🎉 Parabéns!</h2>

            <p class="fs-5 text-dark">
              Formulário enviado com sucesso.<br>
              Entraremos em contato pelo <strong>WhatsApp</strong> ou <strong>Email</strong>.
            </p>

            <button
              class="btn btn-primary mt-4"
              onclick="resetCadastreForm()">
              Enviar outro cadastro
            </button>
          </div>
        </div>
      </div>

      <form
        class="row align-items-center text-dark needs-validation"
        id="formCadastre"
        method="post"
        action=""
        novalidate>
        <div class="text-center mb-5">
          <h1 class="display-6 fw-semibold m-0 mt-4">
            Preencha o formulário
          </h1>
        </div>

        <div class="container">
          <div class="row row-cols-1 row-cols-lg-2 mb-4">

            <!-- Nome aluno -->
            <div class="col mb-4">
              <label class="form-label fs-5">Nome do Aluno *</label>
              <input
                type="text"
                class="form-control"
                name="nome_aluno"
                required>
            </div>

            <!-- Data nascimento -->
            <div class="col mb-4">
              <label class="form-label fs-5">Data de Nascimento</label>
              <div class="row px-3">
                <input type="text" class="form-control col" name="dia_nascimento" placeholder="Dia">
                <select class="form-select col mx-3" name="mes_nascimento">
                  <option value="">Mês</option>
                  <option value="1">Janeiro</option>
                  <option value="2">Fevereiro</option>
                  <option value="3">Março</option>
                  <option value="4">Abril</option>
                  <option value="5">Maio</option>
                  <option value="6">Junho</option>
                  <option value="7">Julho</option>
                  <option value="8">Agosto</option>
                  <option value="9">Setembro</option>
                  <option value="10">Outubro</option>
                  <option value="11">Novembro</option>
                  <option value="12">Dezembro</option>
                </select>
                <input type="text" class="form-control col" name="ano_nascimento" placeholder="Ano">
              </div>
            </div>

            <!-- Mãe -->
            <div class="col mb-4">
              <label class="form-label fs-5">Nome da Mãe *</label>
              <input type="text" class="form-control" name="nome_mae" required>
            </div>

            <!-- Pai -->
            <div class="col mb-4">
              <label class="form-label fs-5">Nome do Pai *</label>
              <input type="text" class="form-control" name="nome_pai" required>
            </div>

            <!-- Responsável -->
            <div class="col mb-4">
              <label class="form-label fs-5">Nome do Responsável</label>
              <input type="text" class="form-control" name="nome_responsavel">
            </div>

            <div class="col mb-4">
              <label class="form-label fs-5">CPF do Responsável</label>
              <input type="text" class="form-control" name="cpf_responsavel">
            </div>

            <div class="col mb-4">
              <label class="form-label fs-5">Email do Responsável</label>
              <input type="email" class="form-control" name="email_responsavel">
            </div>

            <div class="col mb-4">
              <label class="form-label fs-5">Telefone do Responsável</label>
              <input type="text" class="form-control" name="telefone_responsavel">
            </div>

          </div>

          <!-- Faixa etária -->
          <p>Em que faixa etária o estudante se enquadra? *</p>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="faixa_etaria" value="5-6" required>
            <label class="form-label">5 a 6 anos</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="faixa_etaria" value="7-10">
            <label class="form-label">7 a 10 anos</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="faixa_etaria" value="11-13">
            <label class="form-label">11 a 13 anos</label>
          </div>
          <div class="form-check mb-4">
            <input class="form-check-input" type="radio" name="faixa_etaria" value="14+">
            <label class="form-label">Acima de 14 anos</label>
          </div>

          <!-- Termos -->
          <p>Concorda com o uso de material cristão? *</p>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="termos_material" value="sim" required>
            <label class="form-label">Sim</label>
          </div>
          <div class="form-check mb-4">
            <input class="form-check-input" type="radio" name="termos_material" value="nao">
            <label class="form-label">Não</label>
          </div>

          <input type="submit" class="btn btn-primary w-100" value="Enviar">

        </div>
      </form>
    </section>
    <div class="row flex-column">
      <div class="container text-light text-center mb-5">
        <h3 class="text-uppercase">Desenvolvimento Cognitivo</h3>
        <p>
          Aprender uma segunda língua pode melhorar habilidades cognitivas, como resolução de problemas, pensamento crítico e criatividade. Estudos mostram que crianças bilíngues tendem a ter melhor desempenho em tarefas que exigem multitarefa e atenção.
        </p>
      </div>
      <div class="container text-light text-center mb-5">
        <h3 class="text-uppercase">Cultura e Comunicação</h3>
        <p>
          Aprender inglês permite que as crianças se conectem com pessoas de diferentes culturas e países. Isso pode aumentar a compreensão cultural e promover a tolerância e o respeito pela diversidade.
        </p>
      </div>
      <div class="container text-light text-center">
        <h3 class="text-uppercase">Confiança e autoestima</h3>
        <p>
          Dominar uma segunda língua pode aumentar a confiança e a autoestima das crianças, pois elas se sentem mais capazes e preparadas para enfrentar desafios.
        </p>
      </div>
    </div>
  </main>
  <footer
    class="container-fluid d-flex flex-column justify-content-center p-0">
    <div class="row container align-items-center m-auto gx-5">
      <div class="col-md-6">
        <ul class="nav flex-column">
          <h5 class="display-6 fs-5 fw-semibold">Siga - nos:</h5>
          <li class="nav-item">
            <a
              href="http://instagram.com"
              class="nav-link text-light"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src="./images/instagram.png"
                alt="icone-do-instagram"
                width="25" />
              @graceenglish
            </a>
          </li>
        </ul>
      </div>
      <div class="col-md-6 text-center">
        <p class="display-6 fs-5 m-0">Contato: (33) 99817 - 0388</p>
      </div>
    </div>
    <div class="col-12 m-auto text-start p-2">
      <div class="container col-7">
        <small class="fw-semibold">© 2025 by Grace English.</small>
      </div>
    </div>
  </footer>
  <div class="toast-container position-fixed bottom-0 start-0 p-3">
    <div
      id="liveToast"
      class="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      style="box-shadow: 7px 7px 7px rgba(255, 0, 0, 0.45)">
      <div class="toast-header">
        <svg
          class="bd-placeholder-img rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
          focusable="false">
          <rect width="100%" height="100%" fill="#dc3545"></rect>
        </svg>
        <strong class="me-auto">Error</strong>
        <small>1s</small>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"></button>
      </div>
      <div class="toast-body">
        Por favor, preencha todos os campos corretamente
      </div>
    </div>
  </div>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
    crossorigin="anonymous"></script>
  <script src="./assets/scripts/cadastre.js"></script>
  <script>
    (() => {
      "use strict";
      const forms = document.querySelectorAll(".needs-validation");
      Array.from(forms).forEach((form) => {
        form.addEventListener(
          "submit",
          (event) => {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add("was-validated");
          },
          false
        );
      });
    })();


    function resetCadastreForm() {
      const form = document.getElementById("formCadastre");
      const success = document.getElementById("successCadastre");

      form.reset();
      form.classList.remove("was-validated");
      form.classList.remove("d-none");

      success.classList.add("d-none");

      form.scrollIntoView({
        behavior: "smooth"
      });
    }
  </script>
</body>

</html>

<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  $pdo = new PDO(
    "mysql:host=localhost;dbname=leads_ingles;charset=utf8mb4",
    "root",
    "",
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
  );

  $sql = "INSERT INTO cadastros_alunos (
        nome_aluno, dia_nascimento, mes_nascimento, ano_nascimento,
        nome_mae, nome_pai, nome_responsavel, cpf_responsavel,
        email_responsavel, telefone_responsavel,
        faixa_etaria, termos_material
    ) VALUES (
        :nome_aluno, :dia, :mes, :ano,
        :nome_mae, :nome_pai, :nome_resp, :cpf,
        :email, :telefone, :faixa, :termos
    )";

  $stmt = $pdo->prepare($sql);
  $stmt->execute([
    ':nome_aluno' => $_POST['nome_aluno'],
    ':dia' => $_POST['dia_nascimento'] ?? null,
    ':mes' => $_POST['mes_nascimento'] ?? null,
    ':ano' => $_POST['ano_nascimento'] ?? null,
    ':nome_mae' => $_POST['nome_mae'],
    ':nome_pai' => $_POST['nome_pai'],
    ':nome_resp' => $_POST['nome_responsavel'] ?? null,
    ':cpf' => $_POST['cpf_responsavel'] ?? null,
    ':email' => $_POST['email_responsavel'] ?? null,
    ':telefone' => $_POST['telefone_responsavel'] ?? null,
    ':faixa' => $_POST['faixa_etaria'],
    ':termos' => $_POST['termos_material']
  ]);

  echo "<script>
  document.getElementById('formCadastre').classList.add('d-none');
  document.getElementById('successCadastre').classList.remove('d-none');
</script>";
}
?>