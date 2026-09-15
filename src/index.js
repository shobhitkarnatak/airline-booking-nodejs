const express = require("express")
const { PORT } = require('./config')
const { ServerConfig } = require('./config')
const apiRoutes = require('./routes')

const app = express()
app.use('/api', apiRoutes)

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the serve on PORT: ${ServerConfig.PORT}`)
    // Logger.info("Successfully started the logger")
})