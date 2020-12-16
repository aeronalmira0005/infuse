<?php
  session_start();
  include("connectToDB.php");

  $email = $password = "";

  if ($_SERVER['REQUEST_METHOD']=='POST'){

    $email = $_POST['email'];
    $password = $_POST['password'];

    if(empty($email) || empty($password)){
      mysqli_close($conn);
      echo "<script>alert('Fill in email and password.')
            window.location.href='../index.html'</script>";
    }

    else{
      $query = "SELECT * FROM users WHERE email='$email' AND password='$password'";
      $result = mysqli_query($conn,$query);

      if (mysqli_num_rows($result)==0){
        mysqli_close($conn);
        echo "<script>alert('Enter correct email and password.')
              window.location.href='../index.html'</script>";
      }

      else if(mysqli_num_rows($result)>0){
        header("location: ../registered.html");
      }

    }

  }

 ?>
