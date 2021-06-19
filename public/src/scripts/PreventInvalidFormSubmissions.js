import $ from 'jquery'

export default class PreventInvalidFormSubmissions {
    constructor() {
        this.todoRegisterForm = $('.todo-user-register');
        this.invalidInput = true;
        if (this.todoRegisterForm[0] !== undefined) {
            this.todoRegisterForm[0].addEventListener('change', this.todoRegister.bind(this));
            this.todoRegisterForm.on('click', (event) => {
                if(this.invalidInput) {
                    event.preventDefault();
                    event.stopPropagation();
                    this.todoRegister();
                }
            })
        }
    }

    todoRegister() {
        let firstPassword;
        let validInputs = []
        this.todoRegisterForm[0].forEach((element, index) => {
            if (element.name === "todo_user[name]" && element.value.length < 3) {
                element.classList.add("is-invalid")
                element.nextElementSibling.style.display = 'block';
                element.nextElementSibling.innerHTML = "This Name Need atleast 3 characters";
                validInputs.push(0)
            } else if (element.name === "todo_user[name]" && element.value.length >= 3) {
                element.classList.remove("is-invalid")
                element.nextElementSibling.style.display = 'none';
                element.nextElementSibling.innerHTML = "";
                validInputs.push(1)
            }

            if (element.name === "todo_user[email]"&& !element.value.includes('@') && !element.value.includes('.')) {
                element.classList.add("is-invalid")
                element.nextElementSibling.style.display = 'block';
                element.nextElementSibling.innerHTML = "The E-Mail is not valid";
                validInputs.push(0)
            } else if (element.name === "todo_user[email]" && element.value.includes('@') && element.value.includes('.')) {
                element.classList.remove("is-invalid")
                element.nextElementSibling.style.display = 'none';
                element.nextElementSibling.innerHTML = "";
                validInputs.push(1)
            }

            if (element.name === "todo_user[password][first]" && element.value.length < 6) {
                element.classList.add("is-invalid")
                element.nextElementSibling.style.display = 'block';
                element.nextElementSibling.innerHTML = "Your password must contains atleast 6 characters";
                firstPassword = element.value;
                validInputs.push(0)
            } else if (element.name === "todo_user[password][first]" && element.value.length >= 6) {
                firstPassword = element.value;
                element.classList.remove("is-invalid")
                element.nextElementSibling.style.display = 'none';
                element.nextElementSibling.innerHTML = "";
                validInputs.push(1)
            }

            if (element.name === "todo_user[password][second]") {
                if (element.value === firstPassword && firstPassword.length >= 6) {
                    element.classList.remove("is-invalid")
                    element.nextElementSibling.style.display = 'none';
                    element.nextElementSibling.innerHTML = "";
                    validInputs.push(1)
                } else if (firstPassword !== '') {
                    element.classList.add("is-invalid")
                    element.nextElementSibling.style.display = 'block';
                    element.nextElementSibling.innerHTML = "Your repeated password don't match your password. Please try again";
                    validInputs.push(0)
                }
            }
        })
        validInputs.forEach(element => {
            if (element === 0) {
                this.invalidInput = true;
            } else {
                this.invalidInput = false;
            }
        })
    }
}