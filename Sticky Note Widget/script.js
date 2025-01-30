
        const notesContainer = document.getElementById('notes');
        const addNoteBtn = document.querySelector('.add-note');
        const colors = ["#FED800", "#88B2B3", "#B0BFDC", "#FF9B8A", "#EDB88E"];
        let colorIndex = 0;

        function loadNotes() {
            notesContainer.innerHTML = localStorage.getItem('notes') || '';
            attachDeleteEvent();
            attachInputEvent();
        }

        function saveNotes() {
            localStorage.setItem('notes', notesContainer.innerHTML);
        }

        function attachDeleteEvent() {
            document.querySelectorAll('.delete').forEach(btn => {
                btn.onclick = function() {
                    this.parentElement.remove();
                    saveNotes();
                };
            });
        }

        function attachInputEvent() {
            document.querySelectorAll('textarea').forEach(textarea => {
                textarea.oninput = saveNotes;
            });
        }

        addNoteBtn.onclick = function() {
            const note = document.createElement('div');
            note.className = 'note';
            note.style.background = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length;
            note.innerHTML = `
                <button class="delete">&times;</button>
                <textarea></textarea>
            `;
            notesContainer.appendChild(note);
            attachDeleteEvent();
            attachInputEvent();
            saveNotes();
        };

        loadNotes();
    