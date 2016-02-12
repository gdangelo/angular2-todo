import { bootstrap } from 'angular2/platform/browser';
import { TodoApp } from './todoapp'

bootstrap(TodoApp)
  .catch(err => console.log(err));
