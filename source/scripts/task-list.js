import { selectTask } from "./stats.js";

export class Task extends window.HTMLElement {
  constructor(task) {
    super();

    const myStorage = window.localStorage;

    const tasks = document.getElementById("tasks");
    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("form");
    wrapper.setAttribute("class", "nested-grid");
  
    <!-- create new list item -->
    const taskName = document.createElement("p");
    taskName.setAttribute("id", "task-name");
    taskName.onclick = () => {
      selectTask(taskName);
    };
    taskName.textContent = task.taskName;
    
    const editName = document.createElement("input");
    editName.setAttribute("id", "edit-name");
    editName.value = taskName.textContent;
    editName.setAttribute("required", "");
    editName.style.display = "none";

    const pomoNum = document.createElement("input");
    pomoNum.setAttribute("type", "number");
    pomoNum.setAttribute("id", "pomo-num");
    pomoNum.setAttribute("type", "number");
    pomoNum.setAttribute("min", "1");
    pomoNum.setAttribute("max", "4");
    pomoNum.setAttribute("required", "");
    pomoNum.setAttribute("readonly", "true");
    pomoNum.value = task.pomoNum;
    
    <!-- create new delete button -->
    const deleteTask = document.createElement("button");
    deleteTask.setAttribute("type", "button");
    deleteTask.setAttribute("id", "delete");
    deleteTask.textContent = "Delete";
    deleteTask.style.display = "none";
    deleteTask.addEventListener("click", function (e) {
      const array = e.target.getRootNode().host.parentNode.children;
      const index = [].indexOf.call(array, e.target.getRootNode().host) - 1;
      const storedTasks = JSON.parse(myStorage.getItem("tasks"));
      storedTasks.splice(index, 1);
      myStorage.setItem("tasks", JSON.stringify(storedTasks));
      e.target.getRootNode().host.remove();
      if (
        tasks.children.length === 1 &&
        document.getElementById("no-task").style.display === "none"
      ) {
        document.getElementById("no-task").style.display = "block";
      }
    });
    
    <!-- create new edit button -->
    const editTask = document.createElement("button");
    editTask.setAttribute("id", "edit");
    editTask.textContent = "Edit";

    wrapper.addEventListener("submit", function (e) {
      e.preventDefault();
      if (editTask.textContent === "Edit") {
        
        <!-- edit current name -->
        editTask.textContent = "Done";
        taskName.style.display = "none";
        editName.style.display = "block";
        deleteTask.style.display = "block";
        pomoNum.readOnly = false;
        pomoNum.style.background = "#f0f0f0";
      } else {
        
        <!-- save new name -->
        editTask.textContent = "Edit";
        taskName.style.display = "block";
        editName.style.display = "none";
        deleteTask.style.display = "none";
        taskName.textContent = editName.value;
        pomoNum.readOnly = true;
        pomoNum.style.background = "white";
        const array = e.target.getRootNode().host.parentNode.children;
        const index = [].indexOf.call(array, e.target.getRootNode().host) - 1;
        const storedTasks = JSON.parse(myStorage.getItem("tasks"));
        storedTasks.splice(index, 1, {
          taskName: taskName.textContent,
          pomoNum: pomoNum.value,
        });
        myStorage.setItem("tasks", JSON.stringify(storedTasks));
      }
    });

    <!-- add list item elements -->
    wrapper.appendChild(taskName);
    wrapper.appendChild(editName);
    wrapper.appendChild(pomoNum);
    wrapper.appendChild(editTask);
    wrapper.appendChild(deleteTask);

    <!-- style new list items -->
    const style = document.createElement("style");
    style.textContent = `.nested-grid {
          display: grid;
          grid-template-columns: 55% 15% 15% 15%;
          margin: auto;
          align-items: center;
      }

      input {
        border: none;
        border-radius: 0.8vw;
        background-color: #f0f0f0;
        padding-top: 1em;
        padding-bottom: 1em;
        font-family: Nunito;
        font-size: 1.3vw;
      }

      input:focus {
        outline: none;
      }

      #task-name {
        text-align: left;
        padding-left: 1vh;
        font-size: 1.3vw;
      }

      #task-name:focus {
        outline: none;
      }

      #pomo-num {
        text-align: center;
        width: 80%;
        background-color: white;
        font-size: 1.3vw;
      }

      #edit-name {
        width: 90%;
        padding-left: 1vw;
      }

      #edit {
        font-family: Nunito;
        width: 90%;
        border: none;
        border-radius: 0.8vw;
        background-color: rgb(102, 128, 146);
        color: white;
        height: 65%;
        font-size: 1.05vw;
      }  

      #edit:focus {
        outline: none;
      }

      #edit:hover {
        background-color: #97b2c4;
    }
      #delete {
        font-family: Nunito;
        width: 90%;
        color: white;
        border: none;
        border-radius: 0.8vw;
        background-color: #bd0000;
        height: 65%;
        font-size: 1.05vw;
      }
      #delete:focus {
        outline: none;
      }

      #delete:hover {
        background-color: #f03a3a;
    }
      #taskName {
        justify-self: left;
        margin: 0px;
        padding-left: 1vh;
      }
      `;
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }
}

window.customElements.define("task-list", Task);
