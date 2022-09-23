<script>
export default {
  data() {
    return {
      newTodo: "",
      todos: [
        //Starter elements
        {
          title: "First Assignment",
          checked: false,
          completed: new Date().toLocaleDateString("en-US"),
        },
        {
          title: "Second Assignment",
          checked: false,
          completed: new Date().toLocaleDateString("en-US"),
        },
      ],
    };
  },
  methods: {
    addTodo() {
      //Create the variables for each new item
      let newItem = {
        title: this.newTodo,
        checked: false,
        completed: new Date().toLocaleDateString("en-US"),
      };
      //Add the item to the array
      this.todos.push(newItem);
      //Makes sure that the site remembers that that change has been made
      localStorage.setItem("todos", JSON.stringify(this.todos));
      this.newTodo = "";
    },
    removeTodo(index) {
      //Removes the desired item from the array
      this.todos.splice(index, 1);
      localStorage.removeItem("todos", JSON.stringify(this.todos));
    },
  },
  created() {
    //Loads the items from storage
    this.todos = JSON.parse(localStorage.getItem("todos"));
    //Assigning todos to the list
    this.todos = this.todos || [];
  },
};
</script>

<template>
  <body>
    <!-- Wrapper covers all elements -->
    <div class="wrapper">
      <!-- Block for the title -->
      <div class="header block">
        <p id="title">Helpful Planner</p>
      </div>
      <!-- Block that will house all other elements -->
      <div class="other block">
        <div class="list">
          <!--Input area to add tasks-->
          <input type="text" placeholder="To Do" v-model="newTodo" />
          <!--Button to add the tasks-->
          <button @click="addTodo()">Add Item</button>
        </div>
        <ul>
          <!--Displays the list of the all items-->
          <li class="items" v-for="(todo, index) in todos" :key="todo">
            <span
              :style="{
                textDecoration: todo.checked ? 'line-through' : 'none',
              }"
              >+{{ todo.title }}&emsp;&emsp;&emsp;&emsp;</span
            >
            <!--Button for removing the items if wanted-->
            <button @click="removeTodo(index)" class="button">
              <img src=../assets/trash.png class="image">
            </button>
            <!--CHeckbox that can be marked when the user wants to check it off-->
            <input type="checkbox" v-model="todo.checked" />
            <!--Will cross out item when the checkbox is ticked-->
            <span v-if="todo.checked" style="textdecoration: none"
              >&emsp;&emsp;&emsp;&emsp;Completed: {{ todo.completed }}</span
            >
          </li>
        </ul>
      </div>
    </div>
  </body>
</template>

<style>
.image {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.button {
  background-color: transparent;
  border: none;
  float: right;
}
.list {
  text-align: center;
}
.items {
  padding: 1rem;
  font-size: 1.125rem;
  line-height: 1.75rem;

  border-radius: 15px;
  list-style: none;
  background-color: #3c096c;
  margin: 0.5rem;
  margin-left: auto;
}
</style>
