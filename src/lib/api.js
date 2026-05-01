const URL = 'https://skill-sphere-mu.vercel.app/data.json';

export const getData = async () => {
  const res = (await fetch(URL));
  return res.json();
}
