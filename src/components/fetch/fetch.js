export const getBook = (title) => {
    const response =  fetch(`https://api.itbook.store/1.0/books/${title}`);
    const data =  response.json();
    return data;

}