import type { RequestHandler } from '@sveltejs/kit';
import { api } from './_api';

export const GET: RequestHandler = (request) => {
  return api(request);
}

export const POST: RequestHandler = async (request) => {
  const text = (await request.request.formData()).get('text') as string;
  return api(request, {
    uid: `${Date.now()}`, // TODO: Replace with the UID from the database
    created_at: new Date(),
    text,
    done: false
  });
}