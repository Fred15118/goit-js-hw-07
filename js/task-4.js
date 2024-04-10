const refs = {
    form: document.querySelector('.login-form'),
}
function validation(event) {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === '' || password === '') {
        window.alert('All form fields must be filled in');
    } else {
        const res = {
            email,
            password
        };
        
        console.log(res);
        refs.form.reset();
    }

}

refs.form.addEventListener('submit', validation)