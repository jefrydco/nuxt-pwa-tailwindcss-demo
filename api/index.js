import fs from 'fs'
import queryString from 'query-string'

// Taken from: https://stackoverflow.com/a/42761393/7711812
function paginate(array, pageSize, pageNumber) {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
}

function getData(fileName, type) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, type, (err, data) => {
      err ? reject(err) : resolve(data)
    })
  })
}

export default async function (req, res, next) {
  const { page = 1, size = 10 } = queryString.parse(
    req._parsedOriginalUrl.query
  )
  const data = await getData('./data/data.json')
  res.end(JSON.stringify(paginate(JSON.parse(data), size, page)))
}
