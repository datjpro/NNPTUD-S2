//1
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}
//cau2
const Products =[
    new Product(1, "Laptop", 50000000, 10, "Dien tu", true),
    new Product(2, "Smartphone", 8000000, 25, "Dien tu", true),
    new Product(3, "Desk Chair", 1500000, 5, "Noi that", false),
    new Product(4, "Book: JavaScript Basics", 300000, 50, "Sach", true),
    new Product(5, "Wireless Headphones", 2000000, 15, "Dien tu", true),
    new Product(6, "Coffee Maker", 1000000, 0, "Thiet bi gia dung", false),
]
//cau3
const TenvaGiaSP = Products.map(product => ({
    Name: product.name,
    Price: product.price
}));
//cau4
const SoLuongTonKho = Products.map(product => product.quantity > 0)
console.log(SoLuongTonKho);
//cau5
const Ktra6Jack = Products.some(product => product.price > 30000000);
console.log(Ktra6Jack);
//cau6
const KtraPhuKien = Products.every(product => product.category === "Phu kien"&& product.isAvailable === true);
console.log(KtraPhuKien);
//cau7
const TongGiaTri = Products.reduce((total, product) => total + (product.price * product.quantity), 0);
console.log(TongGiaTri);

//cau8
for (const element of Products) {
    console.log(`Name: ${element.name}, Price: ${element.price}, isAvailable: ${element.isAvailable}`);
}
//cau9
const firstProduct = Products[0];
for (const key in firstProduct) {
    console.log(`${key}: ${firstProduct[key]}`);
}

// Câu 10: Lấy danh sách tên các sản phẩm đang bán (isAvailable) và còn hàng (quantity > 0)
const availableProductNames = Products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);
console.log(availableProductNames);