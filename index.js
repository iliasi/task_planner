const formSubmitValidate = document.querySelector('#task-form');
const formValidateNameInput = document.querySelector('#nameInput');
const formValidateDescriptionInput = document.querySelector('#descriptionInput');
const formValidateAssignInput = document.querySelector('#assignInput');
const formValidateDatetimePicker = document.querySelector('#datetimePicker');
const formValidateProgresStatus = document.querySelector('#progresStatus');


formSubmitValidate.addEventListener('submit', (event) => {
    event.preventDefault();
    // these lines is to validate Name Input
    if (formValidateNameInput.value.length > 5) {
        formValidateNameInput.classList.add('is-valid');
        formValidateNameInput.classList.remove('is-invalid');
    } else {
        formValidateNameInput.classList.add('is-invalid');
        formValidateNameInput.classList.remove('is-valid');
    }

    // these lines is to validate Description input
    if (formValidateDescriptionInput.value.length > 5) {
        formValidateDescriptionInput.classList.add('is-valid');
        formValidateDescriptionInput.classList.remove('is-invalid');
    } else {
        formValidateDescriptionInput.classList.add('is-invalid');
        formValidateDescriptionInput.classList.remove('is-valid');
    }

    // these lines is to validate Assign to input
    if (formValidateAssignInput.value.length > 5) {
        formValidateAssignInput.classList.add('is-valid');
        formValidateAssignInput.classList.remove('is-invalid');
    } else {
        formValidateAssignInput.classList.add('is-invalid');
        formValidateAssignInput.classList.remove('is-valid');
    }

     // these lines is to validate Date input
     if (formValidateDatetimePicker.value.length > 0) {
        formValidateDatetimePicker.classList.add('is-valid');
        formValidateDatetimePicker.classList.remove('is-invalid');
    } else {
        formValidateDatetimePicker.classList.add('is-invalid');
        formValidateDatetimePicker.classList.remove('is-valid');
    }

    // these lines is to validate Task Status
    if (formValidateProgresStatus.value != '') {
        formValidateProgresStatus.classList.add('is-valid');
        formValidateProgresStatus.classList.remove('is-invalid');
    } else {
        formValidateProgresStatus.classList.add('is-invalid');
        formValidateProgresStatus.classList.remove('is-valid');
    }
});