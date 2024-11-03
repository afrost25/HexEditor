const editorElement = document.getElementById('editor');

const editorTable = document.createElement("table");
editorElement.appendChild(editorTable);

renderEditorHeader(editorTable);
renderEditorBody(editorTable);

function renderEditorHeader(editorTable)
{
    const editorHeader = document.createElement("thead");
    editorTable.appendChild(editorHeader);
    const editorHeaderRow = document.createElement("tr");
    editorHeader.appendChild(editorHeaderRow);

    const addressHeader = document.createElement("th");

    addressHeader.innerHTML = "Address";
    editorHeaderRow.appendChild(addressHeader);

    for(let addressOffset = 0; addressOffset < 16; addressOffset++)
    {
        const addressOffsetHeader = document.createElement("th");
        addressOffsetHeader.innerHTML = addressOffset.toString(16).toUpperCase();
        editorHeaderRow.appendChild(addressOffsetHeader);
    }
}

function renderEditorBody(editorTable)
{
    const editorBody = document.createElement("tbody");
    editorTable.appendChild(editorBody);

    const editorBodyRow = document.createElement("tr");
    editorBody.appendChild(editorBodyRow);

    const editorBodyRowData = document.createElement("td");
    editorBodyRowData.innerHTML = "0x00000000";
    editorBodyRow.appendChild(editorBodyRowData);
}