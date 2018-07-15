const fs = require('fs')

module.exports = (path, callback) => {
  fs.readFile(path, (err, data) => {
    if (err) callback(err)
    else callback(null, data)
  })
}
