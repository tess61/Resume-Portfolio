document.addEventListener('mousemove', function(e) {
    let x = e.clientX;
    let y = e.clientY;

    // Combine the linear gradient with the radial gradient
    document.body.style.background = `
        radial-gradient(circle at ${x}px ${y}px, rgba(54, 69, 128, 0.1) 100px, rgba(0, 0, 0, 0) 200px),
        linear-gradient(300deg, #141E30, #243B55)
    `;
});

$(document).ready(function () {
    // Highlight navigation link based on scroll position
    $(window).on('scroll', function () {
        var scrollPos = $(document).scrollTop();
        $('nav a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr('href'));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('nav a').removeClass('active');
                currLink.addClass('active');
            } else {
                currLink.removeClass('active');
            }
        });
    });
});