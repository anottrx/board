import React, { useState } from "react";

const Post = () => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  return (
    <form>
      <label>
        제목
        <input name="title" type="text" required value={title} />
      </label>
      <label>
        내용
        <input name="post" type="text" required value={post} />
      </label>
      <button>완료</button>
    </form>
  );
};

export default Post;
