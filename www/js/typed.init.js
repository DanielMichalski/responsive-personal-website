// Typed Text
$(".element").each(function () {
    var $this = $(this);
    $this.typed({
        strings: $this.attr('data-elements').split(','),
        typeSpeed: 40,
        backDelay: 1500
    });
});
