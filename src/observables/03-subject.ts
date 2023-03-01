import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("completado:"),
};

const intervalo$ = new Observable<number>((subs) => {
  const invervalId = setInterval(() => subs.next(Math.random()), 1000);
  return () => {
    clearInterval(invervalId);
    console.log("Intervalo Destriudo");
  };
});

/**
 * 1 - Casteo multiple (distribuye la misma informacion a todos los subscribers)
 * 2 - Tambien es un observer
 * 3 - Next, error y complete
 */
const subject$ = new Subject<number>();
const subscription = intervalo$.subscribe(subject$);

//Obtenemos valores diferentes por cada subscribe
// const subs1 = intervalo$.subscribe((rnd) => {
//   console.log("subs1: ", rnd);
// });
// const subs2 = intervalo$.subscribe((rnd) => {
//   console.log("subs2: ", rnd);
// });

//Obtenemos los vamos valores para la misma subscripcion
const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subscription.unsubscribe();
}, 3500);
