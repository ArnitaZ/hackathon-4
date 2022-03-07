// import React, { useState } from "react";
// import getDataLaura from "../API/getDataLaura";
// import Pagination from "react-js-pagination";

// function PaginationII() {
//   // Data to be rendered using pagination.
//   const [products] = useState(getDataLaura(0, 20));
//   const productsPerPage = 2;
//   const [activePage, setCurrentPage] = useState(0);

//   // Logic for displaying current products
//   const indexOfLastProduct = activePage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );

//   const renderProducts = currentProducts.map((product, index) => {
//     return <li key={index}>{product.title}</li>;
//   });
//   function handlePageChange(pageNumber) {
//     console.log(`active page is ${pageNumber}`);
//     setCurrentPage(pageNumber);
//   }

//   return (
//     <div>
//       <div className="result">{renderProducts}</div>
//       <div className="pagination">
//         <Pagination
//           activePage={activePage}
//           itemsCountPerPage={2}
//           totalItemsCount={products.length}
//           pageRangeDisplayed={3}
//           onChange={handlePageChange}
//         />
//       </div>
//     </div>
//   );
// }

// export default PaginationII;
