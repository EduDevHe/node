function fat(number) {
  if (number <= 1) return 1;

  return number * fat(number - 1);
}

function Box(key, otherBox = null) {
  this.key = key;
  this.otherBox = otherBox;
}

const box = new Box(false, new Box(false, new Box(false, new Box(true))));

console.log(box);
