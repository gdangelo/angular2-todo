import { Component, Input } from 'angular2/core';

@Component({
  selector: 'todo-item',
  template: `
    <li>
      {{todo.text}}
    </li>
  `
})
export class TodoItem {

  @Input() todo: Object;

  constructor() {}
}
