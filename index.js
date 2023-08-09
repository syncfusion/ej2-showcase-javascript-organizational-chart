ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.HierarchicalTree,ej.diagrams.UndoRedo,ej.diagrams.PrintAndExport,ej.diagrams.DiagramContextMenu);

var dropDownDataSources = new DropDownDataSources();
var diagramEvents = new DiagramClientSideEvents();
var utilityMethods = new UtilityMethods();

    var data =[
        {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": "parent", "Name": "Maria Anders", "Designation": "Managing Director",
            "IsExpand": "true", "RatingColor": "#C34444","ImageUrl":'./images/maria.png', "EmployeeID":'SYNC1001',"Team":"TypeScript","EmailId":'maria.anders@gmail.com',"PhoneNumber":'0324 - 1819301'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 1, "Name": "Ana Trujillo", "Designation": "Project Manager",
            "IsExpand": "false",
            "RatingColor": "#68C2DE", "ReportingPerson": "parent","ImageUrl":'./images/carlos.png', "EmployeeID":'SYNC1002',"Team":"Java","EmailId":'ana.truj@gmail.com',"PhoneNumber":'0324 - 1819302'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 2, "Name": "Anto Moreno", "Designation": "Project Lead",
            "IsExpand": "false",
            "RatingColor": "#93B85A", "ReportingPerson": 1,"ImageUrl":'./images/daniel.png', "EmployeeID":'SYNC1003',"Team":"Windows","EmailId":'ana.moreno@gmail.com',"PhoneNumber":'0324 - 1819303'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 3, "Name": "Thomas Hardy", "Designation": "Senior S/w Engg",
            "IsExpand": "false",
            "RatingColor": "#68C2DE", "ReportingPerson": 2,"ImageUrl":'./images/jaime.png', "EmployeeID":'SYNC1004',"Team":"UX","EmailId":'thomos.hardy@gmail.com',"PhoneNumber":'0324 - 1819304'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 4, "Name": "Christina kaff", "Designation": "S/w Engg",
            "IsExpand": "false",
            "RatingColor": "#93B85A", "ReportingPerson": 3,"ImageUrl":'./images/felipe.png', "EmployeeID":'SYNC1005',"Team":"UX","EmailId":'chris.kaff@gmail.com',"PhoneNumber":'0324 - 1819305'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 5, "Name": "Hanna Moos", "Designation": "Project Trainee",
            "IsExpand": "true",
            "RatingColor": "#D46E89", "ReportingPerson": 4,"ImageUrl":'./images/helen.png', "EmployeeID":'SYNC1006',"Team":"Windows","EmailId":'hanna.moos@gmail.com',"PhoneNumber":'0324 - 1819306'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 6, "Name": "Peter Citeaux", "Designation": "S/w Engg",
            "IsExpand": "true",
            "RatingColor": "#68C2DE", "ReportingPerson": 5,"ImageUrl":'./images/rene.png', "EmployeeID":'SYNC1007',"Team":"Java","EmailId":'peter.cite@gmail.com',"PhoneNumber":'0324 - 1819307'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 7, "Name": "Martín Kloss", "Designation": "Project Trainee",
            "IsExpand": "false",
            "RatingColor": "#93B85A", "ReportingPerson": 6,"ImageUrl":'./images/yoshi.png', "EmployeeID":'SYNC1008',"Team":"UX","EmailId":'martin.kloss@gmail.com',"PhoneNumber":'0324 - 1819308'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 8, "Name": "Elizabeth Mary", "Designation": "Project Trainee",
            "IsExpand": "None",
            "RatingColor": "#93B85A", "ReportingPerson": 6,"ImageUrl":'./images/yvonne.png', "EmployeeID":'SYNC1009',"Team":"Java","EmailId":'elizabeth.marys@gmail.com',"PhoneNumber":'0324 - 1819309'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 9, "Name": "Victoria Ash", "Designation": "Senior S/w Engg",
            "IsExpand": "None",
            "RatingColor": "#D46E89", "ReportingPerson": 5,"ImageUrl":'./images/carlos.png', "EmployeeID":'SYNC1010',"Team":"React","EmailId":'victoria.ash@gmail.com',"PhoneNumber":'0324 - 1819310'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id":10, "Name": "Francisco Yang", "Designation": "Senior S/w Engg",
            "IsExpand": "None",
            "RatingColor": "#93B85A", "ReportingPerson": 3,"ImageUrl":'./images/maria.png', "EmployeeID":'SYNC1011',"Team":"Java","EmailId":'francisco.yang@gmail.com',"PhoneNumber":'0324 - 1819311'},{
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 17, "Name": "Ann Devon", "Designation": "Project Manager",
            "IsExpand": "false",
            "RatingColor": "#68C2DE", "ReportingPerson": 25,"ImageUrl":'./images/yoshi-kenna.png', "EmployeeID":'SYNC1012',"Team":"UX","EmailId":'Ann.devon@gmail.com',"PhoneNumber":'0324 - 1819312'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 18, "Name": "Roland Mendel", "Designation": "Project Lead",
            "IsExpand": "true",
            "RatingColor": "#68C2DE", "ReportingPerson": 17,"ImageUrl":'./images/carlos.png', "EmployeeID":'SYNC1013',"Team":"UX","EmailId":'roland.mendel@gmail.com',"PhoneNumber":'0324 - 1819313'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 19, "Name": "Aria Cruz", "Designation": "Senior S/w Engg",
            "IsExpand": "false",
            "RatingColor": "#93B85A", "ReportingPerson": 18,"ImageUrl":'./images/daniel.png', "EmployeeID":'SYNC1014',"Team":"Angular","EmailId":'aria.cruz@gmail.com',"PhoneNumber":'0324 - 1819314'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 20, "Name": "Martine Rancé", "Designation": "S/w Engg",
            "IsExpand": "None",
            "RatingColor": "#93B85A", "ReportingPerson": 18,"ImageUrl":'./images/helen.png', "EmployeeID":'SYNC1015',"Team":"UX","EmailId":'martina.rance@gmail.com',"PhoneNumber":'0324 - 1819315'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 21, "Name": "Maria Larsson", "Designation": "Project Trainee",
            "IsExpand": "false",
            "RatingColor": "#EBB92E", "ReportingPerson": 19,"ImageUrl":'./images/maria.png', "EmployeeID":'SYNC1016',"Team":"UX","EmailId":'maria.larsson@gmail.com',"PhoneNumber":'0324 - 1819316'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 22, "Name": "Diego Roel", "Designation": "Project Trainee",
            "IsExpand": "false",
            "RatingColor": "#D46E89", "ReportingPerson": 21,"ImageUrl":'./images/jaime.png', "EmployeeID":'SYNC1017',"Team":"TypeScript","EmailId":'diego.roel@gmail.com',"PhoneNumber":'0324 - 1819317'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 23, "Name": "Peter Franken", "Designation": "Project Trainee",
           "IsExpand": "None",
            "RatingColor": "#D46E89", "ReportingPerson": 21,"ImageUrl":'./images/felipe.png', "EmployeeID":'SYNC1018',"Team":"JavaScript","EmailId":'peter.franken@gmail.com',"PhoneNumber":'0324 - 1819318'},{
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 25, "Name": "Carine Schmitt", "Designation": "Project Manager",
            "IsExpand": "None",
            "RatingColor": "#EBB92E", "ReportingPerson": "parent","ImageUrl":'./images/maria.png', "EmployeeID":'SYNC1019',"Team":"Java","EmailId":'carine.schmit@gmail.com',"PhoneNumber":'0324 - 1819319'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 26, "Name": "Paolo Accorti", "Designation": "Project Lead",
            "IsExpand": "None",
            "RatingColor": "#D46E89", "ReportingPerson": 36,"ImageUrl":'./images/yvonne.png', "EmployeeID":'SYNC1020',"Team":"React","EmailId":'paolo.acc@gmail.com',"PhoneNumber":'0324 - 1819320'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 27, "Name": "Eduardo Roel", "Designation": "Senior S/w Engg",
            "IsExpand": "true",
            "RatingColor": "#93B85A", "ReportingPerson": 26,"ImageUrl":'./images/sergio.png', "EmployeeID":'SYNC1021',"Team":"JavaScript","EmailId":'eduardo.roel@gmail.com',"PhoneNumber":'0324 - 1819321'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 28, "Name": "José Pedro", "Designation": "Senior S/w Engg",
            "IsExpand": "true",
            "RatingColor": "#D46E89", "ReportingPerson": 27,"ImageUrl":'./images/yoshi-kenna.png', "EmployeeID":'SYNC1022',"Team":"Java","EmailId":'josé.pedro@gmail.com',"PhoneNumber":'0324 - 1819322'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 29, "Name": "André Fonseca", "Designation": "Senior S/w Engg",
            "IsExpand": "true",
            "RatingColor": "#EBB92E", "ReportingPerson": 28,"ImageUrl":'./images/joseph.png', "EmployeeID":'SYNC1023',"Team":"React","EmailId":'andré.fonseca@gmail.com',"PhoneNumber":'0324 - 1819323'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 30, "Name": "Howard Snyd", "Designation": "S/w Engg",
           "IsExpand": "false",
            "RatingColor": "#68C2DE", "ReportingPerson": 29,"ImageUrl":'./images/simon.png', "EmployeeID":'SYNC1024',"Team":"JavaScript","EmailId":'howard.synd@gmail.com',"PhoneNumber":'0324 - 1819324'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 31, "Name": "Manu Pereira", "Designation": "Project Trainee",
           "IsExpand": "None",
            "RatingColor": "#D46E89", "ReportingPerson": 29,"ImageUrl":'./images/maria.png', "EmployeeID":'SYNC1025',"Team":"JavaScript","EmailId":'manu.periera@gmail.com',"PhoneNumber":'0324 - 1819325'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 32, "Name": "Mario Pontes", "Designation": "S/w Engg",
           "IsExpand": "None",
            "RatingColor": "#D46E89", "ReportingPerson": 29,"ImageUrl":'./images/annette.png', "EmployeeID":'SYNC1026',"Team":"Java","EmailId":'mario.pontes@gmail.com',"PhoneNumber":'0324 - 1819326'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 33, "Name": "Carlos Schmitt", "Designation": "Project Trainee",
            "IsExpand": "None",
            "RatingColor": "#D46E89", "ReportingPerson": 29,"ImageUrl":'./images/maria.png', "EmployeeID":'SYNC1027',"Team":"React","EmailId":'carlos.schmitt@gmail.com',"PhoneNumber":'0324 - 1819327'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 34, "Name": "Yoshi Latimer", "Designation": "Project Trainee",
            "IsExpand": "true",
            "RatingColor": "#D46E89", "ReportingPerson": 29,"ImageUrl":'./images/daniel.png', "EmployeeID":'SYNC1028',"Team":"React","EmailId":'yoshi.latimer@gmail.com',"PhoneNumber":'0324 - 1819328'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 35, "Name": "Patricia Kenna", "Designation": "Project Trainee",
            "IsExpand": "true",
            "RatingColor": "#EBB92E", "ReportingPerson": 29,"ImageUrl":'./images/helen.png', "EmployeeID":'SYNC1029',"Team":"JavaScript","EmailId":'patricia.kenna@gmail.com',"PhoneNumber":'0324 - 1819329'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 36, "Name": "Helen Bennett", "Designation": "Project Lead",
            "IsExpand": "None",
            "RatingColor": "#D46E89", "ReportingPerson": 25,"ImageUrl":'./images/rene.png', "EmployeeID":'SYNC1030',"Team":"Java","EmailId":'helen.bennette@gmail.com',"PhoneNumber":'0324 - 1819330'},{
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 65, "Name": "Alej Camino", "Designation": "Project Manager",
           "IsExpand": "false",
            "RatingColor": "#93B85A", "ReportingPerson": "parent","ImageUrl":'./images/carlos.png', "EmployeeID":'SYNC1031',"Team":"Windows","EmailId":'aleg.camino@gmail.com',"PhoneNumber":'0324 - 1819331'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 66, "Name": "Jonas Bergsen", "Designation": "Project Lead",
           "IsExpand": "None",
            "RatingColor": "#68C2DE", "ReportingPerson": 65,"ImageUrl":'./images/joseph.png', "EmployeeID":'SYNC1032',"Team":"JavaScript","EmailId":'jonas.bergsen@gmail.com',"PhoneNumber":'0324 - 1819332'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 67, "Name": "Jose Pavarotti", "Designation": "Project Trainee",
            "IsExpand": "None",
            "RatingColor": "#D46E89", "ReportingPerson": 68,"ImageUrl":'./images/maria.png', "EmployeeID":'SYNC1033',"Team":"Windows","EmailId":'jose.pavarotti@gmail.com',"PhoneNumber":'0324 - 1819333'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 68, "Name": "Miguel Angel", "Designation": "Senior S/w Engg",
            "IsExpand": "None",
            "RatingColor": "#D46E89", "ReportingPerson": 66,"ImageUrl":'./images/yoshi.png', "EmployeeID":'SYNC1034',"Team":"Angular","EmailId":'miguel.angel@gmail.com',"PhoneNumber":'0324 - 1819334'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 69, "Name": "Jytte Petersen", "Designation": "Senior S/w Engg",
            "IsExpand": "true",
            "RatingColor": "#68C2DE", "ReportingPerson": 68,"ImageUrl":'./images/felipe.png', "EmployeeID":'SYNC1035',"Team":"Angular","EmailId":'jytte.petersen@gmail.com',"PhoneNumber":'0324 - 1819335'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 70, "Name": "Kloss Perrier", "Designation": "Project Lead",
             "IsExpand": "None",
            "RatingColor": "#93B85A", "ReportingPerson": 72,"ImageUrl":'./images/jytte.png', "EmployeeID":'SYNC1036',"Team":"JavaScript","EmailId":'closs.perrier@gmail.com',"PhoneNumber":'0324 - 1819336'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 71, "Name": "Art Nancy", "Designation": "Senior S/w Engg",
            "IsExpand": "true",
            "RatingColor": "#D46E89", "ReportingPerson": 27,"ImageUrl":'./images/rene.png', "EmployeeID":'SYNC1037',"Team":"Java","EmailId":'art.nancy@gmail.com',"PhoneNumber":'0324 - 1819337'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 72, "Name": "Pascal Cartrain", "Designation": "Project Lead",
            "IsExpand": "true",
            "RatingColor": "#EBB92E", "ReportingPerson": 65,"ImageUrl":'./images/renete.png', "EmployeeID":'SYNC1038',"Team":"Vue","EmailId":'pascal.cartrain@gmail.com',"PhoneNumber":'0324 - 1819338'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 73, "Name": "Liz Nixon", "Designation": "Senior S/w Engg",
            "IsExpand": "false",
            "RatingColor": "#68C2DE", "ReportingPerson": 68,"ImageUrl":'./images/maria.png', "EmployeeID":'SYNC1039',"Team":"JavaScript","EmailId":'liz.nixon@gmail.com',"PhoneNumber":'0324 - 1819339'},{
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 89, "Name": "Georg Pipps", "Designation": "Senior S/w Engg",
            "IsExpand": "None",
            "RatingColor": "#EBB92E", "ReportingPerson": "parent","ImageUrl":'./images/rene.png', "EmployeeID":'SYNC1040',"Team":"Java","EmailId":'georg.pipps@gmail.com',"PhoneNumber":'0324 - 1819340'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 30, "Name": "Isabel Castro", "Designation": "Project Trainee",
           "IsExpand": "None",
            "RatingColor": "#D46E89", "ReportingPerson": 89,"ImageUrl":'./images/jhon.png', "EmployeeID":'SYNC1041',"Team":"Windows","EmailId":'isabel.castro@gmail.com',"PhoneNumber":'0324 - 1819341'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 90, "Name": "Rene Phillips", "Designation": "Project Trainee",
            "IsExpand": "false",
            "RatingColor": "#68C2DE", "ReportingPerson": 89,"ImageUrl":'./images/jytte.png', "EmployeeID":'SYNC1042',"Team":"JavaScript","EmailId":'rene.phillips@gmail.com',"PhoneNumber":'0324 - 1819342'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 91, "Name": "Lúcia Carvalho", "Designation": "Project Trainee",
            "IsExpand": "None",
            "RatingColor": "#93B85A", "ReportingPerson": 89,"ImageUrl":'./images/yoshi-kenna.png', "EmployeeID":'SYNC1043',"Team":"Java","EmailId":'lúcia.carvalho@gmail.com',"PhoneNumber":'0324 - 1819343'}, {
            "Fill":"white","StrokeColor":"black","FontFamily":"Arial","IsBold":false,"IsItalic":false,"Decoration":"None","FontSize":12,"color":"black","Id": 92, "Name": "Horst Kloss", "Designation": "Project Trainee",
           "IsExpand": "None",
            "RatingColor": "#D46E89", "ReportingPerson": 89,"ImageUrl":'./images/helen.png', "EmployeeID":'SYNC1044',"Team":"Angular","EmailId":'horst.kloss@gmail.com',"PhoneNumber":'0324 - 1819344'},
    ];

    var userHandle = [
        {
            name: 'Add New Child',pathData: 'M13.55896,0L18.461914,0 18.461914,13.557983 32,13.557983 32,18.481018 18.5,18.481018 18.5,32 13.55896,32 13.55896,18.481018 0,18.481018 0,13.557983 13.55896,13.557983z',
            offset:1,side: 'Bottom',tooltip:{content:'Add New Child',position:'BottomRight'}},
            {
            name: 'Edit Fields', pathData: 'M19.312381,27.48482L18.503085,29.661004 20.944314,29.115917z M24.540007,21.633355L20.390685,25.734296 22.789237,28.131621 26.97936,24.028763z M27.175001,19.029084L25.962399,20.227547 28.408086,22.629793 29.616994,21.446061z M10.602995,15C5.8599977,15 1.999999,18.829 1.999999,23.536 1.999999,24.895 3.1159983,26 4.4899979,26L17.731456,26 17.992104,25.299033 18.172095,25.116051 18.171058,25.116051 23.266144,20.080393 23.156942,19.84575C22.697614,18.897562 22.06124,18.03375 21.28199,17.31 19.682991,15.82 17.592992,15 15.397993,15L12.999995,15z M12.999995,2C9.9420033,2 7.45401,4.467 7.45401,7.5 7.45401,9.947 9.1090055,12.123 11.478999,12.791 12.461997,13.068 13.535994,13.069 14.521991,12.791 16.891984,12.122 18.54598,9.9459996 18.54598,7.5 18.54598,4.467 16.057987,2 12.999995,2z M12.999995,0C17.160984,0 20.545975,3.3639994 20.545975,7.5 20.545975,9.6899061 19.575261,11.720467 17.995872,13.115179L17.808254,13.274325 17.879796,13.290484C19.650854,13.712344 21.290927,14.584437 22.645989,15.846 23.445364,16.590375 24.124036,17.454672 24.656125,18.399828L24.764509,18.599506 26.399983,16.983108C26.614001,16.772111 26.895004,16.666856 27.175756,16.666978 27.456508,16.6671 27.737007,16.772599 27.950018,16.983108L31.969938,20.961079 31.999967,21.450059C31.999967,21.74208,31.88095,22.027051,31.672944,22.233074L23.04003,30.684984 22.706048,30.770982 17.325118,31.973977C17.245102,31.991006 17.165085,31.999978 17.085069,31.999978 16.769093,31.999978 16.464103,31.863993 16.252069,31.619976 15.987118,31.314985 15.91113,30.89 16.054073,30.511035L16.987776,28 4.4899979,28C2.013999,28 0,25.997 0,23.536 0,18.633812 3.3858614,14.50334 7.9561033,13.332249L8.1918802,13.274945 8.0051279,13.116582C6.4251604,11.721779 5.4540157,9.6905622 5.4540157,7.5 5.4540157,3.3639994 8.8390064,0 12.999995,0z',
            visible: true, offset: 1, side: 'Top', margin: { top: 0, bottom: 0, left: 0, right: 0 },tooltip:{content:'Edit Fields',position:'BottomRight'}
        },
    ]

