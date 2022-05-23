import FetchInterceptor from '../../configs/FetchInterceptor';

class Wishlist {
  static async getWishlist() {
    const response = await FetchInterceptor.get(
      '/v1/volumes?q=harry',
      // reqBody,
    );
    // console.log('Response:', response)
    return response;
  }
}

export default Wishlist;
