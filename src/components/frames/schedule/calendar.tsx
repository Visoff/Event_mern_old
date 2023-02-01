export default function Calendar() {
    
    const res = []

    const current_date = new Date()
    const current_year = current_date.getFullYear()
    const current_month = current_date.getMonth()
    const last_day = new Date(current_year, current_month+1, 0)
    const month_length = last_day.getDate()

    var cursor = new Date(current_year, current_month, 1);

    for (var i = 1; i <= month_length; i++) {
        cursor.setDate(i)
        res.push(<div key={i}>{i}</div>)
    }

    return (
        <div>
            {res}
        </div>
    );
}