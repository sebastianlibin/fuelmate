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
if(isset($data['Rate_Id ']))
{
$Rate_Id =$data['Rate_Id '];
$Product_name=$data['Product_name'];
$ChangeDate=$data['ChangeDate'];
$Rate_amount=$data['Rate_amount']
$query="UPDATE tbl_product set
Product_name='$Product_name',ChangeDate='$ChangeDate',Rate_amount='$Rate_amount' WHERE Rate_Id='$Rate_Id'";
$res=mysqli_query($con,$query);
echo json_encode(array("alert"=>"Sucess"));
}
?>