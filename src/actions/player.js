export const player = (currPlayer) => {
  return {
    type: 'SET_CURRENT_PLAYER',
    payload: currPlayer,
  };
};
