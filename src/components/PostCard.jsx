import '../css/PostCard.css'
import React from 'react';
import * as Icon from 'react-bootstrap-icons';

const PostCard = ({post}) => {
    return (
        <div className="PostCard">
        <div className="PostCardImage">
          <img src={post.publisherProfileImage} alt="postImage" />
        </div>
        <div className="PostCardDetails">
          <p className="PostTitle">{post.title}</p>
          <p className="PostLocation"><Icon.GeoAlt />{post.city}</p>
          <p className="PostDesc">{post.description}</p>
          <p className="PostJob">{post.requiredJob}</p>
          <p className="PostTime">{post.postType}</p>
        </div>
      </div>
    );
}

export default PostCard;