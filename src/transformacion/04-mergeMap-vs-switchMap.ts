import { fromEvent, interval, mergeMap } from "rxjs";
import { switchMap } from "rxjs/operators";

const click$ = fromEvent(document, "click");
const interval$ = interval(1000);

click$
  .pipe(
    // mergeMap(() => interval$),
    switchMap(() => interval$),
  )
  .subscribe(console.log);
