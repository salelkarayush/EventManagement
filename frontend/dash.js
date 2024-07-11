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
    <header>
      <h1>Event List</h1>
    </header>

    <main>
      <div class="event-list">
        <button 
          hx-get="/event" 
          hx-target=".event-list ul">Show Upcoming Events</button>
        <ul></ul>
      </div>

      <div class="add-event-form">
        <h2>Event Now</h2>
        <form  hx-target=".event-list ul" hx-swap="beforeend">
          <input 
            type="text"
            name="title"
            placeholder="Name of event"
            required
          />
          <input 
            type="text"
            name="description"
            placeholder="Description"
            required
          />
          
          <input 
            type="text"
            name="category"
            placeholder="category"
            required
          />
          <input 
            type="text"
            name="location"
            placeholder="location"
            required
          />

          <input 
            type="Date"
            name="date"
            placeholder="date"
            required
          />

          <input 
            type="text"
            name="entryfee"
            placeholder="entryfee"
            required
          />

          <button 
            type="submit"
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
