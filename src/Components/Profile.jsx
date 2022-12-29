import { Component } from "react";
import img from "./user.png";
class Profile extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullname: "jhon doe",
        bio: "i'm learning web development ",
        imgsrc: img,
        profession: "web developer",
      },
      timer: 0,
    };
  }

  componentDidMount = () => {
    this.interval = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  render() {
    const { person, timer } = this.state;
    const { fullname, bio, imgsrc, profession } = person;
    return (
      <div>
        <img
          src={imgsrc}
          alt="img"
          
        />
        <h1>{fullname}</h1>
        <h3>{bio}</h3>
        <h3>{profession}</h3>
        <h3>{timer}</h3>
      </div>
    );
  }
}

export default Profile;