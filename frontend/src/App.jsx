import OTP from './components/OTP.jsx'


export default function App() {
  return (
    <div className='body'>
      <OTP otpLength={6}/>
    </div>
  )
}