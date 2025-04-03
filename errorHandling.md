#  Errors

Error = An Object that is created to represent a problem that occurs
             Occur often with user input or establishing a connection.

try { } = Encloses code that might potentially cause an error.
catch { } = Catch and handle any thrown Errors from try { }.
finally { } = (optional) Always executes. Used mostly for clean up.
              ex. close files, close connections, release resources


```js
try {
    console.log(notDefine);
} catch (error) {
    console.error(error);
} finally{
    console.log("I am finally");
}

/* Output:
notDefine is not defined
    at Object.<anonymous> (c:\Users\yuvraj singh\Documents\java script\index.js:11:17)
    at Module._compile (node:internal/modules/cjs/loader:1554:14)
    at Object..js (node:internal/modules/cjs/loader:1706:10)
    at Module.load (node:internal/modules/cjs/loader:1289:32)
    at Function._load (node:internal/modules/cjs/loader:1108:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
    at node:internal/main/run_main_module:36:49
I am finally
*/


try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));
    
    if(divisor == 0){
        throw new Error("You can't divide by zero!");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}
finally{
    console.log("This always executes");
}

console.log("You have reached the end!");
```