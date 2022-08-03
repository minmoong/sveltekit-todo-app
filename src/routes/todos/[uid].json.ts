import type { RequestHandler } from '@sveltejs/kit';
import { api } from './_api';

export const DELETE: RequestHandler = (request) => {
  return api(request);
}