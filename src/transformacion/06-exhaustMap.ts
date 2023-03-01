import { interval, take, fromEvent } from "rxjs";
import { concatMap, exhaustMap, switchMap } from "rxjs/operators";

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, "click");

click$
  .pipe(
    // switchMap(() => interval$),
    // concatMap(() => interval$),
    exhaustMap(() => interval$),
  )
  .subscribe(console.log);
