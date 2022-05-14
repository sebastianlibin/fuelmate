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

if(isset($data['Product_id']))
{
    $pumpid=1;//want to set cookies
$Product_id=$data['Product_id'];
// $Quantity=$data['Quantity'];
$Description=$data['Description'];
// $Openingstock=$data['Openingstock'];
$cstock=$data['cstock'];
$currentdate=date("y-m-d");
$query=mysqli_query( $con,"SELECT * FROM tbl_filling where Filling_Date='$currentdate'  and Product='$Product_id' and Pump_id='$pumpid'");
$queryresult=mysqli_fetch_array($query);
//echo "$queryresult";
$fillingstock=$queryresult['Volume'];
$Openingstock=$data['Openingstock'];
if($fillingstock>0)
{
    $salesqty=($Openingstock+$fillingstock)-$cstock;
}
else
{
    $salesqty=($Openingstock-$cstock);
}
$query=mysqli_query( $con,"SELECT * FROM tbl_ratechange where Rate_Id in (SELECT MAX(Rate_Id) FROM tbl_ratechange where Product_name ='$Product_id')");
$queryresult=mysqli_fetch_array($query);
$rate=$queryresult['Rate_amount'];
$totalamount=$rate*$salesqty;
$query="insert into tbl_dailysales
            (Product_id,C_Date,Closing_Stock,Opening_Stock,SalesVolume,rate,Total_Amount,Description,Pump_id)values
            ('$Product_id','$currentdate','$cstock','$Openingstock','$salesqty','$rate','$totalamount','$Description','$Description','$pumpid')";
$res=mysqli_query($con,$query);
echo "insert into tbl_dailysales
(Product_id,C_Date,Closing_Stock,Opening_Stock,SalesVolume,rate,Total_Amount,Description,Pump_id)values
('$Product_id','$currentdate','$cstock','$Openingstock','$salesqty','$rate','$totalamount','$Description','$pumpid')";
//echo json_encode(array("alert"=>"Failed"));
//
}