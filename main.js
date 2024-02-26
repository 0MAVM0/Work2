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
