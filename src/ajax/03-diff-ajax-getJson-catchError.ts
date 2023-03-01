import { ajax, AjaxError } from "rxjs/ajax";
import { of } from "rxjs";
import { catchError } from "rxjs/operators";

// const url = "https://api.github.com/users?per_page=5";
const url = "https://httpbin.orgxx/delay/1";

const manejaError = (err: AjaxError) => {
  console.warn("error :", err.message);
  return of({
    ok: false,
    usuarios: [],
  });
};

// const obs1$ = ajax.getJSON(url).pipe(catchError(manejaError));
// const obs2$ = ajax(url).pipe(catchError(manejaError));

const obs1$ = ajax.getJSON(url);
const obs2$ = ajax(url);

// obs1$.subscribe((data) => {
//   console.log("getJson:", data);
// });

// obs2$.subscribe((data) => {
//   console.log("ajax:", data);
// });

obs1$.pipe(catchError(manejaError)).subscribe({
  next: (val) => console.log("next:", val),
  error: (err) => console.log("error en subs:", err),
  complete: () => console.log("complete"),
});
