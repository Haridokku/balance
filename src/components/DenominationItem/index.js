import './index.css'

const DenominationItem = props => {
  const {denominationDetails, debit} = props
  const {value} = denominationDetails

  const debitingAmount = () => {
    debit(value)
  }

  return (
    <li className="list-item">
      <button type="button" className="rupees" onClick={debitingAmount}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
