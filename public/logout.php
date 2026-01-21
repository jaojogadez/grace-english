<?php
session_start();     // acessa a sessão atual
session_destroy();   // apaga a sessão (desloga)
header("Location: student-area.php"); // volta pro login
exit;
