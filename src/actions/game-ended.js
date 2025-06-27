export const gameEnded = (isGameEnded) => {
  return {
    type: 'SET_GAME_ENDED',
    payload: isGameEnded,
  };
};
