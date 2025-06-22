import { Hono } from 'hono';
import {handle} from 'hono/vercel';

const app = new Hono().basePath('/api')
.get('/hello', (c) => {
  return c.text('Hello, world!');
})
.get("/project/:projectId", (c) => {
    const {projectId} = c.req.param();
    return c.json({project: projectId });
})

export const GET = handle(app);

//app.get 과 .get은 동일한 기능을 합니다.