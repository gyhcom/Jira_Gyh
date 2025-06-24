import { Hono } from 'hono';
import {handle} from 'hono/vercel';

import auth from "@/features/auth/server/route";


const app = new Hono().basePath('/api')

const routes = app.route("/auth", auth);


export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
//app.get 과 .get은 동일한 기능을 합니다.