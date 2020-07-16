function feetToMile(feet){

    //validation for text
    if(isNaN(feet)){
        return "enter a valid number for conversion!";
    }

    //validation negative number
    if(feet < 0){
        return "feet can't be a negative number!";
    }

    //calculation
    var miles = feet * 0.00018939;
    return miles;
}

function woodCalculator(noOfChair, noOfTable, noOfBed){

    //validation
    if(noOfChair < 0 || noOfTable < 0 || noOfBed < 0){
        return "input can't be negative!";
    }

    //main calculation
    var totalWood = noOfChair*100 + noOfTable*200 + noOfBed*900;

    return totalWood;
}

function brickCalculator(noOfFloor){

    if(isNaN(noOfFloor)){
        return "enter a valid floor number!";
    }

    //negative number validation
    if(noOfFloor < 1){
        return "floor number should be greater than zero!";
    }

    //main calculation
    var totalBrick = 0;

    for(var i = 1 ; i <= noOfFloor; i++){
        if(i <= 10){
            totalBrick += 15*1000;
        }else if(i <= 20){
            totalBrick += 12*900;
        }else{
            totalBrick += 10*800;
        }
    }

    return totalBrick;
}

function tinyFriend(friends) {

    //validation
    if(friends.length == 0){
        return "You have not entered any friend name!";
    }

    //find tiny friend
    var tinyFriendName = friends[0];

    for(var i = 0; i < friends.length; i++){
        if(friends[i].length < tinyFriendName.length){
            tinyFriendName = friends[i];
        }
    }

    return tinyFriendName;
}
