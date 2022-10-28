const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const { User } = require("../../models/user");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUploud, originalname } = req.file;
  const extention = originalname.split(".").pop();
  const fileName = `${_id}.${extention}`;
  const resultUpload = path.join(avatarDir, fileName);
  await fs.rename(tempUploud, resultUpload);
  const avatarURL = path.join("avatar", fileName);

  Jimp.read(resultUpload)
    .then((image) => {
      return image.resize(250, 250).quality(60).write(resultUpload);
    })
    .catch((err) => {
      err.message = "Can't change image";
    });

  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    avatarURL,
  });
};

module.exports = updateAvatar;
