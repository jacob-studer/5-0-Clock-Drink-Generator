//selecting the saved drink and setting it to local storage, document replace to its individual page
// const drinkTarget = document.querySelector('.drink-name');

// drinkTarget.addEventListener('click', setItemIndividual);

const drinkTarget = document.querySelector('.drink-name');

drinkTarget.addEventListener('click', setItemIndividual);

function setItemIndividual(event) {
    console.log(event)
    localStorage.setItem('searchQueryIndividual', JSON.stringify(event.target.innerHTML))
    document.location.replace('/drinkindividual');
}



// const deleteButton = document.querySelector('.delete-button');

// deleteButton.addEventListener('click', delButtonHandler);
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        
        const response = await fetch(`/api/saveddrinks/${id}`, {
        method: 'DELETE',
        });
        
        if (response.ok) {
        document.location.replace('/profile');
        } else {
        alert('Failed to delete drink');
        }
    }
    };

const deleteButton = document.querySelector('.delete-button');

deleteButton.addEventListener('click', delButtonHandler);



