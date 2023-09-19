const container = document.querySelector('.container')


fetch('https://unilife-server.herokuapp.com/properties')
.then(res=>res.json())
.then(data=>{
    console.log(data)
    const places = data.data.map(item=>{
        return `<div class="card">
        <img class="photo" src="${item.images[0]}">
            
             <div class="info">
                <p>City: <span>${item.city_id.name}</span></p>
                <p>Property Type: <span>${item.property_type}</span></p>
                <p>Bedroom: <span>${item.bedroom_count}</span></p>
                <p>Bathroom: <span>${item.bathroom_count}</span></p>
                <p>Deposit: <span>${item.deposit}</span></p>
                <p>Rent: <span>${item.rent}</span></p>
                <p>Availability: <span>${item.availability}</span></p>
                <p>Furnished: <span>${item.furnished}</span></p>
                <p>Bedroom Prices</p>
                <p>Bedroom One: <span>${item.bedroom_prices.bedroom_one}</span></p>
                <p>Bedroom Two: <span>${item.bedroom_prices.bedroom_two}</span></p>
                <p>Bedroom Three: <span>${item.bedroom_prices.bedroom_three}</span></p>
                <p>Bedroom Four: <span>${item.bedroom_prices.bedroom_four}</span></p><br>
                <p><address>Address</address></p>
                <p><address>Street: <span>${item.address.street}</span></address></p>
                <p><address>City: <span>${item.address.city}</span></address></p>
                <p><address>Postcode: <span>${item.address.postcode}</span></address></p>
             </div>

        </div>`
    })
    container.innerHTML = places.join('')
})
.catch(error=>{
    console.log(error)
})