const createhpgtmpl = () => /*html*/`
<!DOCTYPE html>
<html>
  <head>
    <title>My Event List</title>
    <script src="https://unpkg.com/htmx.org@2.0.0"></script>
    <link rel="stylesheet" href="/styles.css">
    <link rel="stylesheet" href="/css/loginnsignup.css">
    <link rel="stylesheet" href="/css/viewinfo.css">
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
          class="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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

      <div class="add-event-form bg-white p-6 rounded shadow-md">
        <h2 class="text-2xl font-bold mb-4">Event Now</h2>
        <form hx-target=".event-list ul" hx-swap="beforeend">
          <div class="mb-4">
            <input 
              type="text"
              name="title"
              placeholder="Name of event"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div class="mb-4">
            <input 
              type="text"
              name="description"
              placeholder="Description"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div class="mb-4">
            <select name="category" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required>
              <option value="" disabled selected>Select category</option>
              <option value="party">Party</option>
              <option value="social_event">Social Event</option>
              <option value="theatre">Theatre</option>
              <option value="comedy">Comedy</option>
            </select>
          </div>
          <div class="mb-4">
            <input 
              type="text"
              name="location"
              placeholder="Location"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div class="mb-4">
            <input 
              type="date"
              name="date"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div class="mb-4">
            <input 
              type="text"
              name="entryfee"
              placeholder="Entry Fee"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button 
            type="submit"
            class="w-full bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-700"
            hx-on:after-request="document.querySelector('form').reset()"
            hx-on:click="logFormData()"
            hx-post="/event/CreateEvents"
          >
            Add
          </button>
        </form>
      </div>
    </main>
  </body>
</html>
`;

module.exports = createhpgtmpl;
