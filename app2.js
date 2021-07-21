/*
1. quit or q 입력 시 반복문 종료
2. list 입력 시 현재 리스트 출력
3. new 입력 시 등록할 todo 묻기 > 새 todo 입력 시 리스트에 추가
4. delete 입력 시 삭제할 todo index 묻기 > 유효한 index 인지 check > 유효한 index 이면 리스트에서 삭제
*/

let input = prompt("What do you want to do?");
const todos = ["hello", "world"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("**************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("**************");
  } else if (input === "new") {
    const newTodo = prompt("What is your new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} is added to the list`);
  } else if (input === "delete") {
    const index = parseInt(prompt("Which index do you want to delete?"));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`We deleted ${deleted[0]}`);
    } else {
      console.log("Unknown index");
    }
  }
  input = prompt("What do you want to do?");
}
console.log("We quit the app");
