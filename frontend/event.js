
const createeventtmpl = (event) => /*html*/`
    <li data-id="${event.id}">
        <div
            class="details" 
            hx-get="/events/edit/${event.id}"
            hx-target="closest li"
        >
            <h3>${event.name}</h3>
            <p>${event.organiser}</p>
        </div>
        <button
            hx-delete="/events/${event.id}" 
            hx-target="closest li" 
            hx-swap="outerHTML"
        >Delete
        </button>
    </li>
`;

module.exports = createeventtmpl;