<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");
$con=mysqli_connect("127.0.0.1","root","","fuelmate");
$request=file_get_contents("php://input");
$data=json_decode($request);
//echo mysqli_connect_error($con);
if (is_object($data)) {
$data = get_object_vars($data);
}
if(isset($data['Pump_id']))
{
$Pump_id=$data['Pump_id'];
$Pump_name=$data['Pump_name'];
$License_number=$data['License_number'];
$Place=$data['Place'];
$State=$data['State'];
$District=$data['District'];
$Owner_name=$data['Owner_name'];
$Company=$data['Company'];
$Phone_number=$data['Phone_number'];
$Email_address=$data['Email_address'];
$query="UPDATE tbl_pumpregistration
set
Pump_name='$Pump_name',License_number='$License_number',Place='$Place',State='$State',District='$District',
Owner_name='$Owner_name',Company='$Company',Phone_number='$Phone_number',Email_address='$Email_address' WHERE Pump_id='$Pump_id'";
$res=mysqli_query($con,$query);
echo json_encode(array("alert"=>"Sucess"));
}
?>