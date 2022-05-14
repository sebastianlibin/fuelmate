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
if(isset($data['Pump_id']))
{
$Pump_id=$data['Pump_id'];
$mname=$data['mname'];
$place=$data['place'];
$Qualification=$data['Qualification'];
$Ea=$data['Ea'];
$pno=$data['pno'];
$adate=$data['adate'];
$uname=$data['uname'];
$psd=$data['psd'];
$query="insert into tbl_managerreg
                (Manager_Name,Pump_id,Qualification,Email,Phone_No,Application_date,User_name,Password,Place)values
('$mname','$Pump_id','$Qualification','$Ea','$pno','$adate','$uname','$psd','$place')";
$res=mysqli_query($con,$query);
echo json_encode(array("alert"=>"Sucess"));
}
?>
