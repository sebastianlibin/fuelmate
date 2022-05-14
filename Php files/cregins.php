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
if(isset($data['cname']))
{
$cname=$data['cname'];
$oname=$data['oname'];
$walletamount=$data['walletamount'];
$contactnumber=$data['contactnumber'];
$cemail=$data['cemail'];
$cusername=$data['cusername'];
$cpassword=$data['cpassword'];
$query="insert into
tbl_coustomerregistration
(Coustomer_Name,Organization_Name,Wallet_Amount,Contact_Number,Coustomer_Email,User_name,Password)
values('$cname','$oname','$walletamount','$contactnumber','$cemail','$cusername','$cpassword')";
$res=mysqli_query($con,$query);
echo json_encode(array("alert"=>"Sucess"));
}
?>
