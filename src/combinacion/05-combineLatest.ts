import { combineLatest, fromEvent, map, merge } from "rxjs";

// const keyup$ = fromEvent(document, "keyup");
// const click$ = fromEvent(document, "click");

// combineLatest(
//   keyup$.pipe(map((ev) => ev.type)),
//   click$.pipe(map((ev) => ev.type)),
// ).subscribe(console.log);

const input1 = document.createElement("input");
const input2 = document.createElement("input");
input1.placeholder = "email@gmail.com";
input2.placeholder = "*****";
input2.type = "password";
document.querySelector("body").append(input1, input2);

//Helper
const getInputStream = (ele: HTMLElement) =>
  fromEvent<KeyboardEvent>(ele, "keyup").pipe(map((ev) => ev["value"]));

combineLatest(getInputStream(input1), getInputStream(input2)).subscribe(
  console.log,
);
