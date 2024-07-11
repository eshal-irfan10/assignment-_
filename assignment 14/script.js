// let name = [];
// console.log(name);
// let flower = ["Rose","Sun flower","Morning flower","Lily","Jasmine"] console.log(flower);
// let birthdate = [17,7,5,6,3];
// console.log(birthdate);
// let bool = [true, false];
// console.log(bool);
// let mixed = ["Eshal",17,true,false]
// console.log(mixed);

// let Array = ["SSC"," HSC"," BCS",  "BS", "BCOM", "MS", "M.Phil", "PhD"];
// document.write("<ol><li>SSC</li><li>HSC</li><li>BCS</li><li>BS</li><li>BCOM</li><li>MS</li><li>M.Phil</li><li>PhD</li></ol>")
// let student = ["Eshal","Izna","Umaima"];
// let score = [455,470,460];
// let total = 500;
// let percent1 = (score[0] / total ) * 100;
// let percent2 = (score[1] / total ) * 100;
// let percent3 = (score[2] / total ) * 100;
// document.write("Score of " + student[0] + " is " + score[0] + ". Percentage:" + percent1 + "%")
// document.write(" <br> Score of " +  student[1] + " is " + score[1] + ". Percentage:" +   percent2 + "%" )
// document.write(" <br> Score of " +  student[2] + " is "  + score[2] + ". Percentage:"  + percent3 + "%")

// for(let i = 0; i < 100; i++){
//     // console.log("Hello world");
// }
// for(let i=130; i > 10; i = i - 10){
//     console.log("Table of 10");
//     console.log(i);
// }










// let colors = ["Red", "Green", "Blue"];

// console.log("Initial Array:", colors);

// let colorToAddAtStart = prompt("Enter a color to add to the beginning:");
// colors.unshift(colorToAddAtStart);

// console.log("After adding at the beginning:", colors);

// let colorToAddAtEnd = prompt("Enter a color to add to the end:");
// colors.push(colorToAddAtEnd);

// console.log("After adding at the end:", colors);


// colors.unshift("Yellow", "Purple");

// console.log("After adding two more at the beginning:", colors);

// colors.shift();

// console.log("After deleting the first color:", colors);

// colors.pop();

// console.log("After deleting the last color:", colors);

// let indexToAdd = prompt("Enter the index where you want to add a color:");
// let colorToAdd = prompt("Enter the color you want to add at that index:");
// colors.splice(indexToAdd, 0, colorToAdd);


// console.log("After adding at index:", colors);


// let indexToDelete = prompt("Enter the index from which you want to delete colors:");
// let numberOfColorsToDelete = prompt("Enter the number of colors you want to delete:");
// colors.splice(indexToDelete, numberOfColorsToDelete);
// console.log("After deleting from index:", colors);

// let number = [320 , 230 , 480 , 120];
// document.write("The score of the students : " + number + '<br>'+ '<br>')
// number.sort()
// document.write("Odered score of students :" + number)

// let cities = ["Karachi","Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
// document.write("Cities list : "+ <br> + cities + "<br>");
// let selectedCities = []
// selectedCities = cities.slice(2, 4);
// // document.write("Selected Cities:" +<br>+ selectedCities);
// let Array = ["keyboard","Mouse","Printer","Moniter"];
// document.write("Devices : " + "<br>" + Array + "<br>" + "<br>");
// document.write("Out : " + "<br>" + "keyboard" + "<br>" + "<br>");
// document.write("Out : " + "<br>" + "Mouse" + "<br>" + "<br>");
// document.write("Out : " + "<br>" + "Printer" + "<br>");
// document.write("Out : " + "<br>" + "Moniter" + "<br>" + "<br>")
// let arrr = ["Moniter","Printer","Mouse","keyboard"];
// document.write("Devices : " + "<br>" + arrr + "<br>" + "<br>");
// document.write("Out : " + "<br>" + "Moniter" + "<br>" + "<br>");
// document.write("Out : " + "<br>" + "Printer" + "<br>" + "<br>");
// document.write("Out : " + "<br>" + "Mouse" + "<br>" + "<br>");
// document.write("Out : " + "<br>" + "keyboard" + "<br>" + "<br>");
// // let arr = ["This", "is", "my", "cat"];
// document.write("Array :" +<br> + arr +"<br>")
// let singleString = arr.join(" ")
// // document.write("String :"+<br>  + singleString);
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write('<select name="manufacturers">');

// for (var i = 0; i < manufacturers.length; i++) {
//     document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
// }
// document.write('</select>');