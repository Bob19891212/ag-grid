import {ExcelOOXMLTemplate} from 'ag-grid-community';

const sheetFactory: ExcelOOXMLTemplate = {
    getTemplate() {
        return {
            name: "sheet",
            properties: {
                rawMap: {
                    "name": "Sheet1",
                    "sheetId": "1",
                    "r:id": "rId1"
                }
            }
        };
    }
};

export default sheetFactory;