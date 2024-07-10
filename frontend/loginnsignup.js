//replace the body of the main page with this page for login and signup

const loginnsignup =()=> /*html*/`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://unpkg.com/htmx.org@2.0.0"></script>
    <title>Event Managing</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div class="flex justify-center mb-6">
            <button hx-get="/login" hx-trigger="click" class="bg-blue-500 text-white px-4 py-2 mr-2 rounded focus:outline-none hover:bg-blue-700">Login</button>
            <button hx-get="/signup" hx-trigger="click" class="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-700">Sign Up</button>
        </div>
        <div id="login-form" class="form-container hidden">
            <h1 class="text-2xl font-bold text-center mb-6">Login</h1>
            <form class="space-y-4" hx-post="/auth/login">
                <div>
                    <label for="login-email" class="block text-gray-700">Email ID:</label>
                    <input type="email" id="login-email" name="email" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                </div>
                <div>
                    <label for="login-password" class="block text-gray-700">Password:</label>
                    <input type="password" id="login-password" name="password" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                </div>
                <button type="submit" hx-post="/auth/login" class="w-full bg-green-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-green-700">Login</button>
            </form>
        </div>
        <div id="signup-form" class="form-container hidden">
            <h1 class="text-2xl font-bold text-center mb-6">Sign Up</h1>
            <form class="space-y-4" hx-post="/auth/register">
                <div>
                    <label for="signup-name" class="block text-gray-700">Name:</label>
                    <input type="text" id="signup-name" name="username" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                </div>
                <div>
                    <label for="signup-email" class="block text-gray-700">Email ID:</label>
                    <input type="email" id="signup-email" name="email" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                </div>
                <div>
                    <label for="signup-password" class="block text-gray-700">Password:</label>
                    <input type="password" id="signup-password" name="password" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                </div>
                <div>
                    <label for="signup-confirm-password" class="block text-gray-700">Confirm Password:</label>
                    <input type="password" id="signup-confirm-password" name="confirm_password" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                </div>
                <button type="submit" hx-post="/auth/register" class="w-full bg-green-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-green-700">Sign Up</button>
            </form>
        </div>
    </div>
    <script>
        function showForm(formId) {
            document.getElementById('login-form').classList.add('hidden');
            document.getElementById('signup-form').classList.add('hidden');
            document.getElementById(formId).classList.remove('hidden');
        }
    </script>
</body>
</html>

` 
module.exports =  loginnsignup;