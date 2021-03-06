require("dotenv").config();
const { sign } = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (data) => {
    const token = sign(data, "jwt", {
      expiresIn: "2d",
    });
    return token;
  },
  sendAccessToken: (res, accessToken) => {
    res.status(200).cookie("jwt", accessToken, {
      sameSite: "None",
      secure: true,
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 48),
    });
  },
};
