import { from, reduce, scan } from "rxjs";
import { map } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

// const totalAcumulador = (acumulador: number, valorActual: number) => {
//   return acumulador + valorActual;
// };

const totalAcumulador = (acumulador: number, valorActual: number) =>
  acumulador + valorActual;

//Reduce
from(numbers).pipe(reduce(totalAcumulador, 0)).subscribe(console.log);

//Scan
from(numbers).pipe(scan(totalAcumulador, 0)).subscribe(console.log);

//Redux

interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}

const user: Usuario[] = [
  { id: "jdav", autenticado: false, token: null },
  { id: "jdav", autenticado: true, token: "abc" },
  { id: "jdav", autenticado: true, token: "abc123" },
];

const state$ = from(user).pipe(
  scan(
    (acumulador, actual) => {
      return { ...acumulador, ...actual };
    },
    { edad: 33 },
  ),
);

const id$ = state$.pipe(map((state: any) => state.id));

id$.subscribe(console.log);
