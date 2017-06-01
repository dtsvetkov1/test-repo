// extract folder listing arguments from URI
var verbose = (args.verbose == "true" ? true : false);
var folderpath = url.templateArgs.folderpath;

// additional - get folder size
function getSize(directory, length) {
      var length = 0;
      for (var i in directory.children) {
        if (directory.children[i].isContainer) {
            length += getSize(directory.children[i], length);
       }
        else {
           length += directory.children[i].properties.content.size  / (1024*1024);
       }
    }
    return length;
}


// search for folder within Alfresco content repository
var folder = roothome.childByNamePath(folderpath);

var total_list = [];

// total_list = [1, 2 , 3, 4, 5, 6];

// validate that folder has been found
if (folder == undefined || !folder.isContainer) {
   status.code = 404;
   status.message = "Folder " + folderpath + " not found.";
   status.redirect = true;
}
else {
     for (child in folder.children) {
         var property = {"child": folder.children[child]};
         if (property.child.isContainer) {
                 var length = 0;
                 property.size = getSize(property.child, length);  
        }
        else {
                 property.size = property.child.properties.content.size / (1024*1024); }
                 total_list.push(property);
}
}



// construct model for response template to render
model.verbose = verbose;
model.folder = folder; 
//model.FolderSize = FolderSize;
model.total_list = total_list;
