var DropDownDataSources = (function () {
    function DropDownDataSources() {
    };
    DropDownDataSources.prototype.toolbarItems = function()
    {
        let items = [
            { prefixIcon: 'sf-icon-save tb-icons', tooltipText: 'Save Diagram',cssClass: 'tb-item-start tb-item-save' },
            { prefixIcon: 'sf-icon-open tb-icons', tooltipText: 'Open Diagram',cssClass: 'tb-item-middle tb-item-open' },
            { prefixIcon: 'sf-icon-print tb-icons', tooltipText: 'Print Diagram',cssClass: 'tb-item-middle tb-item-print' },
            { prefixIcon: 'sf-icon-export tb-icons', tooltipText: 'Export Diagram',cssClass: 'tb-item-end tb-item-export' },
                            { type: 'Separator' },
            { prefixIcon: 'sf-icon-undo tb-icons', tooltipText: 'Undo',cssClass: 'tb-item-start tb-item-undo' },
            { prefixIcon: 'sf-icon-redo tb-icons', tooltipText: 'Redo',cssClass: 'tb-item-end tb-item-redo' },
                            { type: 'Separator' },
            { tooltipText: 'Font Family',template: '<input type="text" id="fontFamilyBtn" style="width:100%;"/>',cssClass:'tb-item-start item-singleSelect'},
            { tooltipText: 'Font Size',template: '<button id="fontSizeBtn" style="width:100%;"></button>',cssClass:'tb-item-end item-singleSelect'},
                            { type: 'Separator' },
            { prefixIcon: 'sf-icon-bold tb-icons',tooltipText: 'Bold', cssClass:'tb-item-start item-singleSelect'},
            { prefixIcon: 'sf-icon-italic tb-icons', tooltipText: 'Italic', cssClass:'tb-item-middle item-singleSelect'},
            { prefixIcon: 'sf-icon-underline tb-icons', tooltipText: 'Underline', cssClass:'tb-item-end item-singleSelect' },
                        { type: 'Separator' },
            { prefixIcon: 'sf-icon-text tb-icons',template: '<input type="color" class="color-font" id="fontColorBtn" style="width:100%;"/>', tooltipText: 'Font Color',cssClass:'tb-item-start item-singleSelect'},
            { prefixIcon: 'sf-icon-fill tb-icons',template: '<input type="color" class="color-fill" id="fillColorBtn" style="width:100%;"/>', tooltipText: 'Fill Color',cssClass:'tb-item-middle item-singleSelectColor'},
            { prefixIcon: 'sf-icon-stroke tb-icons',template: '<input type="color" class="color-stroke" id="strokeColorBtn" style="width:100%;"/>', tooltipText: 'Stroke Color',cssClass:'tb-item-end item-singleSelectColor'},
                            { type: 'Separator' },
            { prefixIcon: 'sf-icon-pointer', tooltipText: 'Select Tool',cssClass:'tb-item-start tb-item-selected'},
            { prefixIcon: 'sf-icon-pan', tooltipText: 'Pan Tool',cssClass:'tb-item-middle'},
            { prefixIcon: 'db-overview', tooltipText: 'Overview',cssClass:'tb-item-end db-overview'}

        ];
        return items;
    };
    DropDownDataSources.prototype.fontFamilyList = function(){
        var items = [
            { text: 'Arial', value: 'Arial,Helvetica,sans-serif' },
            { text: 'Book Antiqua', value: 'Book Antiqua,Palatino Linotype,serif' },
            { text: 'Calibri', value: 'Calibri,Helvetica,sans-serif' },
            { text: 'Cambria', value: 'Cambria,Georgia,serif' },
            { text: 'Courier', value: 'Courier,monospace' },
            { text: 'Georgia', value: 'Georgia,serif' },
            { text: 'Segoe UI', value: 'Segoe UI,Helvetica,sans-serif' },
            { text: 'Times New Roman', value: 'Times New Roman,Times,serif' },
            { text: 'Trebuchet MS', value: 'Trebuchet MS,Helvetica,sans-serif' },
            { text: 'Verdana', value: 'Verdana,Geneva,sans-serif' },
        ];
        return items;
    };
    DropDownDataSources.prototype.fontSizeList = function(){
        var items = [
            { text: '8', value: '8pt' },
            { text: '9', value: '9pt' },
            { text: '10', value: '10pt' },
            { text: '11', value: '11pt' },
            { text: '12', value: '12pt' },
            { text: '14', value: '14pt' },
            { text: '16', value: '16pt' },
            { text: '18', value: '18pt' },
            { text: '20', value: '20pt' },
            { text: '22', value: '22pt' },
            { text: '24', value: '24pt' },
            { text: '26', value: '26pt' },
            { text: '28', value: '28pt' },
        ];
        return items;
    };
    DropDownDataSources.prototype.diagramRegions = function()
    {
        var diagramRegions = [
            { text: 'Content', value: 'Content' }, { text: 'PageSettings', value: 'PageSettings' }
        ];
        return diagramRegions;
    };
    DropDownDataSources.prototype.fileFormats = function()
    {
        var fileFormats = [
            { text: 'JPG', value: 'JPG' }, { text: 'PNG', value: 'PNG' },
            { text: 'SVG', value: 'SVG' }
        ];
        return fileFormats;
    };
    DropDownDataSources.prototype.getFileMenuItems = function()
    {
            var items = [
                { text: 'New', iconCss:'sf-icon-new' },
                { text: 'Open', iconCss:'sf-icon-open' },
                { separator: true },
                { text: 'Save', iconCss:'sf-icon-save' },
                { separator: true },
                { text: 'Export', iconCss:'sf-icon-export'},
                { text: 'Print', iconCss:'sf-icon-print' },
        
            ]
            return items;
    };
    DropDownDataSources.prototype.getDesignMenuItems = function()
    {
        var items = [
            { text: 'Orientation',iconCss: 'sf-icon-page_orientation',
            items:[
                { text: 'Landscape', iconCss: 'sf-icon-check-tick' },
                { text: 'Portrait', iconCss: '' }
            ]    
            },
            { text: 'Size', iconCss: 'em-icons e-copy',
            items:this.paperList1()
            },
        ]
        return items;
    };
    DropDownDataSources.prototype.getSelectMenuItems = function()
    {
        var items = [
            { text: 'Select All', iconCss: 'em-icons e-cut' },
            { text: 'Select All Nodes', iconCss: 'em-icons e-copy' },
            { text: 'Select All Connectors', iconCss: 'em-icons e-paste' },
            { text: 'Deselect All', iconCss: 'em-icons e-paste' }
        ]
        return items;
    };
    DropDownDataSources.prototype.getViewMenuItems = function()
    {
        var items = [
            { text: 'Show Lines',iconCss: ''},
            { text: 'Snap To Grid',iconCss : ''},
            { text: 'Snap To Object',iconCss : 'sf-icon-check-tick'},
            { text: 'Show Ruler',iconCss: 'sf-icon-check-tick'},
            { separator: true },
            { text: 'Fit To Width'},
            { text: 'Fit To Page'},
        ]
        return items;
    };
    DropDownDataSources.prototype.paperList1 = function()
    {
        var paperList1 = [
            { text: 'Letter (8.5 in x 11 in)', value: 'Letter',iconCss:'sf-icon-check-tick' }, { text: 'Legal (8.5 in x 14 in)', value: 'Legal' },
            { text: 'Tabloid (279 mm x 432 mm)', value: 'Tabloid' }, { text: 'A3 (297 mm x 420 mm)', value: 'A3' },
            { text: 'A4 (210 mm x 297 mm)', value: 'A4' }, { text: 'A5 (148 mm x 210 mm)', value: 'A5' },
            { text: 'A6 (105 mm x 148 mm)', value: 'A6' },
        ];
        return paperList1;
    };
    DropDownDataSources.prototype.pictureItems = function(){
        var items = [
            { text: 'Insert',  },
            { text: 'Change', },
            { text: 'Delete',  },
            { text: 'Show/Hide', },
        ];
        return items;
    };
    DropDownDataSources.prototype.shapeTemplatesItems = function(){
        var items = [
            {text: 'Image at top',  },
            {text: 'Image at left', },
            {text: 'No image'}
        ];
        return items;
    };
    DropDownDataSources.prototype.fieldsListItems = function(){
        var items = [
            {Name: 'Name',Code:'Name'},
            {Name: 'Employee ID',Code:'EID'  },
            {Name: 'Designation',Code:'Desig'},
            {Name: 'Team',Code:'Team'},
            {Name: 'Email ID',Code:'Email'},
            {Name: 'Phone Numebr',Code:'Phone'}
        ];
        return items;
    };
    DropDownDataSources.prototype.searchDropDownItems = function(){
        var items = [
            { text: 'Name', value: 'Name' },
            { text: 'Employee ID', value: 'Employee ID' },
            { text: 'Designation', value: 'Designation' },
            { text: 'Team', value: 'Team' },
            { text: 'Email ID', value: 'Email ID' },
            { text: 'Phone Number', value: 'Phone Number' }
        ];
        return items;
    };
    return DropDownDataSources;
}());    