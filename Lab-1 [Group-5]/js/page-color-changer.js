document.addEventListener("DOMContentLoaded", function () {
    // Build and assign values to constants representing the input sliders and the webpage's body
    const redColorSlider = document.getElementById("red");
    const greenColorSlider = document.getElementById("green");
    const blueColorSlider = document.getElementById("blue");
    const pageBody = document.body;

    // Create event handlers for sliders
    redColorSlider.addEventListener("input", changeValuesOfRangeSliders);
    greenColorSlider.addEventListener("input", changeValuesOfRangeSliders);
    blueColorSlider.addEventListener("input", changeValuesOfRangeSliders);

    // Make a function to change the background color of webpage depending on the slider values
    function changeValuesOfRangeSliders() {
        // Retrieve values from the sliders
        const redColorValue = redColorSlider.value;
        const greenColorValue = greenColorSlider.value;
        const blueColorValue = blueColorSlider.value;

        // Modify the background color according to the slider values
        pageBody.style.backgroundColor = `rgb(${redColorValue}, ${greenColorValue}, ${blueColorValue})`;
    }
});
