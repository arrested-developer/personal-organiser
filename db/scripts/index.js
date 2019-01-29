const fs = require("fs")
const path = require("path")
const { Client } = require("pg")

const dbUrl = {
  test: "super:pass123@localhost:5432/per-org-test",
  development: "super:pass123@localhost:5432/per-org",
}

const runSqlFile = fpath => async () => {
  const sql = fs.readFileSync(fpath, "utf8")
  const url = dbUrl[process.env.NODE_ENV]
  if (!url) {
    throw new Error(`db url for ${process.env.NODE_ENV} not set`)
  } else {
    const client = new Client(url)
    await client.connect()
    await client.query(sql)
    await client.end()
  }
}

const build = runSqlFile(path.resolve(__dirname, "..", "schema.sql"))
const destroy = runSqlFile(path.resolve(__dirname, "..", "drop.sql"))
const empty = runSqlFile(path.resolve(__dirname, "..", "empty.sql"))
const populate = runSqlFile(path.resolve(__dirname, "..", "data.sql"))
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
