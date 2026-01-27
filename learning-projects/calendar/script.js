const WEEK_DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const MONTHS = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 
                'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

let currentDate, currentDay, currentMonth, currentYear;
let monthNameContainer, nextBtn, prevBtn, weekDaysContainer, daysContainer;

document.addEventListener('DOMContentLoaded', () => {
    
    currentDate = new Date();
    currentYear = currentDate.getFullYear();
    currentMonth = currentDate.getMonth();
    currentDay = currentDate.getDate();

    monthNameContainer = document.getElementById("current-month");
    nextBtn = document.getElementById("next-btn");
    prevBtn = document.getElementById("prev-btn");
    weekDaysContainer = document.getElementById('week-days-wrapper');
    daysContainer = document.getElementById('days-grid-wrapper');

    weekDaysContainer.innerHTML = WEEK_DAYS.map(day => `<div class="week-day">${day}</div>`).join('');

    nextBtn.addEventListener("click", () => changeMonth('next'));
    prevBtn.addEventListener("click", () => changeMonth('prev'));

    document.addEventListener("keydown", (e) => {
        if(e.key === "ArrowLeft") {
            changeMonth('prev');
        } else if(e.key === "ArrowRight") {
            changeMonth('next');
        }
    });

    updateCalendar();
});

function getFullDaysInMonth(year, month){
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return daysInMonth;
}

function changeMonth(direction) {
    if(direction === 'next') {
        currentMonth += 1;
        if(currentMonth > 11) {
            currentMonth = 0;
            currentYear += 1;
        }
    } else {
        currentMonth -= 1;
        if(currentMonth < 0) {
            currentMonth = 11;
            currentYear -= 1;
        }
    }
    updateCalendar();
}

function updateCalendar() {
    monthNameContainer.textContent = `${MONTHS[currentMonth]} ${currentYear}`;
    renderCalendar(currentYear, currentMonth, currentDay);
}

function renderCalendar(year, month, day) {
    daysContainer.innerHTML = '';

    const daysInMonth = getFullDaysInMonth(year, month);

    // Adjustment for Monday as the first day of the week
    // getDay() returns 0 for Sunday, 1 for Monday, etc.
    // Convert to the format of Mon=0, Tue=1, ..., Sun=6
    const firstDayOfWeek = (new Date(year, month, 1).getDay() + 6) % 7;
    
    for(let i = 0; i < 42; i++) {
        let day = document.createElement('div');
        day.className = `day`;
        day.setAttribute('data-day-number', `${i}`);
        daysContainer.appendChild(day);
    }

    for(let i = 0; i < 42; i++) {
        let curMonth = new Date;
        curMonth = curMonth.getMonth();
        if(i >= firstDayOfWeek && i < (daysInMonth + firstDayOfWeek)) {
            let dayContainer = document.querySelector(`[data-day-number="${i}"]`);
            dayContainer.textContent = i - firstDayOfWeek + 1;
            if((i - firstDayOfWeek + 1) === day && curMonth === month) {
                dayContainer.className = "current-day"
            }
        }
    }
}

