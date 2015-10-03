function iFrameOn() {
    console.log('sssss');
    richTextField.document.designMode = 'On';
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
