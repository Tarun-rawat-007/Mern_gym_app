import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [markedDates, setMarkedDates] = useState([]);
  const [userEmail, setUserEmail] = useState(null);
  const [streak, setStreak] = useState(0);
  const [selectedDay, setSelectedDay] = useState(null);
  const navigate = useNavigate();

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    if (email) {
      setUserEmail(email);
      fetch(`http://localhost:3000/api/user/get-workouts/${email}`)
        .then(res => res.json())
        .then(data => {
          if (data?.workouts?.length > 0) {
            setMarkedDates(data.workouts[0].markedDates);
          }
        })
        .catch(err => {
          console.error('Error fetching workout data:', err);
          toast.error('Failed to fetch workout data.');
        });
    }
  }, []);

  useEffect(() => {
    const sorted = [...markedDates].sort((a, b) => a - b);
    let maxStreak = 0;
    let currentStreak = sorted.length > 0 ? 1 : 0;

    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i] === sorted[i - 1] + 1) {
        currentStreak++;
      } else {
        maxStreak = Math.max(maxStreak, currentStreak);
        currentStreak = 1;
      }
    }

    setStreak(Math.max(maxStreak, currentStreak));
  }, [markedDates]);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    return { days, firstDay };
  };

  const { days, firstDay } = getDaysInMonth(currentDate);

  const changeMonth = (offset) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1);
    setCurrentDate(newDate);
    setMarkedDates([]);
    setSelectedDay(null);
  };

  const toggleMark = (dayNum) => {
    setSelectedDay(dayNum);
  };

  const saveMark = () => {
    if (!userEmail || selectedDay == null) return;

    const updated = [...new Set([...markedDates, selectedDay])].sort((a, b) => a - b);
    setMarkedDates(updated);

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/save-workout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: userEmail,
        year: currentDate.getFullYear(),
        month: currentDate.getMonth() + 1,
        markedDates: updated,
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log('Marked day saved:', data);
        toast.success('Workout saved! 💪');
      })
      .catch(err => {
        console.error('Error saving:', err);
        toast.error('Failed to save. Please try again.');
      });
  };

  const unmarkDay = () => {
    if (!userEmail || selectedDay == null) return;

    const updated = markedDates.filter(d => d !== selectedDay);
    setMarkedDates(updated);

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/unmark-workout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: userEmail,
        year: currentDate.getFullYear(),
        month: currentDate.getMonth() + 1,
        day: selectedDay
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log('Unmarked day:', data);
        toast.error('Workout removed! ❌');
      })
      .catch(err => {
        console.error('Error unmarking:', err);
        toast.error('Failed to unmark. Please try again.');
      });
  };

  const showInfo = () => {
    alert(`📅 How to Use:
1. Click on a date to select it.
2. Click "✅ Save Selected Workout" to mark it green.
3. Click "❌ Unmark Selected Workout" to remove green mark.
4. Gray = selected | Green = saved`);
  };

  return (
    <>
      <button
        onClick={() => navigate('/dashboard')}
        className="bg-black text-white w-12 h-12 rounded-full shadow-md hover:bg-gray-700 transition duration-300 ease-in-out fixed bottom-10 right-10 flex items-center justify-center space-x-2 sm:w-24 sm:h-12 md:w-32 md:h-16 lg:w-36 lg:h-18 border-2 border-white hover:border-gray-400 animate-bounce-slow"
      >
        <span className="hidden sm:block text-white text-lg font-medium">Back</span>
        <span className="text-white text-2xl">→</span>
      </button>

      <div style={containerStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{fontSize:"24px"}}>
            {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
          </h2>
          <button onClick={showInfo} style={infoBtnStyle}>ℹ️</button>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <button onClick={() => changeMonth(-1)} style={navBtnStyle}>◀ Prev</button>
          <button onClick={() => changeMonth(1)} style={navBtnStyle}>Next ▶</button>
        </div>

        <div style={{ fontWeight: 'bold', marginBottom: '12px' }}>Current Streak: {streak} 🔥</div>

        <div style={calendarGridStyle}>
          {daysOfWeek.map(day => (
            <div key={day} style={weekDayStyle}>{day}</div>
          ))}

          {[...Array(firstDay)].map((_, i) => <div key={`empty-${i}`}></div>)}

          {[...Array(days)].map((_, i) => {
            const day = i + 1;
            const isMarked = markedDates.includes(day);
            const isSelected = selectedDay === day;

            return (
              <div
                key={day}
                onClick={() => toggleMark(day)}
                style={{
                  ...dayStyle,
                  backgroundColor: isSelected
                    ? '#616161'
                    : isMarked
                      ? '#b2f2bb'
                      : '#fff',
                  color: isSelected ? '#fff' : '#000',
                  borderColor: isSelected ? '#000' : '#ccc',
                  fontWeight: isSelected ? 'bold' : 'normal',
                  transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                {day}
              </div>
            );
          })}
        </div>

        <button onClick={saveMark} style={{ ...navBtnStyle, marginTop: '20px' }}>
        ✅ Check In log
        </button>
        <button onClick={unmarkDay} style={{ ...navBtnStyle, marginTop: '10px', backgroundColor: '#f44336' }}>
        ❌ Check Out log
        </button>
      </div>
    </>
  );
};

// 🎨 Styles
const containerStyle = {
  maxWidth: '500px',
  margin: 'auto',
  marginTop: '70px',
  textAlign: 'center',
  fontFamily: 'sans-serif',
  padding: '8px'
};

const navBtnStyle = {
  margin: '0 10px',
  padding: '8px 16px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#4CAF50',
  color: 'white',
  cursor: 'pointer',
  fontSize: '14px',
};

const infoBtnStyle = {
  backgroundColor: '#2196f3',
  color: 'white',
  borderRadius: '50%',
  width: '32px',
  height: '32px',
  fontSize: '16px',
  cursor: 'pointer',
  border: 'none'
};

const calendarGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '5px'
};

const weekDayStyle = {
  fontWeight: 'bold',
  padding: '10px 0',
  background: '#eee'
};

const dayStyle = {
  padding: '12px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  transition: 'background 0.3s',
  cursor: 'pointer',
};

export default Calendar;
