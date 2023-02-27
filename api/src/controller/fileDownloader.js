
import {MongoClient, GridFSBucket} from "mongodb"

const dbConfig = {
    url: process.env.DB_CONNECTION,
    database: "classroom_files_db",
    fileBucket: "classroomfile",
  };

const mongoClient = new MongoClient(dbConfig.url);

const fileDownload = async (req, res) => {
    try {
      await mongoClient.connect();
  
      const database = mongoClient.db(dbConfig.database);
      const bucket = new GridFSBucket(database, {
        bucketName: dbConfig.fileBucket
      });
      console.log("downloading " + req.params.name)
      let downloadStream = bucket.openDownloadStreamByName(req.params.name);
  
      downloadStream.on("data", function (data) {
        return res.status(200).write(data);
      });
  
      downloadStream.on("error", function (err) {
        return res.status(404).send({ message: "Cannot download the Image!" });
      });
  
      downloadStream.on("end", () => {
        return res.end();
      });
    } catch (error) {
      return res.status(500).send({
        message: error.message,
      });
    }
  };

export default fileDownload;