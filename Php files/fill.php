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
$Volume=$data['Volume'];
$tamount=$data['tamount'];
$dname=$data['dname'];
$fdate=$data['fdate'];
//$pid=$data['2'];
$query="insert into tbl_filling
(Product_name,Volume,Total_amount,Filling_Date,Distributor_Name,Pump_id)values('$Product_id','$Volume','$tamount','$fdate','$dname','2')";
$res=mysqli_query($con,$query);
echo json_encode(array("alert"=>"Sucess"));
}
?>
