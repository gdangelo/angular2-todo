import { Component } from 'angular2/core';
import { TodoList } from './todo_list';

@Component({
  selector: 'todo-app',
  template: `
    <h1>Angular 2 Todo App</h1>
    <todo-list></todo-list>
  `,
  directives: [TodoList],
})
export class TodoApp {
  constructor() {}
}
