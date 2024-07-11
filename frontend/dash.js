const createhpgtmpl = () => /*html*/`
<!DOCTYPE html>
<html>
  <head>
    <title>My Event List</title>
    <script src="https://unpkg.com/htmx.org@2.0.0"></script>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

    <script>
      function logFormData() {
          const title = document.querySelector('input[name="title"]').value;
          const description = document.querySelector('input[name="description"]').value;
          console.log('Title:', title);
          console.log('Description:', description);
      }
    </script>
  </head>
  <body>
    <header class="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 class="text-3xl">Event List</h1>
      <form hx-get="/search" hx-trigger="keyup changed delay:500ms" hx-target=".event-list ul">
        <input 
          type="text" 
          name="search" 
          placeholder="Search events" 
          class="text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </form>
    </header>

    <main class="p-4">
      <div class="event-list mb-6">
        <button 
          class="bg-green-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-green-700"
          hx-get="/event" 
          hx-target=".event-list ul">Show Upcoming Events</button>
        <ul></ul>
      </div>

      <button
        class="bg-green-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-green-700"
        hx-get = "/dashboard/create-event"
        hx-swap = "outerHTML"
      >Create Event</button>
    </main>
  </body>
</html>
`;

module.exports = createhpgtmpl;
