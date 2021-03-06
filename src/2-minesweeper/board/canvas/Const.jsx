
import orangeBackground from './../../images/orange.png';
import greyBackground from './../../images/grey.png';
import numberOne from './../../images/number1.png';
import numberTwo from './../../images/number2.png';
import numberThree from './../../images/number3.png';
import numberFour from './../../images/number4.png';
import numberFive from './../../images/number5.png';
import numberSix from './../../images/number6.png';
import numberSeven from './../../images/number7.png';
import numberEight from './../../images/number8.png';
import confetti from './../../images/confetti.png';
import bomb from './../../images/bomb.png';
import greenBackground from './../../images/green.jpg';
import redBackground from './../../images/red.jpg';

export const canvasSpecs = {
    canvasWidth: 500,
    canvasHeight: 500,
    color: {
        black: 0x000000,
        white: 0xFFFFFF
    }
}

export const boardDimensions = {
    verticalBarWidth: 1,
    horizontalBarHeight: 1,
    percentPlaceFill: 0.5,
}

export const placeImages = {
    covered: orangeBackground,
    empty: greyBackground,
    distanceOne: numberOne,
    distanceTwo: numberTwo,
    distanceThree: numberThree,
    distanceFour: numberFour,
    distanceFive: numberFive,
    distanceSix: numberSix,
    distanceSeven: numberSeven,
    distanceEight: numberEight,
    success: confetti,
    unsuccess: bomb,
    winBackground: greenBackground,
    loseBackground: redBackground,
}

export const placeTypes = {
    empty: 1,
    unsuccess: 2,
    number: 3
}

export const resultTypes = {
    progress: -1,
    win: 0,
    lose: 1
}

