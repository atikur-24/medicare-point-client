import { configureStore } from "@reduxjs/toolkit";
import addLabTest from "../Features/AllLabTests/addLabTest";
import allLabTest from "../Features/AllLabTests/allLabTest";
import deleteLabTest from "../Features/AllLabTests/deleteLabTest";
import updateLabTest from "../Features/AllLabTests/updateLabTest";
import allMedicines from "../Features/AllMedicines/allMedicines";
import allUsers from "../Features/AllUsers/allUsers";
import addBlog from "../Features/Blogs/addBlog";
import deleteBlog from "../Features/Blogs/deleteBlog";
import updateBlog from "../Features/Blogs/updateBlog";
import addHealthTips from "../Features/HealthTips/addHealthTips";
import allHealthTips from "../Features/HealthTips/allHealthTips";
import deleteHealthTips from "../Features/HealthTips/deleteHealthTips";
import updateHealthTips from "../Features/HealthTips/updateHealthTips";
import addInterview from "../Features/Interviews/addInterview";
import deleteInterview from "../Features/Interviews/deleteInterview";
import updateInterview from "../Features/Interviews/updateInterview";
import sslPayment from "../Features/PaymentGetway/PaymentGetaway";
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
    deleteHealthTips,
    updateHealthTips,
    addBlog,
    updateBlog,
    deleteBlog,
    addInterview,
    updateInterview,
    deleteInterview,
    sslPayment,
  },
});

export default store;
