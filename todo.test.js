// todo.test.js
const todos = [];

function addTodo(task) {
  todos.push({ task, done: false });
  return todos;
}

function getTodos() {
  return todos;
}

test('adds a todo item', () => {
  const result = addTodo('Buy milk');
  expect(result.length).toBeGreaterThan(0);
  expect(result[0].task).toBe('Buy milk');
});

test('gets all todos', () => {
  const result = getTodos();
  expect(Array.isArray(result)).toBe(true);
});