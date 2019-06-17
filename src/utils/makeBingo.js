import generateRandom from "./generateRandom";

export function makeBingo(size) {
  const bingo = [...Array(size)].map((i, index) => index + 1);
  let index = 0,
    temp = 0;
  for (let i = 0; i < bingo.length; i++) {
    index = generateRandom();
    temp = bingo[index];
    bingo[index] = bingo[i];
    bingo[i] = temp;
  }
  return bingo;
}
