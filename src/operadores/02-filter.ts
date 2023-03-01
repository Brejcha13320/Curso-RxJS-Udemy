import { range, of, from, fromEvent } from "rxjs";
import { filter, map } from "rxjs/operators";

range(1, 10)
  .pipe(
    //Filter con el value
    // filter((val) => val % 2 === 1)

    //Filter con el value y el index
    filter((val, i) => {
      console.log("index", i);
      return val % 2 === 1;
    }),
  )
  .subscribe((val) => {
    console.log(val);
  });

interface Personaje {
  tipo: string;
  nombre: string;
}

const personajes: Personaje[] = [
  {
    tipo: "heroe",
    nombre: "Batman",
  },
  {
    tipo: "heroe",
    nombre: "Robin",
  },
  {
    tipo: "villano",
    nombre: "Joker",
  },
];

from(personajes)
  .pipe(filter((p) => p.tipo === "heroe"))
  .subscribe((heroe) => {
    console.log(heroe);
  });

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((event) => event.code),
  filter((key) => key === "Enter"),
);
keyup$.subscribe(console.log);
