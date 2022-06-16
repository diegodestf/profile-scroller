const data = [
    {
        name: 'John Doe',
        age: 32,
        lookingfor: 'female',
        location: 'United States',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },

    {
        name: 'Jane Doe',
        age: 27,
        lookingfor: 'male',
        location: 'Canada',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },

    {
        name: 'John Doe II',
        age: 36,
        lookingfor: 'female',
        location: 'United States',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    }
]

const profiles = profileIterator(data)

nextProfile()

document.querySelector('#next').addEventListener('click', nextProfile)

function nextProfile() {

    const currentProfile = profiles.next().values

    if (currentProfile !== undefined) {
        
            document.querySelector('#profile-display').innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${currentProfile.name}</li>
                <li class="list-group-item">Age: ${currentProfile.age}</li>
                <li class="list-group-item">Looking for: ${currentProfile.lookingfor}</li>
                <li class="list-group-item">Location: ${currentProfile.location}</li>
            </ul>`
        
            document.querySelector('#image-display').innerHTML = `
            <img src="${currentProfile.image}">`
        
        } else {
            window.location.reload()
        }
        
    }
function profileIterator(profiles) {
    let nextIndex = 0

    return {
        next: function() {
            return nextIndex < profiles.length ? {
                values: profiles[nextIndex++], done: false
            } : {
                done: true
            }
        }
    }
}