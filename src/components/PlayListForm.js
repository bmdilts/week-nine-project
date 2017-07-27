import React from 'react';
import PlayList from './PlayList'
import PlayListItem from './PlayListItem'

export default class PlayListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      songArtist: "",
      songTitle: "",
      songNotes: ""
    }
  }
  addToList = (e) => {
      e.preventDefault();
      this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      this.songs = response
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

  handleUserName = e => {
    this.setState({userName: e.target.value});
  }
  handleArtist = e => {
    this.setState({songArtist: e.target.value});
  }
  handleSong = e => {
    this.setState({songTitle: e.target.value});
  }
  handleNotes = e => {
    this.setState({songNotes: e.target.value});
  }


  render() {
    const {songs} = this.props;
    return (
      <div>
        <form>
          <p>User Name:</p>
          <input
            onChange={this.handleUserName}
            type="text"
            className="form-control"
            id="user"
            placeholder="Name or User Name"
            value={this.state.userName}
          />
          <p>Artist / Band:</p>
          <input
            onChange={this.handleArtist}
            type="text"
            className="form-control"
            id="artist"
            placeholder="Artist or Band Name"
            value={this.state.songArtist}
          />
          <p>Song Title:</p>
          <input
            onChange={this.handleSong}
            type="text"
            className="form-control"
            id="song"
            placeholder="Song Title"
            value={this.state.songTitle}
          />
          <p>Notes about Song:</p>
          <textarea
            onChange={this.handleNotes}
            className="form-control"
            id="notes"
            value={this.state.songNotes}
          />
        <button onClick={this.addToList}>Submit</button>
        </form>
      </div>
    );
  }
}
