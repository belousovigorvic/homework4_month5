import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setNickName, setName, setSurName, setPatronymic, setGender, setAge } from "../../store/userCreateReducer";

const UserCreate = () => {
  const [formData, setFormData] = useState({
    nickName: '',
    name: '',
    surName: '',
    patronymic: '',
    gender: 'Мужской',
    age: 0
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setNickName(formData.nickName));
    dispatch(setName(formData.name));
    dispatch(setSurName(formData.surName));
    dispatch(setPatronymic(formData.patronymic));
    dispatch(setGender(formData.gender));
    dispatch(setAge(formData.age));
    navigate('/user-list');
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Создание Пользователя</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: 'column', height: '25vh', justifyContent: 'space-around' }}>
        <input onChange={handleChange} type="text" name="nickName" placeholder="Псевдоним" />
        <input onChange={handleChange} type="text" name="name" placeholder="Имя" />
        <input onChange={handleChange} type="text" name="surName" placeholder="Фамилия" />
        <input onChange={handleChange} type="text" name="patronymic" placeholder="Отчество" />
        <label htmlFor="gender">Пол</label>
        <select onChange={handleChange} name="gender" id="gender">
          <option value="Мужской">Мужской</option>
          <option value="Женский">Женский</option>
        </select>
        <input onChange={handleChange} type="number" name="age" placeholder="Возраст" />
        <button>Отправить</button>
      </form>
    </>
  );
};

export default UserCreate;
