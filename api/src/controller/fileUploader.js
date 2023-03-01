import fileSchema from "../models/fileSchema.js";

const uploadFiles = async (req, res) => {
  try {
    const file = fileSchema(req.body);
    console.log("uploading ");
    file.save().then((data) => res.json({ class: data, valid: true }));
    console.log('Saved')
  } catch (error) {
    console.log(error.message);
    res.send("Uploading failed");
  }
}

export default uploadFiles;
