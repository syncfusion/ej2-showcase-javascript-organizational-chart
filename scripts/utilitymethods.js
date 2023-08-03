var UtilityMethods = (function () {
    function UtilityMethods() {
    };
    // To execute toolbar click operation
    UtilityMethods.prototype.toolbarClick = function(args)
    {
        let item = args.item.tooltipText;
        switch(item)
        {
            case 'Save Diagram':
                this.download(diagram.saveDiagram());
                break;
            case 'Open Diagram':
                document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
                break;
            case 'Print Diagram':
                printDialog.show();
                break;
            case 'Export Diagram':
                exportDialog.show();
                break;
             case 'Undo':
                diagram.undo();
                break;
            case 'Redo':
                diagram.redo();
                break;
            case 'Bold':
                this.applyStyle('bold');
                break;
            case 'Italic':
                this.applyStyle('italic');
                break;
            case 'Underline':
                this.applyStyle('underline');
                break;
            case 'Select Tool':
                diagram.clearSelection();
                diagram.tool = ej.diagrams.DiagramTools.Default;
                break;
            case 'Pan Tool':
                diagram.clearSelection()
                diagram.tool = ej.diagrams.DiagramTools.ZoomPan;
                break;
            case 'Overview':
                let position = document.getElementById('overview-container').style.position;
                if(position === 'absolute'){
                    document.getElementById('overview-container').style.position = '';
                    document.getElementById('overview-container').style.zIndex = "-1";
                    args.item.cssClass = args.item.cssClass.replace('tb-item-selected','');
                }else{
                    document.getElementById('overview-container').style.position = "absolute";
                    document.getElementById('overview-container').style.zIndex = "1000";
                    args.item.cssClass += ' tb-item-selected';
                    let overview = document.getElementById('overview').ej2_instances[0];
                    overview.refresh();
                }
                break;
        }
        if (item === 'Select Tool' || item === 'Pan Tool') {
            if (args.item.cssClass.indexOf('tb-item-selected') === -1) {
                this.removeSelectedToolbarItem();
                args.item.cssClass += ' tb-item-selected';
            }
        }
        diagram.dataBind();
     };
     // To apply annotation style to selected Node.
     UtilityMethods.prototype.applyStyle = function (style) {
        let node = diagram.selectedItems.nodes[0];
        switch (style) {
            case 'bold':
                node.data.IsBold = !node.data.IsBold;
                break;
            case 'italic':
                node.data.IsItalic = !node.data.IsItalic;
                break;
            case 'underline':
                node.data.Decoration = node.data.Decoration === 'Underline' ? 'None' : 'Underline';
                break;
        };
        var args = {itemData:{text:style}};
        this.fontStyleChange(args);
     };
    // To Change font style of the selected node.
    UtilityMethods.prototype.fontStyleChange = function (args) {
        var type;
        var font = args.itemData.text;
        var node = diagram.selectedItems.nodes[0];
        if(args.value){
            type = 'fontSize';
            node.data.FontSize = font;
        }else if(args.itemData.text === 'bold'){
            type = 'bold';
        }else if(args.itemData.text === 'italic'){
            type = 'italic';
        }
        else if(args.itemData.text === 'underline'){
            type = 'underline';
        }
        else if(args.itemValue === 'fontColor'){
            type = 'fontColor';
            node.data.color = font;
        }
        else{
            type = 'fontFamily';
            node.data.FontFamily = font;
        }
        var name = document.getElementById(node.id + '_text1_text');
        if (name) {
          if (type === 'fontSize') {
            name.style.fontSize = font;
          } else if (type === 'bold') {
            name.style.fontWeight = node.data.IsBold ? 'bold' : 'normal';
          } else if (type === 'italic') {
            name.style.fontStyle = node.data.IsItalic ? 'italic' : 'normal';
          } else if (type === 'underline') {
            name.style.textDecoration = node.data.Decoration;
          } else if (type === 'fontColor') {
            name.style.fill = font;
          } else {
            name.style.fontFamily = font;
          }
        }
        
        var desig = document.getElementById(node.id+ '_desig_text');
        if(desig){
            if(type === 'fontSize'){
                desig.style.fontSize = font;
            }else if(type === 'bold'){
                desig.style.fontWeight = node.data.IsBold ? 'bold' : 'normal';
            }
            else if(type === 'italic'){
                desig.style.fontStyle = node.data.IsItalic ? 'italic' : 'normal';
            }
            else if(type === 'underline'){
                desig.style.textDecoration = node.data.Decoration;
            }
            else if(type === 'fontColor'){
                desig.style.fill = font;
            }
            else{
                desig.style.fontFamily = font;
            }
        }
        var team = document.getElementById(node.id+ '_team_text');
        if(team){
            if(type === 'fontSize'){
                team.style.fontSize = font;
            }
            else if(type === 'bold'){
                team.style.fontWeight = node.data.IsBold ? 'bold' : 'normal';
            }
            else if(type === 'italic'){
                team.style.fontStyle = node.data.IsItalic ? 'italic' : 'normal';
            }
            else if(type === 'underline'){
                team.style.textDecoration = node.data.Decoration;
            }
            else if(type === 'fontColor'){
                team.style.fill = font;
            }
            else{
                team.style.fontFamily = font;
            }
        }
        var email = document.getElementById(node.id+ '_email_text');
        if(email){
            if(type === 'fontSize'){
                email.style.fontSize = font;
            }
            else if(type === 'bold'){
                email.style.fontWeight = node.data.IsBold ? 'bold' : 'normal';
            }
            else if(type === 'italic'){
                email.style.fontStyle = node.data.IsItalic ? 'italic' : 'normal';
            }
            else if(type === 'underline'){
                email.style.textDecoration = node.data.Decoration;
            }
            else if(type === 'fontColor'){
                email.style.fill = font;
            }
            else{
                email.style.fontFamily = font;
            }
        }
        var phone = document.getElementById(node.id+ '_phone_text');
        if(phone){
            if(type === 'fontSize'){
                phone.style.fontSize = font;
            }
            else if(type === 'bold'){
                phone.style.fontWeight = node.data.IsBold ? 'bold' : 'normal';
            }
            else if(type === 'italic'){
                phone.style.fontStyle = node.data.IsItalic ? 'italic' : 'normal';
            }
            else if(type === 'underline'){
                phone.style.textDecoration = node.data.Decoration;
            }
            else if(type === 'fontColor'){
                phone.style.fill = font;
            }
            else{
                phone.style.fontFamily = font;
            }
        }
        var employeeID = document.getElementById(node.id+ '_eid_text');
        if(employeeID){
            if(type === 'fontSize'){
                employeeID.style.fontSize = font;
            }
            else if(type === 'bold'){
                employeeID.style.fontWeight = node.data.IsBold ? 'bold' : 'normal';
            }
            else if(type === 'italic'){
                employeeID.style.fontStyle = node.data.IsItalic ? 'italic' : 'normal';
            }
            else if(type === 'underline'){
                employeeID.style.textDecoration = node.data.Decoration;
            }
            else if(type === 'fontColor'){
                employeeID.style.fill = font;
            }
            else{
                employeeID.style.fontFamily = font;
            }
        }
        
    };
    // To Change font color of the selected node.
    UtilityMethods.prototype.fontColorChange = function (args) {
        var parameter = { itemData:{text:args.value},itemValue:'fontColor'};
        this.fontStyleChange(parameter);
    };
    // To Change fill color of the selected node.
    UtilityMethods.prototype.fillColorChange = function (args) {
        var fillColor = args.value;
        for(var i=0;i<diagram.selectedItems.nodes.length;i++){
            let outerContainer = document.getElementById(diagram.selectedItems.nodes[i].id+'_outerstack');
            outerContainer.style.fill = fillColor;
            diagram.selectedItems.nodes[i].addInfo.fill = fillColor;
            diagram.selectedItems.nodes[i].data.Fill = fillColor;
        }
        diagram.dataBind();
    };
    // To Change stroke color of the selected node.
    UtilityMethods.prototype.strokeColorChange = function (args) {
        var strokeColor = args.value;
        for(var i=0;i<diagram.selectedItems.nodes.length;i++){
            let outerContainer = document.getElementById(diagram.selectedItems.nodes[i].id+'_outerstack');
            outerContainer.style.stroke = strokeColor;
            diagram.selectedItems.nodes[i].data.StrokeColor = strokeColor;
        }
        diagram.dataBind();

    };
    // To get the buutons for the dialog.
    UtilityMethods.prototype.getDialogButtons = function(dialogType)
    {
        var buttons= [];
        switch (dialogType) {
            case 'export':
                buttons.push({
                    click: this.btnExportClick.bind(this), buttonModel: { content: 'Export', cssClass: 'e-flat e-db-primary', isPrimary: true }
                });
                break;
            case 'print':
                buttons.push({
                    click: this.btnPrintClick.bind(this),
                    buttonModel: { content: 'Print', cssClass: 'e-flat e-db-primary', isPrimary: true }
                });
                break;
            case 'editNode':
                buttons.push({
                    click: this.btnEditNodeClick.bind(this),
                    buttonModel: { content: 'Apply', cssClass: 'e-flat e-db-primary', isPrimary: true }
                });
                break;
            case 'search':
                buttons.push({
                    click: this.btnSearchClick.bind(this),
                    buttonModel: { cssClass: 'e-flat e-db-primary',iconCss:'e-icons e-search',isPrimary: true }
                },{
                    click: this.btnPrevClick.bind(this),
                    buttonModel: { content: '&#171; Previous', cssClass: 'e-flat e-db-primary', isPrimary: true ,fontSize:20}
                },{
                    click: this.btnNextClick.bind(this),
                    buttonModel: { content: 'Next &#187;', cssClass: 'e-flat e-db-primary', isPrimary: true }
                });
                break; 
        }
        if(dialogType !== 'search'){
            buttons.push({
                click: this.btnCancelClick.bind(this),
                buttonModel: { content: 'Cancel', cssClass: 'e-flat',isPrimary:true }
            });
        }
        return buttons;
    };
    // To search the nodes in diagram
    UtilityMethods.prototype.btnSearchClick = function(args){
        const selectedValue = document.getElementById('searchDropDown').value; 
        const searchText = document.getElementById('searchBox').value.replace(/\s+/g, '').toLowerCase(); 
        matchingNodes = [];
        currentIndex = 0;
        diagram.clearSelection();
        const searchWords = searchText.split(/\s+/); // Split the searchText into individual words
        const searchRegex = new RegExp(searchWords.map(word => `\\b${word}\\b`).join('.*'), 'i'); // Create a regular expression with 'i' flag to ignore case and match all words
      
        matchingNodes = diagram.nodes.filter(node => {
          if (selectedValue === 'Name' && searchRegex.test(node.data.Name.replace(/\s+/g, '').toLowerCase())) {
            return true;
          } else if (selectedValue === 'Employee ID' && searchRegex.test(node.data.EmployeeID.replace(/\s+/g, '').toLowerCase())) {
            return true;
          } else if (selectedValue === 'Designation' && searchRegex.test(node.data.Designation.replace(/\s+/g, '').toLowerCase())) {
            return true;
          } else if (selectedValue === 'Team' && searchRegex.test(node.data.Team.replace(/\s+/g, '').toLowerCase())) {
            return true;
          } else if (selectedValue === 'Email ID' && searchRegex.test(node.data.EmailId.replace(/\s+/g, '').toLowerCase())) {
            return true;
          } else if (selectedValue === 'Phone Number' && searchRegex.test(node.data.PhoneNumber.replace(/\s+/g, '').toLowerCase())) {
            return true;
          } else {
            return false;
          }
        });
            diagram.select([matchingNodes[currentIndex]]);
    };
    UtilityMethods.prototype.btnNextClick = function(args){
        if(matchingNodes.length > 0){
            currentIndex = (currentIndex + 1) % matchingNodes.length; 
            diagram.select([matchingNodes[currentIndex]]);
        }
    };
    UtilityMethods.prototype.btnPrevClick = function(args){
        if(matchingNodes.length > 0){
            currentIndex = (currentIndex - 1 + matchingNodes.length) % matchingNodes.length; 
            diagram.select([matchingNodes[currentIndex]]);
        }
    };
    // To get cancel button for dialog
    UtilityMethods.prototype.btnCancelClick = function(args)
    {
        var ss = args.target;
        var key = ss.offsetParent.id;
        switch (key) {
            case 'exportDialog':
                exportDialog.hide();
                break;
            case 'printDialog':
                printDialog.hide();
                break;
            case 'editNodeDialog':
                editNodeDialog.hide();
                break;
        }
    };
    UtilityMethods.prototype.btnEditNodeClick = function () {
        var node = diagram.selectedItems.nodes[0];
        let name = document.getElementById('nodeName');
        let designation = document.getElementById('nodeRole');
        let employeeID = document.getElementById('nodeEmployeeID');
        let team = document.getElementById('nodeTeam');
        let email = document.getElementById('nodeEmail');
        let phoneNo = document.getElementById('nodePhoneNumber');
        node.data.Name = name.value;
        var nameText = document.getElementById(node.id + '_text1_text');
        if(nameText){
            nameText.textContent = name.value;
        }
        node.data.Designation = designation.value;
        var desigText = document.getElementById(node.id + '_desig_text');
        if(desigText){
            desigText.textContent = designation.value;
        }
        node.data.EmployeeID = employeeID.value;
        var eidText = document.getElementById(node.id + '_eid_text');
        if(eidText){
            eidText.textContent = employeeID.value;
        }
        node.data.Team = team.value;
        var teamText = document.getElementById(node.id + '_team_text');
        if(teamText){
            teamText.textContent = team.value;
        }
        node.data.EmailId = email.value;
        var emailText = document.getElementById(node.id + '_email_text');
        if(emailText){
            emailText.textContent = email.value;
        }
        node.data.PhoneNumber = phoneNo.value;
        var phoneText = document.getElementById(node.id + '_phone_text');
        if(phoneText){
            phoneText.textContent = phoneNo.value;
        }
        node.tooltip.content = getContent(node.data);
        editNodeDialog.hide();
    };
    UtilityMethods.prototype.btnPrintClick = function () {
        let options = {};
        options.region = document.getElementById("printRegionDropdown").ej2_instances[0].value;
        options.multiplePage = document.getElementById("printScaleToFit").ej2_instances[0].checked;
        diagram.print(options);
        printDialog.hide();
    };
    UtilityMethods.prototype.btnExportClick = function () {
        diagram.exportDiagram({
            fileName: document.getElementById("exportfileName").value,
            format: document.getElementById("exportFormat").value,
            mode:'Download'
        });
        exportDialog.hide();
    };
     // To download diagram json.
     UtilityMethods.prototype.download = function(data)
     {
         if (window.navigator.msSaveBlob) {
             var blob = new Blob([data], { type: 'data:text/json;charset=utf-8,' });
             window.navigator.msSaveOrOpenBlob(blob, 'Diagram.json');
         }
         else {
             var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(data);
             var a = document.createElement('a');
             a.href = dataStr;
             a.download = document.getElementById('diagramName') ? document.getElementById('diagramName').innerHTML+'.json':'Diagram.json';
             document.body.appendChild(a);
             a.click();
             a.remove();
         }
     };
     // To remove toolbar selected item
    UtilityMethods.prototype.removeSelectedToolbarItem = function()
    {
        for (var i = 0; i < toolbarObj.items.length; i++) {
            var item = toolbarObj.items[i];
            if (item.cssClass.indexOf('tb-item-selected') !== -1 && item.tooltipText !=='Overview') {
                item.cssClass = item.cssClass.replace(' tb-item-selected', '');
            }
        }
        toolbarObj.dataBind();
    };
     // To update page paper size
     UtilityMethods.prototype.paperListChange = function(args)
     {
         var value = args.value || args.item.value;
         var paperSize = this.getPaperSize(value);
         var pageWidth = paperSize.pageWidth;
         var pageHeight = paperSize.pageHeight;
         if (pageWidth && pageHeight) {
             if (diagram.pageSettings.orientation === 'Portrait') {
                 if (pageWidth > pageHeight) {
                     var temp = pageWidth;
                     pageWidth = pageHeight;
                     pageHeight = temp;
                 }
             }
             else {
                 if (pageHeight > pageWidth) {
                     var temp = pageHeight;
                     pageHeight = pageWidth;
                     pageWidth = temp;
                 }
             }
             diagram.pageSettings.width = pageWidth;
             diagram.pageSettings.height = pageHeight;
         }
         else{
             diagram.pageSettings.width = 1460;
             diagram.pageSettings.height = 600;
         }
         diagram.dataBind();
     };
    // To get paper size
    UtilityMethods.prototype.getPaperSize = function(args)
    {
        var paperSize = new PaperSize();
        switch (args) {
            case 'Letter':
                paperSize.pageWidth = 816;
                paperSize.pageHeight = 1056;
                break;
            case 'Legal':
                paperSize.pageWidth = 816;
                paperSize.pageHeight = 1344;
                break;
            case 'Tabloid':
                paperSize.pageWidth = 1056;
                paperSize.pageHeight = 1632;
                break;
            case 'A0':
                paperSize.pageWidth = 3179;
                paperSize.pageHeight = 4494;
                break;
             case 'A1':
                paperSize.pageWidth = 2245;
                paperSize.pageHeight = 3179;
                break;
             case 'A2':
                paperSize.pageWidth = 1587;
                paperSize.pageHeight = 2245;
                break;
            case 'A3':
                paperSize.pageWidth = 1122;
                paperSize.pageHeight = 1587;
                break;
            case 'A4':
                paperSize.pageWidth = 793;
                paperSize.pageHeight = 1122;
                break;
            case 'A5':
                paperSize.pageWidth = 559;
                paperSize.pageHeight = 793;
                break;
            case 'A6':
                paperSize.pageWidth = 396;
                paperSize.pageHeight = 559;
                break;
        }
        return paperSize
    };
     // To update the selected papersize in menubar.
     UtilityMethods.prototype.updatePaperSelection = function(items,value)
     {
         for(i=0;i<items.items.length;i++)
         {
          if(value === items.items[i].value){
              items.items[i].iconCss = 'sf-icon-check-tick';
          }
          else{
              items.items[i].iconCss = '';
          }
         }
     };
      // To update paper selection in menubar
    UtilityMethods.prototype.updateSelection = function(item)
    {
        for(i=0;i<item.parentObj.items.length;i++)
        {
            if(item.text === item.parentObj.items[i].text){
                item.parentObj.items[i].iconCss = 'sf-icon-check-tick';
            }
            else{
                item.parentObj.items[i].iconCss = '';
            }
        }
    };
    UtilityMethods.prototype.insertOrRemovePicture = function(args){
        let option = args.item.text;
        switch(option){
            case 'Insert':
            case 'Change':
                document.getElementById('pictureUpload').click();
                break;
            case 'Delete':
            case 'Show/Hide':
                this.removePicture(option);
        }
    };
    UtilityMethods.prototype.removePicture = function(option){
        let id = diagram.selectedItems.nodes[0].data.Id;
        let nodeObj = diagram.dataSourceSettings.dataSource.dataSource.json.find((obj) => obj.Id === id);
        var imageTag = document.getElementById( diagram.selectedItems.nodes[0].id+'_picimage');
        if(option === 'Delete'){
            nodeObj.ImageUrl = '';
            imageTag.href.baseVal = '';
        }else{
            if (nodeObj.ImageUrl !== '') {
                showHidePictures.push({ id: nodeObj.Id, imageUrl: nodeObj.ImageUrl });
                nodeObj.ImageUrl = '';
                imageTag.href.baseVal = '';
              } else {
                let obj = showHidePictures.find((item) => item.id === nodeObj.Id);
                nodeObj.ImageUrl = obj ? obj.imageUrl : '';
                imageTag.href.baseVal = obj ? obj.imageUrl : '';
                // Find the index of the object in showHidePictures
                let index = showHidePictures.findIndex((item) => item.id === nodeObj.Id);
                // If the object exists in showHidePictures, remove it using splice()
                if (index !== -1) {
                  showHidePictures.splice(index, 1);
                }
              }
        }
    };
    UtilityMethods.prototype.changeShapeTemplates = function(args){
        let option = args.item.text;
        if(option !== currentShapeTemplate){
            currentShapeTemplate = option;
            let fieldsList = document.getElementById('fieldsDropdown').ej2_instances[0];
            let newValue = fieldsList.value;
            diagram.setNodeTemplate = function(obj,diagram) {
                let content = new ej.diagrams.StackPanel();
                content.id = obj.id + '_outerstack';
                content.orientation = 'Horizontal';
                content.style.fill = obj.data.Fill;
                content.style.strokeColor = obj.data.StrokeColor;
                content.padding = { left: 5, right: 10, top: 5, bottom: 5 };
            
                // Add the line at the top of the outer stack
                let line = new ej.diagrams.PathElement();
                line.data = 'M0,0 L1,0'; // Line from (0,0) to (1,0)
                line.width = 2;
                line.height = 1;
                line.style.strokeWidth = 2;
                line.style.margin = { left: 20, right: 20, top: 20, bottom: 20 };
                line.style.strokeColor = (obj.data).RatingColor;
                line.horizontalAlignment = 'Stretch';
                line.verticalAlignment = 'Top';
                line.id = obj.id + '_line';
            
                let image = new ej.diagrams.ImageElement();
                image.width = 50;
                image.height = 50;
                image.source = (obj.data).ImageUrl ? (obj.data).ImageUrl : '';
                image.id = obj.id + '_pic';
                image.style.strokeColor = 'transparent';
                image.style.fill = 'transparent';
            
                let innerStack = new ej.diagrams.StackPanel();
                innerStack.style.strokeColor = 'transparent';
                innerStack.style.fill = 'transparent';
                innerStack.margin = { left: 5, right: 0, top: 0, bottom: 0 };
                innerStack.id = obj.id + '_innerstack';
                let text;let desigText;let teamText;let eidText;let emailText;let phoneText;
                let childElements = [line];
            if(newValue.indexOf('Name') !== -1){
                    text = new ej.diagrams.TextElement();
                    text.content = (obj.data).Name;
                    text.style.color = obj.data.color;
                    text.style.bold = obj.data.IsBold;
                    text.style.italic = obj.data.IsItalic;
                    text.style.textDecoration = obj.data.Decoration;
                    text.style.fontSize = obj.data.FontSize;
                    text.style.fontFamily = obj.data.FontFamily;
                    text.style.strokeColor = 'none';
                    text.horizontalAlignment = 'Left';
                    text.style.fill = 'none';
                    text.id = obj.id + '_text1';
                    childElements.push(text);
            }
            if(newValue.indexOf('Desig') !== -1){
                    desigText = new ej.diagrams.TextElement();
                    desigText.margin = { left: 0, right: 0, top: 5, bottom: 0 };
                    desigText.content = (obj.data).Designation;
                    desigText.style.color = obj.data.color;
                    desigText.style.strokeColor = 'none';
                    desigText.style.fontSize = obj.data.FontSize;
                    desigText.style.fontFamily = obj.data.FontFamily;
                    desigText.style.bold = obj.data.IsBold;
                    desigText.style.italic = obj.data.IsItalic;
                    desigText.style.textDecoration = obj.data.Decoration;
                    desigText.style.fill = 'none';
                    desigText.horizontalAlignment = 'Left';
                    desigText.style.textWrapping = 'Wrap';
                    desigText.id = obj.id + '_desig';
                    childElements.push(desigText);
            }
            if(newValue.indexOf('Team') !== -1){
                    teamText = new ej.diagrams.TextElement();
                    teamText.margin = { left: 0, right: 0, top: 5, bottom: 0 };
                    teamText.content = (obj.data).Team;
                    teamText.style.color = obj.data.color;
                    teamText.style.strokeColor = 'none';
                    teamText.style.fontSize = obj.data.FontSize;
                    teamText.style.fontFamily = obj.data.FontFamily;
                    teamText.style.bold = obj.data.IsBold;
                    teamText.style.italic = obj.data.IsItalic;
                    teamText.style.textDecoration = obj.data.Decoration;
                    teamText.style.fill = 'none';
                    teamText.horizontalAlignment = 'Left';
                    teamText.style.textWrapping = 'Wrap';
                    teamText.id = obj.id + '_team';
                    childElements.push(teamText);
            }
            if(newValue.indexOf('EID') !== -1){
                    eidText = new ej.diagrams.TextElement();
                    eidText.margin = { left: 0, right: 0, top: 5, bottom: 0 };
                    eidText.content = (obj.data).EmployeeID;
                    eidText.style.color = obj.data.color;
                    eidText.style.strokeColor = 'none';
                    eidText.style.fontSize = obj.data.FontSize;
                    eidText.style.fontFamily = obj.data.FontFamily;
                    eidText.style.bold = obj.data.IsBold;
                    eidText.style.italic = obj.data.IsItalic;
                    eidText.style.textDecoration = obj.data.Decoration;
                    eidText.style.fill = 'none';
                    eidText.horizontalAlignment = 'Left';
                    eidText.style.textWrapping = 'Wrap';
                    eidText.id = obj.id + '_eid';
                    childElements.push(eidText);
            }
            if(newValue.indexOf('Email') !== -1){
                    emailText = new ej.diagrams.TextElement();
                    emailText.margin = { left: 0, right: 0, top: 5, bottom: 0 };
                    emailText.content = (obj.data).EmailId;
                    emailText.style.color = obj.data.color;
                    emailText.style.strokeColor = 'none';
                    emailText.style.fontSize = obj.data.FontSize;
                    emailText.style.fontFamily = obj.data.FontFamily;
                    emailText.style.bold = obj.data.IsBold;
                    emailText.style.italic = obj.data.IsItalic;
                    emailText.style.textDecoration = obj.data.Decoration;
                    emailText.style.fill = 'none';
                    emailText.horizontalAlignment = 'Left';
                    emailText.style.textWrapping = 'Wrap';
                    emailText.id = obj.id + '_email';
                    childElements.push(emailText);
            }
            if(newValue.indexOf('Phone') !== -1){
                    phoneText = new ej.diagrams.TextElement();
                    phoneText.margin = { left: 0, right: 0, top: 5, bottom: 0 };
                    phoneText.content = (obj.data).PhoneNumber;
                    phoneText.style.color = obj.data.color;
                    phoneText.style.strokeColor = 'none';
                    phoneText.style.fontSize = obj.data.FontSize;
                    phoneText.style.fontFamily = obj.data.FontFamily;
                    phoneText.style.bold = obj.data.IsBold;
                    phoneText.style.italic = obj.data.IsItalic;
                    phoneText.style.textDecoration = obj.data.Decoration;
                    phoneText.style.fill = 'none';
                    phoneText.horizontalAlignment = 'Left';
                    phoneText.style.textWrapping = 'Wrap';
                    phoneText.id = obj.id + '_phone';
                    childElements.push(phoneText);
            }
            
                innerStack.children = childElements;
                if(option === 'No image'){
                    content.children = [innerStack];
                }else if(option === 'Image at left'){
                    content.children = [image, innerStack];
                }
                else{
                content.orientation = 'Vertical';
                content.children = [image, innerStack];
                }
                return content;
            };
            diagram.dataBind();
            diagram.clear();
            diagram.refresh();
            diagram.fitToPage({ mode: 'Page', region: 'Content' });
        }
    };
    UtilityMethods.prototype.changeFields = function(args){
        let newValue = args.value;
        let option = currentShapeTemplate;
        diagram.setNodeTemplate = function(obj,diagram) {
            let content = new ej.diagrams.StackPanel();
            content.id = obj.id + '_outerstack';
            content.orientation = 'Horizontal';
            content.style.fill = obj.data.Fill;
            content.style.strokeColor = obj.data.StrokeColor;
            content.padding = { left: 5, right: 10, top: 5, bottom: 5 };
        
            // Add the line at the top of the outer stack
            let line = new ej.diagrams.PathElement();
            line.data = 'M0,0 L1,0'; // Line from (0,0) to (1,0)
            line.width = 2;
            line.height = 1;
            line.style.strokeWidth = 2;
            line.style.margin = { left: 20, right: 20, top: 20, bottom: 20 };
            line.style.strokeColor = (obj.data).RatingColor;
            line.horizontalAlignment = 'Stretch';
            line.verticalAlignment = 'Top';
            line.id = obj.id + '_line';
        
            let image = new ej.diagrams.ImageElement();
            image.width = 50;
            image.height = 50;
            image.source = (obj.data).ImageUrl ? (obj.data).ImageUrl : '';
            image.id = obj.id + '_pic';
            image.style.strokeColor = 'transparent';
            image.style.fill = 'transparent';
        
            let innerStack = new ej.diagrams.StackPanel();
            innerStack.style.strokeColor = 'transparent';
            innerStack.style.fill = 'transparent';
            innerStack.margin = { left: 5, right: 0, top: 0, bottom: 0 };
            innerStack.id = obj.id + '_innerstack';
            let text;let desigText;let teamText;let eidText;let emailText;let phoneText;
            let childElements = [line];
           if(newValue.indexOf('Name') !== -1){
                text = new ej.diagrams.TextElement();
                text.content = (obj.data).Name;
                text.style.color = obj.data.color;
                text.style.bold = obj.data.IsBold;
                text.style.italic = obj.data.IsItalic;
                text.style.textDecoration = obj.data.Decoration;
                text.style.fontSize = obj.data.FontSize;
                text.style.fontFamily = obj.data.FontFamily;
                text.style.strokeColor = 'none';
                text.horizontalAlignment = 'Left';
                text.style.fill = 'none';
                text.id = obj.id + '_text1';
                childElements.push(text);
           }
           if(newValue.indexOf('Desig') !== -1){
                desigText = new ej.diagrams.TextElement();
                desigText.margin = { left: 0, right: 0, top: 5, bottom: 0 };
                desigText.content = (obj.data).Designation;
                desigText.style.color = obj.data.color;
                desigText.style.strokeColor = 'none';
                desigText.style.fontSize = obj.data.FontSize;
                desigText.style.fontFamily = obj.data.FontFamily;
                desigText.style.bold = obj.data.IsBold;
                desigText.style.italic = obj.data.IsItalic;
                desigText.style.textDecoration = obj.data.Decoration;
                desigText.style.fill = 'none';
                desigText.horizontalAlignment = 'Left';
                desigText.style.textWrapping = 'Wrap';
                desigText.id = obj.id + '_desig';
                childElements.push(desigText);
           }
           if(newValue.indexOf('Team') !== -1){
                teamText = new ej.diagrams.TextElement();
                teamText.margin = { left: 0, right: 0, top: 5, bottom: 0 };
                teamText.content = (obj.data).Team;
                teamText.style.color = obj.data.color;
                teamText.style.strokeColor = 'none';
                teamText.style.fontSize = obj.data.FontSize;
                teamText.style.fontFamily = obj.data.FontFamily;
                teamText.style.bold = obj.data.IsBold;
                teamText.style.italic = obj.data.IsItalic;
                teamText.style.textDecoration = obj.data.Decoration;
                teamText.style.fill = 'none';
                teamText.horizontalAlignment = 'Left';
                teamText.style.textWrapping = 'Wrap';
                teamText.id = obj.id + '_team';
                childElements.push(teamText);
           }
           if(newValue.indexOf('EID') !== -1){
                eidText = new ej.diagrams.TextElement();
                eidText.margin = { left: 0, right: 0, top: 5, bottom: 0 };
                eidText.content = (obj.data).EmployeeID;
                eidText.style.color = obj.data.color;
                eidText.style.strokeColor = 'none';
                eidText.style.fontSize = obj.data.FontSize;
                eidText.style.fontFamily = obj.data.FontFamily;
                eidText.style.bold = obj.data.IsBold;
                eidText.style.italic = obj.data.IsItalic;
                eidText.style.textDecoration = obj.data.Decoration;
                eidText.style.fill = 'none';
                eidText.horizontalAlignment = 'Left';
                eidText.style.textWrapping = 'Wrap';
                eidText.id = obj.id + '_eid';
                childElements.push(eidText);
           }
           if(newValue.indexOf('Email') !== -1){
                emailText = new ej.diagrams.TextElement();
                emailText.margin = { left: 0, right: 0, top: 5, bottom: 0 };
                emailText.content = (obj.data).EmailId;
                emailText.style.color = obj.data.color;
                emailText.style.strokeColor = 'none';
                emailText.style.fontSize = obj.data.FontSize;
                emailText.style.fontFamily = obj.data.FontFamily;
                emailText.style.bold = obj.data.IsBold;
                emailText.style.italic = obj.data.IsItalic;
                emailText.style.textDecoration = obj.data.Decoration;
                emailText.style.fill = 'none';
                emailText.horizontalAlignment = 'Left';
                emailText.style.textWrapping = 'Wrap';
                emailText.id = obj.id + '_email';
                childElements.push(emailText);
           }
           if(newValue.indexOf('Phone') !== -1){
                phoneText = new ej.diagrams.TextElement();
                phoneText.margin = { left: 0, right: 0, top: 5, bottom: 0 };
                phoneText.content = (obj.data).PhoneNumber;
                phoneText.style.color = obj.data.color;
                phoneText.style.strokeColor = 'none';
                phoneText.style.fontSize = obj.data.FontSize;
                phoneText.style.fontFamily = obj.data.FontFamily;
                phoneText.style.bold = obj.data.IsBold;
                phoneText.style.italic = obj.data.IsItalic;
                phoneText.style.textDecoration = obj.data.Decoration;
                phoneText.style.fill = 'none';
                phoneText.horizontalAlignment = 'Left';
                phoneText.style.textWrapping = 'Wrap';
                phoneText.id = obj.id + '_phone';
                childElements.push(phoneText);
           }
        
            innerStack.children = childElements;
            if(option === 'No image'){
                content.children = [innerStack];
            }else if(option === 'Image at left'){
                content.children = [image, innerStack];
            }
            else{
               content.orientation = 'Vertical';
               content.children = [image, innerStack];
            }
        
            return content;
        };
        diagram.dataBind();
        diagram.clear();
        diagram.refresh();
        diagram.fitToPage({mode:'Page',region:'Content'});
    };
    UtilityMethods.prototype.zoomChange = function (args) {
        // debugger;
        var zoom = {};
        zoom.zoomFactor = ((args.value/100) / diagram.scrollSettings.currentZoom) - 1;
        diagram.zoomTo(zoom);
        document.getElementById('zoomSliderText').value = args.value.toString() + '%';
        diagram.dataBind();
    };
     return UtilityMethods;
}());