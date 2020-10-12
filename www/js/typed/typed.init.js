// Typed Text
$(".element").each(function () {
    var $this = $(this);
    $this.typed({
        strings: $this.attr('data-elements').split(','),
        typeSpeed: 50,
        backDelay: 2000
    });
});
