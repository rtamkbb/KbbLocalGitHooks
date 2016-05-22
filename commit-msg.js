var validateText = function (msg) {
    var commitMessageRegexPattern = new RegExp('(Story: B-|BugId: )[0-9]* \| .*$');
    var match = commitMessageRegexPattern.test(msg);
    if (match) {
        console.log('PASS: Naming convention validation');
    }
    else {
        console.log('ERROR: Naming convention validation');
    }
}

var validateLength = function (msg) {
    if (!msg) {
        console.log('ERROR: No message');
    }
    else if (msg.length < 8) {
        console.log('ERROR: Message too short');
    }
    else if (msg.length > 50) {
        console.log('ERROR: Message too long');
    } else {
        console.log('PASS: Message length passes')
    }
}

var validateASCIICharacters = function (msg) {
    var ASCIIRegex = /^[ -~]+$/
    var isASCII = ASCIIRegex.test(msg);
    if (isASCII) {
        console.log('ERROR: Invalid characters detected');
    } else {
        console.log('PASS: No invalid characters detected');
    }
}

module.exports = {
    validate: function (msg) {
        console.log('Your commit message:');
        console.log(msg);
        validateText(msg);
        validateLength(msg);
        validateASCIICharacters(msg);
    }
};