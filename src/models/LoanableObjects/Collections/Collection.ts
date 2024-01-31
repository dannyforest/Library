import Book2 from "../../Book2";
import LoanableObject from "../loanableObject";

export enum TypeOfCollection {

    book,
    ebook,
    dvd,
    videoTaper,
    cd_Rom,
    voiceRecorders,
}

/**
 * @class Collection
 * @desc une collection, en bibliothèque signale une série d'ouvrages du même auteur, ou sur le
 * même thème. Une collection est, dans le domaine de l’édition, un ensemble de médias
 * publiés par une maison d'édition, regroupés autour de caractéristiques communes dans la présentation et
 * le domaine traité. À l'origine conçu pour les livres, le modèle s’applique également aux enregistrements
 * sonores, aux cassettes vidéo, aux DVD et aux CD-ROM.
 */
export default class Collection extends LoanableObject {
    private collectionName: string;
    private typeOfCollection: TypeOfCollection;
    private loanableObjects: LoanableObject[];


    constructor(id: string, collectionName: string, collectionAuthor: string, typeOfCollection: TypeOfCollection, loanableObjects?: LoanableObject[]) {
        super(id, collectionAuthor); // appel du constructeur de la classe mère (LoanableObject)

        this.collectionName = collectionName;
        this.typeOfCollection = typeOfCollection;

        this.loanableObjects = loanableObjects || []; // si pas de livres, on initialise la collection vide
    }

    /**
     * @method getCollectionSet
     * @return author name and collection name
     */
    getCollectionSet() {
        return `${this.author}${this.collectionName}}`
    }
}
