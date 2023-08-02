var DiagramClientSideEvents = (function () {
    function DiagramClientSideEvents(){
    };
    DiagramClientSideEvents.prototype.selectionChange = function (args) {
        
            if(args.state === 'Changed'){
                if(args.newValue.length > 0){
                  this.applyFillColor(args.newValue);
                  this.enablePictureDropdown();
                }
                if(args.oldValue.length > 0 && (args.newValue.length === 0 || args.oldValue[0].id !== args.newValue[0].id)){
                    this.removeFillColor(args.oldValue);
                }
                if(args.newValue.length === 0){
                    this.disablePictureDropdown();
                }
            }
    };
    DiagramClientSideEvents.prototype.applyFillColor = function (obj) {
        for (var i = 0; i < obj.length; i++) {
            if(obj[i] instanceof ej.diagrams.Node){
                let outerContainer = document.getElementById(obj[i].id+'_outerstack');
                outerContainer.style.fill = obj[i].data.RatingColor;
            }
        }
        diagram.dataBind();
    };
    DiagramClientSideEvents.prototype.removeFillColor = function (obj) {
        for (var i = 0; i < obj.length; i++) {
            if(obj[i] instanceof ej.diagrams.Node){
                let outerContainer = document.getElementById(obj[i].id+'_outerstack');
                outerContainer.style.fill = obj[i].data.Fill;
            }
        }
        diagram.dataBind();
    };
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
    DiagramClientSideEvents.prototype.enablePictureDropdown = function () {
        let pictureDropdown = document.getElementById('pictureDropdown');
        pictureDropdown.style.cssText = 'pointer-events: auto !important; opacity:1';
        let tbItems = document.getElementsByClassName('item-singleSelect');
        for (var i = 0; i < tbItems.length; i++) {
            tbItems[i].style.cssText = 'pointer-events: auto !important; opacity:1';
        }
    };
    DiagramClientSideEvents.prototype.disablePictureDropdown = function () {
        let pictureDropdown = document.getElementById('pictureDropdown');
        pictureDropdown.style.cssText = 'pointer-events: none !important; opacity:0.5';
        let tbItems = document.getElementsByClassName('item-singleSelect');
        for (var i = 0; i < tbItems.length; i++) {
            tbItems[i].style.cssText = 'pointer-events: none !important; opacity:0.5';
        }
    };
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
            diagramData = diagramData.concat(newData);
            diagram.doLayout();
            // diagram.select([diagram.nameTable[newNode.id]]);
        }
    };
    DiagramClientSideEvents.prototype.expandCollapse = function (args) {
        let selectedNode = diagram.selectedItems.nodes[0];
        let id = (selectedNode.data).Id;
        if(args.element.name === 'Expand'){
        this.filter(id);
        diagram.selectedItems.userHandles[1].name = 'Collapse';
        diagram.selectedItems.userHandles[1].pathData = 'M16.261993,32L16.359985,31.934998 16.454987,32 16.48999,31.846008 32,20.705013 32,12.254999 16.359985,23.539014 0,12.254999 0,20.705013 15.77301,31.846008z';
        diagram.dataBind();
        diagram.select([diagram.nameTable[this.findNodeIdByDataId(id)]]);
        }else{
        this.removeDescendants(id);
        diagram.selectedItems.userHandles[1].name = 'Expand';
        diagram.selectedItems.userHandles[1].pathData = 'M16.261993,0L16.359985,0.065002445 16.454987,0 16.48999,0.15399169 32,11.294986 32,19.745 16.359985,8.5149861 0,19.745 0,11.294986 16.22699,0.15399169z';
        diagram.dataBind();
        diagram.select([diagram.nameTable[this.findNodeIdByDataId(id)]]);
        }
    };
    DiagramClientSideEvents.prototype.filter = function (nodeId) {
        const selectedNode = diagramData.find((item) => item.Id === nodeId);
        if (!selectedNode) return;
        // Find all descendants (children and sub-children) of the selected node
        const allDescendants = this.findDescendants(diagramData, nodeId);

        // Get the diagram's data source
        const datasource = diagram.dataSourceSettings.dataSource.dataSource.json;

        // Lookup object to store existing IDs
        const idLookup = {};
        datasource.forEach((item) => {
            idLookup[item.Id] = true;
        });

        // Filter out the nodes that already exist in the datasource
        const filteredAndUniqueData = allDescendants.filter((item) => !idLookup[item.Id]);

        // Add the descendants to the data source
        Array.prototype.push.apply(datasource, filteredAndUniqueData);
        
        // Update the diagram's data source and rebind
        diagram.dataSourceSettings.dataSource = new ej.data.DataManager(datasource);
        diagram.dataBind();
    };
    DiagramClientSideEvents.prototype.removeDescendants = function (nodeId) {
        const datasource = diagram.dataSourceSettings.dataSource.dataSource.json;
      
        // Use a stack to iteratively remove descendants
        const stack = [nodeId];
        const idLookup = { [nodeId]: true };
      
        // Collect all descendant IDs and cache their indexes
        const indexesToRemove = {};
        while (stack.length) {
          const currentId = stack.pop();
          for (let i = datasource.length - 1; i >= 0; i--) {
            const item = datasource[i];
            if (item.ReportingPerson === currentId) {
              stack.push(item.Id);
              idLookup[item.Id] = true;
              indexesToRemove[i] = true;
            }
          }
        }
      
        // Remove the descendants using their indexes (in reverse order to avoid index shift)
        const sortedIndexes = Object.keys(indexesToRemove).sort((a, b) => b - a);
        for (const index of sortedIndexes) {
          datasource.splice(index, 1);
        }
      
        // Update the diagram's data source and rebind
        diagram.dataSourceSettings.dataSource = new ej.data.DataManager(datasource);
        diagram.dataBind();
      };
    // Function to recursively find all descendants (children and sub-children)
    DiagramClientSideEvents.prototype.findDescendants = function (data, parentId) {
    let descendants = [];
    for (let item of data) {
      if (item.ReportingPerson === parentId) {
        descendants.push(item);
        const children = this.findDescendants(data, item.Id);
        descendants = [...descendants, ...children];
      }
  }
  return descendants;
    };
    DiagramClientSideEvents.prototype.findNodeIdByDataId = function (id) {
            const foundNode = diagram.nodes.find((node) => node.data.Id === id);
            return foundNode ? foundNode.id : undefined;
    };
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
        return DiagramClientSideEvents;
}());
