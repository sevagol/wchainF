import React, { useState } from 'react';
import './App.css' ;

const tasks = [
  'Пенальти пиром',
  'С нулевого угла',
  'Попасть в очко',
  'АТВ',
  'Пенальти рабоной',
  'Пенальти пяткой',
  'Лонгшот слабой ногой',
  'С центра поля верхом',
  'Пенальти слабой ногой',
  'Лонгшот с наката',
  'Нацеканить головой 15 раз',
  'Камень, ножницы, бумага',
  'Суперблиц – 3 пенальти подряд',
  'Гол с подачи',
  'Пенальти наоборот',
  'Лонгшот наоборот',
  'Пенальти наоборот',
  'Теннис',
  'Выход один на один',
  'Лонгшот с лета',
  'Кроссбар',
  'Пенальти',
  'Лонгшот',
  'Свободный удар',
  'Чипованный удар',
  'Дриблинг через всех',
  'Вратарь на поле',
  'Два пенальти подряд',
  'Гол из-за поля',
  'Удар в девятку',
  'Гол "ракеткой"',
  'Дриблинг с соперниками',
  'Гол из угла',
  'Гол "с шестнадцатой"',
  'Обводка вратаря',
  'Штрафной удар',
  'Пас в глубину',
  'Загон вратаря',
  'Вратарь в полу',
  'Гол на последней минуте',
  'Забившая голова берет пенальти',
  'Гол "крестом"',
  'Гол в десятку',
  'Дважды обыграть вратаря',
  'Обводка соперника',
  'Пас в "разрыв обороны"',
  'Гол после штрафного',
  'Перехват и гол',
  'Подсветка вратаря',
  'Гол "передачей"',
]; // Обновленный список заданий
; // Список заданий
const numbers = [0, 500, 1500, 3000, 5000, 8000, 13000]; // Список чисел, добавлено начальное число 0

function App() {
  const [balance, setBalance] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentTask, setCurrentTask] = useState<string | null>(null);
  const [currentNumberIndex, setCurrentNumberIndex] = useState(0);

  const getRandomTask = () => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    setCurrentTask(tasks[randomIndex]);
    setPopupVisible(true);
  };

  const handleWin = () => {
    setPopupVisible(false);

    if (currentNumberIndex + 1 < numbers.length) {
      setCurrentNumberIndex(currentNumberIndex + 1);
    } else {
      // Если это последнее число, то добавляем его к балансу
      const lastNumber = numbers[numbers.length - 1];
      setBalance(balance + lastNumber);
    }
  };

  const handleLose = () => {
    setPopupVisible(false);
  };

  const handleBank = () => {
    if (currentNumberIndex >= numbers.length) {
      return; // Все числа пройдены
    }

    const currentNumber = numbers[currentNumberIndex];
    setBalance(balance + currentNumber);
    setCurrentNumberIndex(0); // Устанавливаем указатель на ноль
  };

  const handleReset = () => {
    setBalance(0); // Обнуляем баланс
    setCurrentNumberIndex(0); // Устанавливаем указатель на ноль
  };

  return (
    <div className="app-container">
      <div className="balance">Сумма: {balance}</div>

      <button onClick={getRandomTask}>ЗАДАНИЕ</button>

      {popupVisible && (
        <div className="popup">
          <p>{currentTask}</p>
          <button onClick={handleWin}>WIN</button>
          <button onClick={handleLose}>LOSE</button>
        </div>
      )}

      <div className="number-container">
        {currentNumberIndex < numbers.length && (
          <div className={`number ${currentNumberIndex === 0 ? 'active' : ''}`}>
            {numbers[currentNumberIndex]}
          </div>
        )}
      </div>

      {currentNumberIndex < numbers.length && (
        <button onClick={handleBank}>Банк</button>
      )}

      <button onClick={handleReset}>Сброс</button>
    </div>
  );
}

export default App;


