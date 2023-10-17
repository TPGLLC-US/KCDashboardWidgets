
let isDashboard = false; // Flag to check if the event has been triggered

// Function to check the content of the specified element
function checkElementContent() {
    const element = document.querySelector("#location-dashboard > div > div > div.w-vw.z-10.top-0.py-2\\.5.-mx-8.bg-gray-50.sticky > div > div > div:nth-child(1) > div > div > div.hl-title-container > div");
    
    if (element) {
        if (element.textContent === "Dashboard" && !isDashboard) {
            console.log("DEBUG::Element content is 'Dashboard'");

            // Load Dahsboard Widget Here
            addJoesWidget();

            isDashboard = true; // Set the flag to true
        }
    } else {
        // If the element is not found, it might have been removed from the DOM
        // Set isDashboard to false to allow detection again when the element reappears
        isDashboard = false;
    }
}

// Create a MutationObserver to watch for changes in the DOM
const observer = new MutationObserver((mutationsList, observer) => {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList' || mutation.type === 'characterData') {
            checkElementContent();
        }
    }
});


function addJoesWidget() {
    //Wait for all elements to load
    setTimeout(() => {
    //Find the widget table
    let widgetTable = document.querySelector("#location-dashboard > div > div > div:nth-child(3) > div");
    //Define a widget
       //widget column starting position
    let widgetX = 0;
       //widget column width
    let widgetWidth = 12;
      //widget column height
    let widgetHeight = 4;
    let widgetTitle = "Joes Widget";
    let widgetData = '<table id="myTable">\
   <thead>\
     <tr>\
       <th>Name</th>\
       <th>Email</th>\
       <th>Loan Stage</th>\
     </tr>\
   </thead>\
   <tbody>\
     <tr>\
       <td>John</td>\
       <td>john@john.com</td>\
       <td>chasing</td>\
     </tr>\
     <tr>\
       <td>jack</td>\
       <td>jack@jack.com</td>\
       <td>clear to close</td>\
     </tr>\
     <tr>\
       <td>Jen</td>\
       <td>Jen@Jen.com</td>\
       <td>clear to close</td>\
     </tr>\
     <tr>\
       <td>Anna</td>\
       <td>Anna@Anna.com</td>\
       <td>Conditional Approval</td>\
     </tr>\
   </tbody>\
 </table>';

     let widgetOne = '<div class="grid-stack-item ui-draggable-disabled ui-resizable-disabled" gs-x="'+ widgetX +'" gs-y="0" gs-w="'+ widgetWidth +'" gs-h="'+ widgetHeight +'" gs-id="652c4ba3ea37b4443c321d33" id="widget_652c4ba3ea37b4443c321d33" data-v-56553884=""> <div class="grid-stack-item-content" data-v-56553884=""><div class="group h-full crm-opportunities-value" data-v-56553884=""> <div class="w-full h-full flex flex-col chart-container hl-card"><div class="hl-card-header"><div class="flex items-center justify-between relative"> <div class="transition-[opacity] cursor-grab absolute -left-[15px] opacity-0"> <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_635_13884)"> <path d="M7.83333 4.83333C7.83333 5.29357 8.20643 5.66667 8.66667 5.66667C9.1269 5.66667 9.5 5.29357 9.5 4.83333C9.5 4.3731 9.1269 4 8.66667 4C8.20643 4 7.83333 4.3731 7.83333 4.83333Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 4.83333C2 5.29357 2.3731 5.66667 2.83333 5.66667C3.29357 5.66667 3.66667 5.29357 3.66667 4.83333C3.66667 4.3731 3.29357 4 2.83333 4C2.3731 4 2 4.3731 2 4.83333Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.83333 10.1546C7.83333 10.6149 8.20643 10.988 8.66667 10.988C9.1269 10.988 9.5 10.6149 9.5 10.1546C9.5 9.69439 9.1269 9.32129 8.66667 9.32129C8.20643 9.32129 7.83333 9.69439 7.83333 10.1546Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 10.1546C2 10.6149 2.3731 10.988 2.83333 10.988C3.29357 10.988 3.66667 10.6149 3.66667 10.1546C3.66667 9.69438 3.29357 9.32129 2.83333 9.32129C2.3731 9.32129 2 9.69438 2 10.1546Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.83333 15.4759C7.83333 15.9361 8.20643 16.3092 8.66667 16.3092C9.1269 16.3092 9.5 15.9361 9.5 15.4759C9.5 15.0157 9.1269 14.6426 8.66667 14.6426C8.20643 14.6426 7.83333 15.0157 7.83333 15.4759Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 15.4759C2 15.9361 2.3731 16.3092 2.83333 16.3092C3.29357 16.3092 3.66667 15.9361 3.66667 15.4759C3.66667 15.0157 3.29357 14.6426 2.83333 14.6426C2.3731 14.6426 2 15.0157 2 15.4759Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_635_13884"><rect x="11.5" width="25.6306" height="11.5" rx="3" transform="rotate(90 11.5 0)" fill="white"></rect></clipPath></defs></svg></div><div class="truncate mr-2"><!----> <div class="text-gray-900 hl-text-md-medium">' + widgetTitle + '</div><!----><!----></div><div class="flex flex-1 justify-end items-center max-w-[calc(100%-66px)]"><!----><!----></div></div></div><div class="hl-card-content"><div class="w-full h-full"><div class="w-full h-full flex flex-col items-center justify-center gap-2">' + widgetData + '</div></div></div></div><!----></div></div></div></div>';
    //Add the widget to the widget table        
    widgetTable.innerHTML = widgetTable.innerHTML + widgetOne;
    const myTable = document.querySelector("#myTable");
        if (myTable) {
            new DataTable(myTable);
        }
}, 3000);

}

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true, characterData: true });

// Initial check
checkElementContent();




// Find the first div element with the class "card-group"
const cardGroupDiv = document.querySelector('.card-group');

if (cardGroupDiv) {
  // Add a delay of 50 seconds (50,000 milliseconds) before inserting the new div
  setTimeout(() => {
    // Create a new div element to be inserted after the first "card-group" div
    const newDiv = document.createElement('div');

    // You can customize the new div as needed
    // Example: newDiv.classList.add('new-class');
    // Example: newDiv.innerHTML = 'New Content';

    // Insert the new div after the first "card-group" div
    cardGroupDiv.parentNode.insertBefore(newDiv, cardGroupDiv.nextSibling);
  }, 50000); // 50,000 milliseconds = 50 seconds
}

