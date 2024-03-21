// Code your solution in this file!
function distanceFromHqInBlocks(block){
    let hq = 42
    let blocks = Math.abs(block - hq)
    return blocks
}

function distanceFromHqInFeet(blockNo){
    let distanceFeet = distanceFromHqInBlocks(blockNo) * 264
    return distanceFeet
}

function distanceTravelledInFeet(pickupPoint, destination){
    let disInFeet = Math.abs((destination - pickupPoint))*264
    return disInFeet
}

function calculatesFarePrice(start, destination){
    let dis2InFeet = distanceTravelledInFeet(start, destination)
    let farePrice

    if(dis2InFeet <= 400){
        farePrice = 0
    }else if(dis2InFeet > 400 && dis2InFeet <= 2000){
        farePrice = ((dis2InFeet - 400)*2)/100
    }else if(dis2InFeet >2000 && dis2InFeet<=2500){
        farePrice = 25
    }else {
        farePrice = "cannot travel that far"
    }
    return farePrice
}
