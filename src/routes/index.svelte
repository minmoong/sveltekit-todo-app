<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';
  import { enhance } from '$lib/actions/form';

  export const load: Load = async ({ fetch }) => {
    console.log('request start')
    const res = await fetch('/todos.json');
    console.log('request end')

    // if (res.ok) {
    //   const todos = await res.json();
    //   return {
    //     props: { todos }
    //   }
    // }

    // const { message } = await res.json();
    // return {
    //   error: new Error(message)
    // };
  };
</script>

<script lang="ts">
  // import TodoItem from '$lib/todo-item.svelte';
  // import Ripple from '@smui/ripple';
  
  // export let todos: Todo[];

  // const title = 'Todo';

  // const processNewTodoResult = async (res: Response, form: HTMLFormElement) => {
  //   const newTodo = await res.json();
  //   todos = [...todos, newTodo];

  //   form.reset();
  // };

  // const processUpdatedTodoResult = async (res: Response) => {
  //   const updatedTodo = await res.json();
  //   todos = todos.map(t => {
  //     if (t.uid === updatedTodo.uid) return updatedTodo;
  //     return t;
  //   });
  // };
</script>

<style>
  .todos {
    width: 100%;
    max-width: 42rem;
    margin: 4rem auto 0 auto;
  }

  .new {
    margin: 0 0 0.5rem 0;
  }

  .new div {
    border-radius: 8px;
  }

  .new div input {
    font-size: 28px;
    width: 100%;
    padding: 0.5em 1em 0.3em 1em;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
  }

  .todos :global(input) {
    border: 1px solid transparent;
  }

  .todos :global(input:focus-visible) {
    outline: none;
  }
</style>

<!-- <svelte:head>
  <title>{title}</title>
</svelte:head> -->

<div class="todos">
  <h1>Hello Minmoong</h1>
  <!-- <h1>{title}</h1>

  <form action="/todos.json" method="post" class="new" use:enhance={{
    result: processNewTodoResult
  }}>
    <div use:Ripple={{ surface: true }}>
      <input type="text" name="text" aria-label="Add a todo" placeholder="+ type to add a todo" />
    </div>
  </form>
  
  {#each todos as todo}
    <TodoItem
      {todo}
      processDeletedTodoResult={() => {
        todos = todos.filter(t => t.uid !== todo.uid);
      }}
      {processUpdatedTodoResult}
    />
  {/each} -->
</div>
