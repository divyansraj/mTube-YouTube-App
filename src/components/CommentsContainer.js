import React from 'react'
import userimg from "../assets/img/1000_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT-removebg-preview.png";


const commentsData = [
  {
    name: "Divyanshu Kumar",
    comment: "This is a comment section",
    replies: [],
  },
  {
    name: "Priyanshu Kumar",
    comment: "This is a comment section",
    replies: [
      {
        name: "Garald",
        comment: "This is replies section",
        replies: [],
      },
      {
        name: "Garald",
        comment: "This is replies section",
        replies: [],
      },
      {
        name: "Garald",
        comment: "This is replies section",
        replies: [
          {
            name: "Garald",
            comment: "This is replies section",
            replies: [],
          },
          {
            name: "Garald",
            comment: "This is replies section",
            replies: [
              {
                name: "Garald",
                comment: "This is replies section",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Rohit",
    comment: "This is a comment section",
    replies: [],
  },
  {
    name: "sachin Kumar",
    comment: "This is a comment section",
    replies: [],
  },
  {
    name: "Nehal Verma",
    comment: "This is a comment section",
    replies: [],
  },
  {
    name: "Mohit Yadav",
    comment: "This is a comment section",
    replies: [],
  },
];
//nested comments section
const Comments = ({data}) => {
    return (
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-2">
          <img className="h-8 w-10 " src={userimg} alt="user"></img>
          <h1 className=' font-medium'>{data.name}</h1>
        </div>

        <p className='ml-12'>{data.comment}</p>
      </div>
    );
}
const Commentslist = ({comments})=> {
    return (
      <div>
        {comments.map((e,index) => (
          <div className='ml-4' key={index}>
            <Comments data={e} />
            <div className='pl-5 border border-l-black'>
              <Commentslist comments={e.replies} />
            </div>
          </div>
        ))}
      </div>
    );
    
}
const CommentsContainer = () => {
  return (
    <>
      <Commentslist comments={commentsData} />
    </>
  );
}

export default CommentsContainer