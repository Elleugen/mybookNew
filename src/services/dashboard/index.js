import FetchInterceptor from '../../configs/FetchInterceptor';

class Dashboard {
  // static async getProducts (productId, reqBody) {
  //     // console.log('productId(getProducts):', productId)
  //     const response = await FetchInterceptor.get(`/boom/produk/search?cabang_id=${productId}`, reqBody);
  //     // const response = await FetchInterceptor.get('/boom/produk/search', {params: {cabang_id: productId}}, reqBody);

  //     // console.log('Response:', response.result.data)
  //     return response;
  //     // console.log('reqBody:', reqBody)
  // }
  static async getDashboard(keyword) {
    console.log('getDashboard:');
    const response = await FetchInterceptor.get(
      // `https://www.googleapis.com/books/v1/volumes?q=%7Bkeyword`,
      // `/v1/volumes?q=${keyword}`,
      `/v1/volumes?q=theantagonist`,
      // reqBody,
    );
    // console.log('Response:', response.result.data)
    return response;
  }
}

export default Dashboard;
