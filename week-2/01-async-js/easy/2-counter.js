// Without using setInterval, try to code a counter in Javascript.
// There is a hint at the bottom of the file if you get stuck.

function check(i){
    setTimeout(()=>{
        console.log(i);
        check(++i);
    }, 1000);
}

let i=1;
check(i);
