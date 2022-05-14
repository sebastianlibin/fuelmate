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
if(isset($data['pumpname']))
{
$pumpname=$data['pumpname'];
$licensenumber=$data['licensenumber'];
$place=$data['place'];
$state=$data['state'];
$district=$data['district'];
$ownername=$data['ownername'];
$company=$data['company'];
$phonenumber=$data['phonenumber'];
$emailaddress=$data['emailaddress'];
$query="insert into
    tbl_pumpregistration(Pump_name,License_number,Place,State,District,Owner_name,Company,Phone_number,Email_address)values('$pumpname','$licensenumber',
'$place','$state','$district','$ownername','$company','$phonenumber','$emailaddress')";
$res=mysqli_query($con,$query);
echo json_encode(array("alert"=>"Sucess"));
}
?>
