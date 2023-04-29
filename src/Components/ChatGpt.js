import React, { useState } from "react";

function ChatGpt() {
  const [birthDate, setBirthDate] = useState("");
  const [daysUntilBirthday, setDaysUntilBirthday] = useState(0);

  const handleDateChange = (event) => {
    setBirthDate(event.target.value);
  };

  const calculateDaysUntilBirthday = () => {
    const today = new Date();
    const birth = new Date(birthDate);
    let nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());

    if (nextBirthday < today) {
      nextBirthday = new Date(today.getFullYear() + 1, birth.getMonth(), birth.getDate());
    }

    const timeUntilBirthday = nextBirthday.getTime() - today.getTime();
    const daysUntilBirthday = Math.ceil(timeUntilBirthday / (1000 * 60 * 60 * 24));

    setDaysUntilBirthday(daysUntilBirthday);
  };

  return (
    <div>
      <h1>Birthday Counter</h1>
      <label htmlFor="birthDate">Enter your birth date:</label>
      <input type="date" id="birthDate" value={birthDate} onChange={handleDateChange} />
      <button onClick={calculateDaysUntilBirthday}>Count Days</button>
      {daysUntilBirthday > 0 && (
        <p>Your next birthday is in {daysUntilBirthday} days.</p>
      )}
    </div>
  );
}

export default ChatGpt;
