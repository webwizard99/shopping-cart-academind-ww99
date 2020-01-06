const Product = require('../models/Product');
module.exports = function() {
    
    const products = [
      {
        image_path: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
        title: 'Gothic (PC)',
        description: 'Awesome Game!!!!',
        price: 10
      },
      {
        image_path: 'https://blznav.akamaized.net/img/games/cards/card-world-of-warcraft-54576e6364584e35.jpg',
        title: 'World of Warcraft (PC)',
        description: 'Grind your life away!',
        price: 30
      },
      {
        image_path: 'https://media.playstation.com/is/image/SCEA/call-of-duty-modern-warfare-hero-banner-03-ps4-us-30may19?$native_nt$',
        title: 'Call of Duty Modern Warfare (PC)',
        description: 'It\'s a shooter...',
        price: 59
      },
      {
        image_path: 'https://lh3.googleusercontent.com/yAtZnNL-9Eb5VYSsCaOC7KAsOVIJcY8mpKa0MoF-0HCL6b0OrFcBizURHywpuip-D6Y',
        title: 'Minecraft (PC)',
        description: 'You build stuff and act hyper.',
        price: 30
      },
      {
        image_path: 'https://images-na.ssl-images-amazon.com/images/I/81jvygoohbL._SX425_.jpg',
        title: 'Dark Souls 3 (PC)',
        description: 'Get killed. Lots.',
        price: 49
      }
    ];
    products.forEach(({ image_path, title, description, price }) => {
      Product.create({
        image_path,
        title,
        description,
        price
      });
    });
};
