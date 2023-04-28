import IthacaCard from './IthacaCard'

const Cards: { [cardId: number]: IthacaCard} = {
    0: {
        num: 0,
        img: '0.jpg',
        right: 1,
        left: null
    },
    1: {
        num: 1,
        img: '1.jpg',
        right: 3,
        left: 2
    },
    2: {
        num: 2,
        img: '2.jpg',
        right: null, //14,
        left: null
    },
    3: {
        num: 3,
        img: '3.jpg',
        right: null, //9,
        left: null
    }
}

export default Cards