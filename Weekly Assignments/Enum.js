/* 1. Create an enum named `Environment` with four values representing different stages of a
software development process: `LOCAL`, `DEVELOPMENT`, `STAGING`,
`PRODUCTION`.
2. Write a function named `runTests` that accepts an argument of type `Environment`. The
function should print a message indicating the environment against which the tests are
running.
3. The function `runTests` should be specified to return `void`, highlighting that it does not
return any data.
4. Include example calls to `runTests` using different enum values to demonstrate
the function's functionality. */
var Environment;
(function (Environment) {
    Environment["local"] = "Automation";
    Environment["development"] = "Playwright";
    Environment["Staging"] = "In-sprint Testing";
    Environment["Production"] = "Prod_Release";
})(Environment || (Environment = {}));
function runTests(envt) {
    console.log("This is for reason : ".concat(envt));
}
runTests(Environment.local);
runTests(Environment.development);
runTests(Environment.Staging);
runTests(Environment.Production);
