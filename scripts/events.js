var DiagramClientSideEvents = (function () {
    function DiagramClientSideEvents(){
    };
    // Selection change event.
    DiagramClientSideEvents.prototype.selectionChange = function (args) {
        
            if(args.state === 'Changed'){
                if(args.newValue.length > 0){
                  this.applyFillColor(args.newValue);
                  this.enableItems();
                }
                if(args.oldValue.length > 0 && (args.newValue.length === 0 || args.oldValue[0].id !== args.newValue[0].id)){
                    this.removeFillColor(args.oldValue);
                }
                if(args.newValue.length === 0){
                    this.disableItems();
                }
            }
    };
    // To apply fill color to the selected node.
    DiagramClientSideEvents.prototype.applyFillColor = function (obj) {
        for (var i = 0; i < obj.length; i++) {
            if(obj[i] instanceof ej.diagrams.Node){
                let outerContainer = document.getElementById(obj[i].id+'_outerstack');
                outerContainer.style.fill = obj[i].data.RatingColor;
            }
        }
        diagram.dataBind();
    };
    // To remove fill color of selected node.
    DiagramClientSideEvents.prototype.removeFillColor = function (obj) {
        for (var i = 0; i < obj.length; i++) {
            if(obj[i] instanceof ej.diagrams.Node){
                let outerContainer = document.getElementById(obj[i].id+'_outerstack');
                outerContainer.style.fill = obj[i].data.Fill;
            }
        }
        diagram.dataBind();
    };
    // To execute userhandle click.
    DiagramClientSideEvents.prototype.onUserHandleMouseDown = function (args) {
        let option = args.element.name;
        switch(option){
            case 'Add New Child':
                this.addChild(args);
                break;
            case 'Expand':
            case 'Collapse':
                this.expandCollapse(args);
                break;
            case 'Edit Fields':
                this.editFields(args);
                break;
        }
    };
    // To enable items when we select node.
    DiagramClientSideEvents.prototype.enableItems = function () {
        if(currentShapeTemplate !== 'No image'){
            let pictureDropdown = document.getElementById('pictureDropdown');
            pictureDropdown.style.cssText = 'pointer-events: auto !important; opacity:1';
        }
        let assistantBtn = document.getElementById('addAssistantBtn');
        assistantBtn.style.cssText = 'pointer-events: auto !important; opacity:1; font-size:10px';
        if(fieldsList.value.length > 0){
            let labelStyleItems = document.getElementsByClassName('item-singleSelect');
            for (var i = 0; i < labelStyleItems.length; i++) {
                labelStyleItems[i].style.cssText = 'pointer-events: auto !important; opacity:1';
            }
        }
        let colorItems = document.getElementsByClassName('item-singleSelectColor');
        for(var i = 0; i < colorItems.length; i++){
            colorItems[i].style.cssText = 'pointer-events: auto !important; opacity:1';
        }
    };
    // To disable itmes when there is no selection
    DiagramClientSideEvents.prototype.disableItems = function () {
        let pictureDropdown = document.getElementById('pictureDropdown');
        pictureDropdown.style.cssText = 'pointer-events: none !important; opacity:0.5';
        let assistantBtn = document.getElementById('addAssistantBtn');
        assistantBtn.style.cssText = 'pointer-events: none !important; opacity:0.5; font-size:10px';
        let labelStyleItems = document.getElementsByClassName('item-singleSelect');
        for (var i = 0; i < labelStyleItems.length; i++) {
            labelStyleItems[i].style.cssText = 'pointer-events: none !important; opacity:0.5';
        }
        let colorItems = document.getElementsByClassName('item-singleSelectColor');
        for(var i = 0; i < colorItems.length; i++){
            colorItems[i].style.cssText = 'pointer-events: none !important; opacity:0.5';
        }
    };
    // To add child to the selected node.
    DiagramClientSideEvents.prototype.addChild = function (args) {
        if(diagram.selectedItems.nodes.length > 0){
            let data = diagram.dataSourceSettings.dataSource.dataSource.json;
            let newData = [{
                'Id': ej.diagrams.randomId(),
                'Name': 'Name',
                'Designation': 'Designation',
                'RatingColor': '#C34444',
                'ReportingPerson': diagram.selectedItems.nodes[0].data.Id,
                "ImageUrl":'./images/yoshi.png',
                "Team": "JavaScript",
                "EmployeeID": "SYNC10" + (data.length + 1),
                "EmailId": "newEmployee"+(data.length + 1)+"@gmail.com",
                "PhoneNumber": "0324 - 18193"+(data.length + 1),
                "IsBold": false,"IsItalic":false,"Decoration":"None",
                "FontFamily":"Arial","FontSize":12,"color":"black",
                "Fill":"white","StrokeColor":"black",
            }];
            let newNode = {id:ej.diagrams.randomId(),data:newData[0],width:100,height:50};
            diagram.add(newNode);
            let newConnector = {id:ej.diagrams.randomId(),sourceID:diagram.selectedItems.nodes[0].id,targetID:newNode.id};
            diagram.add(newConnector);
            diagram.dataSourceSettings.dataSource.dataSource.json = data.concat(newData);
            diagram.doLayout();
        }
    };
    // To append the values of selected node in the respective text boxed and to open the editNode dialog box.
    DiagramClientSideEvents.prototype.editFields = function (args) {
        let editBox = document.getElementById('editNodeDialog').ej2_instances[0];
        let name = document.getElementById('nodeName');
        let designation = document.getElementById('nodeRole');
        let employeeID = document.getElementById('nodeEmployeeID');
        let team = document.getElementById('nodeTeam');
        let email = document.getElementById('nodeEmail');
        let phoneNo = document.getElementById('nodePhoneNumber');
        let node = diagram.selectedItems.nodes[0];
        name.value = node.data.Name;
        designation.value = node.data.Designation;
        employeeID.value = node.data.EmployeeID;
        team.value = node.data.Team;
        email.value = node.data.EmailId;
        phoneNo.value = node.data.PhoneNumber;
        editBox.show();
    };
    // History change event
    DiagramClientSideEvents.prototype.historyChange = function (args) {
        var toolbarContainer = document.getElementsByClassName('db-toolbar-container')[0];
        toolbarContainer.classList.remove('db-undo');
        toolbarContainer.classList.remove('db-redo');
        if (diagram.historyManager.undoStack.length > 0) {
            toolbarContainer.classList.add('db-undo');
        }
        if (diagram.historyManager.redoStack.length > 0) {
            toolbarContainer.classList.add('db-redo');
        }
    };
    // To update the zoom slider value based on diagram zoom
    DiagramClientSideEvents.prototype.scrollChange = function (args) {
        if(args.panState === 'Progress'){
           var zoomValue = parseFloat(args.source.scrollSettings.currentZoom.toFixed(1));
           zoomSlider.value = zoomValue * 100;
           document.getElementById('zoomSliderText').value = Math.round(zoomSlider.value) + '%';
        }
    };
        return DiagramClientSideEvents;
}());
