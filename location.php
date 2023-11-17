<?php

$data = json_decode(file_get_contents('php://input'), true);

// Check for duplicate data before saving
$existingData = json_decode(@file_get_contents('address.txt'), true);

if (!$existingData || !in_array($data, $existingData, true)) {
    $existingData[] = $data;
    file_put_contents('address.txt', json_encode($existingData));
    echo 'Location data saved successfully.';
} else {
    echo 'Duplicate data. Location data not saved.';
}

?>
