var validateText = function (msg) {
    var commitMessageRegexPattern = new RegExp('(Story: B-|BugId: |Epic: E-)[0-9]* \| .*$');
    var match = commitMessageRegexPattern.test(msg);
    var statusCode = 1;
    if (match) {
        console.log('PASS: Naming convention validation');
        statusCode = 0;
    }
    else {
        console.log('ERROR: Naming convention validation');
    }
    return statusCode;
}

var validateBranch = function (branchName) {
    var blockedBranches = ['master', 'staging', 'develop'];
    if(blockedBranches.contains(branchName)) {
		return 1;
	}
	else {
		return 0;
	}
}

module.exports = {
    validate: function (commitMsg, branchName) {
        var statusCode = 1;
        if (validateText(commitMsg) === 0 && validateBranch(branchName) === 0) {
            statusCode = 0;
        }
        return statusCode;
    }
};