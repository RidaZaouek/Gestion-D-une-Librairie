let books = [
    { id: 2, titre: "Clean Code", auteur: "Marijn Haverbeke", prix: 250, stock: 12 },
    { id: 3, titre: "You Don't Know JS", auteur: "Kyle Simpson", prix: 180, stock: 5 },
    { id: 1, titre: "Eloquent JavaScript", auteur: "Marijn Haverbeke", prix: 150, stock: 0 }
];
let maxid = 0;
for (let i = 0; i < books.length; i++) {
    if (maxid < books[i].id) {
        maxid = books[i].id
    }
}
function addBook(Titre, Auteur, Prix, Stock) {
    let book = {
        id: ++maxid,
        titre: Titre,
        auteur: Auteur,
        prix: Prix,
        stock: Stock
    }
    books.push(book);
}

function list() {
    for (let i = 0; i < books.length; i++) {
        console.log(books[i].id);
        console.log(books[i].titre);
        console.log(books[i].auteur);
        console.log(books[i].prix);
        console.log(books[i].stock);
        console.log("\n");
    }

}

addBook("LES ENTREPRISES", "AHMED SEFRIOUI", 250, 14);
addBook("LES VOITURES", "AHMED SEFRIOUI", 350, 15);
addBook("LES CERISES", "AHMED SEFRIOUI", 450, 16);
addBook("LES MONTAGNES", "AHMED SEFRIOUI", 500, 17);
addBook("LES AMIS", "AHMED SEFRIOUI", 550, 18);
addBook("LES FORETS", "AHMED SEFRIOUI", 600, 19);

function getBooksByAuthor(auteur){
   return books.filter(book=>book.auteur==auteur);

}


function valeurstock(){
    let somme=0;
    for(let i=0;i<books.length;i++){

        somme=somme+(books[i].prix*books[i].stock);
    }
    return somme;

}

function updatestock(id,newstock){
    for(let i=0;i<books.length;i++){
        if(id==books[i].id){

            books[i].stock=newstock;

            break;
        }
    }
}

function sortbyprice(){

    books.sort((BOOK1,BOOK2)=>BOOK1.prix-BOOK2.prix);
}