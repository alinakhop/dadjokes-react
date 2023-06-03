import React, { useState } from 'react';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [upLikes, setUpLikes] = useState(likes);
  const [downLikes, setDownLikes] = useState(dislikes);

  return (
    <div class="container">
      <div class="joke">
        <div class="joke__body">
          <div class="joke__user">
            <img class="user-avatar" src={userAvatar} />
            <p class="user-name">{userName}</p>
          </div>

          <p class="joke__text">{text}</p>
        </div>
        <div class="joke__likes">
          <button
            id="btn-up"
            class="btn-like btn-like--up"
            onClick={() => setUpLikes(upLikes + 1)}
          ></button>
          <span id="likes-up" class="likes-count likes-count--up">
            {upLikes}
          </span>
          <button
            id="btn-down"
            class="btn-like btn-like--down"
            onClick={() => setDownLikes(downLikes + 1)}
          ></button>
          <span id="likes-down" class="likes-count likes-count--down">
            {downLikes}
          </span>
        </div>
      </div>
    </div>
  );
};
