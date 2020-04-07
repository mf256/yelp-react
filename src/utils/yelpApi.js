import { YELP_API_KEY } from '../config/Config';
import ApiError from './ApiError';
import Messages from '../config/Messages';

class YelpApi {
  static getApiKey() {
    return YELP_API_KEY;
  }

  static search(term, location, sortBy) {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      throw new ApiError(Messages.NO_API_KEY);
    }

    if (!term && !location) {
      throw new ApiError(Messages.NO_REQUIRED_FIELDS);
    }

    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      },
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          }));
        }
        return null;
      });
  }
}

export default YelpApi;
