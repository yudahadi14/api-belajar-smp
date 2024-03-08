<?php
//function sendWA berisi variable dinamis, yang bisa dikirim dari luar.
// variable function ga terbatas, bisa aja tambahin jadi sendWA($nama, $no_hp, $a, $b),
// nanti variable tsb bisa digunain didalem fungsi tsb dengan nilai yang dikirim, misal
// inisiasi/buat fungsi sendWA($a, $b)
// panggil fungsi sendWA("qahtan", "said") si $a itu isinya qahtan si $b itu isinya said
// jadi nnti koding yg didalem fungsi yang ada $a isinya/valueya qahtan 

// 1. function gabakal jalan kalo gadipanggil, walopun tadi di include, tp ga dipanggil ya gajalan
// 2. kecuali di koding function.php ada koding yang ga dimasukin didalem function dia langsung jalan
function sendWA($no_hp, $pesan)
{
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => 'http://onesender.rsudc.net/api/v1/messages',
        CURLOPT_RETURNTRANSFER => true,
        // CURLOPT_ENCODING => '',
        // CURLOPT_MAXREDIRS => 10,
        // CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS => json_encode(array(
            "recipient_type" => "individual",
            "to" => $no_hp,
            "type" => "text",
            "text" => array(
                "body" => $pesan
            )
        )),
        CURLOPT_HTTPHEADER => array(
            'Authorization: u5suxavdchcd6bfh.90lsa6t56q0j456l8bdr4truuoaq6bbzz5nfo2lo1xa721hva4akaa2',
            'Content-Type: application/json',
            'accept: application/json',
        ),
    ));

    $response = curl_exec($curl);

    curl_close($curl);
    echo $response;
}
