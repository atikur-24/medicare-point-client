/* eslint-disable import/no-named-as-default */
import { configureStore } from "@reduxjs/toolkit";
import addLabTest from "../Features/AllLabTests/addLabTest";
import allLabTest from "../Features/AllLabTests/allLabTest";
import deleteLabTest from "../Features/AllLabTests/deleteLabTest";
import updateLabTest from "../Features/AllLabTests/updateLabTest";
// import allMedicines from "../Features/AllMedicines/allMedicines";
import allData from "../Features/AllMedicines/allData";
import detailData from "../Features/AllMedicines/detailData";
import allUsers from "../Features/AllUsers/allUsers";
import userByEmail from "../Features/AllUsers/userByEmail";
import addBlog from "../Features/Blogs/addBlog";
import allBlogs from "../Features/Blogs/allBlogs";
import deleteBlog from "../Features/Blogs/deleteBlog";
import updateBlog from "../Features/Blogs/updateBlog";
import adminHomeData from "../Features/DashboardData/adminHomeData";
import addDiscountCode from "../Features/DiscountCodesApis/addDiscountCode";
import allDiscountCodes from "../Features/DiscountCodesApis/allDiscountCodes";
import deleteDiscountCodes from "../Features/DiscountCodesApis/deleteDiscountCodes";
import updateDiscountCode from "../Features/DiscountCodesApis/updateDiscountCode";
import addHealthTips from "../Features/HealthTips/addHealthTips";
import allHealthTips from "../Features/HealthTips/allHealthTips";
import deleteHealthTips from "../Features/HealthTips/deleteHealthTips";
import updateHealthTips from "../Features/HealthTips/updateHealthTips";
import addImageToDB from "../Features/Images/addImageToDB";
import deleteImage from "../Features/Images/deleteImage";
import fetchAllImages from "../Features/Images/fetchAllImages";
import uploadImages from "../Features/Images/uploadImages";
import addInterview from "../Features/Interviews/addInterview";
import deleteInterview from "../Features/Interviews/deleteInterview";
import updateInterview from "../Features/Interviews/updateInterview";
import allMedicines from "../Features/Medicines/AllMedicines/allMedicines";
import medicines from "../Features/Medicines/AllMedicines/medicines";
import addNotification from "../Features/Notifications/addNotification";
import deleteNotifications from "../Features/Notifications/deleteNotifications";
import fetchNotificationsByEmail from "../Features/Notifications/fetchNotificationsByEmail";
import sslPayment from "../Features/PaymentGetway/PaymentGetaway";
import labSSLPayment from "../Features/PaymentGetway/labPayment";
import uploadImage from "../Features/UploadImage/uploadImage";
import addPrescriptionCard from "../Features/UploadPrescription/addPrescriptionCard";
import allPrescription from "../Features/UploadPrescription/allPrescription";
import deletePrescription from "../Features/UploadPrescription/deletePrescription";

const store = configureStore({
  reducer: {
    allUsers,
    userByEmail,
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
    deleteImage,
    labSSLPayment,
    notificationsByEmail: fetchNotificationsByEmail,
    deleteNotifications,
    detailData,
    addImageToDB,
    addNotification,
    allPrescription,
    addPrescriptionCard,
    allData,
    deletePrescription,
    adminHomeData,
    allDiscountCodes,
    deleteDiscountCodes,
    updateDiscountCode,
    addDiscountCode,
  },
});

export default store;
