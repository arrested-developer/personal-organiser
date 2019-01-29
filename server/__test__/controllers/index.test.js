const test = require("tape")
const request = require("supertest")

const router = require("../../app.js")

test("api/message should return 200", t => {
  t.plan(1)
  request(router)
    .get("/api/message/")
    .expect(200)
    .then(res => {
      t.assert(res.text, "Message from Express", "Gives expected message")
      t.end()
    })
})
