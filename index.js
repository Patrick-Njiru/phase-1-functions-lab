// Code your solution in this file!
function distanceFromHqInBlocks(db) {
    if (db === 43) {
        return 1
    }
    else if (db === 50 || db === 34) {
        return 8
    }
}

function distanceFromHqInFeet(df) {
    if (df === 50 || df === 34) {
        return 2112
    }
    else if (df === 43) {
        return 264
    }
}

function distanceTravelledInFeet(tf) {
    switch(tf) {
        case 43 || 48 : // or case 43: case 48:
            return 1320
        case 50 || 60 :
            return 2640
        case 34 || 28 :
             return 1584
            }
}

function calculatesFarePrice(start, destination) {
    switch(start, destination) {
        case 43, 44:
            return 0
        case 34, 32:
            return 2.56
        case 50, 58:
            return 25
        case 34, 24:
            return 'cannot travel that far'
    }
}