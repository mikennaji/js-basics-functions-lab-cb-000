// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  //returns the number of blocks given a value
  if (someValue<42){
    return(42-someValue);
  }
  else {

  return(someValue-42);
}
}



function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue)*264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(a,b){
  if (b>a){
    return((b-a)*264);
  }
  else
    return((a-b)*264);
}


function calculatesFarePrice(start,destination){
  let distance = distanceTravelledInFeet(start,destination);
  if (distance>=400 && distance<=2000){

  }
  else if(distance>=2000&& distance<=2000){

  }
  else{
    return "cannot travel that far";
  }
}
