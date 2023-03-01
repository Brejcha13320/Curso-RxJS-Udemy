import { first, fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    tap<MouseEvent>(console.log),

    //Forma 1 Larga
    // map((event) => {
    //   return { clientY: event.clientY, clientX: event.clientX };
    // }),

    //Forma 2 Corta
    map(({ clientX, clientY }) => ({ clientY, clientX })),

    first((event) => event.clientY >= 150),
  )
  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("complete"),
  });
