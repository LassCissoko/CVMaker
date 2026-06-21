<?php
header('Content-Type: application/json; charset=utf-8');

$dir = __DIR__ . '/saved_cvs/';
if (!is_dir($dir)) {
    mkdir($dir, 0755, true);
}

$action = $_GET['action'] ?? '';

if ($action === 'save' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true);
    if (!$data || !is_array($data)) {
        http_response_code(400);
        echo json_encode(['error' => 'Données JSON invalides']);
        exit;
    }
    $data['saved_at'] = date('Y-m-d H:i:s');
    $filename = date('Y-m-d_H-i-s') . '_' . substr(uniqid(), -6) . '.json';
    $path = $dir . $filename;
    if (file_put_contents($path, json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)) === false) {
        http_response_code(500);
        echo json_encode(['error' => 'Impossible de sauvegarder le CV']);
        exit;
    }
    echo json_encode(['success' => true, 'id' => $filename, 'saved_at' => $data['saved_at']]);

} elseif ($action === 'list') {
    $files = glob($dir . '*.json');
    $cvs = [];
    if ($files) {
        foreach ($files as $file) {
            $raw = file_get_contents($file);
            $data = json_decode($raw, true);
            if (!$data) continue;
            $cvs[] = [
                'id'       => basename($file),
                'name'     => trim(($data['firstName'] ?? '') . ' ' . ($data['lastName'] ?? '')),
                'title'    => $data['title'] ?? '',
                'theme'    => $data['theme'] ?? 'default',
                'saved_at' => $data['saved_at'] ?? ''
            ];
        }
        usort($cvs, fn($a, $b) => strcmp($b['saved_at'], $a['saved_at']));
    }
    echo json_encode($cvs);

} elseif ($action === 'get') {
    $id = basename($_GET['id'] ?? '');
    if (!preg_match('/^[\w\-]+\.json$/', $id)) {
        http_response_code(400);
        echo json_encode(['error' => 'Identifiant invalide']);
        exit;
    }
    $file = $dir . $id;
    if (!file_exists($file)) {
        http_response_code(404);
        echo json_encode(['error' => 'CV introuvable']);
        exit;
    }
    echo file_get_contents($file);

} elseif ($action === 'delete') {
    $id = basename($_GET['id'] ?? '');
    if (!preg_match('/^[\w\-]+\.json$/', $id)) {
        http_response_code(400);
        echo json_encode(['error' => 'Identifiant invalide']);
        exit;
    }
    $file = $dir . $id;
    if (!file_exists($file)) {
        http_response_code(404);
        echo json_encode(['error' => 'CV introuvable']);
        exit;
    }
    unlink($file);
    echo json_encode(['success' => true]);

} else {
    http_response_code(400);
    echo json_encode(['error' => 'Action inconnue']);
}
