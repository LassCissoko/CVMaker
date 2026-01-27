<?php
require 'vendor/autoload.php';
use Spatie\Browsershot\Browsershot;


// Mise en page du CV en PDF
if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $html = '
    <!DOCTYPE html>
    <html>
    <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <style>
            body { 
                background: white !important;
            -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important; 
        }
        </style>
    </head>
    <body>
        <div class="container">' . $_POST['cv_content'] . '</div>
    </body>
    </html>';

    // Conversion en PDF
   $pdf = Browsershot::html($html)
        ->setNodeBinary('/usr/bin/node')
        ->setNpmBinary('/usr/bin/npm')
        ->noSandbox()
        ->printBackground()
        ->format('A4')
        ->margins(5, 5, 5, 5)
        ->pdf();

    // Envoi du fichier au navigateur
    header('Content-Type: application/pdf');
    header('Content-Disposition: attachment; filename="CV.pdf"');
    echo $pdf;
}
?>