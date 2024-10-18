function TrangChu() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function iphone(){
    window.location.href='iphone-16-pro-max.html';
}
function iphone(){
  window.location.href='iphone-16-pro-max.html';
}
function samsung(){
  window.location.href='samsung-galaxy-s24-ultra.html'
}

function redmagic(){
  window.location.href='nubia-red-magic-9s-pro-plus.html'
}

function sony(){
  window.location.href='sony-xperia-1-VI.html'
}
function buttonClick(event) {
    event.stopPropagation();
    alert('Đã thêm vào giỏ hàng');
}
// Mảng chứa thông tin sản phẩm
// Danh sách sản phẩm mẫu
const products = [
  {
    name: "iPhone 16 Pro Max",
    price: "46.990.000đ",
    image: "https://clickbuy.com.vn/uploads/product-variant/2_52507.png",
    link: "iphone-16-pro-max.html"
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    price: "31.990.000đ",
    image: "https://clickbuy.com.vn/uploads/pro/samsung-galaxy-s24-ultra-1tb_197561.jpg",
    link: "samsung-galaxy-s24-ultra.html"
  },
  {
    name: "ZTE Nubia Red Magic 9S Pro Plus",
    price: "21.790.000đ",
    image: "https://clickbuy.com.vn/uploads/product-variant/2_52576.jpg",
    link: "nubia-red-magic-9s-pro-plus.html"
    
  },
  {
    name: "Sony Xperia 1 VI",
    price: "31,490,000đ",
    image: "https://store.sony.com.vn/cdn/shop/files/3075_Primary_image_black-1200_e5ecdfb3-1b15-4d3d-9961-4830c88d625a_400x.jpg?v=1728619178",
    link:"sony-xperia-1-VI.html"
  }
];

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search');
  
  // Gán sự kiện lắng nghe cho phần tử cha bao bọc các sản phẩm
  const productList = document.querySelector('.product-list');

  // Event Delegation cho các phần tử .product-item
  productList.addEventListener('click', function(event) {
    if (event.target.closest('.product-item')) {
      const productItem = event.target.closest('.product-item');
      console.log('Sản phẩm được click:', productItem.querySelector('h3').textContent);
      // Thêm các hành động khác khi click vào sản phẩm tại đây
    }
  });

  searchInput.addEventListener('input', function() {
    searchProducts(this.value);
  });
});

function buttonClick(event) {
    event.stopPropagation();
    alert('Đã thêm vào giỏ hàng');
}

// Hàm tìm kiếm và hiển thị sản phẩm
function searchProducts(searchTerm) {
  const productList = document.querySelector('.product-list');
  productList.innerHTML = ""; // Xóa sản phẩm cũ

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredProducts.length > 0) {
    filteredProducts.forEach(product => {
      const productHTML = `
        <div class="animation">  
            <div class="product-item" onclick="iphone()">
              <img src="${product.image}" alt="${product.name}" width="150px">
              <h3>${product.name}</h3>
              <p>Giá: ${product.price}</p>
              <button onclick="buttonClick(event)">Thêm vào giỏ hàng</button>
            </div>  
        </div>
      `;
      productList.innerHTML += productHTML;
    });
  } else {
    productList.innerHTML = "<p>Không tìm thấy sản phẩm.</p>";
  }
}
closeDangnhap.addEventListener('click', function() {
  saleModal.style.display = 'none';
});
openDangnhap.addEventListener('click', function() {
  saleModal.style.display = 'flex';
});
