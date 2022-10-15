const fs = require('fs');

const media = (req, name) => {
  let file = null;
  if (req.files[name] && req.files[name][0].filename) {
    file = req.files[name][0].filename;
  }
  return file;
}

const updateUploadMedia = (req, name, editName) => {
  let file = null;
  if (req.files[name] && req.files[name][0].filename) {
    file = req.files[name][0].filename;
  } else if (req.body[editName]) {
    file = req.body[editName]
  }
  return file;
}

const deleteMedia = (folderName, filename) => {
  fs.unlinkSync(`media/${folderName}/files/${filename}`);
}

module.exports = {
  uploadMedia: media,
  updateUploadMedia,
  deleteMedia
}