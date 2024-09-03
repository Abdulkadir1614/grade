console.log("hello");

const grade = 90 ;

if(grade >= 90 || grade === 100){
    console.log("You got an A grade");
}
else if(grade >= 75 || grade === 90){
    console.log("You got an B grade");
}
else if(grade >= 60 || grade === 75){
    console.log("You got an C grade");
}
else if(grade < 60){
    console.log("You got an Failed ");
}
else {
    console.log("You grade is invalid");
}