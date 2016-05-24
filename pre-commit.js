var runLinters = function (filesStaged) {
    var statusCode = 1;
    console.log(filesStaged);
    statusCode = 0;
    return statusCode;
}

module.exports = {
    validate: function (filesStaged) {
        var statusCode = 1;
        if (runLinters(filesStaged) == 0) {
            statusCode = 0;
        };
        return statusCode;
    }
};