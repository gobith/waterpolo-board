import { get, writable } from "svelte/store";

import { new_board } from "../domain/domain";

let b = new_board(7);
let c = new_board(5);

export const boards = writable([b , c , b , c , b , c , b , c, b]);
