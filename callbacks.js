/**
 * 0 get a user
 * 1 get a phone number of a user from your id
 * 2 get a address of a user from your id
 */

function getUser(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      name: "foo bar",
      dateOfBirth: new Date(),
    });
  }, 1000);
}

function getPhoneNumber(idUser, callback) {
  setTimeout(() => {
    return callback(null, {
      phone: "000000",
      dd: "00",
    });
  }, 2000);
}

function getUserAddress(idUser, callback) {
  setTimeout(() => {
    return callback(null, {
      endereco: "street a",
      n: "b",
    });
  }, 2000);
}

getUser((error, user) => {
  if (error) return console.log("erro ao obter o usuário");

  console.log(user);

  getPhoneNumber(user.id, (error, phone) => {
    if (error) return console.log("erro ao obter o telefone do usuário");
    console.log(phone);
    getUserAddress(user.id, (error, address) => {
      if (error) return console.log("erro ao obter o telefone do usuário");
      console.log(address);
    });
  });
});
