import MainLayout from 'Frontend/views/MainLayout.js';
import { lazy } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

const TodoView = lazy(async () => import('Frontend/views/todo/TodoView.js'));

export const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    handle: { title: 'Main' },
    children: [{ path: '/', element: <TodoView />, handle: { title: 'Todo' } }],
  },
];

export default createBrowserRouter(routes);
