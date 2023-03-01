import { range } from "rxjs";
import { tap, map } from "rxjs/operators";

const numeros$ = range(1, 5);
numeros$
  .pipe(
    tap((x) => console.log("tap", x)),
    map((val) => (val * 10).toString()),
    tap({
      next: (valor) => console.log("despues", valor),
      complete: () => console.log("se termino todo"),
    }),
  )
  .subscribe((val) => {
    console.log("subs", val);
  });
