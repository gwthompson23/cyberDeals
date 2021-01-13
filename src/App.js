import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react"
import Header from "./components/Header"
import CardContainer from "./components/CardContainer"
import axios from "axios"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('https://www.cheapshark.com/api/1.0/deals')
      .then(res => {
        const topDeals = res.data
        this.setState({data: topDeals})
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <CardContainer data={this.state.data}/>
      </div>
    )
  }
}

export default App;
