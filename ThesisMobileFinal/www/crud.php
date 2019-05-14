<?php
 include "db.php";
 if(isset($_POST['insert']))
 {
    $name=$_POST['name'];
    $email=$_POST['email'];
    $role=$_POST['role'];
    $password=$_POST['password'];

    $q=mysqli_query($con,"INSERT INTO 'users' ('name','email', 'role', 'password') VALUES ('$name','$email', '$role','$password' )");
    if($q)
    echo "success";
    else
    echo "error";
 }
 ?>
