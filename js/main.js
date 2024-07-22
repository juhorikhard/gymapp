let chestArr = [
    "Bench Press",
    "Incline Bench Press",
    "Decline Bench Press",
    "Push-Up",
    "Chest Fly",
    "Cable Crossover",
    "Pec Deck Machine",
    "Dumbbell Pullover",
    "Dips",
    "Chest Press Machine"
];

let backArr = [
    "Deadlift",
    "Pull-Up",
    "Bent Over Row",
    "Lat Pulldown",
    "T-Bar Row",
    "Single-Arm Dumbbell Row",
    "Seated Cable Row",
    "Face Pull",
    "Hyperextension",
    "Inverted Row"
];

let legArr = [
    "Squat",
    "Leg Press",
    "Lunge",
    "Leg Extension",
    "Leg Curl",
    "Romanian Deadlift",
    "Calf Raise",
    "Bulgarian Split Squat",
    "Glute Bridge",
    "Step-Up"
];

function getRandomExercises(exerciseArray) {
    let randomExercises = [];
    let usedIndices = new Set();
    while (randomExercises.length < 6) {
        let randomIndex = Math.floor(Math.random() * exerciseArray.length);
        if (!usedIndices.has(randomIndex)) {
            usedIndices.add(randomIndex);
            randomExercises.push(exerciseArray[randomIndex]);
        }
    }
    return randomExercises;
}

function displayExercises(exercises) {
    const exerciseListDiv = document.getElementById('exercise-list');
    exerciseListDiv.innerHTML = '<h2>Selected Exercises:</h2>';
    exercises.forEach(exercise => {
        let listItem = document.createElement('p');
        listItem.textContent = exercise;
        exerciseListDiv.appendChild(listItem);
    });
    exerciseListDiv.classList.remove('hidden');
}

document.getElementById('chestButton').addEventListener('click', () => {
    let randomExercises = getRandomExercises(chestArr);
    displayExercises(randomExercises);
});

document.getElementById('backButton').addEventListener('click', () => {
    let randomExercises = getRandomExercises(backArr);
    displayExercises(randomExercises);
});

document.getElementById('legsButton').addEventListener('click', () => {
    let randomExercises = getRandomExercises(legArr);
    displayExercises(randomExercises);
});

document.getElementById("about-button").addEventListener("click", openNav);

function openNav() {
    document.getElementById("gymSidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("gymSidebar").style.width = "0";
}