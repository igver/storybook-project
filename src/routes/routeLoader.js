// import products from "../store/products";

// const loader = ({ request }) => {
//   const url = new URL(request.url);
//   const pathName = url.pathname;

//   const myArray = pathName.split("/");

//   const id = myArray.slice(-1);

//   const productId = id.reduce((acc, sum) => {
//     return acc + sum;
//   });

//   const currProduct = products[productId];

//   console.log(currProduct);

//   console.log(productId);

//   return currProduct;
// };

// const action = ({ request, params }) => {
//   const productId = loader(request);
//   console.log(productId);
//   console.log(params);

//   return
// };

// export { loader as productLoader };
