const createhpgtmpl = () => /*html*/`
<!DOCTYPE html>
  <html>
    <head>
      <title>My Event List</title>
      <script src="https://unpkg.com/htmx.org@2.0.0"></script>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>
        <h1>Event List</h1>
      </header>

      <main>
        <div class="event-list">
          <button 
            hx-get="/event" 
            hx-target=".event-list">Show Upcoming Events</button>
        </div>

        <div class="add-event-form">
          <h2>Add an event now</h2>
          <form action="">
            <input 
                type="text"
                name="organiser"
                placeholder="Enter Your Name"
                required
            />
            <input 
                type="text"
                name="event-name"
                placeholder="event-title"
                required
            />                     
            <button 
            hx-on::after-request="document.querySelector('form').reset()"
            hx-on:click="console.log('new event added', event)"
            hx-post="/events" 
            hx-target=".event-list ul" 
            hx-swap="beforeend"
            >Add
        </button>
          </form>
        </div>
      </main>
    </body>
  </html>
`;

module.exports = createhpgtmpl;