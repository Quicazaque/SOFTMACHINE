export async function login(nombre, password) {
  const res = await fetch("http://localhost:8080/login", {
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