var showHidePictures = [];
var currentShapeTemplate = 'Image at left';
let matchingNodes = [];
let currentIndex = 0; 
var items = new ej.data.DataManager(data , new ej.data.Query().take(5));
var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '100%',
    layout: { type: 'OrganizationalChart',getLayoutInfo: (node, options) => {
        if (!options.hasSubTree) {
            options.type = 'Right';
        }
    } },
    constraints: ej.diagrams.DiagramConstraints.Default | ej.diagrams.DiagramConstraints.InheritTooltip,
    rulerSettings:{showRulers:true},
    snapSettings:{constraints:ej.diagrams.SnapConstraints.All &~ (ej.diagrams.SnapConstraints.ShowLines) &~ (ej.diagrams.SnapConstraints.SnapToLines)},
    pageSettings: {
        background: { color: '#FFFFFF' },margin: { left: 5, top: 5 },
        orientation: 'Landscape',showPageBreaks:false,multiplePage : false
    },
    tool: ej.diagrams.DiagramTools.Default &~ ej.diagrams.DiagramTools.MultipleSelect,
    dataSourceSettings: {  id: 'Id', parentId: 'ReportingPerson', dataSource: items},
    getNodeDefaults: (obj) => {
        obj.height = 50;
        obj.addInfo = {fill:'white'}
        obj.constraints = ej.diagrams.NodeConstraints.Default &~ ej.diagrams.NodeConstraints.Rotate | ej.diagrams.NodeConstraints.Tooltip;
        obj.tooltip = { content:getContent(obj.data),position: 'BottomRight', relativeMode: 'Object'},
        obj.style = { fill: 'transparent', strokeWidth: 2 };
        obj.expandIcon = {
            height: 20,
            width: 20,
            iconColor: 'white',
            cornerRadius: 10,
            borderColor: 'black',
            shape: 'None',
            fill: 'black',
            offset: { x: 0.5, y: 1.2 },
            pathData :'M16.261993,32L16.359985,31.934998 16.454987,32 16.48999,31.846008 32,20.705013 32,12.254999 16.359985,23.539014 0,12.254999 0,20.705013 15.77301,31.846008z'
          };
          obj.collapseIcon = {
            height: 20,
            width: 20,
            iconColor: 'white',
            cornerRadius: 10,
            borderColor: 'black',
            shape: 'None',
            fill: 'black',
            offset: { x: 0.5, y: 1.2 },
            pathData : 'M16.261993,0L16.359985,0.065002445 16.454987,0 16.48999,0.15399169 32,11.294986 32,19.745 16.359985,8.5149861 0,19.745 0,11.294986 16.22699,0.15399169z'
          };
        return obj;
    }, getConnectorDefaults: (connector, diagram) => {
        connector.targetDecorator.shape = 'None';
        connector.type = 'Orthogonal';
        connector.constraints = ej.diagrams.ConnectorConstraints.Default & ~ej.diagrams.ConnectorConstraints.Select;
        connector.style.strokeColor = 'gray';
        return connector;
    }, setNodeTemplate: (obj, diagram) => {
        let content = new ej.diagrams.StackPanel();
        content.id = obj.id + '_outerstack';
        content.orientation = 'Horizontal';
        content.style.strokeColor = obj.data.StrokeColor;
        content.style.fill = obj.data.Fill;
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
    
        let text = new ej.diagrams.TextElement();
        text.content = (obj.data).Name;
        text.style.color = obj.data.color;
        text.style.bold = obj.addInfo.IsBold;
        text.style.italic = obj.data.IsItalic;
        text.style.textDecoration = obj.data.Decoration;
        text.style.fontSize = obj.data.FontSize;
        text.style.fontFamily = obj.data.FontFamily;
        text.style.strokeColor = 'none';
        text.horizontalAlignment = 'Left';
        text.style.fill = 'none';
        text.id = obj.id + '_text1';
    
        let desigText = new ej.diagrams.TextElement();
        desigText.margin = { left: 0, right: 0, top: 5, bottom: 0 };
        desigText.content = (obj.data).Designation;
        desigText.style.color = obj.data.color;
        desigText.style.bold = obj.addInfo.IsBold;
        desigText.style.italic = obj.data.IsItalic;
        desigText.style.textDecoration = obj.data.Decoration;
        desigText.style.fontSize = obj.data.FontSize;
        desigText.style.fontFamily = obj.data.FontFamily;
        desigText.style.strokeColor = 'none';
        desigText.style.fill = 'none';
        desigText.horizontalAlignment = 'Left';
        desigText.style.textWrapping = 'Wrap';
        desigText.id = obj.id + '_desig';
    
        innerStack.children = [text, desigText];
    
        // Add the line to the innerStack, and the innerStack to the content stack
        innerStack.children = [line, text, desigText];
        content.children = [image, innerStack];
    
        return content;
    },
    scrollSettings:{minZoom: 0.3, maxZoom: 3.2},
    selectedItems: { constraints: ej.diagrams.SelectorConstraints.All | ej.diagrams.SelectorConstraints.userHandle, userHandles: userHandle },
    selectionChange: function (args) { DiagramClientSideEvents.prototype.selectionChange(args); },
    onUserHandleMouseDown: function (args) { DiagramClientSideEvents.prototype.onUserHandleMouseDown(args); },
    historyChange: function (args) { DiagramClientSideEvents.prototype.historyChange(args); },
    scrollChange: function (args) { DiagramClientSideEvents.prototype.scrollChange(args); },
    created: function () {
        diagram.fitToPage({ mode: 'Page', region: 'Content'});
        document.getElementById('zoomSliderText').value = Math.round(diagram.scrollSettings.currentZoom * 100) + '%';
    }
});
diagram.appendTo('#diagram');
var options = {};
options.sourceID = 'diagram';
overview = new ej.diagrams.Overview(options);
overview.appendTo('#overview');

