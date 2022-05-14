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
if(isset($data['uname']))
{
$uname=$data['uname'];
$psw=$data['psw'];
$Datalist=array();
//echo "$uname";
//echo "$psw";
$query=mysqli_query($con,"SELECT * FROM   tbl_managerreg WHERE Password='$psw' AND User_name='$uname'");
//$query=mysqli_query($con,"SELECT * FROM  tbl_pumpregistration p WHERE p.User_name='$uname' AND p.Password='$psw'");

while($row = mysqli_fetch_assoc($query))
{
array_push($Datalist,$row);
}
if(count($Datalist) > 0)
{
   // echo "$Datalist";
echo json_encode(array("managerdetails"=>$Datalist[0]));
}
else
{
echo json_encode(array("alert"=>"Failed"));
}
}?>