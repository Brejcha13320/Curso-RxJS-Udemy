import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("siguiente [next]: ", value),
  error: (error) => console.warn("error [obs]: ", error),
  complete: () => console.info("completado [obs]:"),
};

// const obs$ = Observable.create();
const obs$ = new Observable<string>((subs) => {
  subs.next("Hola");
  subs.next("Mundo");

  //Forzando error para activar el callback error en el subscribe
  //   const a = undefined;
  //   a.nombre = "Jesus";

  subs.complete();
});

//Subscribe normal de un observable
// obs$.subscribe((resp) => {
//   console.log(resp);
// });

//Subscribe a los 3 callbacks del observable next, error y complete
// obs$.subscribe(
//   (valor) => console.log("next", valor),
//   (error) => console.warn("error", error),
//   () => console.info("Completado"),
// );

//Subscribe con observer con los 3 callbacks
obs$.subscribe(observer);
