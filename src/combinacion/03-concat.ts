import { concat, interval, take, of } from "rxjs";

const interval$ = interval(1000);

concat(interval$.pipe(take(3)), interval$.pipe(take(2)), of(10)).subscribe(
  console.log,
);
