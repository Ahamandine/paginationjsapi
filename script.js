// gutendex.com/books
var arrayBooks = [];
var page = 0;

function booksDisplay() {
    fetch('https://gutendex.com/books')
        .then(function (response) {
            return response.json();
        })

        .then(function (dataResponse) {
            console.log(dataResponse.results);

            dataResponse.results.forEach(function (bookPublication)
            {
                for (let i = 1; i <= 100; i++) {
                    bookListe= document.createElement("li");
                    bookListe.innerHTML += `${i} + ${bookPublication.title} + ", (" + ${bookPublication.authors[0].name} + ")"`;
                    arrayBooks.push(bookListe);
                }

                for (let i = 0; i < page + 20; i++) {
                    booksTitle = document.querySelector("ol");
                    booksTitle.appendChild(arrayBooks[i]);

                }

                let next = document.querySelector(".next");
                next.addEventListener('click', ()=> {
                    page == arrayBooks.length - 20 ? (page = 0) : (page +=10);
                    booksTitle.innerHTML = "";

                    for (let i = page; i < page + 20; i++){
                        booksTitle.appendChild(arrayBooks[i]);
                    }
                });

                let previous = document.querySelector(".previous");
                previous.addEventListener('click', ()=> {
                    page == 0 ? (page = arrayBooks.length - 20) : (page -=20);
                    booksTitle.innerHTML = "";

                    for (let i = page; i < page + 20; i++){
                        booksTitle.appendChild(arrayBooks[i]);
                    }
                })
                // booksTitle.append(bookListe)
                // bookAuthor = document.createElement("p");
                // bookAuthor.innerHTML += bookPublication.download_count;
                // booksTitle.append(bookAuthor);
                // console.log(bookAuthor);
                

                // for (let arrayBooks = 1; arrayBooks <= 100; i++) 
                // {
                //     let arrayBooks = bookListe;
                    
                //     console.log(arrayBooks);
                // }

                // for (let i = 0; i< page+ 10; i++){

                // }
            });
        });
    }

//                 if (bookPublication.download_count.length <= 9000) {

//                     return bookPublication.download_count.style.color = "red";
//                     } if (bookPublication.download_count.length <= 15000) {
//                         return bookPublication.download_count.style.color = "blue";
//                     }
//                     else {
//                         return bookPublication.download_count.style.color = "green";
//                     }
                    

                
                    
//             })

//         })
// }


document.addEventListener("readystatechange", booksDisplay);

