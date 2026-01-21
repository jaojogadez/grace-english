<?php
session_start();

if (!isset($_SESSION['usuario_id'])) {
    header("Location: student-area.php");
    exit;
}

$pdo = new PDO(
    "mysql:host=localhost;dbname=leads_ingles;charset=utf8mb4",
    "root",
    "",
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
);

// Dados
$contatos  = $pdo->query("SELECT * FROM contatos ORDER BY id DESC")->fetchAll();
$cadastros = $pdo->query("SELECT * FROM cadastros_alunos ORDER BY id DESC")->fetchAll();
$usuarios  = $pdo->query("SELECT id, email, created_at FROM usuarios")->fetchAll();
?>


<!DOCTYPE html>
<html>

<head>
    <title>Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="p-5">

    <h2>Bem-vindo, <?= $_SESSION['usuario_email'] ?></h2>
    <a href="logout.php" class="btn btn-danger mb-4">Sair</a>

    <h3>📨 Contatos</h3>
    <table class="table table-striped">
        <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
        </tr>
        <?php foreach ($contatos as $c): ?>
            <tr>
                <td><?= $c['nome'] ?></td>
                <td><?= $c['email'] ?></td>
                <td><?= $c['telefone'] ?></td>
            </tr>
        <?php endforeach ?>
    </table>

    <h3>📝 Cadastros</h3>
    <table class="table table-striped">
        <tr>
            <th>Aluno</th>
            <th>Faixa</th>
            <th>Responsável</th>
        </tr>
        <?php foreach ($cadastros as $c): ?>
            <tr>
                <td><?= $c['nome_aluno'] ?></td>
                <td><?= $c['faixa_etaria'] ?></td>
                <td><?= $c['nome_responsavel'] ?></td>
            </tr>
        <?php endforeach ?>
    </table>

    <h3>👤 Usuários</h3>
    <table class="table table-striped">
        <tr>
            <th>Email</th>
            <th>Criado em</th>
        </tr>
        <?php foreach ($usuarios as $u): ?>
            <tr>
                <td><?= $u['email'] ?></td>
                <td><?= $u['created_at'] ?></td>
            </tr>
        <?php endforeach ?>
    </table>

</body>

</html>