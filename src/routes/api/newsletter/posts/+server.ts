import type { RequestHandler } from "../$types";

import db from '$lib/database'
import { json } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
    const posts = await db.post.findMany()

    return json(posts);
};