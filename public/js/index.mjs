import HexEditor from "./component/hexEditor.mjs";
let editor = new HexEditor();

document.getElementById("uploadButton")
.addEventListener("click", () =>
{
    const fileInput = document.getElementById("fileInput");
    if(fileInput.files.length > 0)
    {
        const fileHandler = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = (event) =>
        {
            let intArray = new Uint8Array(event.target.result);
            editor.renderData(Array.from(intArray));
        };
        reader.onerror = () => alert('upload failed');
        reader.readAsArrayBuffer(fileHandler);
    }
});