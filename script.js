const products = [
    { name: 'Phone', price: 800, category: 'electronics' },
    { name: 'Laptop', price: 1500, category: 'electronics' },
    { name: 'Tablet', price: 400, category: 'electronics' },
    { name: 'Chair', price: 200, category: 'furniture' },
    { name: 'Sofa', price: 700, category: 'furniture' },
    { name: 'Desk', price: 300, category: 'furniture' },
    { name: 'Monitor', price: 300, category: 'electronics' },
    { name: 'Mouse', price: 50, category: 'electronics' },
    { name: 'Keyboard', price: 100, category: 'electronics' },
    { name: 'Bed', price: 1000, category: 'furniture' },
    { name: 'Wardrobe', price: 1200, category: 'furniture' },
    { name: 'Dining Table', price: 900, category: 'furniture' },
    { name: 'Headphones', price: 150, category: 'electronics' },
    { name: 'Bookshelf', price: 400, category: 'furniture' },
    { name: 'Gaming Console', price: 500, category: 'electronics' },
    { name: 'Refrigerator', price: 1800, category: 'appliances' },
    { name: 'Washing Machine', price: 1500, category: 'appliances' },
    { name: 'Microwave', price: 300, category: 'appliances' },
    { name: 'Air Conditioner', price: 2500, category: 'appliances' },
    { name: 'Blender', price: 100, category: 'appliances' }
  ];
  
  let filteredProducts = [...products];
  let currentPage = 1;
  const itemsPerPage = 3;
  
  //
  const productList = document.getElementById('productList');
  const filterCategory = document.getElementById('filterCategory');
  const sortOption = document.getElementById('sortOption');
  const prevPage = document.getElementById('prevPage');
  const nextPage = document.getElementById('nextPage');
  const pageInfo = document.getElementById('pageInfo');
  
  // Re
  function renderProducts() {
    productList.innerHTML = '';
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  
    paginatedProducts.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product';
      productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <p>Category: ${product.category}</p>
      `;
      productList.appendChild(productDiv);
    });
  
    pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(filteredProducts.length / itemsPerPage)}`;
  }
  
 
  filterCategory.addEventListener('change', () => {
    const category = filterCategory.value;
    filteredProducts = category === 'all' ? [...products] : products.filter(product => product.category === category);
    currentPage = 1; 
    applySorting();
    renderProducts();
  });
  
  
  sortOption.addEventListener('change', () => {
    applySorting();
    renderProducts();
  });
  
  function applySorting() {
    const sortValue = sortOption.value;
    if (sortValue === 'name-asc') {
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortValue === 'name-desc') {
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortValue === 'price-asc') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-desc') {
      filteredProducts.sort((a, b) => b.price - a.price);
    }
  }
  
  
  prevPage.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderProducts();
    }
  });
  
  nextPage.addEventListener('click', () => {
    if (currentPage < Math.ceil(filteredProducts.length / itemsPerPage)) {
      currentPage++;
      renderProducts();
    }
  });
  

  renderProducts();
  