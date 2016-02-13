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
  todos: Array<Todo>;

  constructor() {
    this.todos = [
      new Todo('Learn Angular2'),
      new Todo('Build app with Angular2')
    ]
  }

  list() {
    return this.todos;
  }
}
