const EventForm = (event) => /*html*/`
    <form id="eventForm" hx-put="/event/${event._id}" hx-include="#eventForm" hx-target="#response" hx-swap="outerHTML">
        <h1>Update Form </h1>
        <input type="hidden" name="eventid" value="${event.eventid}">
        <div class="mb-4">
            <label>
                Title:
                <input type="text" name="title" value="${event.title}" required class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </label>
        </div>
        <div class="mb-4">
            <label>
                Description:
                <input type="text" name="description" value="${event.description}" required class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </label>
        </div>
        <div class="mb-4">
            <label>
                User ID:
                <input type="text" name="userid" value="${event.userid}" required class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </label>
        </div>
        <div class="mb-4">
            <label>
                Categories:
                <input type="text" name="categories" value="${event.categories}" required class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </label>
        </div>
        <div class="mb-4">
            <label>
                Location:
                <input type="text" name="location" value="${event.location}" required class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </label>
        </div>
        <div class="mb-4">
            <label>
                Date:
                <input type="text" name="date" value="${event.date}" required class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </label>
        </div>
        <div class="mb-4">
            <label>
                Entry Fee:
                <input type="number" name="entryfee" value="${event.entryfee}" required class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </label>
        </div>
        <button 
            type="submit"
            class="w-full bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-700"
            hx-on:after-request="this.reset()"
        >
            Update Event
        </button>
    </form>
    <div id="response"></div>
`;

module.exports = EventForm;
