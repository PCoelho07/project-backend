
const Tools = require('./../models/tools')

exports.index = async (req, res) => {
  try {
    const data = req.query
    let filter = {}

    if ("tag" in data) {
      filter = {
        'tags': data.tag
      }
    }

    const tools = await Tools.find(filter, 'title link description tags').sort('-createdAt')

    return res
      .json(tools)
  }
  catch (err) {
    return res.json({
      error: err
    })
  }
}


exports.store = async (req, res) => {
  try {

    const data = req.body

    const tools = await Tools.create(data)

    return res
      .json(tools)
  }
  catch (err) {
    return res
      .json({
        error: err
      })
  }
}


exports.delete = async (req, res) => {
  try {

    const { toolsId } = req.params

    if (!toolsId.match(/^[0-9a-fA-F]{24}$/)) {
      return res
        .json({
          error: "Please, enter a valid id"
        })
    }

    const tools = await Tools.deleteOne({ '_id': toolsId })

    if (!tools) {
      return res
        .json({
          error: "Tool not found!"
        })
    }

    return res
      .json({})

  }
  catch (err) {
    return res
      .json({
        error: err
      })
  }
}
