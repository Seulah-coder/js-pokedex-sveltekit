import { writable,derived, type Writable} from "svelte/store";
import type { IndexMonster } from "../routes/+page";
export const count = writable(0);
export const doubleCount = derived(count, (c) => c * 2);


export const caughtMonsters : Writable<IndexMonster[]> = writable([]);