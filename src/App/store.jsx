/* eslint-disable import/no-named-as-default */
import { configureStore } from "@reduxjs/toolkit";
import addLabTest from "../Features/AllLabTests/addLabTest";
import allLabTest from "../Features/AllLabTests/allLabTest";
import deleteLabTest from "../Features/AllLabTests/deleteLabTest";
import updateLabTest from "../Features/AllLabTests/updateLabTest";
// import allMedicines from "../Features/AllMedicines/allMedicines";
import allUsers from "../Features/AllUsers/allUsers";
import addBlog from "../Features/Blogs/addBlog";
import allBlogs from "../Features/Blogs/allBlogs";
import deleteBlog from "../Features/Blogs/deleteBlog";
import updateBlog from "../Features/Blogs/updateBlog";
import addHealthTips from "../Features/HealthTips/addHealthTips";
import allHealthTips from "../Features/HealthTips/allHealthTips";
import deleteHealthTips from "../Features/HealthTips/deleteHealthTips";
import updateHealthTips from "../Features/HealthTips/updateHealthTips";
import fetchAllImages from "../Features/Images/fetchAllImages";
import uploadImages, { addImageApi } from "../Features/Images/uploadImages";
import addInterview from "../Features/Interviews/addInterview";
import deleteInterview from "../Features/Interviews/deleteInterview";
import updateInterview from "../Features/Interviews/updateInterview";
import allMedicines from "../Features/Medicines/AllMedicines/allMedicines";
import medicines from "../Features/Medicines/AllMedicines/medicines";
import sslPayment from "../Features/PaymentGetway/PaymentGetaway";
import uploadImage from "../Features/UploadImage/uploadImage";

const store = configureStore({
  reducer: {
    allUsers,
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
    allMedicines,
    allBlogs,
    allImages: fetchAllImages,
    uploadImages,
    medicines,
  },
});

export default store;
