import { fromEvent, debounceTime, map, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { mergeAll, pluck } from "rxjs/operators";
import { GithubUser } from "../interfaces/github-user.interface";
import { GithubUsers } from "../interfaces/github-users.interface";
const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");
body.append(textInput, orderList);

//Helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {
  orderList.innerHTML = "";
  usuarios.forEach((usuario) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = usuario.avatar_url;

    const anchor = document.createElement("a");
    anchor.href = usuario.html_url;
    anchor.text = "Ver Página";
    anchor.target = "_blank";

    li.append(img);
    li.append(usuario.login + " ");
    li.append(anchor);
    orderList.append(li);
  });
};

//Streams
const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

input$
  .pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>((event) => event.target["value"]),
    map<string, Observable<GithubUsers>>((texto) =>
      ajax.getJSON(`https://api.github.com/search/users?q=${texto}`),
    ),
    mergeAll(),
    map<GithubUsers, GithubUser[]>((data) => data.items),
  )
  .subscribe((users) => {
    console.log(users);
    mostrarUsuarios(users);
  });
