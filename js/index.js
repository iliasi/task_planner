
tasks = new TaskManager();

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
    
    tasks.addTask(formValidateNameInput.value, formValidateDescriptionInput.value, formValidateAssignInput.value, formValidateDatetimePicker.value, formValidateProgresStatus.value);
    tasks.render();

});

//TODO link the task-list id to a new variable and then add an event listener
const task_list = document.querySelector('#task-list');

task_list.addEventListener("click", (event) => {
    if (event.target.classList.contains("done-button")) {
        //event.preventDefault();
        const selectedTask = event.target.parentElement.parentElement.parentElement.parentElement;
        const taskId = Number(selectedTask.dataset.taskId);
        const taskDone = tasks.findTaskById(taskId);
        taskDone.taskStatus = "Done";

        tasks.render();

    }
});