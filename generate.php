<?php
require 'vendor/autoload.php';
use Spatie\Browsershot\Browsershot;

if ($_SERVER['REQUEST_METHOD'] !== 'POST' || empty($_POST['cv_content'])) {
    http_response_code(400);
    exit('Requête invalide.');
}

$themeCss = file_get_contents(__DIR__ . '/assets/css/cv-themes.css');

$html = '<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
    <style>
        * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        body { background: white !important; margin: 0; padding: 0; }
        .d-none { display: none !important; }
        ' . $themeCss . '
    </style>
</head>
<body>
    ' . $_POST['cv_content'] . '
</body>
</html>';

$pdf = Browsershot::html($html)
    ->setNodeBinary('/usr/bin/node')
    ->setNpmBinary('/usr/bin/npm')
    ->noSandbox()
    ->printBackground()
    ->format('A4')
    ->margins(0, 0, 0, 0)
    ->pdf();

header('Content-Type: application/pdf');
header('Content-Disposition: attachment; filename="CV.pdf"');
echo $pdf;
