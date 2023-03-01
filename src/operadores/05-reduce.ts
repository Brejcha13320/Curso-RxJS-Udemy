import { interval, reduce, take } from "rxjs";
import { tap } from "rxjs/operators";

//Recuder en Javascript
const numbers = [1, 2, 3, 4, 5];
const totalReducer = (acumulador: number, valorActual: number) => {
  return acumulador + valorActual;
};

//Inicia en 0
const total = numbers.reduce(totalReducer, 0);

//Inicial en 5
// const total = numbers.reduce(totalReducer, 5);

console.log("total arr", total);

interval(1000)
  .pipe(take(4), tap(console.log), reduce(totalReducer))
  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("complete"),
  });
