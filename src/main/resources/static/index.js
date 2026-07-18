// alert(
//     "Hello from js!"
// )
console.log("Hello from js!")
// data ={
//     name: "Bob",
//     gender: "male"
// }
var users= [
    {
        "name": "Bob",
        "gender": "male",
        "image":"john.png"
    },
        {
        "name": "Jane doe",
        "gender": "female",
        "image":"jane.png"
    }
]
var id=0;
function toggleuser() {
    id =(id+1)%2
    var userImage = document.getElementById("userImage");
    userImage.src = users[id].image;
    var userName = document.getElementById("username");
    userName.innerHTML = users[id].name;
    var userGender = document.getElementById("usergender");
    userGender.innerHTML = users[id].gender;
}
function randomuser() {
    fetch("https://randomuser.me/api/")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var usersData = data.results[0];

            var userImage = document.getElementById("userImage");
            userImage.src = usersData.picture.large;

            var userName = document.getElementById("username");
            userName.innerHTML =
                usersData.name.first + " " + usersData.name.last;

            var userGender = document.getElementById("usergender");
            userGender.innerHTML = usersData.gender;
        })
        .catch(function(error) {
            console.log("Error fetching user data:", error);
        });
}
