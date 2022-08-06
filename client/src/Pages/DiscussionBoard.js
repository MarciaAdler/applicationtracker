import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import AddPost from "../components/AddPost";
import Post from "../components/Post";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { SET_POSTS } from "../utils/actions";
export default function DiscussionBoard() {
  const [state, dispatch] = useStoreContext();
  useEffect(() => {
    getPosts();
  }, []);
  function getPosts() {
    API.getPosts()
      .then((res) =>
        dispatch({
          type: SET_POSTS,
          posts: res.data,
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="home-container discussionboard">
      <div className="home-filler">
        <h2 className="text-center mt-2">Discussion Board</h2>
        <h6 className="text-center">
          Feel free to add a post and start a discussion
        </h6>
        <div>
          <AddPost />

          <Post />
        </div>
      </div>
    </div>
  );
}
