const INITIAL_STATE = {
  id: '',
};

const selectedPill = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'MATRIX_PILL':
      return { ...state, id: action.payload }
    default:
      return state;
  }
};

export default selectedPill;
