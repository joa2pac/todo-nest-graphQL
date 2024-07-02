import { Injectable } from '@nestjs/common';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    {
      id: 1,
      description: 'Piedra del Alma',
      done: false,
    },
    {
      id: 2,
      description: 'Piedra de la Mente',
      done: true,
    },
    {
      id: 3,
      description: 'Piedra del tiempo',
      done: false,
    },
  ];

  findAll(): Todo[] {
    return this.todos;
  }
}
