import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";
const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    map(({ x, y }) => ({ x, y })),

    /**
     * Sin inclusive (default -> false), es decir no emite el elemento que rompe la condicion
     * pero si el complete
     */

    // takeWhile(({ y }) => y <= 150),

    /**
     * Con inclusive ( -> true), emite el valor que rompe la condicion y el complete
     */
    takeWhile(({ y }) => y <= 150, true),
  )
  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("complete"),
  });
