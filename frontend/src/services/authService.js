export async function login(nombre, password) {
  const res = await fetch("http://localhost:8080/login", {
    headers: {
      nombre: nombre,
      password: password,
    },
  });
  if (res.ok) {
    const document = await res.json();
    return document;
  } else {
    alert("No autorizado");
  }
}
