import type { RequestHandler } from '@sveltejs/kit';
import { api } from './_api';

export const DELETE: RequestHandler = (request) => {
  return api(request);
};

export const PATCH: RequestHandler = async (request) => {
  const formData = await request.request.formData()
  const text = formData.get('text') as string;
  const done = formData.has('done') ? !!formData.get('done') : undefined
  return api(request, {
    text,
    done
  });
};