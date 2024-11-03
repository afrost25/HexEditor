class HexEditor
{
    #offsetSize;
    #data;

    constructor()
    {
        this.#offsetSize = 16;
        this.#data = [];
        this.#initialize();
    }

    renderData(data)
    {
        this.#data = data;
        this.#renderBody();
    }

    #initialize()
    {
        const editorElement = document.getElementById("hex-editor");
        const editorTable = document.createElement("table");
        editorTable.id = "editor-table";
        editorElement.appendChild(editorTable);

        const editorHeader = document.createElement("thead");
        editorHeader.id = "editor-header";
        editorTable.appendChild(editorHeader);

        const editorBody = document.createElement("tbody");
        editorBody.id = "editor-body";
        editorTable.appendChild(editorBody);

        this.#renderHeader();
        this.#renderBody();
    }

    #renderHeader()
    {
        const editorHeader = document.getElementById('editor-header');

        //Clear any child nodes during render if any
        editorHeader.innerHTML = "";

        const editorHeaderRow = document.createElement("tr");
        editorHeader.appendChild(editorHeaderRow);

        const addressHeader = document.createElement("th");
        addressHeader.innerHTML = "Address";
        editorHeaderRow.appendChild(addressHeader);

        for(let addressOffset = 0; addressOffset < this.#offsetSize; addressOffset++)
        {
            const addressOffsetHeader = document.createElement("th");
            addressOffsetHeader.innerHTML = addressOffset.toString(16).toUpperCase();
            editorHeaderRow.appendChild(addressOffsetHeader);
        }
    }

    #renderBody()
    {
        const editorBody = document.getElementById("editor-body");

        //Clear any child nodes during render if any
        editorBody.innerHTML = "";

        let numRows = Math.ceil(this.#data.length / this.#offsetSize);
        let dataIndex = 0;

        for(let row = 0; row < numRows; row++)
        {
            const editorBodyRow = document.createElement("tr");
            editorBody.appendChild(editorBodyRow);

            let addressRow = "0x" + (this.#offsetSize * row).toString(16).padStart(8, "0").toUpperCase();

            const addressData = document.createElement("td");
            addressData.innerHTML = addressRow;
            editorBodyRow.appendChild(addressData);

            if(this.#data.length > 0)
            {
                do
                {
                    const hexData = document.createElement("td");
                    hexData.innerHTML = this.#data[dataIndex].toString(16).padStart(2, "0").toUpperCase();
                    editorBodyRow.appendChild(hexData);
                    dataIndex++;
                }
                while(dataIndex % 16 !== 0 && dataIndex < this.#data.length);
            }
        }
    }
}

export default HexEditor;