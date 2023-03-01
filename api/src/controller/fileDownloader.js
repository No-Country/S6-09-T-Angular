import fileSchema from "../models/fileSchema.js";
import fs from 'fs';

const fileDownload = async (req, res) => {
  try {
    const {id}  = req.params;
    console.log('searching for ' + id);
    let user = await fileSchema.find({_id: id});

    /// convert base64 to img
  //   let filename = user[0].filename
  //   let base64String = user[0].file
  //   let base64Image = base64String.split(';base64,').pop();
  //   console.log('downloading '+ filename)

  //   fs.writeFile(filename+'.jpg', base64Image, {encoding: 'base64'}, function(err) {
  //     console.log('File created');
  // });

    res.send(user);

  } catch (error) {
    console.log(error.message);
    return res.status(500).send("File doesn't exist");
  }
};

export default fileDownload;