import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const UserList = () => {

  const userNickName = useSelector(state => state.nickName)
  const userName = useSelector(state => state.name)
  const userSurName = useSelector(state => state.surName)
  const userGender = useSelector(state => state.gender)
  const userAge = useSelector(state => state.age)

  return (
    <div style={{maxWidth: '700px', margin: '0 auto', }}>
      <h1 style={{ textAlign: 'center' }}>Список Пользователей</h1>
      <div style={{ border: '1px solid', padding: '10px', borderRadius: '4px' }}>
        <p>Псевдоним: {userNickName}</p>
        <p>Имя: {userName}</p>
        <p>Фамилия: {userSurName}</p>
        <p>Пол: {userGender}</p>
        <p>Возраст: {userAge}</p>
      </div>
      <Link to={'/'}>
        <button style={{ display: 'block', margin: '10px auto' }}>Создать Пользователя</button>
      </Link>
    </div>
  )
}

export default UserList