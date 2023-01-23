import { useState, useEffect } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../config/firebase'
import { Post } from './post'

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
      {postsList?.map((post , key)=> {return (
        <Post post={post} key = {key} />
      );})}
      
    </div>
  );
};

