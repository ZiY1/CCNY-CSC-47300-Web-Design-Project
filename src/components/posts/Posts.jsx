import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Ziyi Huang",
      userId: 1,
      profilePic:
      "https://wp.scoopwhoop.com/wp-content/uploads/2018/02/5a93d7f3fb77857e5dc7a249_9a7f3f7c-a2e3-4dfc-9d9d-fc6f342dba25.jpg",
      desc: "This is my second post in the seek support community",
      img: "https://carmenbpingree.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-13-at-4.30.12-PM.png",
    },
    {
      id: 2,
      name: "Ziyi Huang",
      userId: 2,
      profilePic:
        "https://wp.scoopwhoop.com/wp-content/uploads/2018/02/5a93d7f3fb77857e5dc7a249_9a7f3f7c-a2e3-4dfc-9d9d-fc6f342dba25.jpg",
      desc: "Happy to join the community.",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
