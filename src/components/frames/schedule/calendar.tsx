import React, { useState } from 'react';

import "./calendar.css"

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const handlePrevMonth = () => {
    setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1));
  };

  const renderDays = () => {
    const days = [];
    const dateCopy = new Date(date);
    dateCopy.setDate(1);
    const offset = dateCopy.getDay();
    dateCopy.setDate(1 - offset);

    for (let i = 0; i < 42; i++) {
      dateCopy.setDate(dateCopy.getDate() + 1);
      const currentDay = dateCopy.getDate();
      const currentMonth = dateCopy.getMonth();

      days.push(
        <td key={i} className={`calendar-day ${currentMonth === date.getMonth() ? 'current-month' : 'other-month'} ${selectedDate && selectedDate.getDate() === currentDay && selectedDate.getMonth() === currentMonth ? 'selected' : ''}`} onClick={() => setSelectedDate(new Date(dateCopy))}>
          {currentDay}
        </td>
      );
    }

    return days;
  };

  return (
    <div className="calendar">
      <table>
        <thead>
          <tr>
            <th colSpan="5">{`${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`}</th>
            <div>
                <th onClick={handlePrevMonth}>{'<'}</th>
                <th onClick={handleNextMonth}>{'>'}</th>
            </div>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
          <tr>
            {renderDays().slice(0, 7)}
          </tr>
          <tr>
            {renderDays().slice(7, 14)}
          </tr>
          <tr>
            {renderDays().slice(14, 21)}
          </tr>
          <tr>
            {renderDays().slice(21, 28)}
          </tr>
          <tr>
            {renderDays().slice(28, 35)}
          </tr>
          <tr>
            {renderDays().slice(35, 42)}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
