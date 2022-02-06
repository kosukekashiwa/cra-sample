const db = {
  loginUser: {
    id: 1,
    name: 'Login User',
  },
  sample: [],
};

for (let i = 0; i < 5; i++) {
  db.sample.push({
    id: i,
    name: 'hoge' + i,
  });
}

console.log(JSON.stringify(db));
