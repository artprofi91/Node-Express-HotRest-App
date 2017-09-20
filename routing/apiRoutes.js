
var rData = require("../data/rData");
var wData = require("../data/wData");

module.exports = function(app) {

  app.get("/api/tables", function(req, res) {
    res.json(rData);
  });

  app.get("/api/waitlist", function(req, res) {
    res.json(wData);
  });

  app.post("/api/tables", function(req, res) {
  
    if (rData.length < 5) {
      rData.push(req.body);
      res.json(true);
    }
    else {
      wData.push(req.body);
      res.json(false);
    }
  });
  app.post("/api/clear", function() {
    rData = [];
    wData = [];

    console.log(rData);
  });
};
