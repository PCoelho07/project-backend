
const mongooose = require('mongoose')

const ToolsSchema = new mongooose.Schema({
  title: String,
  link: String,
  description: String,
  tags: [{
    type: String
  }]
}, {
    timestamps: true
  })


module.exports = mongooose.model('Tools', ToolsSchema)
