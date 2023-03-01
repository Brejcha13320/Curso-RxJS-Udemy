import { debounceTime, fromEvent, map, distinctUntilChanged } from "rxjs";
import { pluck } from "rxjs/operators";

//Ejemplo 1
const click$ = fromEvent(document, "click");
click$.pipe(debounceTime(3000)).subscribe(console.log);

const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent<KeyboardEvent>(input, "keyup");
input$
  .pipe(debounceTime(1000), pluck("target", "value"), distinctUntilChanged())
  .subscribe(console.log);
