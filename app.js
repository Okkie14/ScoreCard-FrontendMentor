// QuerySelector for all the class created to get class you want to append everything to.
let SummaryInfo = document.querySelector(
    ".your-score .summary .category"
);

// Async function
const getData = async () => {
    try{
        // Fetching json data
        const response = await fetch("data.json");
        // Checks if repsonse was successful
        if (response.ok) {
            const jsonResponse = await response.json();

            // Looping through all the data in json 
            jsonResponse.forEach((data, index) => {
                // Creates a new div with class name of "summ-info" and adds the svg element
                let sumInfo = document.createElement('div');
                sumInfo.className = 'summ-info';
                sumInfo.innerHTML = `<img src="${data.icon}" alt=icon${index+1}" />`;
                
                // Creates first p element for the category name
                let h3 = document.createElement('h3');
                let pCategoryText = document.createTextNode(data.category);
                h3.appendChild(pCategoryText);                
                sumInfo.appendChild(h3);
                
                // Creates second p element for score obtained
                let p2 = document.createElement('p');
                p2.innerHTML = `${data.score}<span> / 100</span>`;
                sumInfo.appendChild(p2);
                
                // Logs the info to the console and updates the sumInfo to the correct class "category"
                console.log(sumInfo);
                category.appendChild(sumInfo);
            })
        }
        // Catches any errors and logs it to the console
    } catch (error) {
        console.log(error);
    }
}

// Calls the function
getData()