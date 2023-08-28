import { configureStore } from "@reduxjs/toolkit";
import addLabTest from "../Features/AllLabTests/addLabTest";
import allLabTest from "../Features/AllLabTests/allLabTest";
import deleteLabTest from "../Features/AllLabTests/deleteLabTest";
import updateLabTest from "../Features/AllLabTests/updateLabTest";
import allMedicines from "../Features/AllMedicines/allMedicines";
import allUsers from "../Features/AllUsers/allUsers";
import addBlog from "../Features/Blogs/addBlog";
import addHealthTips from "../Features/HealthTips/addHealthTips";
import allHealthTips from "../Features/HealthTips/allHealthTips";
import { deleteHealthTipsApi } from "../Features/HealthTips/deleteHealthTips";
import updateHealthTips from "../Features/HealthTips/updateHealthTips";
import uploadImage from "../Features/UploadImage/uploadImage";

const store = configureStore({
  reducer: {
    allUsers,
    allMedicines,
    allLabTest,
    updateLabTest,
    uploadImage,
    deleteLabTest,
    addLabTest,
    addHealthTips,
    allHealthTips,
    deleteHealthTipsApi,
    updateHealthTips,
    addBlog,
  },
});

export default store;
