import express from "express";


import { verifyAdmin } from "../middleware/Authorize.js";
import { AdminInfo, UserInfoAdmin  } from "../Controllers/Admin.js";
import { protect } from "../middleware/Protect.js";
const route = express.Router()


route.get('/overview', protect, verifyAdmin('admin'), AdminInfo);
route.get('/userinfo', protect , verifyAdmin('admin'), UserInfoAdmin)

export default route