import FetchInterceptor from '../../configs/FetchInterceptor';

class Wishlist {
  static async getWishlist() {
    const response = await FetchInterceptor.get('/v1/volumes?q=harry');
    return response;
  }
}

export default Wishlist;
