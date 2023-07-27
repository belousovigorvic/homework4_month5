import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { updateUser } from "../../store/userCreateReducer";

const UserCreate = () => {
  const [userData, setUserData] = useState({
    nickName: '',
    name: '',
    surName: '',
    gender: 'Мужской',
    age: 0
  });

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(userData)); // Отправляем весь объект formData целиком
    navigate('/user-list');
  };

  return (
    <div style={{maxWidth: '700px', margin: '0 auto'}}>
      <h1 style={{ textAlign: "center" }}>Создание Пользователя</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: 'column', height: '30vh', justifyContent: 'space-around' }}>
        <input onChange={handleChange} type="text" name="nickName" placeholder="Псевдоним" />
        <input onChange={handleChange} type="text" name="name" placeholder="Имя" />
        <input onChange={handleChange} type="text" name="surName" placeholder="Фамилия" />
        <label htmlFor="gender">Пол</label>
        <select onChange={handleChange} name="gender" id="gender">
          <option value="Мужской">Мужской</option>
          <option value="Женский">Женский</option>
        </select>
        <input onChange={handleChange} type="number" name="age" placeholder="Возраст" />
        <button>Отправить</button>
      </form>
    </div>
  );
}

export default UserCreate;
