interface Todo {
  id: string;
  description: string;
  completed: boolean;
}

interface TodoState {
  loading: boolean;
  error: string | null;
  todoList: Todo[];
}
