export function forbiddenWordsMiddleware({ dispath }) {
  return function(next) {
    return function(action) {
      return next(action);
    };
  };
}
