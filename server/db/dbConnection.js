const { Pool } = require("pg")
const url = require("url")

const getConfig = require("./db.config")
const db_url = getConfig()

const params = url.parse(db_url)
const [username, password] = params.auth.split(":")
const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split("/")[1],
  max: process.env.NODE_ENV === "production" ? 8 : 1,
  user: username,
  password,
  ssl: params.hostname !== "localhost",
}

module.exports = new Pool(options)
