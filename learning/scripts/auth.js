//sign up
const singupForm = document.querySelector('#signup-form');
singupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = singupForm['signup-email'].value;
    const password = singupForm['signup-password'].value;

    console.log(email, password);

    //sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        //console.log(signupForm['signup-email'].value);

        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();

    });
});
//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log("The user has signed out");
    });
});

//login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        //close the login modal and reset the form
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();

        loginForm.reset();

    });
});

