import type { RequestEvent } from '@sveltejs/kit';
import PrismaClient from '$lib/prisma';

const prisma = new PrismaClient();

export const api = async (request: RequestEvent, data?: Record<string, unknown>) => {
  let todo = data as Todo;
  let body = {};
  let status = 500;

  switch (request.request.method.toUpperCase()) {
    case 'GET':
      console.log('prisma: ', prisma);
      body = await prisma.todo.findMany();
      status = 200;
      break;
    case 'POST':
      body = await prisma.todo.create({
        data: {
          created_at: todo.created_at,
          done: todo.done,
          text: todo.text
        }
      });
      status = 201;
      break;
    case 'DELETE':
      body = await prisma.todo.delete({
        where: {
          uid: request.params.uid
        }
      });
      status = 200;
      break;
    case 'PATCH':
      body = await prisma.todo.update({
        where: {
          uid: request.params.uid
        },
        data: {
          done: todo.done,
          text: todo.text
        }
      });
      status = 200;
      break;

    default:
      break;
  }

  if (request.request.method.toUpperCase() !== 'GET' &&
    request.request.headers.get('accept') !== 'application/json') {
    return {
      status: 303,
      headers: {
        location: '/'
      }
    };
  }

  return {
    status,
    body
  };
};