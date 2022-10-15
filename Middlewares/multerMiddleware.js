const multer = require('multer');

const uploadMedia = (folderName) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `media/${folderName}/files`);
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, `file_${uniqueSuffix}_${file.originalname}`);
    }
  });
  return multer({ storage });
}


module.exports = uploadMedia;