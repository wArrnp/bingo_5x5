export function checkBingo(board, index) {
  let bingoList = [];
  const verticalNumber = Math.floor(index / 5);
  const horizonNumber = index % 5;
  let cnt = 0,
    i = 0;
  for (i = index; i >= verticalNumber * 5; i--) {
    if (board[i].picked) {
      cnt++;
    } else {
      break;
    }
  }
  for (i = index + 1; i <= verticalNumber * 5 + 4; i++) {
    if (board[i].picked) {
      cnt++;
    } else {
      break;
    }
  }
  if (cnt === 5) {
    bingoList.push(
      [0, 1, 2, 3, 4].map(d => board[verticalNumber * 5 + d].number)
    );
  }
  cnt = 0;
  for (i = index; i >= 0; i -= 5) {
    if (board[i].picked) {
      cnt++;
    } else break;
  }
  for (i = index + 5; i < 25; i += 5) {
    if (board[i].picked) {
      cnt++;
    } else break;
  }
  if (cnt === 5) {
    bingoList.push(
      [0, 1, 2, 3, 4].map(d => board[horizonNumber + d * 5].number)
    );
  }

  cnt = 0;
  if (index % 6 === 0) {
    for (i = index; i >= 0; i -= 6) {
      if (board[i].picked) {
        cnt++;
      } else break;
    }
    for (i = index + 6; i < 25; i += 6) {
      if (board[i].picked) {
        cnt++;
      } else break;
    }

    if (cnt === 5) {
      bingoList.push([0, 1, 2, 3, 4].map(d => board[d * 6].number));
    }
  }
  cnt = 0;
  if (index % 4 === 0 && index < 21 && index > 3) {
    for (i = index; i >= 4; i -= 4) {
      if (board[i].picked) {
        cnt++;
      } else break;
    }
    for (i = index + 4; i < 21; i += 4) {
      if (board[i].picked) {
        cnt++;
      } else break;
    }

    if (cnt === 5) {
      bingoList.push([1, 2, 3, 4, 5].map(d => board[d * 4].number));
    }
  }
  return bingoList;
}
