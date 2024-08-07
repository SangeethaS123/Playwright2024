/** 
 Create two functions : launchBrowser, runTests where, 
    a) launchBrowser need to take input as browserName (string) and do not return any 
        - use if-else (chrome or otherwise) 
        - Print the value 
    b) runTests need to take input as testType (string) and do not return any  
        - use switch case (smoke, sanity, regression, default (smoke)) 
        - Print the values 
Call that function from the javascript 
*/

function launchBrowser(browserName) {
    if(browserName === "chrome") {
        console.log("The browser name is : "+browserName);
    } else {
        console.log("The browser name is : "+browserName);
    }
}
let browserName = 'edge';
launchBrowser(browserName);

function runTests(testType){
    

    switch(testType){
        case 'sanity':
            console.log("The test type is: " +testType);
            break;

            case 'Regression':
            console.log("The test type is: " +testType);
            break; 

            default:
                console.log("The test type is: Smoke");
                break;


    }
    

}
let testType="sanity";
runTests(testType);
runTests("Regression");
