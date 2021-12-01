const slider = $("#myRange");
const output = $("#output");

slider.on("input", e => {
    let outputText = "$" + $(e.target).val() 
    output.html(outputText);
})