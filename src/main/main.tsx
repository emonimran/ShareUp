import { useState, useEffect } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../config/firebase'
import { Post } from './post'
import { auth } from '../config/firebase' 
import { useAuthState} from 'react-firebase-hooks/auth'

export interface IPost {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
  imageUrl: string;
  userEmail: string;
}

export const Main = () => {
  const [postsList, setPostsList] = useState<IPost[] | null>(null)
  const postRef = collection(db, "post");
  const [user] = useAuthState(auth);

  const getPosts = async () => {
    const data = await getDocs(postRef);
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as IPost[]
    );
    console.log(data)
  }

  useEffect(() => {
    getPosts();
  },[]);


  return (
    <div>
      {!user ? (<div className="card w-96 bg-white shadow-2xl rounded lg:w-1/3 p-10 mt-48 mx-auto py-20">
  <div className="card-body">
    <h2 className="card-title focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">Login Now! <br /> Join to create and view the posts!!</h2>

  </div>
</div>) : ( <div> {postsList?.map((post , key)=> {return (
        <Post post={post} key = {key} />
      );})}</div>)}
      
      
    </div>
  );
};

