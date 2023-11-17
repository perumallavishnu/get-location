<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

$data = json_decode(file_get_contents('php://input'), true);

$latitude = $data['latitude'];
$longitude = $data['longitude'];
$ip_address = $data['ip_address'];

$address = "Latitude: $latitude, Longitude: $longitude, IP Address: $ip_address\n";

file_put_contents('address.txt', $address, FILE_APPEND);

echo json_encode(array('success' => true));
?>