
/**
 * determineHeightAndThenDrawPyramid
 *
 * Determines the current value that the user has typed in the 'How high?' text-box,
 * and then draws a pyramid with that height.
 */
function determineHeightAndThenDrawPyramid() {

    // just so we know we're here
    console.log("someone invoked the determineHeightAndThenDrawPyramid function!");

    // TODO 3
    // figure out the height the user typed (replace the "5" below)
    heightStr = document.getElementById("height").value;

    // here we convert the string to an int
    height = parseInt(heightStr);

    // TODO 2
    // draw the pyramid with the given height
    drawPyramid(height);

}


// TODO 1
// hook up the button's click event to our determineHeightAndThenDrawPyramid function
document.getElementsByTagName("input")[0].addEventListener("input", determineHeightAndThenDrawPyramid);
document.querySelector(".symbol").addEventListener("change", determineHeightAndThenDrawPyramid);


/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
 function drawPyramid(height) {

     document.getElementById("pyramid").textContent = "";

     var symbol = document.querySelector(".symbol").value;


     for (var row = 0; row < height; row++) {

         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += "\xa0";
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += symbol;
         }

        textElem = document.createTextNode(rowStr);

        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        document.getElementById("pyramid").appendChild(rowElem);
    }
}
