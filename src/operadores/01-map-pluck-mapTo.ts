import { range, fromEvent } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

range(1, 5)
  .pipe(
    //Recibe un number y emite un number
    map<number, number>((val) => {
      return val * 10;
    }),

    //Recibe un number y emite un string
    map<number, string>((val) => {
      return val.toString();
    }),
  )
  .subscribe((val) => {
    console.log(val);
  });

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

const keyupCode = keyup$
  .pipe(
    map((event) => {
      return event.code;
    }),
  )
  .subscribe((val) => {
    console.log("map", val);
  });

const keyupPluck$ = keyup$
  .pipe(
    //Un valor
    // pluck("key")

    //Un valor dentro de un objeto anidado
    pluck("target", "baseURI"),
  )
  .subscribe((val) => {
    console.log("pluck", val);
  });

const mapTo$ = keyup$
  .pipe(
    // mapTo("tecla precionada")),
    // mapTo(1),
    mapTo({ v: 1 }),
  )
  .subscribe((val) => {
    console.log("mapTo", val);
  });
