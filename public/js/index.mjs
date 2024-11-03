import HexEditor from "./component/hexEditor.mjs";
let editor = new HexEditor();

document.getElementById("test")
.addEventListener("click", (e) =>
{
    const data = [255, 23, 1, 77, 69, 42, 8];
    editor.renderData(data);
});