document.getElementById("toggleOverviewButton").onclick = () =>{
    document.getElementById('overview-container').style.position = '';
    document.getElementById('overview-container').style.zIndex = '-1';
    toolbarObj.items[toolbarObj.items.length - 1].cssClass = toolbarObj.items[toolbarObj.items.length - 1].cssClass.replace('active', '');
};
function renameDiagram(args) {
    document.getElementsByClassName('db-diagram-name-container')[0].classList.add('db-edit-name');
    var element = document.getElementById('diagramEditable');
    element.value = document.getElementById('diagramName').innerHTML;
    element.focus();
    element.select();
};

function diagramNameKeyDown(args) {
    if (args.which === 13) {
        document.getElementById('diagramName').innerHTML = document.getElementById('diagramEditable').value;
        document.getElementsByClassName('db-diagram-name-container')[0].classList.remove('db-edit-name');
    }
};

function diagramNameChange(args) {
    document.getElementById('diagramName').innerHTML = document.getElementById('diagramEditable').value;
    document.getElementsByClassName('db-diagram-name-container')[0].classList.remove('db-edit-name');
    document.getElementById("exportfileName").value = document.getElementById('diagramName').innerHTML;
};

function getContent(obj) {
    var tooltipContent = document.createElement('div');
    tooltipContent.innerHTML = `
      <div>
        <table style="border-collapse: collapse; width: 200px; background-color: #f4f4f4;">
        <tr>
            <td style="border: 1px solid #d3d3d3; padding: 5px; background-color: #e9e9e9;">Name:</td>
            <td style="border: 1px solid #d3d3d3; padding: 5px;">${obj.Name}</td>
        </tr>
          <tr>
            <td style="border: 1px solid #d3d3d3; padding: 5px; background-color: #e9e9e9;">Role:</td>
            <td style="border: 1px solid #d3d3d3; padding: 5px;">${obj.Designation}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #d3d3d3; padding: 5px; background-color: #e9e9e9;">Empoyee ID:</td>
            <td style="border: 1px solid #d3d3d3; padding: 5px;">${obj.EmployeeID}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #d3d3d3; padding: 5px; background-color: #e9e9e9;">Team:</td>
            <td style="border: 1px solid #d3d3d3; padding: 5px;">${obj.Team}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #d3d3d3; padding: 5px; background-color: #e9e9e9;">Email ID::</td>
            <td style="border: 1px solid #d3d3d3; padding: 5px;">${obj.EmailId}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #d3d3d3; padding: 5px; background-color: #e9e9e9;">Phone Number:</td>
            <td style="border: 1px solid #d3d3d3; padding: 5px;">${obj.PhoneNumber}</td>
          </tr>
        </table>
      </div>`;
    return tooltipContent;
  }
  
  
  //Initialize Toolbar component
  var toolbarObj = new ej.navigations.Toolbar({
    clicked: function (args) { UtilityMethods.prototype.toolbarClick(args)},
    items: DropDownDataSources.prototype.toolbarItems(),
    width:'100%',
    overflowMode: 'Scrollable'
});
toolbarObj.appendTo('#toolbarEditor');

