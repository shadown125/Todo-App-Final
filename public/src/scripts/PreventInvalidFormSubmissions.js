import $ from 'jquery'

export default class PreventInvalidFormSubmissions {
    constructor() {
        this.todoRegisterForm = $('.todo-user-register');
        this.settingsNameForm = $('.settings-name');
        this.settingsPasswordForm = $('.settings-password');
        this.settingsImageForm = $('.settings-image');
        this.addTodoForm = $('.add-todo-popup');
        this.invalidInput = true;
        this.invalidNameOptionsInputs = true;
        this.invalidPasswordOptionsInputs = true;
        this.invalidImageOptionsInput = true;
        this.invalidAddTodoInput = true;
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
        if (this.settingsNameForm[0] !== undefined) {
            this.settingsNameForm[0].addEventListener('change', this.changeName.bind(this));
            this.settingsNameForm.on('click', event => {
                if (this.invalidNameOptionsInputs) {
                    event.preventDefault();
                    event.stopPropagation();
                    this.changeName();
                }
            })
        }
        if (this.settingsPasswordForm[0] !== undefined) {
            this.settingsPasswordForm[0].addEventListener('change', this.changePassword.bind(this));
            this.settingsPasswordForm.on('click', event => {
                if (this.invalidPasswordOptionsInputs) {
                    event.preventDefault();
                    event.stopPropagation();
                    this.changePassword();
                }
            })
        }
        if (this.settingsImageForm[0] !== undefined) {
            this.settingsImageForm[0].addEventListener('change', this.changeImage.bind(this));
            this.settingsImageForm.on('submit', event => {
                if (this.invalidImageOptionsInput) {
                    event.preventDefault();
                    this.changeImage();
                }
            })
        }
        if (this.addTodoForm[0] !== undefined) {
            this.addTodoForm[0].addEventListener('change', this.changeAddTodo.bind(this));
            this.addTodoForm.on('submit', event => {
                if (this.invalidAddTodoInput) {
                    event.preventDefault();
                    this.changeAddTodo();
                }
            })
        }
    }
    changeAddTodo() {
        let validInputs = [];

        this.addTodoForm[0].forEach((element, index) => {
            if (element.name === "todo_list[title]" && element.value === '') {
                element.classList.add("is-invalid")
                element.nextElementSibling.style.display = 'block';
                element.nextElementSibling.innerHTML = "This field can't be empty";
                validInputs.push(0)
            } else if (element.name === "todo_list[title]" && element.value !== '') {
                element.classList.remove("is-invalid")
                element.nextElementSibling.style.display = 'none';
                element.nextElementSibling.innerHTML = "";
                validInputs.push(1)
            }
        })

        this.invalidAddTodoInput = false;
        validInputs.forEach(element => {
            if (element === 0) {
                this.invalidAddTodoInput = true;
            }
        })
    }

    todoRegister() {
        let firstPassword;
        let validInputs = []
        this.todoRegisterForm[0].forEach((element, index) => {
            if (element.name === "todo_user[name]" && element.value.length < 2) {
                element.classList.add("is-invalid")
                element.nextElementSibling.style.display = 'block';
                element.nextElementSibling.innerHTML = "This Name Need atleast 2 characters";
                validInputs.push(0)
            } else if (element.name === "todo_user[name]" && element.value.length >= 2) {
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
        this.invalidInput = false;
        validInputs.forEach(element => {
            if (element === 0) {
                this.invalidInput = true;
            }
        })
    }

    changeName() {
        let validInputs = [];
        this.settingsNameForm[0].forEach((element, index) => {
            if (element.name === "todo_user_name[name]" && element.value.length < 2) {
                element.classList.add("is-invalid")
                element.nextElementSibling.style.display = 'block';
                element.nextElementSibling.innerHTML = "This Name Need atleast 2 characters";
                validInputs.push(0)
            } else if (element.name === "todo_user_name[name]" && element.value.length >= 2) {
                element.classList.remove("is-invalid")
                element.nextElementSibling.style.display = 'none';
                element.nextElementSibling.innerHTML = "";
                validInputs.push(1)
            }
        })

        this.invalidNameOptionsInputs = false;
        validInputs.forEach(element => {
            if (element === 0) {
                this.invalidNameOptionsInputs = true;
            }
        })
    }

    changePassword() {
        let firstPassword;
        let validInputs = [];

        this.settingsPasswordForm[0].forEach((element, index) => {
            if (element.name === "todo_user_password[password][first]" && element.value.length < 6) {
                element.classList.add("is-invalid")
                element.nextElementSibling.style.display = 'block';
                element.nextElementSibling.innerHTML = "Your password must contains atleast 6 characters";
                firstPassword = element.value;
                validInputs.push(0)
            } else if (element.name === "todo_user_password[password][first]" && element.value.length >= 6) {
                firstPassword = element.value;
                element.classList.remove("is-invalid")
                element.nextElementSibling.style.display = 'none';
                element.nextElementSibling.innerHTML = "";
                validInputs.push(1)
            }

            if (element.name === "todo_user_password[password][second]") {
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

        this.invalidPasswordOptionsInputs = false;
        validInputs.forEach(element => {
            if (element === 0) {
                this.invalidPasswordOptionsInputs = true;
            }
        })
    }

    changeImage() {
        let validInputs = [];

        this.settingsImageForm[0].forEach((element, index) => {
            if (element.name === "todo_user_image[profile_image]" && !element.value.includes('.jpeg') && !element.value.includes('.jpg') && !element.value.includes('.png')) {
                element.classList.add("is-invalid")
                element.nextElementSibling.style.display = 'block';
                element.nextElementSibling.innerHTML = "The File need to be jpeg or jpg or png format";
                validInputs.push(0)
            } else if (element.name === "todo_user_image[profile_image]" && element.value.includes('.jpeg') || element.value.includes('.jpg') || element.value.includes('.png')) {
                element.classList.remove("is-invalid")
                element.nextElementSibling.style.display = 'none';
                element.nextElementSibling.innerHTML = "";
                validInputs.push(1)
            }
        })

        this.invalidImageOptionsInput = false;
        validInputs.forEach(element => {
            if (element === 0) {
                this.invalidImageOptionsInput = true;
            }
        })
    }
}