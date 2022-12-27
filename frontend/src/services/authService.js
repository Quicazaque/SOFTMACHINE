import { API_URL } from "./api";




export async function login(nombre, password) {
  const res = await fetch(API_URL+"/login", {
    method: "GET",
    headers: {
      nombre: nombre,
      password: password,
    },
  });
  if (!res.ok) return alert("No autorizado");
  
  const document = await res.json();
  return document.token;
}
