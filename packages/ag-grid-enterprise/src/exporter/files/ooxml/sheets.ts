import {ExcelOOXMLTemplate} from 'ag-grid-community';
import sheetFactory from './sheet';

const sheetsFactory: ExcelOOXMLTemplate = {
    getTemplate() {
        return {
            name: "sheets",
            children: [sheetFactory.getTemplate()]
        };
    }
};

export default sheetsFactory;