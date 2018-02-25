var express = require("express");
var app = express();

app.get("/", function(req, res) {
    var returnObj = {
        ipaddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        language: req.acceptsLanguages(req.headers["accept-language"].substring(0, 5)),
        software: req.headers["user-agent"].substring(req.headers["user-agent"].indexOf("(") + 1, req.headers["user-agent"].indexOf(")"))
    };
    res.send(returnObj);
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!");
})
