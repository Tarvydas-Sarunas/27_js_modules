class Todo {
  constructor(argTitle) {
    this.isDone = false;
    this.title = argTitle;
    this.id = Math.random().toString().slice(2, 7);
  }
}

// sukurti klase Todo
// klase turetu grazinti naujai sukurta todo objekta su
// id, title, isDone savybem. id generuojam random

// new Todo('Go to park') =>
// sukuria
// { id: '2457', title: 'Go to park' isDone: false }
export default Todo;
