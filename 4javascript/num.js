const ones = [" ", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = [" ", " ", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const hundreds = ["", "one-hundred", "two-hundred", "three-hundred", "four-hundred", "five-hundred",
    "six-hundred", "seven-hundred", "eight-hundred", "nine-hundred"];

let div1 = document.getElementById("div1");
let count = document.createElement("div")


for (let i = 1; i < ones.length; i++) {
    count = ones[i] + ", ";
    let result = document.createTextNode(count);
    div1.appendChild(result)
}

for (let tenplace = 2; tenplace < tens.length; tenplace++) {
    for (let oneplace = 0; oneplace < 10; oneplace++) {
        count = tens[tenplace] + "-" + ones[oneplace] + ", ";
        let result = document.createTextNode(count);
        div1.appendChild(result)
    }
}

for (let hundredplace = 0; hundredplace < hundreds.length; hundredplace++) {
    for (let tenplace = 0; tenplace < tens.length; tenplace++) {
        for (let oneplace = 0; oneplace < ones.length; oneplace++) {
            count = hundreds[hundredplace] + tens[tenplace] + ones[oneplace] + ", ";
            let result = document.createTextNode(count);
            div1.appendChild(result);
        }
    }
}


// Math.floor
// string