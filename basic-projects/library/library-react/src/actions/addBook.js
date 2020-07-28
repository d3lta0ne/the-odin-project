// Action Creator
export function addBook(book) {
  return {
    type: "ADD_BOOK",
    data: book,
  };
}
