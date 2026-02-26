<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);

    $to = "officialautodigix@gmail.com, info@autodigix.in";
    $subject = "New Contact Form Submission - AutoDigiX";

    $message = "
    New Contact Inquiry:

    Name: $name
    Phone: $phone
    Email: $email
    ";

    $headers = "From: $email";

    if(mail($to, $subject, $message, $headers)){
        echo "<script>alert('Message Sent Successfully!'); window.location.href='contact.html';</script>";
    } else {
        echo "Error sending message.";
    }
}
?>