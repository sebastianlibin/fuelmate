<?php
header("Access-Control-Allow-Orgin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");
    $con=mysqli_connect("127.0.0.1","root","","fuelmate");
    $request=file_get_contents("php://input");
    $data=json_decode($request);
    if(is_object($data)){
        $data=get_object_vars($data);
    }
    if(isset($data['Product_id'])){
        $id=$data['Product_id'];
        $query="DELETE FROM tbl_product` WHERE Product_id='$id'";
        $res=mysqli_query($con,$query);
        echo json_encode(array("alert"=>"Sucess"))
    }
    ?>