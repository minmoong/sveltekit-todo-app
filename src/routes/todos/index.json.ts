import type { RequestHandler } from '@sveltejs/kit';

// TODO: Persist in database
let todos: Todo[] = [];

export const GET: RequestHandler = () => {
  return {
    status: 200,
    body: todos
  }
}

export const POST: RequestHandler = async ({ request }) => {
  const text = (await request.formData()).get('text') as string;
  todos.push({
    created_at: new Date(),
    text,
    done: false
  });

  return {
    status: 303,
    headers: {
      location: '/'
    }
  }
}