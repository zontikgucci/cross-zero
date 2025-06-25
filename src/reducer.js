const initialState = {
  initialFiled: Array(9).fill(''),
  currentPlayer: 'X',
  isGameEnded: false,
  isDraw: false,
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'RESET_GAME':
      return initialState;
    case 'SET_FIELD':
      return {
        ...state,
        initialFiled: payload,
      };
    case 'SET_GAME_ENDED':
      return {
        ...state,
        isGameEnded: payload,
      };
    case 'SET_IS_DRAW':
      return {
        ...state,
        isDraw: payload,
      };
    case 'SET_CURRENT_PLAYER':
      return {
        ...state,
        currentPlayer: payload,
      };
    default:
      return state;
  }
};
