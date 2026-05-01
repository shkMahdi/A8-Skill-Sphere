const URL = 'https://skill-sphere-mu.vercel.app/data.json';

export const getData = async () => {
  const res = (await fetch(URL));
  return res.json();
}

export const getCourseById = async (id) => {
    const courses = await getData();
    return courses.find((course) => course.id === Number(id));
}
