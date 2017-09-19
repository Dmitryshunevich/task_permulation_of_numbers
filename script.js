
var numberIsFound = false;

for(var a = 1; numberIsFound === false; a++){

    if (a > 1000000){
        break;
    }

    var x = a * 2;
    var y = a * 6;
    //var x = a;
    //var y = a * 2;

    if (a === 125874){
        console.log(a + "!!!");
    }


    var xString = x.toString();
    var yString = y.toString();

    var arrX = xString.split('');
    var arrY = yString.split('');

    console.log(xString + " " + yString);
    console.log(a);

    if (arrX.length === arrY.length) {
        if(CompareArrays(arrX, arrY) === true) {
            alert("Found number = " + a);
            numberIsFound = true;
            break;
        }
    }
}

function CompareArrays(arr1, arr2){

    var arrnumber = arr1.length;

    for (var a = 0;a <= arrnumber; a++){

        if (arr1.length > 0) {
            var foundedNumber = arr2.indexOf(arr1[a]);
            if (foundedNumber === -1){
                return false;
            } else {
                arr1.splice(a,1);
                arr2.splice(foundedNumber,1);
                a--;
                //delete arr1[a];
                //delete arr2[foundedNumber];
            }
        } else {
            return true;
        }
    }
}