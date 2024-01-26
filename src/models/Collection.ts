/*une collection, en bibliothèque signale une série d'ouvrages du même auteur, ou sur le
même thème. Une collection est, dans le domaine de l’édition, un ensemble de médias
publiés par une maison d'édition, regroupés autour de caractéristiques communes dans la présentation et
le domaine traité. À l'origine conçu pour les livres, le modèle s’applique également aux enregistrements
sonores, aux cassettes vidéo, aux DVD et aux CD-ROM.


Methodes:
- methode pour qu'un livre face partie d'une collection
*/
import Book2 from "./Book2";

enum TypeOfCollection {

    book,
    ebook,
    dvd,
    videoTaper,
    cd_Rom,
    voiceRecorders,
}

enum WhereToGet {
    library,
    bookshop,
    onlineBookshop,
    onlineStore,
}

abstract class Collection {

    private collectionName: string;
    private collectionAuthor: string;
    private typeOfCollection: TypeOfCollection;
    private lonable: boolean;
    private whereToget: WhereToGet;


    constructor(collectionName: string, collectionAuthor: string, typeOfCollection: TypeOfCollection,
                lonable: boolean, whereToget: WhereToGet) {

        this.collectionAuthor = collectionAuthor;
        this.collectionName = collectionName;
        this.typeOfCollection = typeOfCollection;
        this.lonable = lonable;
        this.whereToget = whereToget;

    }

    // Méthode abstraite : (sans implémentation, mais sera implémentée dans la classe dérivée appropriée):
    // vérifier qu'une collection contient tous les livres

    abstract verifierCollection(): void;

    // Méthode abstraite: classer la collection sur les bookshelves

    abstract classerCollection()

    // Méthode concrète : enregistrer une collection

    getCollectionSet() {
        return `${this.collectionAuthor}${this.collectionName}}`
    }
}
