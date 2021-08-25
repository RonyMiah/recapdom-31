document.getElementById('borderAdd').addEventListener('click', function () {

    const container = document.getElementById('friend-container');
    container.style.border = '3px solid yellow ';

})

function addBackground() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue'
    }
}
document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
    <h2 class="friend-name">New Friend</h2>
    <p>Neque, laborum. Optio ipsa iste nulla iure eligendi. Sequi, ipsum.</p>
    `
    container.appendChild(friendDiv)
})