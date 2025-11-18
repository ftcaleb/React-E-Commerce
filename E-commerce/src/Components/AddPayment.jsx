import { useState } from 'react'
import { CreditCard, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AddPayment() {
  const [paymentMethods] = useState([
    { id: '1', type: 'mastercard', lastFour: '4242', label: 'MasterCard ending in 4242' },
    { id: '2', type: 'visa', lastFour: '2894', label: 'VISA Debit ending in 2894' },
  ])

  const [selectedMethod, setSelectedMethod] = useState(paymentMethods[0].id)
  const [formData, setFormData] = useState({
    cardholder: '',
    number: '',
    expiry: '',
    cvc: '',
    default: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const formatCardNumber = (num) => num.replace(/\D/g, '').replace(/(\d{4})/g, '$1-').slice(0, 19)
  const formatExpiry = (val) => {
    const digits = val.replace(/\D/g, '')
    return digits.length > 2 ? digits.slice(0, 2) + '/' + digits.slice(2, 4) : digits
  }

  const handleSubmit = () => {
    console.log('Submitting payment:', formData)
    setFormData({ cardholder: '', number: '', expiry: '', cvc: '', default: false })
  }

  return (
    <div className="space-y-6">

      <ExistingCards
        paymentMethods={paymentMethods}
        selectedMethod={selectedMethod}
        onSelect={setSelectedMethod}
      />

      <AddCardForm
        formData={formData}
        onChange={handleChange}
        formatCardNumber={formatCardNumber}
        formatExpiry={formatExpiry}
        onSubmit={handleSubmit}
      />

      <PaymentFooter />
    </div>
  )
}



function ExistingCards({ paymentMethods, selectedMethod, onSelect }) {
  return (
    <section className="bg-white p-6 rounded-md shadow-sm">
      <h3 className="text-sm font-semibold mb-4">Select a Card</h3>
      <div className="space-y-2">
        {paymentMethods.map(method => (
          <label
            key={method.id}
            className="flex items-center p-3 border rounded hover:bg-gray-50 cursor-pointer"
          >
            <input
              type="radio"
              name="paymentMethod"
              value={method.id}
              checked={selectedMethod === method.id}
              onChange={() => onSelect(method.id)}
              className="w-4 h-4"
            />
            <CreditCard className="w-5 h-5 ml-3 text-gray-600" />
            <span className="ml-2 text-sm text-gray-700">{method.label}</span>
          </label>
        ))}
      </div>
    </section>
  )
}

function AddCardForm({ formData, onChange, formatCardNumber, formatExpiry, onSubmit }) {
  return (
    <section className="bg-white p-6 rounded-md shadow-sm">
      <h3 className="text-sm font-semibold mb-4">Add a New Card</h3>
      <div className="space-y-4">

        <div>
          <label className="text-xs text-gray-600 font-medium">Cardholder Name</label>
          <input
            type="text"
            name="cardholder"
            value={formData.cardholder}
            onChange={onChange}
            placeholder="Jack Brabham"
            className="mt-1 w-full px-3 py-2 border rounded bg-gray-50"
          />
        </div>

        <div>
          <label className="text-xs text-gray-600 font-medium">Card Number</label>
          <div className="relative mt-1">
            <div className="absolute left-3 top-2 text-gray-400">
              <CreditCard className="w-5 h-5" />
            </div>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={e => onChange({
                ...e,
                target: { ...e.target, value: formatCardNumber(e.target.value) }
              })}
              placeholder="1234-5678-9012-3456"
              maxLength={19}
              className="pl-10 w-full px-3 py-2 border rounded bg-gray-50"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-gray-600 font-medium">Expiry</label>
            <input
              type="text"
              name="expiry"
              value={formData.expiry}
              onChange={e => onChange({
                ...e,
                target: { ...e.target, value: formatExpiry(e.target.value) }
              })}
              placeholder="MM/YY"
              maxLength={5}
              className="mt-1 w-full px-3 py-2 border rounded bg-gray-50"
            />
          </div>
          <div>
            <label className="text-xs text-gray-600 font-medium">CVC</label>
            <input
              type="text"
              name="cvc"
              value={formData.cvc}
              onChange={e => onChange({
                ...e,
                target: { ...e.target, value: e.target.value.replace(/\D/g, '').slice(0,3) }
              })}
              placeholder="123"
              maxLength={3}
              className="mt-1 w-full px-3 py-2 border rounded bg-gray-50"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="default"
            checked={formData.default}
            onChange={onChange}
            className="w-4 h-4"
          />
          <label className="text-sm text-gray-700 cursor-pointer">Save as default</label>
        </div>

        <Link to='/checkout'>
        <button
          onClick={onSubmit}
          className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded mt-4 flex items-center justify-center gap-2"
        >
          <CreditCard className="w-4 h-4" />
          Add Card
        </button>
        </Link>
      </div>
    </section>
  )
}

function PaymentFooter() {
  return (
    <footer className="flex justify-between text-sm items-center">
      <button className="text-gray-600 hover:text-gray-900">Back</button>
      <div className="flex items-center gap-1 text-teal-600 font-medium">
        <Lock className="w-4 h-4" /> Secure Connection
      </div>
    </footer>
  )
}
