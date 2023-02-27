import util from "util";
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";


const dbConfig = {
    url: process.env.DB_CONNECTION,
    database: "classroom_files_db",
    fileBucket: "classroomfile",
  };


var storage = new GridFsStorage({
  url: dbConfig.url + dbConfig.database,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-classroomfile-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: dbConfig.fileBucket,
      filename: `${Date.now()}-classroomfile-${file.originalname}`
    };
  }
});

var uploadFiles = multer({ storage: storage }).array("file", 10);
var uploadFilesMiddleware = util.promisify(uploadFiles);

//module.exports = uploadFilesMiddleware;
export default uploadFilesMiddleware;