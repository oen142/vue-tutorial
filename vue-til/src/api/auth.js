import {instance} from './index'

// 로그인 , 회원가입 , 회원탈퇴
function registerUser(userData) {
    return instance.post('signup', userData);
}

function loginUser(userData) {
    return instance.post('login', userData);
}

export {
    registerUser,
    loginUser
}