// Initialize slider component for zooming operation
var zoomSlider = new ej.inputs.Slider({
   value : diagram.scrollSettings.currentZoom * 100,
   max:300,
   min:30,
   type: 'MinRange',
   change: function (args) { UtilityMethods.prototype.zoomChange(args) },
});
zoomSlider.appendTo('#zoomSlider');


// Iniatilize the dropdown list component for font family change
var fontFamilyBtn = new ej.dropdowns.DropDownList({
    dataSource: DropDownDataSources.prototype.fontFamilyList(),
    index:0,
    popupHeight: '200px',
    select: function (args) { UtilityMethods.prototype.fontStyleChange(args) },
});
fontFamilyBtn.appendTo('#fontFamilyBtn');

// Iniatilize the dropdown button component for font size change
var fontSizeBtn = new ej.dropdowns.DropDownList({
    dataSource: DropDownDataSources.prototype.fontSizeList(),
    index:4,
    width: '60px',
    change: function (args) { UtilityMethods.prototype.fontStyleChange(args) },
});
fontSizeBtn.appendTo('#fontSizeBtn');

// Iniatilize the color picker component for font color change
var fontColorBtn = new ej.inputs.ColorPicker({
    change: function (args) { UtilityMethods.prototype.fontColorChange(args) },
    value: '#000000',
    mode: 'Palette',
    modeSwitcher: true,
});
fontColorBtn.appendTo('#fontColorBtn');

