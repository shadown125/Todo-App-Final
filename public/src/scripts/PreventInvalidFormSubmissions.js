import $ from 'jquery'

export default class PreventInvalidFormSubmissions {
    constructor() {
        this.todoRegisterForm = $('.todo-user-register');

        if (this.todoRegisterForm[0] !== undefined) {
            this.invalidInput = false;
            this.todoRegisterForm[0].addEventListener('change', this.todoRegister.bind(this));
            this.todoRegisterForm.on('click', (event) => {
                if(!this.invalidInput) {
                    event.preventDefault();
                    event.stopPropagation();
                    this.todoRegister().bind(this);
                }
            })
        }
    }

    todoRegister() {
        let firstPassword;
        this.todoRegisterForm[0].forEach((element, index) => {
            if (element.name === "todo_user[name]" && element.value.length < 3) {
                element.classList.add("is-invalid")
                element.nextElementSibling.style.display = 'block';
                element.nextElementSibling.innerHTML = "This Name Need atleast 3 characters";
                this.invalidInput = false;
            } else if (element.name === "todo_user[name]" && element.value.length >= 3) {
                element.classList.remove("is-invalid")
                element.nextElementSibling.style.display = 'none';
                element.nextElementSibling.innerHTML = "";
                this.invalidInput = true;
            }

            if (element.name === "todo_user[email]"&& !element.value.includes('@') && !element.value.includes('.')) {
                element.classList.add("is-invalid")
                element.nextElementSibling.style.display = 'block';
                element.nextElementSibling.innerHTML = "The E-Mail is not valid";
                this.invalidInput = false;
            } else if (element.name === "todo_user[email]" && element.value.includes('@') && element.value.includes('.')) {
                element.classList.remove("is-invalid")
                element.nextElementSibling.style.display = 'none';
                element.nextElementSibling.innerHTML = "";
                this.invalidInput = true;
            }

            if (element.name === "todo_user[password][first]" && element.value.length < 6) {
                element.classList.add("is-invalid")
                element.nextElementSibling.style.display = 'block';
                element.nextElementSibling.innerHTML = "Your password must contains atleast 6 characters";
                this.invalidInput = false;
                firstPassword = element.value;
            } else if (element.name === "todo_user[password][first]" && element.value.length >= 6) {
                firstPassword = element.value;
                element.classList.remove("is-invalid")
                element.nextElementSibling.style.display = 'none';
                element.nextElementSibling.innerHTML = "";
                this.invalidInput = true;
            }

            if (element.name === "todo_user[password][second]") {
                if (element.value === firstPassword) {
                    element.classList.remove("is-invalid")
                    element.nextElementSibling.style.display = 'none';
                    element.nextElementSibling.innerHTML = "";
                    this.invalidInput = true;
                } else if (firstPassword !== '') {
                    this.invalidInput = false;
                    element.classList.add("is-invalid")
                    element.nextElementSibling.style.display = 'block';
                    element.nextElementSibling.innerHTML = "Your repeated password don't match your password. Please try again";
                }
            }
        })
    }
}