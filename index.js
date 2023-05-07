// code your solution here
function superbowlWin(arr){
    let winGame = arr.find(game => game.result === "W");
    if(winGame){
        return winGame.year;
    } else {
        return undefined;
    }

}
