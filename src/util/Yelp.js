
// CLIENT ID : orMZIvg1eW-MmiMIsD9Kxg
const apiKey = 'UQ7eVAwnjUNfoSdkJtSFdrCV7lnG-TPkj0x7kia0JOqdscLcA44XerQm5jiyapKm5jT6k1Bo-Y53tOx2mxngF_D729JtN8Qe89GtV3mPPFWVU37LTNx3AY7aKykHYnYx';

const Yelp = {
 search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: { Authorization: `Bearer ${apiKey}`}
    })
    .then((response) => {
      return response.json()
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories,
            rating: business.rating,
            reviewCount: business.review_count
          }
        });
      }
    })
 }
}

export default Yelp