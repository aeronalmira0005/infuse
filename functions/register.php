<?php

$firstName = $middleName = $lastName = $email = $password = $address = " ";

if ($_SERVER['REQUEST_METHOD']=='POST'){

  $firstName = $_POST["firstName"];

  $middleName = $_POST["middleName"];

  $lastName = $_POST["lastName"];

  $email = $_POST["email"];

  $password = $_POST["password"];

  $address = $_POST["address"];



  include ('connectToDB.php');

  if ($conn){

      $query = "SELECT email from users WHERE email='$email'";
      $result = mysqli_query($conn,$query);

      if (mysqli_num_rows($result)==0) {

        $is_staff = 0;

        $insert = "INSERT INTO users (firstName, middleName, lastName, email, password, address, is_staff)
        VALUES('".$firstName."','".$middleName."','".$lastName."','".$email."','".$password."','".$address."','".$is_staff."')";

        $test = mysqli_query($conn,$insert);

        mysqli_close($conn);

        header("location: ../registered.html");

      }

      else if (mysqli_num_rows($result)>0){

        mysqli_close($conn);
        echo "<script>alert('Email is already registered.')
              window.location.href='../signup.html'</script>";
      }

    }

}
?>
