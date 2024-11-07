// SHOW HIDDEN - PASSWORD

const showHiddenPassword = () => {
    const input = document.getElementById("login-pass");
    const iconEye = document.getElementById("login-eye");
    const iconEyeConfirm = document.querySelector(".login_eye")

    iconEye.addEventListener("click", ()=> {
        // chnge password to text
        if(input.type === 'password'){
            input.type = 'text';
            // Change password ta text
            input.type = 'text';

            // Icon change
            iconEye.classList.add("ri-eye-line");
            iconEye.classList.remove("ri-eye-off-line");

            iconEye.classList.add("ri-eye-line");
            iconEyeConfirm.classList.remove("ri-eye-off-line");


        } else {
            input.type = "password"
            iconEye.classList.add("ri-eye-off-line");
        }
    });
};

showHiddenPassword();