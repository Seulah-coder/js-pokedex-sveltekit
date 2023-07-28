// import type { PageLoad } from "../../../$types";

import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
    // throw new Error('Error!');

    throw error(404, {message: '404error!💣'});
};