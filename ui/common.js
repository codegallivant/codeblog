function loadLoggedInUser(login, username, password, email) {
    var parentButtons = document.getElementById('login_buttons');
	if(document.getElementById('login_area')) {
	var loginArea = document.getElementById('login_area');
    loginArea.innerHTML = `
        <h3><i> ${username} </i></h3>
		<br>
		<form>
		<P>
		Username:
		<input type="text" id='username' value='${username}' class = 'cred' disabled>
		<br><br>
		Password:
		<input type="email" id='email' value='${email}' class = 'cred' disabled>
		</P>
		<br><br>
		<a href="/dir-settings"><button style='font-size: 0.8em; height: 30px;'>Edit</button></a>
		</form>
	<br><br><br>
        <a href="/logout"><button>Logout</button></a>
        
        <a href="/delete-account"><button>Delete Account</button></a>
		<script src='/ui/update_cred.js'></script>
    `;
	}
    parentButtons.innerHTML=`
        <a href="/dir-Login"><button class="dropbtn specialB" id="ProfileB">${username}</button></a>
    `
    
}


function loadLogin () {
    // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
				var output = JSON.parse(this.response);
				loadLoggedInUser(output, output[0], output[1], output[2]);
            } else {
                loadLoginForm();
            }
        }
    };
    
    request.open('POST', '/check-login', true);
	request.send(null);
}


loadLogin();