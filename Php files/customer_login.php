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
        $Username=$data['uname'];
        $Password=$data['psw'];
        $Datalist=array();
        $query=mysqli_query( $con,"SELECT * FROM tbl_coustomerregistration WHERE Password='$Password' AND User_name='$Username'");
        while($row = mysqli_fetch_assoc($query))
        {
            array_push($Datalist,$row);
        }
        if(count($Datalist) > 0)
        {
            echo json_encode(array("customer_details"=>$Datalist[0]));
        }
        else 
        {
            echo json_encode(array("alert"=>"Failed"));
        }
    }
?>