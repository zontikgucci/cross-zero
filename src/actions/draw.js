export const draw = (isDraws) => {
  return {
    type: 'SET_IS_DRAW',
    payload: isDraws,
  };
};
