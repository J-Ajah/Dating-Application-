let users = [
    {
        name: 'Lucy',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar1.png',
        age: 25
    },
    {
        name: 'Betty',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar2.png',
        age: 20
    },
    {
        name: 'Ronald',
        gender: 'M',
        hobby: 'Music',
        avatar: 'avatar2.png',
        age: 18
    },

    {
        name: 'Christopher',
        gender: 'M',
        hobby: 'Sports',
        avatar: 'avatar1.png',
        age: 12
    },

    {
        name: 'Xinema',
        gender: 'F',
        hobby: 'reading',
        avatar: 'avatar1.png',
        age: 30
    },
    {
        name: 'Paul',
        gender: 'M',
        hobby: 'shopping',
        avatar: 'avatar3.jpg',
        age: 21
    },
]




window.addEventListener('load', () => {
    let result = document.querySelector('#result');

    function search() {

        //get hobby
        let hobbyField = document.querySelector('#hobby');
        let hobby = hobbyField.value;
        console.log(hobby);

        //get min and max age
        let minAge = document.querySelector('#min-age').value;
        let maxAge = document.querySelector('#max-age').value;


        //get gender
        let genderField = document.querySelector('#gender');
        let s = genderField.selectedIndex;
        let gender = genderField.options[s].value;

        let resultDisplay = document.querySelector('h3');
    

        let resultHtml = '';
        let usersLength = users.length;
        let count = 0
        for (let i = 0; i < usersLength; i++) {
            //Check gender type
            if (gender == 'A' || gender == users[i].gender) {
                
                //Checks for hobby
                if (hobby == '' || hobby == users[i].hobby) {
                    console.log(hobby);
                    //checks age
                    if (minAge == '' ||  users[i].age >= minAge && maxAge == '' || users[i].age >= minAge &&  users[i].age  <= maxAge) {

                        if(maxAge == '' || users[i].age <= maxAge)
                        
                        resultHtml += genElement(users[i].avatar, users[i].name, users[i].hobby, users[i].age);
                        count++;
                    }
                }
            }
        }


        result.innerHTML = resultHtml;
        resultDisplay.innerHTML = '';

        resultDisplay.append(`Search Results:(${count})`)
        clearInputs();

    }



    function genElement(userAvatar, userName, hobby, age) {
        const result = `<div class="person-row">
            <img src=\" assets/${userAvatar}\"/>
            <div class="person-info">
             <div> Name: ${userName} </div>
             <div> Hobby: ${hobby} </div>
             <div> age: ${age} </div>
             <button class="addFriend"> Add friend </button></div>
            </div>  
            
            `;

        return result;
    }


    clearInputs = () => {
        let hobbyField = document.querySelector('#hobby');
        let minAge = document.querySelector('#min-age');
        let maxAge = document.querySelector('#max-age');
        hobbyField.value = '';
        minAge.value = '';
        maxAge.value = '';
    }


    var searchbtn = document.querySelector('#searchBtn');
    searchbtn.addEventListener('click', search)




})
