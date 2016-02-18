import { Component, Input } from 'angular2/core';
import { TodoService, Todo } from '../services/todo_service';

@Component({
  selector: 'todo-item',
  template: `
    <li [class.completed]="todo.completed" [class.editing]="todo.editing">
      <div class="view">
        <input class="toggle" type="checkbox" (click)="toggleCompletion()" [checked]="todo.completed" />
        <label (dblclick)="editTodo()">{{todo.text}}</label>
        <button class="delete" (click)="remove()"></button>
      </div>
      <input class="edit" *ngIf="todo.editing" [value]="todo.text" #editedtodo (blur)="cancelEditing()" (keyup.enter)="updateTodo(editedtodo.value)" (keyup.escape)="cancelEditing()">
    </li>
  `
})
export class TodoItem {

  @Input() todo: Todo;

  constructor(private _todoService: TodoService) {}

  toggleCompletion() {
    this._todoService.toggleCompletion(this.todo);
  }

  editTodo() {
    this.todo.editing = true;
  }

  cancelEditing() {
    this.todo.editing = false;
  }

  updateTodo(newTodo) {
    if (newTodo.trim().length == 0){
      this._todoService.remove(this.todo);
    }
    else {
      this.todo.text = newTodo.trim();
      this.todo.editing = false;
    }
  }

  remove() {
    this._todoService.remove(this.todo);
  }
}
