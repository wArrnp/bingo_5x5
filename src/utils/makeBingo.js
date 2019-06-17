import generateRandom from "./generateRandom";

export function makeBingo() {
  const bingo = [...Array(25)].map((i, index) => index + 1);
  let index1 = 0,
    index2 = 0,
    temp = 0;
  for (let i = 0; i < 25; i++) {
    index1 = generateRandom();
    index2 = generateRandom();
    temp = bingo[index1];
    bingo[index1] = bingo[index2];
    bingo[index2] = temp;
  }
  return bingo;
}
