import cloud from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

const cloudinary = cloud.v2;

const { CLOUDINARY_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET } = process.env;

cloudinary.config({
	cloud_name: CLOUDINARY_NAME,
	api_key: CLOUDINARY_KEY,
	api_secret: CLOUDINARY_SECRET,
});

export default cloudinary;