// Iniatilize the color picker component for fill color change
var fillColorBtn = new ej.inputs.ColorPicker({
    change: function (args) { UtilityMethods.prototype.fillColorChange(args) },
    mode: 'Palette',
    modeSwitcher: true
});
fillColorBtn.appendTo('#fillColorBtn');

// Iniatilize the color picker component for stroke color change
var strokeColorBtn = new ej.inputs.ColorPicker({
    change: function (args) { UtilityMethods.prototype.strokeColorChange(args) },
    value: '#000000',
    mode: 'Palette',
    modeSwitcher: true,
});
strokeColorBtn.appendTo('#strokeColorBtn');

// Initialize numeric text box component for horizontal spacing
var horizontalSpacing = new ej.inputs.NumericTextBox({
    value: 30,
    min: 30,
    max: 100,
    format:'n',
    step: 1,
    change: function () {
        diagram.layout.horizontalSpacing = Number(hSpacing.value);
        diagram.dataBind();
    }
});
horizontalSpacing.appendTo('#hSpacing');

// Initialize numeric text box component for vertical spacing
var verticalSpacing = new ej.inputs.NumericTextBox({
    value: 30,
    min: 30,
    max: 100,
    format:'n',
    step: 1,
    change: function () {
        diagram.layout.verticalSpacing = Number(vSpacing.value);
        diagram.dataBind();
    }
});
verticalSpacing.appendTo('#vSpacing');

