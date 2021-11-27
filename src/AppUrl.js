var server = "http://localhost:8080";
export default {
    SAVE_USER:server+"/user/saveuser",
    LOGIN_USER:server+"/user/loginuser",
    CHECK_SESSION:server+"/user/checksession",
    ISLOGOUT:server+"/user/logout",

    SAVE_QUERY:server+"/user/askqueries",
    LOAD_QUERY:server+"/user/loadquery",
    Delete_Query:server+"/user/deletequery",
    SHOW_OTHER_QUERY:server+"/user/showotherquery",
    SEND_RESPONSE:server+"/user/sendresponse",
    UPLOAD_FILE:server+"/user/uploadimg"
}