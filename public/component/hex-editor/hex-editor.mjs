class HexEditor
{
    #offsetSize;
    #hexData;

    constructor()
    {
        this.#offsetSize = 16;
        this.#hexData = [];
        this.#initialize();
    }

    renderData(data)
    {
        this.#parseData(data);
        this.#renderBody();
    }

    #parseData(data)
    {
        for(let dataIndex = 0; dataIndex < data.length; dataIndex++)
        {
            let rowNum = Math.floor(dataIndex / this.#offsetSize);
            if(this.#hexData[rowNum] === undefined)
            {
                this.#hexData[rowNum] = [];
            }


            let colNum = dataIndex % this.#offsetSize;
            this.#hexData[rowNum] [colNum] = data[dataIndex].toString(16).padStart(2, '0').toUpperCase();
        }
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

        const addressHeader = document.createElement("th")
        addressHeader.id = "address-header";
        addressHeader.classList.add("address-column");
        addressHeader.innerHTML = "Address";
        editorHeaderRow.appendChild(addressHeader);

        for(let addressOffset = 0; addressOffset < this.#offsetSize; addressOffset++)
        {
            const addressOffsetHeader = document.createElement("th");
            addressOffsetHeader.classList.add("address-offset-header");
            addressOffsetHeader.classList.add("hex-data-column");
            addressOffsetHeader.innerHTML = addressOffset.toString(16).toUpperCase();
            editorHeaderRow.appendChild(addressOffsetHeader);
        }
    }

    #renderBody()
    {
        const editorBody = document.getElementById("editor-body");

        //Clear any child nodes during render if any
        editorBody.innerHTML = "";

        for(let row = 0; row < this.#hexData.length; row++)
        {
            const editorBodyRow = document.createElement("tr");
            editorBody.appendChild(editorBodyRow);

            let addressRow = (this.#offsetSize * row).toString(16).padStart(8, "0").toUpperCase();

            const addressData = document.createElement("td");
            addressData.classList.add("address-data");
            addressData.classList.add("address-column");
            addressData.innerHTML = addressRow;
            editorBodyRow.appendChild(addressData);

            for(let col = 0; col < this.#offsetSize; col++) {
                const hexData = document.createElement("td");
                hexData.classList.add("hex-data");
                hexData.classList.add("hex-data-column");
                hexData.contentEditable = "true";
                hexData.spellcheck = false;

                if (this.#hexData[row][col] !== undefined) {
                    hexData.innerHTML = this.#hexData[row][col];
                }

                editorBodyRow.appendChild(hexData);
            }
        }
    }
}

export default HexEditor;