'use strict'

const fs = require('fs')

class FileWriter {
  constructor (options) {
    this.label = 'file writer'
    this.inPlace = false
    this.dirty = true

    this.options = options || {}
  }

  process (data, filename) {
    filename = filename || this.options.filename

    return new Promise((resolve, reject) => {
      fs.writeFile(filename, new Buffer(new Uint8Array(data)), (err) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  }
}

module.exports = FileWriter
