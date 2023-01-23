import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../config/firebase'
import { useNavigate } from 'react-router-dom'


interface CreateFormData {
  title: string;
  description: string;
}

export const CreateForm = () => {

  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const schema = yup.object().shape({
  title: yup.string().required("You must provide a title"),
  description: yup.string().required("You must provide a description"), 

})

const {register, handleSubmit, formState: {errors}} = useForm<CreateFormData>({
  resolver: yupResolver(schema),
})

const postRef = collection(db, "post");

const onCreatePost = async (data:CreateFormData) => {
  await addDoc(postRef, {
    ...data,
    username: user?.displayName,
    userId:user?.uid,
    imageUrl:user?.photoURL,
    userEmail:user?.email,
  })
  navigate('/')

  console.log(user)
}

  return (
  <form onSubmit={handleSubmit(onCreatePost)} className="rounded-lg w-full md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full flex items-center justify-center mx-auto mt-36 shadow-2xl ">
    <div className="bg-white w-full shadow rounded-lg p-5 mb-8">
    <input placeholder='Title...' {...register("title")} className="bg-gray-200 w-full rounded-lg shadow border p-2 my-8" />
    <p className='mb-8'>{errors.title?.message}</p>
    <textarea placeholder='Description' {...register("description")} className="bg-gray-200 w-full rounded-lg shadow border p-2  mb-8" />
    <p className='mb-8'>{errors.description?.message}</p>
    <input type='submit' className="cursor-pointer float-right bg-indigo-400 hover:bg-indigo-300 text-white p-2 rounded-lg" />
    </div>

  </form>
  );
};