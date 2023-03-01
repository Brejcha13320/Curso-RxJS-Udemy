import { fromEvent, tap, map, mergeMap, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, switchMap, exhaustMap } from "rxjs/operators";

//Helper
const peticionHttpLogin = (usersPass) => {
  return ajax.post("https://reqres.in/api/login?delay=1", usersPass).pipe(
    map((resp) => resp.response["token"]),
    catchError((err) => of("no hay token")),
  );
};

//Creando Formulario
const form = document.createElement("form");
const inputEmail = document.createElement("input");
const inputPass = document.createElement("input");
const submitBtn = document.createElement("button");

//Configuraciones
inputEmail.type = "email";
inputEmail.placeholder = "Email";
inputEmail.value = "eve.holt@reqres.in";

inputPass.type = "password";
inputPass.placeholder = "Password";
inputPass.value = "cityslicka";

submitBtn.innerHTML = "Ingresar";

form.append(inputEmail, inputPass, submitBtn);
document.querySelector("body").append(form);

//Stream
const submitForm$ = fromEvent(form, "submit").pipe(
  tap((ev) => ev.preventDefault()),
  map((ev) => ({ email: ev.target[0].value, password: ev.target[1].value })),
  // mergeMap(peticionHttpLogin), //Dispara peticion por cada click
  switchMap(peticionHttpLogin), //Solo dispara una peticion y si le da click cancela la anterior
  // exhaustMap(peticionHttpLogin), //Dipara las peticiones segun los click en cola
);

submitForm$.subscribe((token) => {
  console.log(token);
});
