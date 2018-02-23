(function() {
  populateUsersTable();
  populateUserInfo();
})();

function populateUsersTable() {
  var tableContent = '';
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var users = JSON.parse(this.responseText);
      for (var i = 0; i < users.length; i++) {
        tableContent += '<tr>';
        tableContent += '<th scope="row">' + (i + 1) + '</th>';
        tableContent += '<td>' + users[i].firstName + '</td>';
        tableContent += '<td>' + users[i].lastName + '</td>';
        tableContent += '<td>' + users[i].username + '</td>';
        tableContent += '</tr>';
      };
      document.getElementById('usersListTable').tBodies[0].innerHTML = tableContent;
    }
  };
  xhttp.open("GET", "api/users/allUsers", true);
  xhttp.send();
};

function populateUserInfo() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var user = JSON.parse(this.responseText);
      document.getElementById('name').textContent = user.firstName +" "+ user.lastName;
      document.getElementById('email').textContent = user.username;
      document.getElementById('age').textContent = user.age;
      document.getElementById('language').textContent = user.language;
    }
  };
  xhttp.open("GET", "api/users/user/self", true);
  xhttp.send();
};

function logout() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      window.location = '/'
    }
  };
  xhttp.open("POST", "api/logout", true);
  xhttp.send();
}