/** 1. Create a function that takes a student's score as a parameter.
 2. Declare and initialize the variable.
 3. Use `switch` statement inside the function.
 4. Return the corresponding grade.
 5. Call the function and print the result.*/


 let score=80;
 function studentScore(score){
    switch(true){
    case (score>=80 && score<=100):
        console.log("Grade A");
        break;

        case(score>=60 && score<80):
        console.log("Grade B");
        break;

            case(score>=40 && score<60) :
            console.log("Grade C");
            break;

            default:
                console.log("Grade D");
                break;

 }
 }

console.log(studentScore(score));
console.log(studentScore(75));