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
if(isset($data['Product_id']))
{
$Product_id=$data['Product_id'];
$bdate=$data['bdate'];
$cname=$data['cname'];
$oname=$data['oname'];
$quantity=$data['quantity'];
$amount=$data['amount'];
$query="insert into tbl_recepit
(Product_id,BillingDate,Cname,Oname,Quantity,Amount)values('$Product_id','$bdate','$cname','$oname','$quantity','$amount')";
$res=mysqli_query($con,$query);
echo json_encode(array("alert"=>"Sucess"));
}
?>
