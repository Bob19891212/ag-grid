import {ExcelOOXMLTemplate, XmlElement, _} from 'ag-grid-community';

const buildSharedString = (textNode: string): XmlElement => ({
    name: 'si',
    children: [{
        name: 't',
        textNode
    }]
});

const sharedStrings: ExcelOOXMLTemplate = {
    getTemplate(strings: string[]) {
        return {
            name: "sheets",
            children: _.map(strings, buildSharedString)
        };
    }
};

export default sharedStrings;