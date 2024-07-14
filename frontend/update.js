const updateEventForm = (eventId) => /*html*/`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Manager</title>
    <script src="https://unpkg.com/htmx.org@1.7.0"></script>
</head>
<body>
    <h1>Events</h1>
    <div id="events" hx-get="/events" hx-trigger="load" hx-target="#events">

    </div>
    </br>


    <div id="eventFormContainer"></div> 



</body>
</html>
`;

module.exports = updateEventForm;
