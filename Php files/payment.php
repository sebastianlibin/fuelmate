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
if(isset($data['amount']))
{
$amount=$data['amount'];
$recharge_date=date("y-m-d");
$customer_id='1';

$query="insert into tbl_recharge
(Customer_Id,Recharge_date,Amount)values('$customer_id','$recharge_date','$amount')";
$res=mysqli_query($con,$query);

$query=mysqli_query( $con,"SELECT  Wallet_Amount FROM tbl_coustomerregistration where Coustomer_Id='$customer_id'");
$queryresult=mysqli_fetch_array($query);
$wallet_amount=$queryresult['Wallet_Amount'];
$new_amount=($wallet_amount+$amount);
$query=mysqli_query($con,"update tbl_coustomerregistration set Wallet_Amount='$new_amount' where Coustomer_Id='$customer_id'");
$res=mysqli_query($con,$query);
echo json_encode(array("alert"=>"Sucess"));
}
?>
