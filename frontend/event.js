const createeventtmpl = (event) => /*html*/`
    <li data-id="${event.id}">
        <div
            class="details" 
            hx-get="/events/edit/${event.id}"
            hx-target="closest li"
        >
            <h3>${event.title}</h3>
            <p>${event.date}</p>
            <p>${event.description}</p>
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