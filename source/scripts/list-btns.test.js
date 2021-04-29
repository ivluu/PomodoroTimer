import * as buttonFunctions from "./list-btns.js";

jest.mock("./task-list.js");

describe("Number of Pomos Button Tests", () => {
  let pomoNum;
  let tasklist;

  beforeEach(() => {
    pomoNum = document.getElementById("pomo-num");
    tasklist = document.getElementById("tasks");
  });

  test("Pomodoro increment button", () => {
    const currVal = pomoNum.value;
    document.getElementById("plus").click();
    expect(pomoNum.value).toBe(String(+currVal + +"1"));
  });

  test("Pomodoro decrement button", () => {
    const oldVal = pomoNum.value;
    document.getElementById("minus").click();
    expect(pomoNum.value).toBe(String(+oldVal - +"1"));
  });

  test("Clear task list button", () => {
    buttonFunctions.clearList();
    expect(tasklist.children.length).toBe(1);

    const task = document.createElement("div");
    document.getElementById("tasks").appendChild(task);
    expect(tasklist.children.length).toBe(2);
    buttonFunctions.clearList();
    expect(tasklist.children.length).toBe(1);
  });

  // test("Add task to list button", () => {
  //     document.getElementById("task-name").value = "";
  //     let oldVal = tasklist.children.length;
  //     // buttonFunctions.addTask();
  //     document.getElementById("add").click();
  //     expect(tasklist.children.length).toBe(oldVal);

  //     document.getElementById("task-name").value = "abc";
  //     oldVal = tasklist.children.length;
  //     // buttonFunctions.addTask();
  //     document.getElementById("add").click();
  //     expect(tasklist.children.length).toBe(oldVal+1);
  // });
});
