module.exports = function toReadable (number) {
    let tens;
    let tensOnes;
    let hunds;
    let hundsLast;
    let hundsAfterLast;
    let numberDivHund;
    let forTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let fromTwenty = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundred = ['hundred'];
    let result;
    
    if (number === 0) {
        return result = forTwenty[0];
    } else if (number < 20) {
        return result = forTwenty[number];
    } else if (number === 20) {
        return result = fromTwenty[2];
    } else if (number > 20 && number < 100) {
        tens = Math.floor(number / 10);
      tensOnes = number - (tens * 10);
      if (tensOnes == 0) {
          return result = fromTwenty[tens];
      } else {
           return result = fromTwenty[tens] + ' ' + forTwenty[tensOnes];
      }
    } else if (number % 100 == 0 ) {
        numberDivHund = number / 100;
        return result = forTwenty[numberDivHund] + ' ' + hundred[0];
    } else if (number > 100 && number <= 999) {
        hunds = Math.floor(number / 100);
      hundsLast = number - (hunds * 100);
      if (hundsLast < 20) {
          hundsAfterLast = forTwenty[hundsLast];
        return resultNot = forTwenty[hunds] + ' ' + hundred[0] + ' ' + hundsAfterLast;
      } else if (hundsLast == 20) {
          return resultMore = forTwenty[hunds] + ' ' + hundred[0] + ' ' + fromTwenty[2];
      } else if (hundsLast > 20) {
          if (hundsLast % 10 == 0) {
            return result = forTwenty[hunds] + ' ' + hundred[0] + ' ' + fromTwenty[hundsLast / 10];
        } else {
          tens = Math.floor(hundsLast / 10); 
          tensOnes = hundsLast - (tens * 10);
          return result = forTwenty[hunds] + ' ' + hundred[0] + ' ' + fromTwenty[tens] + ' ' + forTwenty[tensOnes];
        }
      }
    }    
}
