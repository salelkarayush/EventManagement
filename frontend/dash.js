const createhpgtmpl = () => /*html*/ `
<!DOCTYPE html>
<html>
  <head>
    <title>Managerio</title>
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
  <body >
    <header class="bg-indigo-500 text-white p-4 flex justify-between items-center">
      <div class="flex flex-col">
        <h1 class="text-3xl cursor-pointer font-mono">Managerio</h1>
        <div class="flex">
          <div class="font-mono " >Welcome</div>
          <div hx-get="" class="cursor-pointer font-mono ml-3">Shivam Raikar</div>
        </div>
      </div>

      <div class="">
        <form hx-get="/search" hx-trigger="keyup changed delay:500ms" hx-target=".event-list ul">
          <input
            type="text"
            name="search"
            placeholder="Search events"
            class="font-mono text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </form>
      </div>
    </header>

    <main class="p-4">
      <div class="event-list mb-6">
        <button
          class="w-full bg-indigo-500 font-mono text-white px-4 py-2 rounded focus:outline-none hover:bg-indigo-700"
          hx-get="/event/all"
          hx-target=".event-list ul">Show Upcoming Events</button>
        <ul></ul>
      </div>
      <div class="create-event mb-6">
        <button
          class="bg-indigo-500 font-mono text-white px-4 py-2 rounded focus:outline-none hover:bg-indigo-700"
          hx-get="/dashboard/create-event"
          hx-swap="beforeend"
          hx-target=".create-event"
        >Create Event</button>
        <div></div>
      </div>
    </main>
  </body>
</html>
`;

module.exports = createhpgtmpl;