// Initialize button component for re-layout
var reLayoutBtn = new ej.buttons.Button({
    isPrimary: true,
    label: 'Re-layout',
});
reLayoutBtn.appendTo('#reLayoutBtn');
document.getElementById('reLayoutBtn').onclick = (args)=>{
    diagram.doLayout()
}

//Click Event for orientation of the PropertyPanel.
document.getElementById('orientation').onclick = function (args) {
    var target = args.target;

    if (target.className.includes('image-pattern-style2')) {
        // Remove the 'e-selected-orientation-style' class from all divs with the class 'image-pattern-style'
        var divs = document.getElementsByClassName('image-pattern-style2');
        for (var i = 0; i < divs.length; i++) {
            divs[i].classList.remove('e-selected-orientation-style');
        }
        // Add the 'e-selected-orientation-style' class to the selected div
        target.classList.add('e-selected-orientation-style');
        // Update the diagram orientation based on the selected div
        var orientation1 =  target.id;
        diagram.layout.orientation = orientation1;
        diagram.dataBind();
        diagram.doLayout();
        diagram.fitToPage({ mode: 'Page', region: 'Content'});
    }
};

document.getElementById('pattern').onclick = function (args) {
    var target = args.target;

    if (target.className === 'image-pattern-style') {
        var subTreeOrientation;
        var subTreeAlignment;
        switch (target.id) {
            case 'pattern1':
                subTreeOrientation = 'Vertical';
                subTreeAlignment = 'Alternate';
                break;
            case 'pattern2':
                subTreeOrientation = 'Vertical';
                subTreeAlignment = 'Left';
                break;
            case 'pattern3':
                subTreeOrientation = 'Vertical';
                subTreeAlignment = 'Left';
                break;
            case 'pattern4':
                subTreeOrientation = 'Vertical';
                subTreeAlignment = 'Right';
                break;
            case 'pattern5':
                subTreeOrientation = 'Vertical';
                subTreeAlignment = 'Right';
                break;
            case 'pattern6':
                subTreeOrientation = 'Horizontal';
                subTreeAlignment = 'Balanced';
                break;
            case 'pattern7':
                subTreeOrientation = 'Horizontal';
                subTreeAlignment = 'Center';
                break;
            case 'pattern8':
                subTreeOrientation = 'Horizontal';
                subTreeAlignment = 'Left';
                break;
            case 'pattern9':
                subTreeOrientation = 'Horizontal';
                subTreeAlignment = 'Right';
                break;
            default:
                if (selectedpatternElement.length) {
                    selectedpatternElement[0].classList.remove('e-selected-pattern-style');
                }
        }
        // Remove the 'e-selected-orientation-style' class from all divs with the class 'image-pattern-style'
        var divs = document.getElementsByClassName('image-pattern-style');
        for (var i = 0; i < divs.length; i++) {
            divs[i].classList.remove('e-selected-pattern-style');
        }
        // Add the 'e-selected-orientation-style' class to the selected div
        target.classList.add('e-selected-pattern-style');
        diagram.layout.getLayoutInfo = function (node, options) {
            if (target.id === 'pattern4' || target.id === 'pattern3') {
                options.offset = -50;
            }
            if (node.data.Role === 'General Manager') {
                options.assistants.push(options.children[0]);
                options.children.splice(0, 1);
            }
            if (!options.hasSubTree) {
                options.orientation = subTreeOrientation;
                options.type = subTreeAlignment;
            }
        };
        diagram.dataBind();
        diagram.doLayout();
        diagram.fitToPage({ mode: 'Page', region: 'Content'});
    }
};


// Initialize button component for add assistant
var addAssistantBtn = new ej.buttons.Button({
    isPrimary: true,
    // label: 'Add Assistant',
    iconCss:'sf-icon-add-child',
});
addAssistantBtn.appendTo('#addAssistantBtn');
document.getElementById('addAssistantBtn').onclick = (args)=>{
    DiagramClientSideEvents.prototype.addChild(args);
};

// Initialize dropdownbutton component for insert/remove picture.
var insertPicture = new ej.splitbuttons.DropDownButton({
    items: DropDownDataSources.prototype.pictureItems(),
    content: 'Picture',
    iconCss:'sf-icon-insert_image',
    select: function (args) { UtilityMethods.prototype.insertOrRemovePicture(args) },
});
insertPicture.appendTo('#pictureDropdown');

// Iniatialize dropdownbutton component for shape Templates.
var shapeTemplates = new ej.splitbuttons.DropDownButton({
    items: DropDownDataSources.prototype.shapeTemplatesItems(),
    content:'Templates',
    iconCss:'e-icons e-properties-2',
    select: function (args) { UtilityMethods.prototype.changeShapeTemplates(args) },
});
shapeTemplates.appendTo('#shapeTemplatesDropDown');

// Iniatialize multiselect dropdown component for Fields.

var fieldsList = new ej.dropdowns.MultiSelect({
    // set the country data to dataSource property
    dataSource: DropDownDataSources.prototype.fieldsListItems(),
    // map the appropriate columns to fields property
    fields: { text: 'Name', value: 'Code' },
    // set the placeholder to MultiSelect input element
    placeholder: 'Fields',
    // set the type of mode for checkbox to visualized the checkbox added in li element.
    mode: 'CheckBox',
    // set true for enable the selectAll support.
    showSelectAll: true,
    value: ['Name', 'Desig'],
    // set the placeholder to MultiSelect filter input element
    filterBarPlaceholder: 'Search data',
    // set the MultiSelect popup height
    popupHeight: '350px',
    // select: function (args) { UtilityMethods.prototype.changeFields(args) },
    change: function (args) { UtilityMethods.prototype.changeFields(args) },
});
fieldsList.appendTo('#fieldsDropdown');

// Initialize button component for search.

var searchBtn = new ej.buttons.Button({
    isPrimary: true,
    iconCss:'e-icons e-search',
    cssClass:'db-search-btn'
});
searchBtn.appendTo('#searchBtn');

