import { get, writable } from "svelte/store";

import { new_board } from "../domain/domain";

let b = new_board(7);
let c = new_board(5);

export const selected_board = writable(b);

export const boards = writable([b, b, b, b, b, b, b, b, b, b]);

export const resize = writable({
  height: window.innerHeight,
  width: window.innerWidth,
});

export const handle_resize = (event) => {
  resize.set({ height: window.innerHeight, width: window.innerWidth });
};
