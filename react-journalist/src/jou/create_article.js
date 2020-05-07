var editorContent = document.querySelector(".editor");

export function execute(arg){
    document.execCommand(arg, false, '');
    if(arg == 'removeFormat'){
        document.execCommand("unlink", false, null);
    }
}

export function link() {
    var url = prompt("Enter the URL");
    if(!url.startsWith("http://www.")){url = "http://www." + url;}
    document.execCommand("createLink", false, url);
}

export function changeColor() {
    var color = prompt("Enter your color in hex ex:#f1f233");
    document.execCommand("foreColor", false, color);
}

export function getImage() {
    var file = document.querySelector("input[type=file]").files[0];
    var reader = new FileReader();
    let dataURI;
    reader.addEventListener("load", function() {
        dataURI = reader.result;
        const img = document.createElement("img");
        img.src = dataURI;
        editorContent.appendChild(img);
    } , false);
    if (file) { reader.readAsDataURL(file);}
}