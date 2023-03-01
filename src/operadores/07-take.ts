import { of, take } from "rxjs";
import { tap } from "rxjs/operators";

const numeros$ = of(1, 2, 3, 4, 5);

numeros$
  .pipe(
    tap((val) => console.log("tap", val)),
    take(3),
  )
  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("complete"),
  });
