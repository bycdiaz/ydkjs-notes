const x = 1;

if (x) {
    // will run!
}

while (x) {
    // will run, once!
    x = false;
}

// are like

const x = 1;

if (x == true) {
    // will run!
}

while (x == true) {
    // will run, once!
    x = false;
}

// comparisons in if (or ternary statements )or while loops are coercive

// example using a string:
const x = "hello";

if (x) {
    // will run!
}

if (x == true) {
    // won't run :(
}

// is actually like

var x = "hello";

if (Boolean(x) == true) {
    // will run
}

// which is the same as:

if (Boolean(x) === true) {
    // will run
}

// before the comparision, coercion occurs.