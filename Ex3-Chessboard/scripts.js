let size = 5;
let string = "";
let line = "";


// How do I know which character to start with?
// -- check if the loop iterationn is odd or even

// How do I know when to end the line?
// -- When line.length == size

// How do I know when enough lines have been printed?
// -- loop over size <-- Outer most loop.

// Loop order
// 1. loop for number of lines
// 2. if odd line, start with white, else start with black
// 3. while (line.length < size)
// 4. if line.length == size add linebreak and add line to string,
// else if line.length is odd, add white, else add black

for (let i = 1; i <= size; i++) {

	if (i % 2) { // when true it is even line
		for (let x = 0; x <= size; x++) {
			if (line.length == size) {
				line += "\n";
				string += line;
				line = "";
			} else if (line.length <= size && line.length % 2) { // when true it is an even character
				line += "#";
			} else {
				line += " ";
			}
		}
	} else { // if odd
		for (let x = 0; x <= size; x++) {
			if (line.length == size) {
				line += "\n";
				string += line;
				line = "";
			} else if (line.length <= size && line.length % 2) { // even
				line += " ";
			} else {
				line += "#";
			}
		}
	}
}
console.log("Chessboard of size " + size + "x" + size)
console.log(string);