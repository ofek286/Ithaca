import IthacaCard from './IthacaCard'

type NextCard = number | null
type CardType = {right: NextCard, left: NextCard, down: NextCard} | IthacaCard

var MiniCards: { [cardId: number]: CardType } = {
    0: {
        right: 1,
        left: null,
        down: null
    },
    1: {
        right: 3,
        left: 2,
        down: null
    },
    2: {
        right: 14,
        left: null,
        down: null
    },
    3: {
        right: 9,
        left: null,
        down: null
    },
    4: {
        right: 15,
        left: 26,
        down: null
    },
    5: {
        right: 22,
        left: 27,
        down: null
    },
    6: {
        right: 8,
        left: 7,
        down: null
    },
    7: {
        right: null,
        left: null,
        down: null
    },
    8: {
        right: 16,
        left: null,
        down: null
    },
    9: {
        right: 6,
        left: 18,
        down: null
    },
    10: {
        right: 17,
        left: 26,
        down: null
    },
    11: {
        right: 21,
        left: null,
        down: null
    },
    12: {
        right: null,
        left: null,
        down: null
    },
    13: {
        right: 4,
        left: null,
        down: null
    },
    14: {
        right: 9,
        left: null,
        down: null
    },
    15: {
        right: 10,
        left: null,
        down: null
    },
    16: {
        right: 26,
        left: 21,
        down: 11
    },
    17: {
        right: null,
        left: null,
        down: null
    },
    18: {
        right: 5,
        left: 16,
        down: null
    },
    19: {
        right: 25,
        left: 26,
        down: null
    },
    20: {
        right: 7,
        left: null,
        down: null
    },
    21: {
        right: 13,
        left: null,
        down: null
    },
    22: {
        right: 24,
        left: null,
        down: null
    },
    23: {
        right: 19,
        left: 7,
        down: null
    },
    24: {
        right: 12,
        left: 20,
        down: null
    },
    25: {
        right: 7,
        left: null,
        down: null
    }
}

var Cards: { [cardId: number]: IthacaCard } = {}
Object.keys(MiniCards).forEach(function(key: string, index: number) {
    Cards[+key] = {
        ...MiniCards[+key],
        num: +key,
        img: `${key}.png`
    }
  })

export default Cards