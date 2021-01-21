// https://github.com/Shakil0000/Assignment





              // assignment:001

var kilometer;
function kilometerToMeter(kilometer){  // input in kilometer can not be less than zero
      if (kilometer>=0) {
          var meter=1000*kilometer;
          return meter;
      }
      else{
          console.log("Please inter a valid input");
      }
}
var result=kilometerToMeter(2.505);
console.log(result);











              // assignment:002
var watch,phone,laptop;
function budgetCalculator(watch,phone,laptop){
    if (watch>=0 && phone>=0 && laptop>=0 && watch%1==0 && phone%1==0 && laptop%1==0) {  // total number of watch or phone or laptope can not be a floating number or less than zero
        var totalTaka=(50*watch)+(100*phone)+(500*laptop);
        return totalTaka;
    } 
    else {
        console.log("Please inter a valid input");
    }
}
var result= budgetCalculator(0.0,10.0,0.0);
console.log(result);










                 // assignment:003

var totalDays;
function hotelCost(totalDays){
  if (totalDays>=0 && totalDays%1==0) {   // total number of days can not be a float number or less than zero
      var totalCost;
            if (totalDays>20) {
                totalCost=((totalDays-20)*50)+1800;
                return totalCost;
            }
            else if (totalDays>10) {
                totalCost=((totalDays-10)*80)+1000;
                return totalCost;
            }
            else if (totalDays<=10) {
                totalCost=100*totalDays;
                return totalCost;
            }
  } 

  else {
        console.log("Please inter a valid input");
  }
}
var result= hotelCost(21.00);
console.log(result);











               // assignment:004

var arrayName=[];
var interArray=["shakil","shamim","shahin","shakiazzaman","shuhel"];

function megaFriend(arrayName){
            if (arrayName.length > 0) {
              var nameLength=0;
              var maxLengthName=0;
              var indexOfMaxName=0;
                    for (var i = 0; i < arrayName.length; i++) {
                        nameLength=arrayName[i].length;
                        
                           if (nameLength>maxLengthName) {
                               maxLengthName=nameLength;
                               indexOfMaxName=i;
                           }
                        
                    }
                    return arrayName[indexOfMaxName];
            } 
            else {
                console.log("Please inter a valid input");
            }
}
var result=megaFriend(interArray);
console.log(result);