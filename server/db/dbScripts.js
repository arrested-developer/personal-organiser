const fs = require("fs")
const path = require("path")
const { Client } = require("pg")

const getConfig = require("./db.config")
const options = getConfig()

const runSqlFile = fpath => async () => {
  const sql = fs.readFileSync(fpath, "utf8")
  const client = new Client(options)
  await client.connect()
  await client.query(sql)
  await client.end()
}

const build = runSqlFile(path.resolve(__dirname, "scripts", "schema.sql"))
const destroy = runSqlFile(path.resolve(__dirname, "scripts", "drop.sql"))
const empty = runSqlFile(path.resolve(__dirname, "scripts", "empty.sql"))
const populate = runSqlFile(path.resolve(__dirname, "scripts", "data.sql"))
const refresh = async () => {
  await destroy()
  await build()
  await populate()
}

module.exports = {
  build,
  destroy,
  empty,
  populate,
  refresh,
}
