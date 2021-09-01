import React from "react";
import AddPost from "../components/AddPost";
export default function DiscussionBoard() {
  return (
    <div className="home-container">
      <div className="home-filler"></div>
      <h2 className="text-center mt-2">Discussion Board</h2>
      <h6 className="text-center">
        Feel free to add a post and start a discussion
      </h6>
      <AddPost />
    </div>
  );
}
