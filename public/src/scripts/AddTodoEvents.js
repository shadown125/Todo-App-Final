import $ from 'jquery'

export default class AddTodoEvents {
    constructor() {
        this.buttonAddTodo = $('[data-button-add-todo]');
        this.buttonCloseAddTodo = $('[data-button-close-add-todo-popup]');
        this.addTodoPopup = $('[data-todo-popup]');

        this.buttonAddTodo.on('click', this.showAddTodoPopup.bind(this));
        this.buttonCloseAddTodo.on('click', this.hideAddTodoPopup.bind(this));
    }

    showAddTodoPopup() {
        this.addTodoPopup.addClass('is-active');
    }

    hideAddTodoPopup() {
        this.addTodoPopup.removeClass('is-active');
    }
}