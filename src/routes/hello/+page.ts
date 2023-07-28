import type { post } from '@prisma/client';
import type { PageLoad } from "../$types";

export const load: PageLoad =async ({fetch}) => {
    const response = await fetch('/api/posts')
    const posts : post[] = await response.json()
    return { posts }
}