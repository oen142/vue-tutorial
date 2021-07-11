import {posts} from "./index";

// 학습 노트 데이터 목록를 조회하는 API
function fetchPosts() {
    return posts.get('/');
}

function fetchPost(postId) {
    return posts.get(postId);
}

function createPost(postData) {
    return posts.post('/', postData)
}

// 학습 노트 데이터를 삭제하는 API
function deletePost(postId) {
    return posts.delete(postId)
}

function updatePost(postId, postData) {
    return posts.put(postId, postData)
}

export {
    fetchPosts,
    fetchPost,
    createPost,
    updatePost,
    deletePost
}