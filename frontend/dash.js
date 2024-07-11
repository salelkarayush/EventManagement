const createhpgtmpl = () => /*html*/`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Event List</title>
    <script src="https://unpkg.com/htmx.org@2.0.0"></script>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100">
    <header class="bg-blue-500 text-white p-4">
        <h1 class="text-3xl text-left">Event List</h1>
        <input 
              class="text-grey"
              hx-get="/dashboard/search"
              hx-trigger="search"
              type="text"
              text="Search Upcoming Events...">
        <button name="search" class="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-700">Search</button>
    </header>

    <main class="p-4">
        <div class="event-list mb-6">
            <button 
                class="bg-green-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-green-700"
                hx-get="/event" 
                hx-target=".event-list">Show Upcoming Events</button>
        </div>

        <div class="add-event-form bg-white p-6 rounded shadow-md">
            <h2 class="text-2xl font-bold mb-4">Add an event now</h2>
            <form>
                <div class="mb-4">
                    <input 
                        type="text"
                        name="organiser"
                        placeholder="Enter your Name"
                        class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div class="mb-4">
                    <input 
                        type="text"
                        name="event-name"
                        placeholder="Event Title"
                        class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div class="mb-4">
                    <input 
                        type="text-area"
                        name="event-description"
                        placeholder="Event desc"
                        class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <button 
                    type="submit"
                    class="w-full bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-700"
                    hx-on::after-request="document.querySelector('form').reset()"
                    hx-on:click="console.log('new event added', event)"
                    hx-post="/events" 
                    hx-target=".event-list ul" 
                    hx-swap="beforeend"
                >Add Event</button>
            </form>
        </div>
    </main>
</body>
</html>
`;

module.exports = createhpgtmpl;
