import type { RequestHandler } from '@sveltejs/kit';
import { api } from './_api';

export const DELETE: RequestHandler = (request) => {
  return api(request);
}

export const PATCH: RequestHandler = async (request) => {
  const text = (await request.request.formData()).get('text') as string;
  return api(request, {
    text
  });
}