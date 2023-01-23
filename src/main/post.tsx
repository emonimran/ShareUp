import { IPost} from './main'


interface Props {
  post: IPost
}

export const Post = (props:Props) => {
  
  

  const { post } = props;

  console.log(post.imageUrl)
  console.log(post.title)

  return (
    <div className="flex flex-col items-center justify-center w-1/2 mx-auto mt-6 p-8 text-center bg-white border-b border-gray-200 rounded-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">

      <div className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
          {post.title}
        </h1>
        <p className="my-4 font-light">
          {post.description}
        </p>
      </div>

<div className='flex items-center justify-center space-x-3'>
<img className="rounded-full w-9 h-9" src={post.imageUrl} alt="profile" />
      <div className='space-y-0.5 font-medium dark:text-white text-left'>
      
        <p>
          {post.username}
          <button></button>
        </p>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">{post.userEmail}</p>
      </div>
      </div>
    </div>
  )
}
