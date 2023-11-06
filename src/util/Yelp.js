const apiKey = 'D5RHe9AMSRtld7GZ25CznpzsrpSuQSGeSxOiHa9QNQwauPQhDywdMgOK39lGIk8_TKkr8dlJqRa9ND_0XssPfqaab8F_Bcs0t4eMooFGW-A9b5-isSUTN_9YlvxHZXYx'; // Insert API key here.


// const options = {method: 'GET', headers: {accept: 'application/json'}};

// fetch('https://api.yelp.com/v3/businesses/business_id_or_alias', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

const options = {
  headers: {
    Authorization: `Bearer ${apiKey}`
  }
}

const Yelp = {

  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
      Authorization: `Bearer ${apiKey}`
    }
    
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      
      if (jsonResponse.businesses) {
        console.log(jsonResponse)


        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count,
          url: business.url,
          alias: business.alias
        }));
      }
    });
  },


  async getItemDetails(alias){
    return await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${alias}`, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err)); 
  }



};

export default Yelp;
