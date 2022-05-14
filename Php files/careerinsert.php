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
if(isset($data['fname']))
{
$fname=$data['fname'];
$email=$data['email'];
$aadhar=$data['aadhar'];
$dob=$data['dob'];
$cn=$data['cn'];
$qualification=$data['qualification'];
$cdate=$data['cdate'];
$gender=$data['gender'];
$place=$data['place'];
$exp=$data['exp'];
$query="insert into
tbl_career
(Name,Email,Aadhar,Dob,Contact_Number,Qualification,Application_date,Gender,Place,Experience)values
('$fname','$email','$aadhar','$dob','$cn','$qualification','$cdate','$gender','$place','$exp')";
$res=mysqli_query($con,$query);
echo json_encode(array("alert"=>"Sucess"));
}
?>
