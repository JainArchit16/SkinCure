
var loadFile = function(event) {
    
    var input = event.target;
    var file = input.files[0];
    var type = file.type;
    var getter=document.getElementById('dummy');
    getter.classList.add("hidden");

    var output = document.getElementById('preview_img');
    output.classList.remove("hidden");

    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
        URL.revokeObjectURL(output.src) // free memory
    }
};