document.getElementById('searchBtn').onclick = (args)=>{
    searchDialog.show();
}

// Initialize checkbox component for expandable layout.

var expandable = new ej.buttons.CheckBox({
    label: 'Expandable',
    checked: false,
    change: function (args) { 
        for (let node of diagram.nodes) {
            if (args.checked) {
                node.expandIcon.shape = 'Minus';
                node.collapseIcon.shape = 'Plus';
            } else {
                node.expandIcon.shape = 'None';
                node.collapseIcon.shape = 'None';
            }
        }
        diagram.dataBind();
        diagram.doLayout();
     },
});
expandable.appendTo('#expandable');

// Edit Node dialog
var editNodeDialog = new ej.popups.Dialog({
    width: '400px',
    header: 'Properties',
    target: document.body,
    isModal:true,
    animationSettings: { effect: 'None' },
    showCloseIcon: true,
    visible: false,
    buttons: UtilityMethods.prototype.getDialogButtons('editNode'),
    content: '<div id="editNodeDialogContent">' +
    '<div class="row"><div class="row">Name</div><div class="row db-dialog-child-prop-row"><input type="text" id="nodeName"></div></div>' +
    '<div class="row db-dialog-prop-row"><div class="row">Role</div><div class="row db-dialog-child-prop-row"><input type="text" id="nodeRole"></div></div>' +
    '<div class="row db-dialog-prop-row"><div class="row">Employee ID</div><div class="row db-dialog-child-prop-row"><input type="text" id="nodeEmployeeID"></div></div>' +
    '<div class="row db-dialog-prop-row"><div class="row">Team</div><div class="row db-dialog-child-prop-row"><input type="text" id="nodeTeam"></div></div>' +
    '<div class="row db-dialog-prop-row"><div class="row">E-mail</div><div class="row db-dialog-child-prop-row"><input type="text" id="nodeEmail"></div></div>' +
    '<div class="row db-dialog-prop-row"><div class="row">Phone Number</div><div class="row db-dialog-child-prop-row"><input type="text" id="nodePhoneNumber"></div></div>' +
    '</div>'

});
editNodeDialog.appendTo('#editNodeDialog');

// Export dialog
var exportDialog = new ej.popups.Dialog({
    width: '400px',
    header: 'Export Diagram',
    target: document.body,
    isModal: true,
    animationSettings: { effect: 'None' },
    buttons: UtilityMethods.prototype.getDialogButtons('export'),
    visible: false,
    showCloseIcon: true,
    content: '<div id="exportDialogContent"><div class="row"><div class="row"> File Name </div> <div class="row db-dialog-child-prop-row">' +
     '<input type="text" id="exportfileName" value = "Untitled Diagram"></div></div>' +
     '<div class="row db-dialog-prop-row"> <div class="col-xs-6 db-col-left"> <div class="row"> Format </div>' +
     '<div class="row db-dialog-child-prop-row"> <input type="text" id="exportFormat"/> </div> </div>' +
     '<div class="col-xs-6 db-col-right"> <div class="row"> Region </div> <div class="row db-dialog-child-prop-row">' +
     '<input type="text" id="exportRegion"/></div></div></div></div>'
});
exportDialog.appendTo('#exportDialog');

var exportFormat = new ej.dropdowns.DropDownList({
    dataSource:DropDownDataSources.prototype.fileFormats(),
    fields: { text: 'text', value: 'value' },
    index:0
});
exportFormat.appendTo('#exportFormat');

  // dropdown template for exportDialog control
var exportRegion = new ej.dropdowns.DropDownList({
    dataSource:DropDownDataSources.prototype.diagramRegions(),
    fields: { text: 'text', value: 'value' },
    index:0
});
exportRegion.appendTo('#exportRegion');

// Print dialog
var printDialog = new ej.popups.Dialog({
    width: '335px',
    header: 'Print Diagram',
    target: document.body,
    isModal: true,
    animationSettings: { effect: 'None' },
    buttons: UtilityMethods.prototype.getDialogButtons('print'),
    visible: false,
    showCloseIcon: true,
    content: '<div id="printDialogContent">' +
    '<div class="row"><div class="row">Region</div> <div class="row db-dialog-child-prop-row">' +
    '<input type="text" id="printRegionDropdown"/> </div> </div>' +
    '<div class="row db-dialog-prop-row" style="margin-top: 16px"> <input id="printScaleToFit" type="checkbox" /></div>' +
    '</div>'

});
printDialog.appendTo('#printDialog');

// dropdown template for printDialog control
var printRegionDropdown = new ej.dropdowns.DropDownList({
    dataSource:DropDownDataSources.prototype.diagramRegions(),
    fields: { text: 'text', value: 'value' },
    index: 0,
});
printRegionDropdown.appendTo('#printRegionDropdown');

// checkbox template for printDialog control
var printMultiplePage = new ej.buttons.CheckBox({ label: 'Scale to fit 1 page', checked: true,
change: function (args) {multiplePage(args); }
});
printMultiplePage.appendTo('#printScaleToFit');

// Initialize the search dialog component.
var searchDialog = new ej.popups.Dialog({
    width: '370px',
    header: 'Search Nodes',
    height:'300px',
    position: { X:'right', Y: 'center' },
    allowDragging: true,
    content: '<div id="searchDialogContent">' +
    '<div class="row"><div class="row">Search By</div> <div class="row db-dialog-child-prop-row">' +
    '<input type="text" id="searchDropDown"/> </div><div class="row">Search Value</div> <div class="row db-dialog-child-prop-row">' +
    '<input type="text" id="searchBox"/> </div> </div>' + '</div>',
    visible: false,
    buttons: UtilityMethods.prototype.getDialogButtons('search'),
    showCloseIcon: true,
    target: document.body,
});
searchDialog.appendTo('#searchDialog');

// dropdown template for printDialog control
var searchDropDown = new ej.dropdowns.DropDownList({
    dataSource:DropDownDataSources.prototype.searchDropDownItems(),
    fields: { text: 'text', value: 'value' },
    index: 0,
});
searchDropDown.appendTo('#searchDropDown');


// Iniatilize the uploader component.
var uploadObj = new ej.inputs.Uploader({
    asyncSettings: {
        saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
    },
    success: onUploadSuccess,
    showFileList:false
});
uploadObj.appendTo('#fileupload');

