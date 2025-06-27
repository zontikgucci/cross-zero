const initialGameState = {
  field: Array(9).fill(''),
  player: 'X',
  isGameEnded: false,
  isDraw: false,
};

export const gameReducer = (state = initialGameState, { type, payload }) => {
  switch (type) {
    case 'RESET_GAME':
      return initialGameState;
    case 'SET_FIELD':
      return {
        ...state,
        field: payload,
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
        player: payload,
      };
    default:
      return state;
  }
};
