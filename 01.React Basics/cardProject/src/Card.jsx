import React from "react";

const Card = ({ userId, title, body }) => {
  return (
    <>
      <div className=" w-100 border border-gray-500 rounded-md p-4 mb-4 bg-slate-400">
        <ul className="border border-gray-300 rounded-md p-4 bg-black text-gray-400 text-md font-semibold">
          <li className="mb-2">UserID: {userId}</li>
          <li className="mb-2">Title: {title}</li>
          <li>Body: {body}</li>
        </ul>
      </div>
    </>
  );
};

export default Card;
