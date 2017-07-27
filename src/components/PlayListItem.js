import React from 'react';
import NavBar from './NavBar'
import PlayList from './PlayList'
import PlayListForm from './PlayListForm'

export default class PlayListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {song} = this.props;
    return (
      <div>
        <div className='song_div'>
          <span><b>User: </b></span><span>{song.userName}</span><br/>
          <span><b>Artist/Band: </b></span><span>{song.songArtist}</span><br/>
          <span><b>Title: </b></span><span>{song.songTitle}</span><br/>
          <span><b>Notes: </b></span><span>{song.songNotes}</span>
        </div>
      </div>
    );
  }
}
