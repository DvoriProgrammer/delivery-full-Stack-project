import React, { useState } from 'react';
import './addComment.css'; // Assuming your CSS file is named Comment.css

const AddComment = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [emojiInput, setEmojiInput] = useState('');

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const addComment = () => {
    // Perform additional actions here (e.g., save to database, update UI, etc.)
    console.log('Comment:', commentText);
    console.log('Emoji:', emojiInput);

    // Close the popup after submitting
    closePopup();
  };

  return (
    <div className="comment-container">
      <button onClick={openPopup}>Add Comment</button>
      {isPopupOpen && (
        <div className="comment-popup">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Type your comment..."
          />
          <input
            type="text"
            value={emojiInput}
            onChange={(e) => setEmojiInput(e.target.value)}
            placeholder="Add emoji..."
          />
          <button onClick={addComment}>Submit</button>
          <button onClick={closePopup}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default AddComment;
