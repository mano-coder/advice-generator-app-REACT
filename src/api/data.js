export async function getData() {
  const link = "https://api.adviceslip.com/advice";
  const res = await fetch(`${link}?${Date.now()}`);
  return res.json();
}
