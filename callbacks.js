function getUser(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      name: "foo bar",
      dateOfBirth: new Date(),
    })
  }, 1000);
  
}

function getPhoneNumber(idUser) {
  
}

function getUserAddress(idUser) {

}

function resolveUser(error,user) {
  console.log("user",user);

}

getUser(resolveUser)
