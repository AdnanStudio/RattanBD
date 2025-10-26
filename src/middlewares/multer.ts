import multer from "multer";
import { v4 as uuid } from "uuid";
import fs from "fs"; 

const storage = multer.diskStorage({
  destination(req, file, callback) {
    const uploadPath = "uploads";

    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    callback(null, uploadPath);
  },
  filename(req, file, callback) {
    const id = uuid();
    const extName = file.originalname.split(".").pop();
    callback(null, `${id}.${extName}`);
  },
});

export const singleUpload = multer({ storage }).single("photo");




// import multer from "multer";
// import {v4 as uuid} from "uuid";

// const storage = multer.diskStorage({
//     destination(req, file, callback){
//         callback(null, "uploads");
//     },
//     filename(req, file, callback){
//         const id = uuid();
//         const extName = file.originalname.split(".").pop();
//         callback(null, `${id}.${extName}`)
//     },
// });

// export const singleUpload = multer({storage}).single("photo");
