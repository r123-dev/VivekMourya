//add addEventListener to the form
document.querySelector('.php-email-form mt-4').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {

    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )

}