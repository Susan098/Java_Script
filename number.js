function whichGreater(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log("number 1 is greater");
    }
    else if (num2 > num1 && num2 > num3) {
        console.log("number 2 is greater");
    }
    else {
        console.log("number 3 is greater");
    }
}

whichGreater(10, 20, 30);
