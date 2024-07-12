const newevent = () => /*html*/`
<div class="add-event-form bg-white p-6 rounded shadow-md">
  <h2 class="text-2xl font-bold mb-4">Creating an Event</h2>
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
      class="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-700"
      hx-on:after-request="document.querySelector('form').reset()"
      hx-on:click="logFormData()"
      hx-post="/event/CreateEvents"
    >
      Add Event
    </button>
    <button
      type="button"
      class="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-700"
      hx-on:click="document.querySelector('.add-event-form').remove()"
    >
      Cancel
    </button>
  </form>
</div>
`;

module.exports = newevent;
