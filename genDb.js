const db = {
  loginUser: [],
  sample: [],
};

for (let i = 0; i < 5; i++) {
  db.loginUser.push({
    id: i,
    name: 'user' + i,
  });
}

for (let i = 0; i < 5; i++) {
  db.sample.push({
    id: i,
    name: 'sample' + i,
  });
}

console.log(JSON.stringify(db));
