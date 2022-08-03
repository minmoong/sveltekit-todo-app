<script>
  import TodoItem from '$lib/todo-item.svelte';
  import Ripple from '@smui/ripple';
  
  const title = 'Todo';
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

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="todos">
  <h1>{title}</h1>

  <form action="" method="" class="new">
    <div use:Ripple={{ surface: true }}>
      <input type="text" name="text" aria-label="Add a todo" placeholder="+ type to add a todo" />
    </div>
  </form>
  
  <TodoItem />
  <TodoItem />
  <TodoItem />
</div>
