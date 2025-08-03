import React, { useState } from "react";
import { Menu, Button } from "semantic-ui-react";

const Post = () => {
  const [postType, setPostType] = useState("question");

  return (
    <>
      <Menu style={{ backgroundColor: "grey", padding: "1rem 1.5rem" }}>
        <Menu.Item header style={{ fontWeight: "bold" }}>
          New Post
        </Menu.Item>
      </Menu>

      <div className="ui form" style={{ padding: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <label style={{ marginRight: "0.5rem" }}>Select Post Type:</label>

          <div className="ui radio checkbox">
            <input
              type="radio"
              name="postType"
              value="question"
              checked={postType === "question"}
              onChange={() => setPostType("question")}
            />
            <label>Question</label>
          </div>

          <div className="ui radio checkbox">
            <input
              type="radio"
              name="postType"
              value="article"
              checked={postType === "article"}
              onChange={() => setPostType("article")}
            />
            <label>Article</label>
          </div>
        </div>
      </div>

      <Menu style={{ backgroundColor: "grey", padding: "1rem 1.5rem" }}>
        <Menu.Item header style={{ fontWeight: "bold" }}>
          What do you want to ask or share
        </Menu.Item>
      </Menu>

      <div>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This section is
          designed based on the type of the post. It could be developed by
          conditional rendering.{" "}
          <span style={{ color: "red" }}>
            For post {postType === "article" ? "an article" : "a question"}, the
            following section would be appeared.
          </span>
        </p>
      </div>

      <Menu style={{ padding: "1rem 1.5rem" }}>
        <Menu.Item
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <label style={{ fontWeight: "bold" }}>Title</label>
          <input
            type="text"
            placeholder={
              postType === "article"
                ? "Enter a descriptive title"
                : "Start your question with how, what, why, etc."
            }
            style={{
              flex: 1,
              padding: "0.5rem",
              border: "1px solid black",
            }}
          />
        </Menu.Item>
      </Menu>

      {/* Abstract Section (only for articles) */}
      {postType === "article" && (
        <div className="ui form" style={{ padding: "1rem" }}>
          <div className="field">
            <label style={{ fontWeight: "bold" }}>Abstract</label>
            <textarea
              rows="4"
              placeholder="Enter a 1-paragraph abstract"
              style={{
                width: "100%",
                border: "1px solid black",
              }}
            ></textarea>
          </div>
        </div>
      )}

      {/* Main Textarea */}
      <div className="ui form" style={{ padding: "1rem" }}>
        <div className="field">
          <label style={{ fontWeight: "bold" }}>
            {postType === "article" ? "Article" : "Describe your problem"}
          </label>
          <textarea
            rows="8"
            placeholder={
              postType === "article" ? "Enter a 1-paragraph abstract" : ""
            }
            style={{
              width: "100%",
              border: "1px solid black",
            }}
          ></textarea>
        </div>
      </div>

      <Menu style={{ padding: "1rem 1.5rem" }}>
        <Menu.Item
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <label style={{ fontWeight: "bold" }}>Tags</label>
          <input
            type="text"
            placeholder={`Add up to 3 tags to describe what your ${postType} is about e.g., Java`}
            style={{
              flex: 1,
              padding: "0.5rem",
              border: "1px solid black",
            }}
          />
        </Menu.Item>
      </Menu>
      <div style={{ padding: "1rem", textAlign: "right" }}>
        <Button
          style={{
            padding: "0.75rem 2rem",
            fontSize: "1rem",
            marginRight: "2rem",
          }}
        >
          Post
        </Button>
      </div>
    </>
  );
};

export default Post;
