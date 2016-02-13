///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import { bootstrap } from 'angular2/platform/browser';
import { TodoApp } from './components/todo_app'
import { TodoService } from './services/todo_service';

bootstrap(TodoApp, [TodoService])
  .catch(err => console.log(err));
