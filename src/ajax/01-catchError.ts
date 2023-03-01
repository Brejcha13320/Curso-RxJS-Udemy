import { AjaxError, ajax } from "rxjs/ajax";
import { catchError, map, pluck } from "rxjs/operators";
import { of } from "rxjs";

const url = "https://api.github.com/users?per_page=5";

const manejaErrores = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const atrapaError = (err: AjaxError) => {
  console.warn("error :", err.message);
  return of([]);
};

const fetchPromesa = fetch(url);

// fetchPromesa
//   .then((resp) => resp.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.warn("error en usuario", err));

// fetchPromesa
//   .then(manejaErrores)
//   .then((resp) => resp.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.warn("error en usuario", err));

ajax(url)
  .pipe(
    // map((resp) => resp.response),
    pluck("response"),
    catchError(atrapaError),
  )
  .subscribe(console.log);
