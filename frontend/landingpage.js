const landingpgtmpl = () => /*html*/`
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://unpkg.com/htmx.org@2.0.0"></script>
    <title>Event Managing</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-gray-100 flex items-center justify-center h-screen">
    <div class="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 class="text-4xl font-bold mb-4">Welcome to EventManaging</h1>
        <p class="mb-6 font-bold">Join us for an unforgettable party. Please log in or register to RSVP or to Host a party.</p>
        
        <div class="space-x-4">
            <a hx-get="/login" class="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Login</a>
            <a hx-get="/register" class="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Register</a>
        </div>
    </div>
</body>

</html>`;
module.exports = landingpgtmpl;
