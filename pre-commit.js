var validateBranchName = function(branchName) {
    var statusCode = 1;
    console.log(branchName);
    statusCode = 0;
    return statusCode;
}

var checkForConflictMarkers = function (conflictMarkers) {
    var statusCode = 1;
    console.log(conflictMarkers);
    statusCode = 0;
    return statusCode;
}

var getLinterCommandArguments = function(filesStaged, extension) {
    var filesSplit = filesStaged.split('\n');
    var filteredFiles = [];
    
    for (var i = 0; i < filesSplit.length; i++)
    {
        var fileName = filesSplit[i];
        // if there's no period in the filename, there is no extension
        if (fileName.indexOf('.') > 0) {
            var fileExt = fileName.substr(fileName.lastIndexOf('.') + 1);
            if (fileExt === extension) {
                filteredFiles.push(fileName);
            }
        }
    }
    return filteredFiles;
}

module.exports = {
    getLinterCommandArguments: getLinterCommandArguments,
    validate: function (branchName, conflictMarkers) {
        var statusCode = 1;
        if (validateBranchName(branchName) == 0) { // && checkForConflictMarkers(conflictMarkers) == 0) {
            statusCode = 0;
        };
        return statusCode;
    }
};