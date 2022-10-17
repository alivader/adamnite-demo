import React, {useState} from 'react'


const Sidebar = () => {

const [iconNumber, setIconNumber] = useState(1)

  return (
    <div className='sidebar'>
        <img src="https://adamnite.org/logo.svg" />
        {[...Array(iconNumber)].map((e,i) => <img src="https://cdn.iconscout.com/icon/free/png-512/dots-nine-3601835-3003577.png" /> )}
        <img onClick={() => setIconNumber(iconNumber + 1)} src="https://cdn.iconscout.com/icon/free/png-256/add-1779868-1518520.png" />
        <img src="https://cdn.iconscout.com/icon/free/png-256/account-3551876-2974231.png" />
    </div>
  )
}

export default Sidebar