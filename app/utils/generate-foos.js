export default function generateFoos() {
  let foos = [];

  for (let i = 0, l = 500; i < l; i++) {
    foos.push({
      id: i,
      name: `Foo ${i}`,
    });
  }

  return foos;
}
