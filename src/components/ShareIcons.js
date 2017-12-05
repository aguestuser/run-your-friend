import React from 'react';
import {ShareButtons, ShareCounts, generateShareIcon} from 'react-share';
import {row} from '../styles/row';

const {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
  TumblrShareButton,
  WhatsappShareButton,
  EmailShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const RedditIcon = generateShareIcon('reddit');
const TumblrIcon = generateShareIcon('tumblr');
const WhatsappIcon = generateShareIcon('whatsapp');
const EmailIcon = generateShareIcon('email');

const iconProps = { size: 32, round: true }

const ShareIcons = ({url, quote}) =>
  <div style={style}>

    <FacebookShareButton {...{url, quote}}>
      <FacebookIcon {...iconProps}/>
    </FacebookShareButton>

    <TwitterShareButton {...{url, quote}}>
      <TwitterIcon {...iconProps}/>
    </TwitterShareButton>

    <RedditShareButton {...{url, quote}}>
      <RedditIcon {...iconProps}/>
    </RedditShareButton>

    <TumblrShareButton {...{url, quote}}>
      <TumblrIcon {...iconProps}/>
    </TumblrShareButton>

    <EmailShareButton {...{url, quote}}>
      <EmailIcon {...iconProps}/>
    </EmailShareButton>

  </div>;

const style = {
  ...row,
  justifyContent: 'space-evenly',
  position: 'relative',
  width: '30%',
  alignSelf: 'center',
  top: '-3em',
}


export default ShareIcons;