function onUploadSuccess(args) {
    var file1 = args.file;
    var file = file1.rawFile;
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onloadend = loadDiagram;
}
//Load the diagraming object.
function loadDiagram(event) {
    diagram.loadDiagram(event.target.result);
    diagram.fitToPage({mode:'Page',region:'Content'});
}

// Initialize the uploader component for picture.

var pictureUploadObj = new ej.inputs.Uploader({
    asyncSettings: {
        saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
    },
    success: onPictureUploadSuccess,
    showFileList:false
});
pictureUploadObj.appendTo('#pictureUpload');
function onPictureUploadSuccess(args){
    const file = args.file;
    const reader = new FileReader();
    reader.onload = function () {
        const base64String = reader.result;
        applyBase64AsImageUrl(base64String); 
    };
    reader.readAsDataURL(file.rawFile);
}

function applyBase64AsImageUrl(base64String) {
    let selectedNode = diagram.selectedItems.nodes[0];
    selectedNode.data.ImageUrl = base64String;
    diagram.dataSourceSettings.dataSource.dataSource.json.find(x=>x.Id == selectedNode.data.Id).ImageUrl = base64String;
    var imageTag = document.getElementById(selectedNode.id+'_picimage');
    imageTag.href.baseVal = base64String;
}

function beforeItemRender(args) {
    var shortCutText = getShortCutKey(args.item.text);
    if (shortCutText) {
        var shortCutSpan = document.createElement('span');
        var text = args.item.text;
        shortCutSpan.textContent = shortCutText;
        shortCutSpan.style.pointerEvents = 'none';
        args.element.appendChild(shortCutSpan);
        shortCutSpan.setAttribute('class', 'db-shortcut');
    }
}

function getShortCutKey(menuItem) {
    var shortCutKey = navigator.platform.indexOf('Mac') > -1 ? 'Cmd' : 'Ctrl';
    switch (menuItem) {
        case 'New':
            shortCutKey = 'Shift' + '+N';
            break;
        case 'Open':
            shortCutKey = shortCutKey + '+O';
            break;
        case 'Save':
            shortCutKey = shortCutKey + '+S';
            break;
        default:
            shortCutKey = '';
            break;
    }
    return shortCutKey;
}
    var menuItems = [
        {
            text: 'File',
            items: DropDownDataSources.prototype.getFileMenuItems()
        },
        {
            text: 'Design',
            items: DropDownDataSources.prototype.getDesignMenuItems()
        },
        {
            text: 'View',
            items: DropDownDataSources.prototype.getViewMenuItems()
        }
    ];

    //Menu initialization
   var menubar =  new ej.navigations.Menu({ items: menuItems ,beforeItemRender:beforeItemRender,select:menuClick}, '#menu');

   function menuClick (args)
    {
        var option = args.item.text;
        switch(option)
        {
            case 'New':
                diagram.clear();
                DiagramClientSideEvents.prototype.historyChange();
                break;
            case 'Save':
                UtilityMethods.prototype.download(diagram.saveDiagram());
                break;
            case 'Print':
                printDialog.show();
                break;
            case 'Export':
                exportDialog.show();
                break;
            case 'Open':
                document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
                break;
            case 'Landscape':
                args.item.parentObj.items[1].iconCss = '';
                args.item.iconCss = 'sf-icon-check-tick';
                diagram.pageSettings.orientation = 'Landscape';
                break;
            case 'Portrait':
                args.item.parentObj.items[0].iconCss = '';
                args.item.iconCss = 'sf-icon-check-tick';
                diagram.pageSettings.orientation = 'Portrait';
                break;
            case 'Letter (8.5 in x 11 in)':
            case 'Legal (8.5 in x 14 in)':
            case 'A3 (297 mm x 420 mm)':
            case 'A4 (210 mm x 297 mm)':
            case 'A5 (148 mm x 210 mm)':
            case 'A6 (105 mm x 148 mm)':
            case 'Tabloid (279 mm x 432 mm)':
                UtilityMethods.prototype.paperListChange(args)
                UtilityMethods.prototype.updateSelection(args.item)
                break;
           
            case 'Show Lines':
                diagram.snapSettings.constraints = diagram.snapSettings.constraints ^ ej.diagrams.SnapConstraints.ShowLines;
                args.item.iconCss = args.item.iconCss ? '' : 'sf-icon-check-tick';
                break;
            case 'Snap To Grid':
                diagram.snapSettings.constraints = diagram.snapSettings.constraints ^ ej.diagrams.SnapConstraints.SnapToLines;
                args.item.iconCss = args.item.iconCss ? '' : 'sf-icon-check-tick';
                break;
            case 'Snap To Object':
                diagram.snapSettings.constraints = diagram.snapSettings.constraints ^ ej.diagrams.SnapConstraints.SnapToObject;
                args.item.iconCss = args.item.iconCss ? '' : 'sf-icon-check-tick';
                break;
            case 'Show Ruler':
                args.item.iconCss = args.item.iconCss ? '' : 'sf-icon-check-tick';
                diagram.rulerSettings.showRulers = !diagram.rulerSettings.showRulers;
                break;
            case 'Show Page Breaks':
                args.item.iconCss = args.item.iconCss ? '' : 'sf-icon-check-tick';
                diagram.pageSettings.showPageBreaks = !diagram.pageSettings.showPageBreaks;
                break;
            case 'Show Multiple page':
                args.item.iconCss = args.item.iconCss ? '' : 'sf-icon-check-tick';
                diagram.pageSettings.multiplePage = ! diagram.pageSettings.multiplePage;
                break;
            case 'Fit To Width':
                diagram.fitToPage({mode:'Width'});
                document.getElementById('zoomSliderText').value = Math.round(diagram.scrollSettings.currentZoom * 100) + '%';
                zoomSlider.value = Math.round(diagram.scrollSettings.currentZoom * 100);
                break;
            case 'Fit To Page':
                diagram.fitToPage({ mode: 'Page', region: 'Content'});
                document.getElementById('zoomSliderText').value = Math.round(diagram.scrollSettings.currentZoom * 100) + '%';
                zoomSlider.value = Math.round(diagram.scrollSettings.currentZoom * 100);
                break;
        }
        diagram.dataBind();
    };

    var PaperSize = (function () {
        function PaperSize() {
        }
        return PaperSize;
    }());