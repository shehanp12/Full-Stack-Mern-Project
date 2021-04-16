import * as api from '../api';


 export const getPosts = () => async (dispatch) => {

   try{
       const {data} = await api.fetchPosts();

       dispatch({type:'FETCH_ALL',payload:data});

   }catch (e) {
       console.log(e.message);

   }

}

export const createPost = (post) => async (dispatch) => {

     try {
         const {data} = await api.createPost(post);

         dispatch({type:'CREATE',payload:data});
     }catch (e) {
            console.log(e.message);
     }

}
