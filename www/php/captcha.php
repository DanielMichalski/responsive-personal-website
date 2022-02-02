<?php

const RECAPTCHA_URL = "https://www.google.com/recaptcha/api/siteverify";
const RECAPTCHA_SECRET = "6LeNf1IeAAAAAPRrMoGxiIAFRjA9JoJ4SWf3taBQ";
const RECAPTCHA_SUCCESS = 'success';
const RECAPTCHA_SCORE = 'score';
const SECRET_PARAMETER = '?secret=';
const RESPONSE_PARAMETER = '&response=';

function isValidCaptcha($token)
{
    $recaptcha = file_get_contents(RECAPTCHA_URL . SECRET_PARAMETER . RECAPTCHA_SECRET . RESPONSE_PARAMETER . $token);
    $recaptcha = json_decode($recaptcha, true);

    return $recaptcha[RECAPTCHA_SUCCESS] == 1 and $recaptcha[RECAPTCHA_SCORE] >= 0.5;
}
