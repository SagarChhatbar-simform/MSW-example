import { http,HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/todos', () => {
    return HttpResponse.json([
      { id: 1, title: 'Learn MSW', completed: true },
      { id: 2, title: 'Build a React app', completed: true },
      { id: 3, title: 'install MSW into it', completed: false },
    ]);
  }),
];