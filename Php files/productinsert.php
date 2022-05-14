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
if(isset($data['productname']))
{
$productname=$data['productname'];
$description=$data['description'];
//$squery="Select * from tbl_product";

$query="insert into tbl_product
(Product_name,Description)values('$productname','$description')";
$res=mysqli_query($con,$query);
echo json_encode(array("alert"=>"Sucess"));
}
?>
