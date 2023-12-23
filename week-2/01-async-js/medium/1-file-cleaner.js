// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

function myAsyncFn() {
  let p = new Promise(function (resolve) {
    fs.readFile("1-file-cleaner.md", "utf-8", function (err, data) {
      if (err) {
        throw err;
      } else {
        resolve(data);
      }
    });
  });
  return p;
}

function cleanerFn(fileContent) {
  let arr = fileContent.split(" ");
  let newArr = arr.filter(item=> item.length>0)
  return newArr.join(" ");
}

async function main() {
  let value = await myAsyncFn();
  let finalVal = cleanerFn(value);
  // overwrite in the samefile
  fs.writeFile('1-file-cleaner.md', finalVal, function(err){
    if(err){
        throw err;
    }
    else {
        console.log('File cleaner worked.')
    }
  });

 
}
main();
