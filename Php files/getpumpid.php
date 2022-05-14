<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");
$con=mysqli_connect("127.0.0.1","root","","fuelmate");
$request=file_get_contents("php://input");
$data=json_decode($request);
if (is_object($data)) {
$data = get_object_vars($data);
}
if(isset($data['p_id']))
{
$p_id=$data['p_id'];
$Datalist=array();
$query=mysqli_query( $con,"SELECT * FROM  tbl_pumpregistration WHERE Pump_id='$p_id'");
//$query=mysqli_query( $con,"SELECT * FROM tbl_ratechange WHERE Rate_Id='$r_id'");
while($row = mysqli_fetch_assoc($query))
{
array_push($Datalist,$row);
}
if(count($Datalist) > 0)
{
echo json_encode(array("alert"=>"Sucess","data"=>$Datalist));
}
else
{
echo json_encode(array("alert"=>"Failed"));
}
}
?>