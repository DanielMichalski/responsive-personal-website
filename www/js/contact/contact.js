function sendEmail(action, token) {
    $.post(action, {
            name: $('#name').val(),
            lastname: $('#lastname').val(),
            email: $('#email').val(),
            subject: $('#mail-subject').val(),
            comments: $('#comments').val(),
            token: token,
        },
        function (data) {
            document.getElementById('message').innerHTML = data;
            $('#message').slideDown('slow');
            $('#cform img.contact-loader').fadeOut('slow', function () {
                $(this).remove()
            });
            $('#submit').removeAttr('disabled');
            if (data.match('success') != null) $('#cform').slideUp('slow');
        }
    );
}

$('#contact-form').submit(function () {
    var action = $(this).attr('action');

    $("#message").slideUp(750, function () {
        $('#message').hide();

        $('#submit')
            .before('')
            .attr('disabled', 'disabled');

        grecaptcha.ready(function () {
            grecaptcha.execute('6LeNf1IeAAAAAMDOwSr7p2GHWM1XHeTsXXNuQMlZ', {action: 'submit'})
                .then(function (token) {
                    sendEmail(action, token);
                });
        });
    });
    return false;
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation')

        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
    }, false)
}())
