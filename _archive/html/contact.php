<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name    = isset($_POST['name']) ? trim($_POST['name']) : '';
    $email   = isset($_POST['email']) ? trim($_POST['email']) : '';
    $phone   = isset($_POST['phone']) ? trim($_POST['phone']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';

    if (empty($name) || empty($email) || empty($phone) || empty($message)) {
        header("Location: error.html");
        exit;
    }

    $to = "info@epsomcryospa.com";
    $subject = "New Contact Form Submission from $name";
    $body    = "You have received a new message:\n\n"
             . "Name: $name\n"
             . "Email: $email\n"
             . "Phone: $phone\n\n"
             . "Message:\n$message\n";

    $headers  = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        header("Location: thankyou.html");
        exit;
    } else {
        header("Location: error.html");
        exit;
    }
} else {
    header("HTTP/1.1 405 Method Not Allowed");
    echo "Invalid request method.";
}
?>
