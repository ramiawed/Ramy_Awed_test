// inputs must be string contains number or dots
// inputs must not be null
function compareStrings(str1, str2) {
  // check for null and undefined value for the input
  if (str1 === null || str1 === undefined) {
    console.log("please input the first values");
    return;
  }

  if (str2 === null || str2 === undefined) {
    console.log("please input the second values");
    return;
  }

  // check if the inputs contains only number and dots
  const checkString1 = checkIfInputIsNumber(str1);
  const checkString2 = checkIfInputIsNumber(str2);

  if (!checkString1 || !checkString2) {
    console.log(
      "please enter a string that contains number and decimals for both inputs"
    );
    return;
  }

  if (checkString1 && checkString2) {
    // get all decimal as array for each input string
    const numArr1 = str1.split(".");
    const numArr2 = str2.split(".");

    const lengthDiff =
      numArr1.length > numArr2.length
        ? numArr1.length - numArr2.length
        : numArr2.length - numArr1.length;

    if (numArr1.length > numArr2.length) {
      for (let i = 0; i < lengthDiff; i++) {
        numArr2.push("0");
      }
    } else {
      for (let i = 0; i < lengthDiff; i++) {
        numArr1.push("0");
      }
    }

    for (let i = 0; i < numArr1.length; i++) {
      if (numArr1[i] * 1 > numArr2[i] * 1) {
        return 1;
      } else if (numArr1[i] * 1 < numArr2[i] * 1) {
        return -1;
      }
    }

    return 0;
  } else {
    throw new Error("Please enter a valid number");
  }
}

function checkIfInputIsNumber(str) {
  const decimals = /^[0-9]*([0-9]*|\.+)+$/;
  if (str.match(decimals)) {
    return true;
  }
  return false;
}

console.log(compareStrings("10.12.34.0.1", "10.12.34.0.1.0.0.0.0"));
