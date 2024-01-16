const express = require("express")
const carRouter = require("./routes/carRouter")
const mongoose = require("mongoose")
var cors = require('cors')

const app = express()
const port = 3100

const jsonParser = express.json()

app.use(cors())
app.use("/api/cars", jsonParser, carRouter)

const DBNAME = "angularLab"
const URI = `mongodb://127.0.0.1:27017/${DBNAME}`

async function main() {
  try {
    await mongoose.connect(URI)
    console.log(`DB Connection successfully`)
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } catch (err) {
    return console.log(err)
  }
}

main()

// DISCONNECT
process.on("SIGINT", async () => {
  await mongoose.disconnect()
  console.log("Disconnect is successfully !")
  process.exit()
})
