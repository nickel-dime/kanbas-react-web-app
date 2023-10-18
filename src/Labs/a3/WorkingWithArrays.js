function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2"];

    let variableArray1 = [
        functionScoped,
        blockScoped,
        constant1,
        numberArray1,
        stringArray1,
    ];

    return (
        <>
            <div>
                <h2>Working With Arrays</h2>
                numberArray1 = {numberArray1}
                <br />
                stringArray1 = {stringArray1}
                <br />
                variableArray1 = {variableArray1}
            </div>
            <ArrayIndexAndLength />
            <AddingAndRemovingDataToFromArrays />
            <ForLoops />
            <MapFunction />
            <JsonStringify />
            <FindFunction />
            <FindIndex />
            <FilterFunction />
            <TemplateLiterals />
        </>
    );
}

function ArrayIndexAndLength() {
    let numberArray1 = [1, 2, 3, 4, 5];
    const length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);
    return (
        <div>
            <h3>Array index and length</h3>
            length1 = {length1}
            <br />
            index1 = {index1}
        </div>
    );
}

function AddingAndRemovingDataToFromArrays() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2"];
    numberArray1.push(6); // adding new items
    stringArray1.push("string3");
    numberArray1.splice(2, 1); // remove 1 item starting at 2
    stringArray1.splice(1, 1);

    return (
        <div>
            <h3>Add and remove data to arrays</h3>
            numberArray1 = {numberArray1}
            <br />
            stringArray1 = {stringArray1}
        </div>
    );
}

function ForLoops() {
    let stringArray1 = ["string1", "string3"];
    let stringArray2 = [];
    for (let i = 0; i < stringArray1.length; i++) {
        const string1 = stringArray1[i];
        stringArray2.push(string1.toUpperCase());
    }

    return (
        <div>
            <h2>Looping through arrays</h2>
            stringArray2 = {stringArray2}
        </div>
    );
}

function MapFunction() {
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    const square = (a) => a * a;

    const squares = numberArray1.map(square);
    const cubes = numberArray1.map((a) => a * a * a);

    return (
        <div>
            <h3>Map</h3>
            squares = {squares}
            <br />
            cubes = {cubes}
        </div>
    );
}

function JsonStringify() {
    const squares = [1, 4, 16, 25, 36];

    return (
        <div>
            <h3>JSON Stringify</h3>
            squares = {JSON.stringify(squares)} <br />
        </div>
    );
}

function FindFunction() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2", "string3"];

    const four = numberArray1.find((a) => a === 4);
    const string3 = stringArray1.find((a) => a === "string3");

    return (
        <div>
            <h3>Find function</h3>
            four = {four}
            <br />
            string3 = {string3}
        </div>
    );
}

function FindIndex() {
    let numberArray1 = [1, 2, 4, 5, 6];
    let stringArray1 = ["string1", "string3"];

    const fourIndex = numberArray1.findIndex((a) => a === 4);
    const string3Index = stringArray1.findIndex((a) => a === "string3");

    return (
        <div>
            <h3>FindIndex function</h3>
            fourIndex = {fourIndex}
            <br />
            string3Index = {string3Index}
        </div>
    );
}

function FilterFunction() {
    let numberArray1 = [1, 2, 4, 5, 6];

    const numbersGreaterThan2 = numberArray1.filter((a) => a > 2);
    const evenNumbers = numberArray1.filter((a) => a % 2 === 0);
    const oddNumbers = numberArray1.filter((a) => a % 2 !== 0);

    return (
        <div>
            <h3>Filter function</h3>
            numbersGreaterThan2 = {numbersGreaterThan2}
            <br />
            evenNumbers = {evenNumbers}
            <br />
            oddNumbers = {oddNumbers}
        </div>
    );
}

function TemplateLiterals() {
    const five = 2 + 3;
    const result1 = "2 + 3 = " + five;
    console.log(result1);

    const result2 = `2 + 3 = ${2 + 3}`;
    console.log(result2);

    const username = "alice";
    const greeting1 = `Welcome home ${username}`;
    console.log(greeting1);

    const loggedIn = false;
    const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
    console.log(greeting2);

    return (
        <div>
            <h3>Template Literals</h3>
            result1 = {result1}
            <br />
            result2 = {result2}
            <br />
            greeting1 = {greeting1}
            <br />
            greeting2 = {greeting2}
        </div>
    );
}

export default WorkingWithArrays;
