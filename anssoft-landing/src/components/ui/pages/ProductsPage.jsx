import React, { useState } from "react";
import { Navbar } from "../Navbar";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";



const productslist = [
  { id: 1, name: 'Dell Xps 9570', category: 'Computer', price: 35000, image: '/products/laptop1.jpg' },
  { id: 2, name: 'MacBook Pro M2', category: 'Computer', price: 45000, image: '/products/laptop2.jpg' },
  { id: 3, name: 'Lenovo Legion 5', category: 'Computer', price: 28000, image: '/products/laptop3.jpg' },
  { id: 4, name: 'HP Spectre x360', category: 'Computer', price: 32000, image: '/products/laptop4.jpg' },
  { id: 5, name: 'Asus ROG Strix G15', category: 'Computer', price: 30000, image: '/products/laptop5.jpg' },
  { id: 6, name: 'Acer Predator Helios 300', category: 'Computer', price: 27000, image: '/products/laptopdefault.jpg' },
  { id: 7, name: 'MSI GF65 Thin', category: 'Computer', price: 25000, image: '/products/laptopdefault.jpg' },
  { id: 8, name: 'Razer Blade 15', category: 'Computer', price: 50000, image: '/products/laptopdefault.jpg' },
  { id: 9, name: 'Microsoft Surface Laptop5', category: 'Computer', price: 25000, image: '/products/laptopdefault.jpg' },
  { id: 10, name: 'Gigabyte RTX 4060 Ekran Kartı', category: 'ComputerComponent', price: 12000, image: '/products/computercomponent1.jpg' },
  { id: 11, name: 'Corsair Vengeance 16GB DDR4 RAM', category: 'ComputerComponent', price: 3200, image: '/products/computercomponent2.jpg' },
  { id: 12, name: 'Samsung 980 PRO 1TB NVMe SSD', category: 'ComputerComponent', price: 4500, image: '/products/computercomponent3.jpg' },
  { id: 13, name: 'ASUS TUF Gaming X570 Anakart', category: 'ComputerComponent', price: 2500, image: '/products/computercomponent4.jpg' },
  { id: 14, name: 'Cooler Master Hyper 212 RGB', category: 'ComputerComponent', price: 750, image: '/products/computercomponentdefault.jpg' },
  { id: 15, name: 'Intel Core i9-12900K İşlemci', category: 'ComputerComponent', price: 15000, image: '/products/computercomponentdefault.jpg' },
  { id: 16, name: 'AMD Ryzen 7 5800X İşlemci', category: 'ComputerComponent', price: 11000, image: '/products/computercomponentdefault.jpg' },
  { id: 17, name: 'MSI GeForce RTX 3070 Gaming X Trio', category: 'ComputerComponent', price: 20000, image: '/products/computercomponentdefault.jpg' },
  { id: 18, name: 'Seasonic Focus GX-850W PSU', category: 'ComputerComponent', price: 1200, image: '/products/computercomponentdefault.jpg' },
  { id: 19, name: 'NZXT H510 Elite Mid Tower Kasa', category: 'ComputerComponent', price: 1800, image: '/products/computercomponentdefault.jpg' },
  { id: 20, name: 'Logitech MX Master 3 Kablosuz Fare', category: 'ComputerComponent', price: 1000, image: '/products/computercomponentdefault.jpg' },
  { id: 21, name: 'Razer BlackWidow V3 RGB Klavye', category: 'ComputerComponent', price: 2000, image: '/products/computercomponentdefault.jpg' },
  { id: 22, name: 'ASUS ROG Strix LC 360 RGB Sıvı Soğutma', category: 'ComputerComponent', price: 3000, image: '/products/computercomponentdefault.jpg' },
  { id: 23, name: 'Western Digital Black 4TB HDD', category: 'ComputerComponent', price: 2500, image: '/products/computercomponentdefault.jpg' },
  { id: 24, name: 'Thermaltake Toughpower GF1 1000W PSU', category: 'ComputerComponent', price: 2500, image: '/products/computercomponentdefault.jpg' },
  { id: 25, name: 'HyperX Fury 32GB DDR5 RAM', category: 'ComputerComponent', price: 6000, image: '/products/computercomponentdefault.jpg' },
  { id: 26, name: 'Noctua NH-D15 Soğutucu', category: 'ComputerComponent', price: 2000, image: '/products/computercomponentdefault.jpg' },
  { id: 27, name: 'LG UltraGear 27GN950-B Monitör', category: 'ComputerComponent', price: 8000, image: '/products/computercomponentdefault.jpg' },
  { id: 28, name: 'Samsung Odyssey G7 32" QHD Monitör', category: 'ComputerComponent', price: 6000, image: '/products/computercomponentdefault.jpg' },
  { id: 29, name: 'BenQ ZOWIE XL2546K Monitör', category: 'ComputerComponent', price: 5000, image: '/products/computercomponentdefault.jpg' }
];

const ProductsPage = () => {
  const { t } = useTranslation();
  const [isProductsModalOpen, setIsProductsModalOpen] = useState(false);

  const products = [
    {
      category: t("products.laptops"),
      description: t("products.laptopsDesc"),
      img: "/pc1.png",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      category: t("products.desktops"),
      description: t("products.desktopsDesc"),
      img: "/pc2.png",
      gradient: "from-green-500 to-teal-500",
    },
    {
      category: t("products.pcComponents"),
      description: t("products.pcComponentsDesc"),
      img: "/pc3.png",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      category: t("products.networking"),
      description: t("products.networkingDesc"),
      img: "/network0.png",
      gradient: "from-red-500 to-pink-500",
    },
    {
      category: t("products.software"),
      description: t("products.softwareDesc"),
      img: "/software0.png",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-16 mt-8">
        <h1 className="text-4xl font-bold text-white">{t("products.ourProducts")}</h1>
        <p className="text-gray-300 mt-4">{t("products.ourProductsDesc")}</p>
      </section>

      {/* Product Categories */}
      <div className="w-full max-w-6xl mx-auto py-16 px-4 sm:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false }} // Animations trigger every time
          >
            <div className="bg-gray-300 h-72 flex items-center justify-center">
              <img src={product.img} alt={product.category} className="h-full w-full object-cover" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900">{product.category}</h3>
              <p className="text-gray-700 mt-3">{product.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-semibold text-white">{t("products.explore")}</h2>
        <p className="text-gray-300 mt-4">{t("products.exploreDesc")}</p>
        <button
          className="mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
          onClick={() => setIsProductsModalOpen(true)}
        >
          {t("products.browse")}
        </button>
      </section>

      {/* Products Modal */}
      {isProductsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={() => setIsProductsModalOpen(false)}>
          <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-black">{t("products.avaibleProducts")}</h3>
              <button className="text-black text-lg" onClick={() => setIsProductsModalOpen(false)}>✖</button>
            </div>

            {/* Product List */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-96 overflow-y-auto">
              {productslist.map((product, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 rounded-xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <img src={product.image} alt={product.name} className="h-40 w-full object-cover" />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-black">{product.name}</h3>
                    <p className="text-gray-700 mt-2">₺{product.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;