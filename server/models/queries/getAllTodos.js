const getAllTodosQuery = "SELECT * FROM todos"

const getAllTodos = dbConnection =>
  dbConnection.query(getAllTodosQuery).then(res => res.rows)

module.exports = getAllTodos
