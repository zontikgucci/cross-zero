export const updateField = (newField) => {
  return {
    type: 'SET_FIELD',
    payload: newField,
  };
};
