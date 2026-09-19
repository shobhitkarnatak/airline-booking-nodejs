const express = require("express");
const apiRoutes = require("./routes");
const { dbConnection, sequelize } = require("./config/dbConnect");
const serverConfig = require("./config/server-config");
require("./models/airplaneModel");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

const startServer = async () => {
  try {
    await dbConnection();
    // await sequelize.sync({ filter: true });

    //   insert()
    console.log("✅ Database synced successfully");

    // Start Express server
    app.listen(serverConfig.PORT, () => {
      console.log(
        `Successfully started the serve on PORT: ${serverConfig.PORT}`,
      );
      // Logger.info("Successfully started the logger")
    });
  } catch (error) {
    console.error("❌ Error starting server:", error);
  }
};

startServer();
