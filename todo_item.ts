import { Component, Input } from 'angular2/core';

@Component({
  selector: 'todo-item',
  template: `
    <li>
      {{todo.content}}
    </li>
  `
})
export class TodoItem {

  @Input() todo: Object;

  constructor() {

  }
}
