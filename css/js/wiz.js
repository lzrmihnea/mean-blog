function iFrameOn() {
    richTextField.document.designMode = 'On';
    main();
}

function iBold() { richTextField.document.execCommand("bold",false,null); }

function iUnderline(){ richTextField.document.execCommand("underline",false,null); }

function iItalic(){ richTextField.document.execCommand("italic",false,null); }

function iFontSize(){
    var size = prompt('Enter a size (1-7)','');
    richTextField.document.execCommand("FontSize",false,size);
}

function iForeColor() {
    var color = prompt('Define a basic color or choose a hex color value','');
    richTextField.document.execCommand("FontColor",false,color);
}

function iUnorderedList() { richTextField.document.execCommand("InsertOrderedList",false,null); }

function iOrderedList() { richTextField.document.execCommand("InsertUnorderedList",false,null); }

function iLink() {
    var linkURL = prompt("Enter URL:", "http://");
    richTextField.document.execCommand("CreateLink",false,linkURL);
}
function iUnlink() { richTextField.document.execCommand("Unlink",false,null); }

function iImage() {
    var imgSrc = prompt("EnterImageLocation", '');
    if(imgSrc!=null) {
        richTextField.document.execCommand("insertimage",false,imgSrc);
    }
}
function submitForm() {
    document.getElementById("blogPostBody").value = window.frames['richTextField'].document.body.innerHTML;
    document.getElementById("createPost").submit();
}

/**
 * I set up the listeners for dragging and dropping as well
 * as creating an iFrame for holding dragged in images
 * @returns {undefined}
 */
function main() {
    // The div that receives drops and the new iFrame
    // Source of experiment: http://jsfiddle.net/kWLcx/21/
    var sourceDivID="richTextField";
    var targetDivID="richTextField";
    var targetDiv = document.getElementById(sourceDivID);
    var iframe = document.createElement("iframe");

    // Set the iframe to a blank page
    iframe.src = "about:blank";

    // Append it to the target
    document.getElementById(targetDivID).appendChild(iframe);

    // Drag over is when an object is hovering over the div
    // e.preventDefault keeps the page from changing
    targetDiv.addEventListener("dragover", function (e) {
        e.preventDefault();
        this.className = "dropMe";
    }, false);

    // Drag leave is when the object leaves the div but isn't dropped
    targetDiv.addEventListener("dragleave", function (e) {
        e.preventDefault();
        this.className = "dropEnabled";
    }, false);

    // Drop is when the click is released
    targetDiv.addEventListener("drop", function (e) {
        e.preventDefault();
        this.className = "dropEnabled";
        loadFile(e.dataTransfer.files[0], iframe);
    }, false);

    document.getElementById("upload").addEventListener("click", function () {
        var file = document.getElementById("browsedFile").files[0];
        loadFile(file, iframe);
    }, false);
}

/**
 * Load a file and then put it on an ifrmae
 * @param {Element} f The file that needs to get loaded
 * @param {Element} destination The iframe that the file is appended to
 * @returns {undefined}
 */
function loadFile(f, destination) {
    // Make a file reader to interpret the file
    var reader = new FileReader();

    // When the reader is done reading,
    // Make a new image tag and append it to the iFrame
    reader.onload = function (event) {
        var newImage = document.createElement("img");
        newImage.src = event.target.result;
        destination.contentWindow.document.getElementsByTagName("body")[0].appendChild(newImage);
    };

    // Tell the reader to start reading asynchrounously
    reader.readAsDataURL(f);
}