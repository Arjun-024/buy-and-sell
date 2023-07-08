import React from 'react'

function Contact() {
  console.log('contact rendered')

  const [userName, setUserName] = React.useState('')
  const [useremail, setUserEmail] = React.useState('')
  const [userphone, setUserPhone] = React.useState('')

  function submitForm(e) {
    e.preventDefault()
    console.log('form submitted')
  }
 
  React.useEffect(() => {
    console.log('Expensive Code')
  }, [])


  return (
    <div>
      <h1>Contact Us</h1>
      <p>Fill the form here, our team will reachout to you :)</p>

      <form onSubmit={submitForm}>
        <input type="text" placeholder='Mallikarjuna' onChange={e => setUserName(e.target.value)}/>
        <input type="email" placeholder='arjun@123' onChange={e => setUserEmail(e.target.value)}/>
        <input type="number" placeholder='+91-123456789' onChange={e => setUserPhone(e.target.value)}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact
