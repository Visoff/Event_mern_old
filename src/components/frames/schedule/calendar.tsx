export default function calendar() {const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

const totalDays = lastDayOfMonth.getDate();
const firstDayOfWeek = firstDayOfMonth.getDay();

let calendar = [];

calendar.push(<tr><th colspan='7'>{monthNames[currentMonth]} {currentYear}</th></tr>);
calendar.push(<tr><td>Sun</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td></tr>);
calendar.push(<tr>);

// Fill in the days of the week before the first day of the month
for (let i = 0; i < firstDayOfWeek; i++) {
  calendar.push(<td></td>);
}

// Fill in the days of the month
for (let i = 1; i <= totalDays; i++) {
  if ((i + firstDayOfWeek - 1) % 7 === 0) {
    calendar.push(</tr><tr>);
  }
  calendar.push(<td>{i}</td>);
}

calendar.push(</tr>);

return (
  <table>
    {calendar}
  </table>
);
}