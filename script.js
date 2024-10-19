const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');

yesButton.addEventListener('click', () => {
    response.textContent = "I knew it! 💖💖💖 You make me the happiest! 😘";
});

noButton.addEventListener('click', () => {
    response.textContent = "Aww... 😢 But I love you anyway! 💕";
});
