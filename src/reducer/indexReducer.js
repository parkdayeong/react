export const indexInitialState = {
  text: '인사',
  count: 0,
};

export const ACTION_TYPES = {
  CHANGE_TO_KOR: 'changeToKor',
  CHANGE_TO_ENG: 'changeToEng',
  MINUS_COUNT: 'minusCount',
  PLUS_COUNT: 'plusCount',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_TO_KOR:
      return { ...state, text: '안녕하세요' };
    case ACTION_TYPES.CHANGE_TO_ENG:
      return { ...state, text: 'hello' };
    case ACTION_TYPES.MINUS_COUNT:
      return { ...state, count: state.count - 1 };
    case ACTION_TYPES.PLUS_COUNT:
      return { ...state, count: state.count + 1 };
    default:
      throw new Error(`unhandled action type : ${action.type}`);
  }
};
