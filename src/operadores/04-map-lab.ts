import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";
const texto = document.createElement("div");
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin arcu ac risus posuere, vel bibendum turpis molestie. Aliquam porta tempor tellus a dictum. Suspendisse id elementum erat. Suspendisse potenti. Duis eget eros risus. Praesent suscipit quis augue sit amet venenatis. Quisque volutpat metus vel auctor malesuada. Nullam non tristique neque, quis venenatis sapien. Aenean eu eros sit amet ipsum porttitor molestie. Integer eget nibh gravida libero gravida pulvinar. Cras ac lectus nisl. Vivamus commodo malesuada neque id hendrerit. Pellentesque vel accumsan ex.
<br><br>
Curabitur sollicitudin mauris et velit placerat, a ornare eros varius. Praesent laoreet neque et arcu suscipit rhoncus. Aenean vitae leo ut sem congue malesuada tristique quis enim. Suspendisse potenti. Duis lacus mi, malesuada id mollis at, interdum sed elit. Nulla eleifend venenatis elit, vel fringilla metus. Donec neque urna, mollis et odio et, luctus ornare orci. Duis diam nisl, tincidunt at venenatis eu, viverra sed tellus. Morbi nec eleifend nisl.
<br><br>
Nulla condimentum accumsan est eget aliquam. Sed ex ligula, luctus ut quam ac, faucibus volutpat nulla. Proin semper dignissim iaculis. Suspendisse non enim at elit pellentesque bibendum vitae ac est. Quisque laoreet vel diam eget imperdiet. Suspendisse a convallis diam. Quisque vehicula nibh quam, id tempus nisi malesuada vitae. Suspendisse potenti. Cras pellentesque ex dui, eu ultricies purus semper vel. Pellentesque iaculis posuere augue at mollis. Duis sed fermentum neque. Integer eget dapibus massa, vulputate volutpat lectus. Proin feugiat nec dui eu aliquam. Donec non urna lacus. Phasellus sit amet malesuada felis, ac congue elit.
<br><br>
Vivamus at dolor ut magna facilisis cursus. Quisque blandit rhoncus interdum. Etiam pharetra enim nec tellus interdum accumsan. Quisque molestie neque quis tempus eleifend. Aenean vehicula lorem odio, id tempus sem aliquam in. Ut cursus libero et pretium aliquet. Nullam porta mollis ligula sit amet laoreet. Sed nec sagittis sem. Pellentesque vel egestas risus. Maecenas porta justo dui, nec consequat nulla iaculis in. Morbi sit amet nisi augue. Phasellus porta erat dapibus auctor viverra. Donec accumsan bibendum erat, gravida scelerisque justo. Vivamus luctus, nibh et laoreet suscipit, est lorem placerat orci, mattis iaculis orci diam at sem. Quisque in euismod nulla, ac lobortis nibh.
<br><br>
Etiam dictum elit eu elit congue, bibendum vestibulum sapien gravida. Etiam et risus dictum, tempor enim nec, lobortis libero. In sed massa quis erat porta tristique vel ut tortor. Nullam fringilla pharetra nisl, ac pharetra mi euismod sodales. Vivamus lobortis risus massa, vitae semper magna imperdiet ac. Donec euismod et quam at aliquam. Vivamus quis aliquam leo. Nam nunc neque, semper at tristique a, aliquet at mi. Curabitur vitae sapien commodo justo aliquam viverra. Aenean ornare eros eu mauris tincidunt efficitur. Duis condimentum hendrerit laoreet. Morbi ac sem turpis. Donec libero nunc, tincidunt ultricies ultricies eu, tempus non tellus. Sed cursus erat at odio placerat, a cursus ipsum fermentum. Aliquam ultrices varius mattis. Phasellus aliquet augue eget euismod ornare.
`;

const body = document.querySelector("body");
body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

//Funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

//Streams
const scroll$ = fromEvent(document, "scroll");
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
  //Map normal
  // map((event) => calcularPorcentajeScroll(event)),

  //Map resumido
  map(calcularPorcentajeScroll),

  //Tap para ver el dato enviado
  tap(console.log),
);
progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
