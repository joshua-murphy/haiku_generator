import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,

  FacebookIcon,
  TwitterIcon,
  RedditIcon,

} from 'react-share';

const ShareButtons = ({haiku}) => (
  <div>
    <FacebookShareButton url={ "http://haiku-generator.herokuapp.com"} hashtag="#haiku" quote={haiku}><FacebookIcon size={32} round/></FacebookShareButton>
    <TwitterShareButton url={ "http://haiku-generator.herokuapp.com" } hashtags={["haiku"]} title={haiku}><TwitterIcon size={32} round/></TwitterShareButton>
    <RedditShareButton url={ "http://haiku-generator.herokuapp.com"} title={`Haiku generator: ${haiku}`}><RedditIcon size={32} round/></RedditShareButton>
  </div>
)

export default ShareButtons