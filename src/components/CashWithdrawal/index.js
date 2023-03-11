// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  debit = value => {
    const {amount} = this.state
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    const name = 'Search Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="name-container">
            <div className="initial-container">
              <p className="initial">{initial}</p>
            </div>
            <p className="describe">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="describe1">Your Balance</p>
            <p className="head">
              {amount}
              <br />
              <span className="describe2">In Rupees</span>
            </p>
          </div>
          <p className="head2">Withdraw</p>
          <p className="describe1">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-list">
            {denominationsList.map(each => (
              <DenominationItem
                debit={this.debit}
                denominationDetails={each}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
