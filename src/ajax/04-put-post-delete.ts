import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

// ajax
//   .put(
//     url,
//     {
//       id: 1,
//       nombre: "Jesus",
//     },
//     {
//       "mi-token": "ABC123",
//     },
//   )
//   .subscribe((resp) => {
//     console.log("resp", resp);
//   });

ajax({
  url: url,
  method: "DELETE",
  headers: {
    "mi-token": "ABC123",
  },
  body: {
    id: 1,
    nombre: "Jesus",
  },
}).subscribe((resp) => {
  console.log("resp", resp);
});
