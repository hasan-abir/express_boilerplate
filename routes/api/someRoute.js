const router = require("express")()

router.get("/", (req, res) => {
  res.send("GET request")
})

router.post("/", (req, res) => {
  res.send("POST request")
})

router.delete("/", (req, res) => {
  res.send("DELETE request")
})

module.exports = router
