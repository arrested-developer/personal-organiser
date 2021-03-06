const test = require("tape")
const { Client } = require("pg")
const { refresh } = require("../../db/dbScripts")
const getAllTodos = require("../../models/queries/getAllTodos")
const dbConfig = require("../../db/db.config")()

test("db queries :: getAllTodos", async t => {
  t.plan(1)
  await refresh()
  const client = new Client(dbConfig)
  await client.connect()
  const todos = await getAllTodos(client)
  await client.end()
  t.equal(todos.length, 3, "getAllTodos returns 3 rows")
  t.end()
})
