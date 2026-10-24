const fs = require("fs");
function ErrorLogger(err, req, res, next) {
  fs.appendFile(
    "ErrorLogger.txt",
    "\n" + err.stack + new Date().toTimeString(),
    (error) => {
      if (error) console.log("Cannot write file" + error);
    },
  );
  if (err.status) res.status(err.status);
  else res.status(400);
  res.json({ message: err.message });
  next();
}

module.exports = ErrorLogger;
