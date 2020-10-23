import React from "react";

export const StoriesList = ({ stories }) => {
  return (
    <table className="story-list">
      <tbody>
        <ol>
          {stories.map((story) => (
            <tr className="story-list-item" key={story.id}>
              <td>
                <li></li>
              </td>
              <td className="story-icon">
                <i class="fas fa-caret-up"></i>
              </td>
              <td className="story-title">
                <ul className="title-url">
                  <li>{story.title}</li>
                  <li className="url"> ({story.url})</li>
                </ul>
                <div className="story-points">
                  {story.points} by {story.author} | 4 hours ago | flag | hide |{" "}
                  {story.comments} comments | instapaper | save to pocket
                </div>
              </td>
            </tr>
          ))}
        </ol>
      </tbody>
    </table>
  );
};
