interface Todo {
  id: string;
  description: string;
}

interface TodoState {
  loading: boolean;
  error: string | null;
  todoList: Todo[];
}
