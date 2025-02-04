const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");
const monthYear = document.getElementById("monthYear");
const calendarDays = document.querySelector("#calendarDays tbody");

let currentDate = new Date();
let notes = {};

function renderCalendar(date) {
    const month = date.getMonth();
    const year = date.getFullYear();
    
    monthYear.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;
    calendarDays.innerHTML = "";

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    const firstDayOfWeek = firstDay.getDay();
    const totalDays = lastDay.getDate();

    let row = document.createElement("tr");

    for (let i = 0; i < firstDayOfWeek; i++) {
        const cell = document.createElement("td");
        cell.classList.add("empty");
        row.appendChild(cell);
    }

    for (let day = 1; day <= totalDays; day++) {
        if (row.children.length === 7) {
            calendarDays.appendChild(row);
            row = document.createElement("tr");
        }

        const cell = document.createElement("td");
        cell.textContent = day;
        const dateKey = `${year}-${month + 1}-${day}`;

        if (notes[dateKey]) {
            const note = document.createElement("div");
            note.classList.add("note");
            note.textContent = notes[dateKey];
            cell.appendChild(note);
        }

        cell.addEventListener("click", () => {
            const userNote = prompt("Add a note for this date:");
            if (userNote !== null) {
                notes[dateKey] = userNote;
                renderCalendar(date);
            }
        });

        row.appendChild(cell);
    }

    if (row.children.length > 0) {
        calendarDays.appendChild(row);
    }
}

prevMonthBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextMonthBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

// Year Picker
function showYearPicker() {
    document.getElementById("yearPicker").style.display = "flex";
    document.getElementById("yearInput").value = currentDate.getFullYear();
}

function closeYearPicker() {
    document.getElementById("yearPicker").style.display = "none";
}

function changeYear() {
    const selectedYear = parseInt(document.getElementById("yearInput").value);
    if (selectedYear) {
        currentDate.setFullYear(selectedYear);
        renderCalendar(currentDate);
        closeYearPicker();
    }
}

// Month Picker
monthYear.addEventListener("click", () => {
    document.getElementById("monthPicker").style.display = "flex";
});

function closeMonthPicker() {
    document.getElementById("monthPicker").style.display = "none";
}

function changeMonth() {
    const selectedMonth = parseInt(document.getElementById("monthSelect").value);
    currentDate.setMonth(selectedMonth);
    renderCalendar(currentDate);
    closeMonthPicker();
}

// Initial render
renderCalendar(currentDate);
