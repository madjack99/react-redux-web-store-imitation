const initialState = {
  books: [
    {
      id: 1,
      title: 'Production-ready microservices',
      author: 'Susan Fowler',
    },
    { id: 2, title: 'Release it!', author: 'Michael Nygard' },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
