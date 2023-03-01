import { fromEvent, auditTime } from "rxjs";
import { map, tap } from "rxjs/operators";

const click$ = fromEvent<PointerEvent>(document, "click");

click$
  .pipe(
    map(({ x }) => x),
    tap((val) => console.log("tap", val)),
    auditTime(2000),
  )
  .subscribe(console.log);
