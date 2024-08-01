export function CurrentTime() {
  const today = new Date();

  const dias = today.getDate();
  const horas = today.getHours();
  const minutos = today.getMinutes();
  const segundos = today.getSeconds();

  return { dias, horas, minutos, segundos };
}
