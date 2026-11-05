<?php
if($_POST){
    $admin = "info@thermoflow.hu";
    $userEmail = $_POST['email'];

    $message = "Dátum: ".$_POST['date']." ".$_POST['time']."\n";
    $message .= "Szolgáltatás: ".$_POST['service']."\n";
    $message .= "Email: ".$_POST['email']."\n";

    mail($admin, "Új időpontfoglalás", $message);

    $userMsg = "Köszönjük a foglalást!\n".$_POST['date']." ".$_POST['time'];
    mail($userEmail, "Foglalás visszaigazolás", $userMsg);

    echo "Foglalás elküldve";
}
?>
