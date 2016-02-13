import { Injectable } from 'angular2/core';

export class Todo {
  completed: Boolean;

	private _text: String;
	get text() {
		return this._text;
	}
	set text(value: String) {
		this._text = value.trim();
	}

	constructor(text: String) {
		this.completed = false;
		this.text = text.trim();
	}
}

@Injectable()
export class TodoService {
  private todos: Array<Todo> = [];

  constructor() {}

  private getItems(completed: Boolean) {
    return this.todos.filter((todo: Todo) => todo.completed === completed);
  }

  list() {
    return this.todos;
  }

  getRemaining() {
    return this.getItems(false);
  }

  getCompleted() {
    return this.getItems(true);
  }

  allCompleted() {
    return this.todos.length === this.getCompleted().length;
  }

  setAllTo(completed: Boolean) {
    this.todos.forEach((todo: Todo) => todo.completed = completed);
  }

  add(text: String) {
    this.todos.push(new Todo(text));
  }

  remove(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

  removeCompleted() {
    this.todos = this.getRemaining();
  }

  toggleCompletion(todo: Todo) {
    todo.completed = !todo.completed;
  }
}
