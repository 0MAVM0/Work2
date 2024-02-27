document.getElementById('submit-btn').addEventListener('click', function() {
    event.preventDefault();

    var formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value
    };

    emailjs.send('service_3g6gffm', 'template', formData)
        .then(function(response) {
            console.log('Письмо успешно отправлено!', response.status, response.text);
        }, function(error) {
            console.log('Письмо не удалось отправить!', error);
        });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.bottom = "40px";
    } else {
        scrollToTopBtn.style.bottom = "700px";
    }
}

document.getElementById("scrollToTopBtn").onclick = function() {
    scrollToTop();
};

function scrollToTop() {
    var position = document.documentElement.scrollTop || document.body.scrollTop;
    if (position) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, position - position / 8);
    }
}