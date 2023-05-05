import * as UserApi from "../API/userRequest";


export const updateUser=(id, formData)=> async(dispatch)=> {
    dispatch({type: "UPDATING_START"})
    try{
        // console.log("in cactio")
        // console.log(id)
        // console.log(formData)
        console.log(formData)
        const {data} = await UserApi.updateUser(id, formData);
        // console.log(data)
        // console.log(data)
        // console.log("Action ko receive hoa hy ye : ",data)
        dispatch({type: "UPDATING_SUCCESS", data: data})
    }   
    catch(error){
        dispatch({type: "UPDATING_FAIL"})
    }
}


export const followUser = async (id, data)=>  {
    // dispatch({type: "FOLLOWER_USER", data: id})
    await UserApi.followUser(id, data)
    alert("You Started Following the User")
    window.location.reload();
}

export const unfollowUser = async (id, data)=> {
    console.log(data)
    // dispatch({type: "UNFOLLOWER_USER", data: id})
    await UserApi.unfollowUser(id, data)
    alert(`You Unfollowed the User`)
    window.location.reload();
}

export const getUser= async (id)=>async()=>{
    const {data} = await UserApi.getUser(id);
    console.log(data);

}