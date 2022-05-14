<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");
$con=mysqli_connect("127.0.0.1","root","","fuelmate");
$Datalist=array();
$query=mysqli_query($con,"SELECT * FROM tbl_dailysales where Current_Date=(SELECT MAX(Current_Date) from tbl_dailysales) and Pump_id=1");
while($row = mysqli_fetch_assoc($query))
{
array_push($Datalist,$row);
}
echo json_encode($Datalist)
?>