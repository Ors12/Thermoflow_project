<?php
if($_POST){
    $to = "info@thermoflow.hu";
    $msg = $_POST['lastname']." ".$_POST['firstname']."\n".$_POST['email']."\n".$_POST['phone']."\n".$_POST['message'];
    mail($to,"Kapcsolat",$msg);
    echo "Elküldve";
}
?>
