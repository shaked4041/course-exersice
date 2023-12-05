import './App.css'
import users from './users.json'
import UserCard from './components/UserCard'

export default function App() {
  return (
    <div className='main'>
      <div className='container'>
       {users.map(user => 
       <UserCard key={user.id} user={user} />)} 
      </div>
      </div>
  )
}
