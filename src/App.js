import React from "react";
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      users: []
    }
  }

  componentDidMount() {
    this.setState({ loading: true })
    this.getUsers()
      .then(res => {
        this.setState({ users: res.data })
      })
      .catch(err => {
        throw err
      })
      .finally(() => {
        this.setState({ loading: false })
      })
  }

  getUsers = async () => {
    await new Promise(resolve => {
      setTimeout(resolve, 3000);
    })
    return await axios.get('http://localhost:8000/users')
  }

  render() {
    const { loading, users } = this.state
    if (loading) return <p>loading...</p>

    return (
      <>
        <h1>Users:</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </>
    )
  }
}
export default App