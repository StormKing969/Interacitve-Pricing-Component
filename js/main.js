const slider = $("#myRange");
const output = $("#output");
const btn = $(".myCheck");

slider.on("input", e => {
    let outputText = "$" + $(e.target).val() 
    output.html(outputText);
})
let count = 0;

$(".slider2").click(e => {
    if ($(this)) {
        count += 1
        if (count % 2 != 0) {
            $(".slider2").addClass("sliderChecked_bg");
        }
        else {
            $(".slider2").removeClass("sliderChecked_bg");
        }
    }
});