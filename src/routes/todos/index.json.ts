import type { RequestHandler } from '@sveltejs/kit';
import { api } from './_api';

export const GET: RequestHandler = (request) => {
  // console.log('Hi world');
  // return api(request);
  return {
    status: 200,
    body: "Hello Client!"
  }
};

export const POST: RequestHandler = async (request) => {
  const text = (await request.request.formData()).get('text') as string;
  return api(request, {
    created_at: new Date(),
    text,
    done: false
  });
};