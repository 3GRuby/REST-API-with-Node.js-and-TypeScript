import mongoose from "mongoose";
import config from "config";
import log from "../logger/index";

function connect() {
  const dbUri = config.get<string>("dbUri");

  return mongoose
    .connect(dbUri)
    .then(() => {
      log.info("Database connected");
    })
    .catch((error) => {
      log.error("db error", error);
      process.exit(1);
    });
}
export default connect;
