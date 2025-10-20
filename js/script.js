// In this example, I want to create an interactive form that allows Newt Scamander create a sort of inventory of the Fantastic Beasts he's rescuing
// Here's what we'll need to do:
// 1. Grab the input a user enters into our form
// 2. Represent this input in a meaningful way, let's say an Object
// 3. Push the contents of that Object into an Array 
// 4. Reset our form so that the user can add a new creature if they want without having to manually delete the previous input
// 5. Display the new creature in our Array back to the user on our page

//create an array for starters 

let fantasticalBeasts = [];

const form = document.getElementById('addCreatureForm');
const nameInput = document.getElementById('creatureName');
const typeInput = document.getElementById('creatureType');
const habitatInput = document.getElementById('creatureHabitat');

const newCreature = 
{
    name: nameInput.ariaValueMax,
    type: typeInput.ariaValueMax,
    habitat: habitatInput.ariaValueMax,
    dateAdded: new Date().toLocaleDateString() // bonus: add timestamp
}

form.addEventListener('submit', function(event){
    event.preventDefault();

    fantasticalBeasts.push(newCreature);
    
    form.reset(); // This clears all form fields
    
});

function displayCreatures() {
    const displayArea = document.getElementById('creatureSanctuary');

    sanctuary.innerHTML = ''; // Clear previous display

    fantasticalBeasts.forEach((creature, index) => 
        {
            const creatureDiv = document.createElement('div');
            creatureDiv.classList.add('creature-entry');
            creatureDiv.innerHTML = `
                <h3>Creature ${index + 1}</h3>
                <p><strong>Name:</strong> ${creature.name}</p>
                <p><strong>Type:</strong> ${creature.type}</p>
                <p><strong>Habitat:</strong> ${creature.habitat}</p>
                <p><em>Added on: ${creature.dateAdded}</em></p>
            `;
            sanctuary.appendChild(creatureDiv);
        });
}

// Feature to remove creatures.

function removeCreature(index){
    fantasticalBeasts.splice(index,1);
    displayCreatures();
}

// Feature to search creatures  by name.

function searchCreature(name){
    return fantasticalBeasts.filter(creature => creature.name.toLowerCase( ) == name.toLowerCase());
}