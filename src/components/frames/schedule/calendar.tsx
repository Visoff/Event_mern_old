import React, { EventHandler, MouseEventHandler, useState } from 'react';

import "./calendar.css"

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

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
    const offset = (dateCopy.getDay() + 1)&7;
    dateCopy.setDate(offset);

    function click(dateCopy:string) {
      return function (e:any) {
        if ((e.target as HTMLElement).classList.contains("other-month")) {
          if (new Date(dateCopy).getMonth() > date.getMonth()) {
            handleNextMonth()
          } else {
            handlePrevMonth()
          }
        }
          setSelectedDate(new Date(dateCopy))
        }
    }

    for (let i = 0; i < 42; i++) {
      dateCopy.setDate(dateCopy.getDate() + 1);
      const currentDay = dateCopy.getDate();
      const currentMonth = dateCopy.getMonth();

      days.push(
        <td key={i} className={`calendar-day ${currentMonth === date.getMonth() ? 'current-month' : 'other-month'} ${selectedDate && selectedDate.getDate() === currentDay && selectedDate.getMonth() === currentMonth ? 'selected' : ''}`} onClick={click(dateCopy.toString())} >
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
            <th colSpan={5}>{`${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`}</th>
            <th>
                <div onClick={handlePrevMonth}>{'<'}</div>
                <div onClick={handleNextMonth}>{'>'}</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>ПН</th>
            <th>ВТ</th>
            <th>СР</th>
            <th>ЧТ</th>
            <th>ПТ</th>
            <th>СБ</th>
            <th>ВС</th>
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
