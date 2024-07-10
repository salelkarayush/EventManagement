//replace the body of the main page with this page for login and signup

const loginnsignup =()=> /*html*/`
<body>
    <div class="container">
        <div class="toggle-buttons">
            <button onclick="showForm('login-form')">Login</button>
            <button onclick="showForm('signup-form')">Sign Up</button>
        </div>
        <div id="login-form" class="form-container hidden">
            <h1 class="form-title">Login</h1>
            <form class="form">
                <label for="login-email">Email ID:</label>
                <input type="email" id="login-email" name="email" required>
                
                <label for="login-password">Password:</label>
                <input type="password" id="login-password" name="password" required>
                
                <button hx-post="">Login</button>
				<!-- add login and signup hx post element which you want -->
            </form>
        </div>
        <div id="signup-form" class="form-container hidden">
            <h1 class="form-title">Sign Up</h1>
            <form class="form">
				<label for="signup-email">Name:</label>
                <input type="text" id="signup-name" name="name" required>

                <label for="signup-email">Email ID:</label>
                <input type="email" id="signup-email" name="email" required>
                
                <label for="signup-password">Password:</label>
                <input type="password" id="signup-password" name="password" required>
                
                <label for="signup-confirm-password">Confirm Password:</label>
                <input type="password" id="signup-confirm-password" name="confirm_password" required>
                
                <button hx-post="">Sign Up</button>
				<!-- here too -->
            </form>
        </div>
    </div>
</body>	
` 
module.exports =  loginnsignup;