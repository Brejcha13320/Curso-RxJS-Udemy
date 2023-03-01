import { interval, take, fromEvent } from "rxjs";
import { concatMap, switchMap } from "rxjs/operators";

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, "click");

click$
  .pipe(
    // switchMap(() => interval$),
    concatMap(() => interval$),
  )
  .subscribe(console.log);
