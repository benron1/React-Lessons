import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom"; 

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    const { match } = this.props;
    axios.get(`https://5dd14f8d15bbc2001448d07d.mockapi.io/user/${match.params.userId}`)
      .then(response => {
        this.setState({ user: response.data });
      });
  }

  /**
   * Implement componentDidUpdate for recalling the server
   */

  render() {
    const { user } = this.state
    return (
      <>
        {user && (
          <div>
            <h3>{user.name}</h3>
            <img src={user.avatar} alt={user.name} />
          </div>
        )}
      </>
    )
  }
}

export default withRouter(UserPage);