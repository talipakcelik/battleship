let randomStore = [];

function randomAttack(min, max, player) {
  const random1 = Math.floor(Math.random() * (max - min + 1)) + min;
  const random2 = Math.floor(Math.random() * (max - min + 1)) + min;

  const randomArray = [random1, random2];
  if (!randomStore.some(el => el[0] === random1 && el[1] === random2)) {
    randomStore.push(randomArray);
    player.attack(random1, random2);
  }
  return randomArray;
}

export { randomStore, randomAttack };
