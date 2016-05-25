var validateText = function (msg) {
    var commitMessageRegexPattern = new RegExp('(Story: B-|BugId: )[0-9]* \| .*$');
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

var validateLength = function (msg) {
    var statusCode = 1;
    if (!msg) {
        console.log('ERROR: No message');
    }
    else if (msg.length < 8) {
        console.log('ERROR: Message too short');
    }
    else if (msg.length > 50) {
        console.log('ERROR: Message too long');
    } else {
        console.log('PASS: Message length passes');
        statusCode = 0;
    }
    return statusCode;
}

var validateASCIICharacters = function (msg) {
    var statusCode = 1;
    var ASCIIRegex = /^[ -~]+$/
    var isASCII = ASCIIRegex.test(msg);
    if (isASCII) {
        console.log('ERROR: Invalid characters detected');
    } else {
        console.log('PASS: No invalid characters detected');
        statusCode = 0;
    }
    return statusCode;
}

module.exports = {
    validate: function (msg) {
        console.log('Your commit message:');
        var statusCode = 1;
        console.log(msg);
        if (validateText(msg) === 0 && validateLength(msg) === 0 && validateASCIICharacters(msg) === 0) {
            statusCode = 0;
        }
        return statusCode;
    }
};