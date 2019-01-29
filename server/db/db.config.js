const url = require("url")
const path = require("path")

require("env2")(path.join(__dirname, "..", "..", "config.env"))

if (!process.env.NODE_ENV)
  throw new Error("NODE_ENV must be set to production, development or test")
else if (process.env.NODE_ENV === "test" && !process.env.DATABASE_URL_TEST)
  throw new Error("DATABASE_URL_TEST must be set in test environment")
else if (
  process.env.NODE_ENV === "development" &&
  !process.env.DATABASE_URL_DEV
)
  throw new Error("DATABASE_URL_DEV must be set in development environment")
else if (process.env.NODE_ENV === "production" && !process.env.DATABASE_URL)
  throw new Error("DATABASE_URL must be set in production environment")

const db_url = {
  development: process.env.DB_URL_DEV,
  production: process.env.DB_URL,
  test: process.env.DB_URL_TEST,
}

module.exports = () => {
  const params = url.parse(db_url[process.env.NODE_ENV])
  const [username, password] = params.auth.split(":")
  return {
    host: params.hostname,
    port: params.port,
    database: params.pathname.split("/")[1],
    max: process.env.NODE_ENV === "test" ? 1 : 8,
    user: username,
    password,
    ssl: params.hostname !== "localhost",
  }
}
