import * as UploadApi from "../API/UploadRequest";

export const uploadImage = (formData) => async (dispatch) => {
  try {
    console.log("Image upload Action start ho gya hy")
    await UploadApi.uploadImage(formData);
  } catch (error) {
    console.log(error);
  }
};

export const uploadPost = (formData) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    // const newPost =await UploadApi.uploadPost(formData);
    const {data}=await UploadApi.uploadPost(formData);
    // console.log(data)
    dispatch({ type: "UPLOAD_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};