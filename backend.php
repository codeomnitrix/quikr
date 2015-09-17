<?php
// {"error":"false","message":"Success","token":"ae3b9cce447248c1a07361b35abc3026","tokenId":2931713}
$SECRET = "46e6098df2f41d904c864a75f534df2b";
$APP_ID = 530;
$API_NAME = "/public/adsByCategory";
$params = "?categoryId=71&city=Kanpur";
$token = "6ec6c6ee793ed97559159998754dbfc9";
$token_id = "3187390";
$data = "{$APP_ID}{$API_NAME}2015-09-13";
$signature = hash_hmac("sha1", $data, $token);
$ch = curl_init();
$options = array(
  CURLOPT_URL=> "https://api.quikr.com{$API_NAME}{$params}",
  CURLOPT_SSL_VERIFYPEER => false,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER=> array(
    "Content-Type: application/json",
    "X-Quikr-App-Id: $APP_ID",
    "X-Quikr-Token-Id: $token_id",
    "X-Quikr-Signature: $signature"
  )
);
curl_setopt_array($ch, $options);
$output = curl_exec($ch);
header("Content-Type: application/json");
echo $output;
?>
