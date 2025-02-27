let book = { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 };

let s  = "";
for (let key in book) {
    s  += `${key}: ${book[key]} `;
}
console.log(s);
