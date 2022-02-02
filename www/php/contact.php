<?php
require __DIR__ . '/captcha.php';
require __DIR__ . '/email-utils.php';

const RECIPIENT_ADDRESS = "michalskidaniel2@gmail.com";

if (!$_POST) exit;

if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

$name = $_POST['name'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$comments = $_POST['comments'];
$token = $_POST['token'];

validateInvisibleFieldNotFilled();
validateFormData($name, $email, $comments);

$e_subject = "Personal website message: $subject";
$comments = "Message from: $name" . PHP_EOL . PHP_EOL . "$comments";

$headers = "From: $email" . PHP_EOL;
$headers .= "Reply-To: $email" . PHP_EOL;
$headers .= "Return-Path: $email" . PHP_EOL;
$headers .= "MIME-Version: 1.0" . PHP_EOL;
$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;
$headers .= "X-Priority: 3" . PHP_EOL;
$headers .= "X-Mailer: PHP" . phpversion() . PHP_EOL;

if (!isValidCaptcha($token)) {
    echo '<div class="error_message">Invalid captcha.</div>';
    exit();
}

if (mail(RECIPIENT_ADDRESS, $e_subject, $comments, $headers)) {
    echo "<fieldset>";
    echo "<div id='success_page'>";
    echo "<h3>Email Sent Successfully.</h3>";
    echo "<p>Thank you <strong>$name</strong>, your message has been submitted to me.</p>";
    echo "</div>";
    echo "</fieldset>";
} else {
    echo '<div class="error_message">There was an unexpected error during sending an email!</div>';
}

function validateInvisibleFieldNotFilled()
{
    if (!empty($_POST['lastname'])) die();
}

function validateFormData($name, $email, $comments)
{
    if (trim($name) == '') {
        echo '<div class="error_message">You must enter your name.</div>';
        exit();
    } else if (trim($email) == '') {
        echo '<div class="error_message">Please enter a valid email address.</div>';
        exit();
    } else if (!isValidEmail($email)) {
        echo '<div class="error_message">You have entered an invalid e-mail address. Please try again.</div>';
        exit();
    } else if (trim($comments) == '') {
        echo '<div class="error_message">Please enter your message.</div>';
        exit();
    }
}
