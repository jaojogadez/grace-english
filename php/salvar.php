<?php
require 'config.php';

// Garante que veio do form
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: contact.php');
    exit;
}

// Receber dados
$nome = trim($_POST['nome'] ?? '');
$telefone = trim($_POST['telefone'] ?? '');
$email = trim($_POST['email'] ?? '');
$mensagem = trim($_POST['mensagem'] ?? '');

// Validação básica
if (!$nome || !$telefone || !$email || !$mensagem) {
    die('Preencha todos os campos.');
}

// Inserir no banco
$sql = "INSERT INTO contatos (nome, telefone, email, mensagem)
        VALUES (:nome, :telefone, :email, :mensagem)";

$stmt = $pdo->prepare($sql);
$stmt->execute([
    ':nome' => $nome,
    ':telefone' => $telefone,
    ':email' => $email,
    ':mensagem' => $mensagem
]);

// Redirecionar para WhatsApp (opcional)
$texto = urlencode("Olá, meu nome é $nome. $mensagem");
$whatsapp = "https://wa.me/1492000554?text=$texto";

header("Location: $whatsapp");
exit;
