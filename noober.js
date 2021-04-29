window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  //console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  
  // Create variables for the rides data

    let rides = json

  // Loop through all of the available rides

  for (let i=0; i < rides.length; i++){

    //Create a variable to store each detail of the ride in memory

    let ride = rides[i]

    //Passenger Information
    let FirstName = ride.passengerDetails.first 
    let LastName = ride.passengerDetails.last 
    let Phone = ride.passengerDetails.phoneNumber
  
    //Pickup Information
    let PickAddress = ride.pickupLocation.address 
    let PickCity = ride.pickupLocation.city 
    let PickState = ride.pickupLocation.state 
    let PickZip = ride.pickupLocation.zip 
  
    //Dropoff Information
    let DropAddress = ride.dropoffLocation.address 
    let DropCity = ride.dropoffLocation.city 
    let DropState = ride.dropoffLocation.state
    let DropZip = ride.dropoffLocation.zip

    // Level of Service
    let Purple = ride.purpleRequested
    let NumberPassengers = ride.numberOfPassengers

    if(Purple == true){
      Car = 'Noober Purple'
      // Create a variable for the the rides class we're going to add to

      let ridesElement = document.querySelector(`.rides`)

      // Insert HTML into each rides element using the data from json
  
      ridesElement.insertAdjacentHTML(`beforeend`, `
      
      
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${Car}</span>
      </h1>
  
      <div class="border-8 border-purple-900 p-4 my-4 text-left">
  
  
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${FirstName} ${LastName}</h2>
            <p class="font-bold text-gray-600">${Phone}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
              ${NumberPassengers}
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${PickAddress}</p>
            <p>${PickCity}, ${PickState} ${PickZip}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${DropAddress}</p>
            <p>${DropCity}, ${DropState} ${DropZip}</p>
          </div>
        </div>
      </div> 
      
      
      `)
    }else if(NumberPassengers > 3){
      Car = 'Noober XL'
          // Create a variable for the the rides class we're going to add to

    let ridesElement = document.querySelector(`.rides`)

    // Insert HTML into each rides element using the data from json

    ridesElement.insertAdjacentHTML(`beforeend`, `
    
    
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${Car}</span>
    </h1>

    <div class="border-4 border-gray-900 p-4 my-4 text-left">


      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-4xl font-bold py-1">${FirstName} ${LastName}</h2>
          <p class="font-bold text-gray-600">${Phone}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${NumberPassengers}
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-3x1 font-bold text-gray-600">PICKUP</div>
          <p>${PickAddress}</p>
          <p>${PickCity}, ${PickState} ${PickZip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-3x1 font-bold text-gray-600">DROPOFF</div>
          <p>${DropAddress}</p>
          <p>${DropCity}, ${DropState} ${DropZip}</p>
        </div>
      </div>
    </div> 
    
    
    `)
    }else{
      Car = 'Noober X'
          // Create a variable for the the rides class we're going to add to

    let ridesElement = document.querySelector(`.rides`)

    // Insert HTML into each rides element using the data from json

    ridesElement.insertAdjacentHTML(`beforeend`, `
    
    
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${Car}</span>
    </h1>

    <div class="border-4 border-gray-900 p-4 my-4 text-left">


      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${FirstName} ${LastName}</h2>
          <p class="font-bold text-gray-600">${Phone}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${NumberPassengers}
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${PickAddress}</p>
          <p>${PickCity}, ${PickState} ${PickZip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${DropAddress}</p>
          <p>${DropCity}, ${DropState} ${DropZip}</p>
        </div>
      </div>
    </div> 
    
    
    `)
    }

    
  
  
  
  
  
  }




})