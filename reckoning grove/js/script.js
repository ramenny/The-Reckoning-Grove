// Fireflies
const firefliesContainer = document.getElementById("fireflies");
const numFireflies = 20;

for (let i = 0; i < numFireflies; i++) {
    const firefly = document.createElement("div");
    firefly.classList.add("firefly");
    firefly.style.top = Math.random() * window.innerHeight + "px";
    firefly.style.left = Math.random() * window.innerWidth + "px";
    firefly.style.animationDuration = 5 + Math.random() * 5 + "s";
    firefliesContainer.appendChild(firefly);
}

// Animate fireflies
const fireflyElements = document.querySelectorAll(".firefly");
fireflyElements.forEach(f => {
    animateFirefly(f);
});

function animateFirefly(f) {
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;
    f.animate([
        { transform: `translate(0,0)` },
        { transform: `translate(${newX}px, ${newY}px)` }
    ], {
        duration: 5000 + Math.random() * 5000,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out'
    });
}

// Go Deeper button fade to home
document.getElementById("go-deeper").addEventListener("click", () => {
    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = 0;
    setTimeout(() => {
        window.location.href = "home.html";
    }, 1000);
});
// Handle Q&A form submissions
const qaForm = document.getElementById("qa-form");
const answeredContainer = document.getElementById("answered-questions");

qaForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = e.target.name.value || "Anonymous";
    const questionText = e.target.question.value;

    // For now, just display in the answered questions area as placeholder
    const qaItem = document.createElement("div");
    qaItem.classList.add("qa-item");
    qaItem.innerHTML = `
        <p class="question">Q: ${questionText}</p>
        <p class="answer">A: [Your answer here]</p>
    `;
    answeredContainer.appendChild(qaItem);

    // Clear form
    qaForm.reset();
});
