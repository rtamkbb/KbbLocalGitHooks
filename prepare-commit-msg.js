module.exports = {
    validate: function (currentBranchName, mergeFromBranchName) {
        var statusCode = 1;
        console.log("currentBranchName: " + currentBranchName);
        console.log("mergeFromBranchName: " + mergeFromBranchName);
        return statusCode;
    }
};