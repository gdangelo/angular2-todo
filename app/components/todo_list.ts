import { Component } from 'angular2/core';
import { TodoItem } from './todo_item';

@Component({
  selector: 'todo-list',
  template: `
    <ul>
      <todo-item *ngFor="#todo of todos" [todo]="todo"></todo-item>
    <ul>
  `,
  directives: [TodoItem]
})
export class TodoList {
  public todos: Array<any>;

  constructor() {
    this.todos = TODOS;
  }
}

var TODOS = [
  {
    content: 'todo 1',
    done: true
  },
  {
    content: 'todo 2',
    done: false
  }
]
