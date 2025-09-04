const products = [
  {
    id: 1,
    title: 'Essence Mascara Lash Princess',
    description:
      'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
    price: 9.99,
    discountPercentage: 10.48,
    rating: 2.56,
    stock: 99,
    brand: 'Essence',
    category: 'beauty',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952891/mi_ecommerce/thumbnails/mppmul3zvcdz4x7ir2zk.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952891/mi_ecommerce/ymwy1hsurolpbjbyeeha.webp',
    ],
  },
  {
    id: 2,
    title: 'Eyeshadow Palette with Mirror',
    description:
      "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    price: 19.99,
    discountPercentage: 18.19,
    rating: 2.86,
    stock: 34,
    brand: 'Glamour Beauty',
    category: 'beauty',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952893/mi_ecommerce/thumbnails/oycm0dsrz2y8j83satve.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952892/mi_ecommerce/xyohi6s7pikgiyolpjn2.webp',
    ],
  },
  {
    id: 3,
    title: 'Powder Canister',
    description:
      'The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.',
    price: 14.99,
    discountPercentage: 9.84,
    rating: 4.64,
    stock: 89,
    brand: 'Velvet Touch',
    category: 'beauty',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952894/mi_ecommerce/thumbnails/reciyagx9cp2zg9qjeu7.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952893/mi_ecommerce/g1czl1f7ivi9scahm63d.webp',
    ],
  },
  {
    id: 4,
    title: 'Red Lipstick',
    description:
      'The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.',
    price: 12.99,
    discountPercentage: 12.16,
    rating: 4.36,
    stock: 91,
    brand: 'Chic Cosmetics',
    category: 'beauty',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952895/mi_ecommerce/thumbnails/llcqywj7d5ypxks2vz8q.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952895/mi_ecommerce/oax7vebiv2i6sadpocu4.webp',
    ],
  },
  {
    id: 5,
    title: 'Red Nail Polish',
    description:
      'The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.',
    price: 8.99,
    discountPercentage: 11.44,
    rating: 4.32,
    stock: 79,
    brand: 'Nail Couture',
    category: 'beauty',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952897/mi_ecommerce/thumbnails/c8ews2mqythzaqftioet.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952896/mi_ecommerce/htgxrexrmwhb54pngbgf.webp',
    ],
  },
  {
    id: 6,
    title: 'Calvin Klein CK One',
    description:
      "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    price: 49.99,
    discountPercentage: 1.89,
    rating: 4.37,
    stock: 29,
    brand: 'Calvin Klein',
    category: 'fragrances',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952899/mi_ecommerce/thumbnails/jqz8cvxypepko0h2ze9p.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952897/mi_ecommerce/dknke9q6ne7mfkjzvlio.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952898/mi_ecommerce/tn3dppzparpyhbia9gwf.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952898/mi_ecommerce/szgcctimuoxphcpjsf2i.webp',
    ],
  },
  {
    id: 7,
    title: 'Chanel Coco Noir Eau De',
    description:
      'Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.',
    price: 129.99,
    discountPercentage: 16.51,
    rating: 4.26,
    stock: 58,
    brand: 'Chanel',
    category: 'fragrances',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952901/mi_ecommerce/thumbnails/cfkeotr3pbf3lhkqfh0l.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952899/mi_ecommerce/bil7sseayrq5gd87fa94.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952900/mi_ecommerce/dbigegakvw8inzujm8hz.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952901/mi_ecommerce/qayamkwt8yg7mxvtl1jo.webp',
    ],
  },
  {
    id: 8,
    title: "Dior J'adore",
    description:
      "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
    price: 89.99,
    discountPercentage: 14.72,
    rating: 3.8,
    stock: 98,
    brand: 'Dior',
    category: 'fragrances',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952903/mi_ecommerce/thumbnails/ijkxyfumonljckd5a5ui.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952902/mi_ecommerce/vsfhxz3ihpksgrb1wrbf.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952902/mi_ecommerce/emjjaupcngzs2ixpqaeg.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952903/mi_ecommerce/vtfokzyeeh9suyljn2kn.webp',
    ],
  },
  {
    id: 9,
    title: 'Dolce Shine Eau de',
    description:
      "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
    price: 69.99,
    discountPercentage: 0.62,
    rating: 3.96,
    stock: 4,
    brand: 'Dolce & Gabbana',
    category: 'fragrances',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952906/mi_ecommerce/thumbnails/dqn37ssfvhnmz44g8te5.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952904/mi_ecommerce/qiro7kxht9lzxjutt5th.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952905/mi_ecommerce/rhrmmkvnvdpmadn6u9q0.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952906/mi_ecommerce/bylbrkp0a6lyydpg9ksj.webp',
    ],
  },
  {
    id: 10,
    title: 'Gucci Bloom Eau de',
    description:
      "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
    price: 79.99,
    discountPercentage: 14.39,
    rating: 2.74,
    stock: 91,
    brand: 'Gucci',
    category: 'fragrances',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952908/mi_ecommerce/thumbnails/yp62caeepobatrqkyoft.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952907/mi_ecommerce/zdvhacxk5xevp4xlqg3r.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952907/mi_ecommerce/ypu3hjrcakgke4pksem9.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952908/mi_ecommerce/xa6ze981kcuv9oerl5no.webp',
    ],
  },
  {
    id: 11,
    title: 'Annibale Colombo Bed',
    description:
      'The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.',
    price: 1899.99,
    discountPercentage: 8.57,
    rating: 4.77,
    stock: 88,
    brand: 'Annibale Colombo',
    category: 'furniture',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952911/mi_ecommerce/thumbnails/n5dn1wiaq3xvf40poiqo.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952909/mi_ecommerce/ykmkjwejmignrm3jfewf.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952909/mi_ecommerce/wwopigdktn9jsfhnrtc5.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952910/mi_ecommerce/hxgmw6zeux5mi74scebg.webp',
    ],
  },
  {
    id: 12,
    title: 'Annibale Colombo Sofa',
    description:
      'The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.',
    price: 2499.99,
    discountPercentage: 14.4,
    rating: 3.92,
    stock: 60,
    brand: 'Annibale Colombo',
    category: 'furniture',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952914/mi_ecommerce/thumbnails/ebqifruqc3udkl90dhzm.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952912/mi_ecommerce/h2gyuscsd4hga2ctkpvv.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952912/mi_ecommerce/jngg0aedtghk1jnrpr4y.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952913/mi_ecommerce/esapmfs9322t7hoovcxi.webp',
    ],
  },
  {
    id: 13,
    title: 'Bedside Table African Cherry',
    description:
      'The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.',
    price: 299.99,
    discountPercentage: 19.09,
    rating: 2.87,
    stock: 64,
    brand: 'Furniture Co.',
    category: 'furniture',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952916/mi_ecommerce/thumbnails/p6dw6jlzfcxuzffoabxf.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952914/mi_ecommerce/squhzdizy4qlyls7ansa.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952915/mi_ecommerce/seik86qmqir71g7oixzu.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952915/mi_ecommerce/orockga5iwdje0jc0j39.webp',
    ],
  },
  {
    id: 14,
    title: 'Knoll Saarinen Executive Conference Chair',
    description:
      'The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.',
    price: 499.99,
    discountPercentage: 2.01,
    rating: 4.88,
    stock: 26,
    brand: 'Knoll',
    category: 'furniture',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952919/mi_ecommerce/thumbnails/huwo6zkbwzwlqasqcb5b.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952917/mi_ecommerce/ar16oso2j87wnhcefplk.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952917/mi_ecommerce/dujuixh2mleq8wfelp37.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952918/mi_ecommerce/xluhkvhv1clo6iszeasx.webp',
    ],
  },
  {
    id: 15,
    title: 'Wooden Bathroom Sink With Mirror',
    description:
      'The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.',
    price: 799.99,
    discountPercentage: 8.8,
    rating: 3.59,
    stock: 7,
    brand: 'Bath Trends',
    category: 'furniture',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952921/mi_ecommerce/thumbnails/g53xfr5tlyw5t6x8tgl7.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952919/mi_ecommerce/pkulilm5xwu8ur0faqus.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952920/mi_ecommerce/yylzncmutszsoaq3gz0u.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952921/mi_ecommerce/ois8cgsgjqfeyqda4svf.webp',
    ],
  },
  {
    id: 16,
    title: 'Apple',
    description:
      'Fresh and crisp apples, perfect for snacking or incorporating into various recipes.',
    price: 1.99,
    discountPercentage: 12.62,
    rating: 4.19,
    stock: 8,
    brand: undefined,
    category: 'groceries',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952923/mi_ecommerce/thumbnails/fapjsotp7p8sevk3j14n.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952922/mi_ecommerce/a8jmdqssyng2evu0jcb9.webp',
    ],
  },
  {
    id: 17,
    title: 'Beef Steak',
    description:
      'High-quality beef steak, great for grilling or cooking to your preferred level of doneness.',
    price: 12.99,
    discountPercentage: 9.61,
    rating: 4.47,
    stock: 86,
    brand: undefined,
    category: 'groceries',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952924/mi_ecommerce/thumbnails/zhmtv3qwri1wgubqekyp.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952924/mi_ecommerce/o7axdwfhjobytmdurd9g.webp',
    ],
  },
  {
    id: 18,
    title: 'Cat Food',
    description: 'Nutritious cat food formulated to meet the dietary needs of your feline friend.',
    price: 8.99,
    discountPercentage: 9.58,
    rating: 3.13,
    stock: 46,
    brand: undefined,
    category: 'groceries',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952926/mi_ecommerce/thumbnails/hgqfugejuz9frj1kkq4a.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952925/mi_ecommerce/luqecvqv2ipdctq7n6x6.webp',
    ],
  },
  {
    id: 19,
    title: 'Chicken Meat',
    description: 'Fresh and tender chicken meat, suitable for various culinary preparations.',
    price: 9.99,
    discountPercentage: 13.7,
    rating: 3.19,
    stock: 97,
    brand: undefined,
    category: 'groceries',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952928/mi_ecommerce/thumbnails/acsg5p4vgpkgbtfwt2zx.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952926/mi_ecommerce/bgocbngcsqeamfybuqgp.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952927/mi_ecommerce/pc5hhinccjfaw1fvmqoe.webp',
    ],
  },
  {
    id: 20,
    title: 'Cooking Oil',
    description:
      'Versatile cooking oil suitable for frying, sautéing, and various culinary applications.',
    price: 4.99,
    discountPercentage: 9.33,
    rating: 4.8,
    stock: 10,
    brand: undefined,
    category: 'groceries',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952930/mi_ecommerce/thumbnails/ptoi9cs9ofuqpwqt4goc.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952929/mi_ecommerce/v9gnpqtlnesyrrypbjix.webp',
    ],
  },
  {
    id: 21,
    title: 'Cucumber',
    description:
      'Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.',
    price: 1.49,
    discountPercentage: 0.16,
    rating: 4.07,
    stock: 84,
    brand: undefined,
    category: 'groceries',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952932/mi_ecommerce/thumbnails/l4b87ucdgausm7p9enlw.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952931/mi_ecommerce/k2lmblg1k2gou4vgwih1.webp',
    ],
  },
  {
    id: 22,
    title: 'Dog Food',
    description:
      'Specially formulated dog food designed to provide essential nutrients for your canine companion.',
    price: 10.99,
    discountPercentage: 10.27,
    rating: 4.55,
    stock: 71,
    brand: undefined,
    category: 'groceries',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952933/mi_ecommerce/thumbnails/nvfkbko3ui78vbpqrknl.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952932/mi_ecommerce/sfsfoqxnxjx7b5mivkh2.webp',
    ],
  },
  {
    id: 23,
    title: 'Eggs',
    description: 'Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.',
    price: 2.99,
    discountPercentage: 11.05,
    rating: 2.53,
    stock: 9,
    brand: undefined,
    category: 'groceries',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952934/mi_ecommerce/thumbnails/utrqavdbpf3vrzfpj4nn.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952933/mi_ecommerce/y4v7twdvavpihjs0ekop.webp',
    ],
  },
  {
    id: 24,
    title: 'Fish Steak',
    description: 'Quality fish steak, suitable for grilling, baking, or pan-searing.',
    price: 14.99,
    discountPercentage: 4.23,
    rating: 3.78,
    stock: 74,
    brand: undefined,
    category: 'groceries',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952935/mi_ecommerce/thumbnails/wfedu1hflnxv38lmw0ra.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952934/mi_ecommerce/ff69mqhjmyobdee00puc.webp',
    ],
  },
  {
    id: 25,
    title: 'Green Bell Pepper',
    description:
      'Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.',
    price: 1.29,
    discountPercentage: 0.16,
    rating: 3.25,
    stock: 33,
    brand: undefined,
    category: 'groceries',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952936/mi_ecommerce/thumbnails/qnmeufff0d78jkemrs50.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952936/mi_ecommerce/ynllaffzhsgpjahijaj7.webp',
    ],
  },
  {
    id: 26,
    title: 'Green Chili Pepper',
    description: 'Spicy green chili pepper, ideal for adding heat to your favorite recipes.',
    price: 0.99,
    discountPercentage: 1,
    rating: 3.66,
    stock: 3,
    brand: undefined,
    category: 'groceries',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952938/mi_ecommerce/thumbnails/ltotho71ocgb3pqe39pi.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952937/mi_ecommerce/fpwojnms32t38eyci1u9.webp',
    ],
  },
  {
    id: 27,
    title: 'Honey Jar',
    description:
      'Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.',
    price: 6.99,
    discountPercentage: 14.4,
    rating: 3.97,
    stock: 34,
    brand: undefined,
    category: 'groceries',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952939/mi_ecommerce/thumbnails/finjzeyvihhvubxqtqux.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952938/mi_ecommerce/s1j6lxr3zdgn5ykptb9v.webp',
    ],
  },
  {
    id: 28,
    title: 'Ice Cream',
    description:
      'Creamy and delicious ice cream, available in various flavors for a delightful treat.',
    price: 5.49,
    discountPercentage: 8.69,
    rating: 3.39,
    stock: 27,
    brand: undefined,
    category: 'groceries',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952942/mi_ecommerce/thumbnails/k7skeg8mpepyeohrjcis.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952939/mi_ecommerce/a0nlvrozeyudt2qlgs1l.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952940/mi_ecommerce/wc8irx48bzxoldl3ubnb.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952941/mi_ecommerce/beogeqitdddt3q1ecdxs.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952941/mi_ecommerce/nx2rbur6yvhka6vjk3bn.webp',
    ],
  },
  {
    id: 29,
    title: 'Juice',
    description: 'Refreshing fruit juice, packed with vitamins and great for staying hydrated.',
    price: 3.99,
    discountPercentage: 12.06,
    rating: 3.94,
    stock: 50,
    brand: undefined,
    category: 'groceries',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952944/mi_ecommerce/thumbnails/q0scb4yhlydy9tebunrr.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952943/mi_ecommerce/nn6yzupdoqdgykvh9zso.webp',
    ],
  },
  {
    id: 30,
    title: 'Kiwi',
    description:
      'Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.',
    price: 2.49,
    discountPercentage: 15.22,
    rating: 4.93,
    stock: 99,
    brand: undefined,
    category: 'groceries',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952945/mi_ecommerce/thumbnails/ull7ejbblszjc22edmdl.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952944/mi_ecommerce/lc1m7t2flobkqm1oklld.webp',
    ],
  },
  {
    id: 31,
    title: 'Lemon',
    description:
      'Zesty and tangy lemons, versatile for cooking, baking, or making refreshing beverages.',
    price: 0.79,
    discountPercentage: 9.7,
    rating: 3.53,
    stock: 31,
    brand: undefined,
    category: 'groceries',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952946/mi_ecommerce/thumbnails/rlu0pddh7nqjpdsvjcbi.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952945/mi_ecommerce/evbsefpr1dpd3b4wygrw.webp',
    ],
  },
  {
    id: 32,
    title: 'Milk',
    description: 'Fresh and nutritious milk, a staple for various recipes and daily consumption.',
    price: 3.49,
    discountPercentage: 13.74,
    rating: 2.61,
    stock: 27,
    brand: undefined,
    category: 'groceries',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952948/mi_ecommerce/thumbnails/nvyajj4ubzx08xszwnxm.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952947/mi_ecommerce/gjwzb57lqffjfj6lx9k6.webp',
    ],
  },
  {
    id: 33,
    title: 'Mulberry',
    description:
      'Sweet and juicy mulberries, perfect for snacking or adding to desserts and cereals.',
    price: 4.99,
    discountPercentage: 12.87,
    rating: 4.95,
    stock: 99,
    brand: undefined,
    category: 'groceries',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952949/mi_ecommerce/thumbnails/uwjrotnzhtersmvdeuew.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952948/mi_ecommerce/qrbt2pq7umgreuhnqlc3.webp',
    ],
  },
  {
    id: 34,
    title: 'Nescafe Coffee',
    description:
      'Quality coffee from Nescafe, available in various blends for a rich and satisfying cup.',
    price: 7.99,
    discountPercentage: 1.59,
    rating: 4.82,
    stock: 57,
    brand: undefined,
    category: 'groceries',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952950/mi_ecommerce/thumbnails/ipjxhjtorubmhwg3my00.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952949/mi_ecommerce/waa1upxhexoirwors5gd.webp',
    ],
  },
  {
    id: 35,
    title: 'Potatoes',
    description: 'Versatile and starchy potatoes, great for roasting, mashing, or as a side dish.',
    price: 2.29,
    discountPercentage: 5.38,
    rating: 4.81,
    stock: 13,
    brand: undefined,
    category: 'groceries',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952951/mi_ecommerce/thumbnails/guyxqldotmgsft2num0t.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952951/mi_ecommerce/pjqxjdd4ou3gfxbyxxsy.webp',
    ],
  },
  {
    id: 36,
    title: 'Protein Powder',
    description:
      'Nutrient-packed protein powder, ideal for supplementing your diet with essential proteins.',
    price: 19.99,
    discountPercentage: 7.59,
    rating: 4.18,
    stock: 80,
    brand: undefined,
    category: 'groceries',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952953/mi_ecommerce/thumbnails/imc9tnwh3esegn9ddphf.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952952/mi_ecommerce/qrmq1htxwea4uyra8gwr.webp',
    ],
  },
  {
    id: 37,
    title: 'Red Onions',
    description:
      'Flavorful and aromatic red onions, perfect for adding depth to your savory dishes.',
    price: 1.99,
    discountPercentage: 9.9,
    rating: 4.2,
    stock: 82,
    brand: undefined,
    category: 'groceries',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952954/mi_ecommerce/thumbnails/bfncveihuvzevmluu5rw.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952953/mi_ecommerce/gtsteguvi5psz1lvhdnc.webp',
    ],
  },
  {
    id: 38,
    title: 'Rice',
    description:
      'High-quality rice, a staple for various cuisines and a versatile base for many dishes.',
    price: 5.99,
    discountPercentage: 9.29,
    rating: 3.18,
    stock: 59,
    brand: undefined,
    category: 'groceries',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952955/mi_ecommerce/thumbnails/ffxx3mfpfyrfftusp9yn.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952955/mi_ecommerce/dcuymoxiud7qgdrbkwt7.webp',
    ],
  },
  {
    id: 39,
    title: 'Soft Drinks',
    description: 'Assorted soft drinks in various flavors, perfect for refreshing beverages.',
    price: 1.99,
    discountPercentage: 17.48,
    rating: 4.75,
    stock: 53,
    brand: undefined,
    category: 'groceries',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952957/mi_ecommerce/thumbnails/xiaeawfix0gg27txum1t.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952956/mi_ecommerce/rhbxkkqoeqqwt1uvz8hw.webp',
    ],
  },
  {
    id: 40,
    title: 'Strawberry',
    description:
      'Sweet and succulent strawberries, great for snacking, desserts, or blending into smoothies.',
    price: 3.99,
    discountPercentage: 1.12,
    rating: 3.08,
    stock: 46,
    brand: undefined,
    category: 'groceries',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952958/mi_ecommerce/thumbnails/gjwllh5ssbhjk3tns6mr.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952957/mi_ecommerce/mxn0povbhhyat2bb4bsk.webp',
    ],
  },
  {
    id: 41,
    title: 'Tissue Paper Box',
    description:
      'Convenient tissue paper box for everyday use, providing soft and absorbent tissues.',
    price: 2.49,
    discountPercentage: 13.28,
    rating: 2.69,
    stock: 86,
    brand: undefined,
    category: 'groceries',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952960/mi_ecommerce/thumbnails/cqyrp8bkw7aderlsrhgx.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952958/mi_ecommerce/pzd5iypdkaw44c2yttsg.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952959/mi_ecommerce/ql23crtlczjrjoc5kidd.webp',
    ],
  },
  {
    id: 42,
    title: 'Water',
    description:
      'Pure and refreshing bottled water, essential for staying hydrated throughout the day.',
    price: 0.99,
    discountPercentage: 14.92,
    rating: 4.96,
    stock: 53,
    brand: undefined,
    category: 'groceries',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952961/mi_ecommerce/thumbnails/fhkk9iddwwn2rkzigm81.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952960/mi_ecommerce/eyccidk1k5vvdlbo3ten.webp',
    ],
  },
  {
    id: 43,
    title: 'Decoration Swing',
    description:
      'The Decoration Swing is a charming addition to your home decor. Crafted with intricate details, it adds a touch of elegance and whimsy to any room.',
    price: 59.99,
    discountPercentage: 10.41,
    rating: 3.16,
    stock: 47,
    brand: undefined,
    category: 'home-decoration',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952964/mi_ecommerce/thumbnails/hc6vu6niyu2szxvboakv.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952961/mi_ecommerce/ucrpihxrnrnjwlyaqgjp.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952962/mi_ecommerce/xqnxz7uduxweazggjhew.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952963/mi_ecommerce/duatoalpw7dfwn8riqta.webp',
    ],
  },
  {
    id: 44,
    title: 'Family Tree Photo Frame',
    description:
      'The Family Tree Photo Frame is a sentimental and stylish way to display your cherished family memories. With multiple photo slots, it tells the story of your loved ones.',
    price: 29.99,
    discountPercentage: 14.87,
    rating: 4.53,
    stock: 77,
    brand: undefined,
    category: 'home-decoration',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952965/mi_ecommerce/thumbnails/ykwyjyizpt9xbbfk0yso.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952964/mi_ecommerce/gp2o5olq9hlnizaplrek.webp',
    ],
  },
  {
    id: 45,
    title: 'House Showpiece Plant',
    description:
      'The House Showpiece Plant is an artificial plant that brings a touch of nature to your home without the need for maintenance. It adds greenery and style to any space.',
    price: 39.99,
    discountPercentage: 7.46,
    rating: 4.67,
    stock: 28,
    brand: undefined,
    category: 'home-decoration',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952967/mi_ecommerce/thumbnails/tkumpew5ad0f9zhpsi1w.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952965/mi_ecommerce/f5obock0f1vxigxkgyp7.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952966/mi_ecommerce/jivxwj0qpesaxl9djtx6.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952967/mi_ecommerce/pt9dszkk1wccaavc4bdz.webp',
    ],
  },
  {
    id: 46,
    title: 'Plant Pot',
    description:
      'The Plant Pot is a stylish container for your favorite plants. With a sleek design, it complements your indoor or outdoor garden, adding a modern touch to your plant display.',
    price: 14.99,
    discountPercentage: 6.84,
    rating: 3.01,
    stock: 59,
    brand: undefined,
    category: 'home-decoration',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952972/mi_ecommerce/thumbnails/vzcdjeq6cfacpfaondrl.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952968/mi_ecommerce/fuospy7janwlthzcwdbc.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952969/mi_ecommerce/rnbzlzpqwlopurou4sia.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952969/mi_ecommerce/yjuomcg7uttilvsktl1q.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952971/mi_ecommerce/wl0ch73tnydn1qauimgy.webp',
    ],
  },
  {
    id: 47,
    title: 'Table Lamp',
    description:
      'The Table Lamp is a functional and decorative lighting solution for your living space. With a modern design, it provides both ambient and task lighting, enhancing the atmosphere.',
    price: 49.99,
    discountPercentage: 7.09,
    rating: 3.55,
    stock: 9,
    brand: undefined,
    category: 'home-decoration',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952973/mi_ecommerce/thumbnails/xsn5agtzzjg88hzhamrv.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952972/mi_ecommerce/agb4ypualrstk2no86nl.webp',
    ],
  },
  {
    id: 48,
    title: 'Bamboo Spatula',
    description:
      'The Bamboo Spatula is a versatile kitchen tool made from eco-friendly bamboo. Ideal for flipping, stirring, and serving various dishes.',
    price: 7.99,
    discountPercentage: 2.84,
    rating: 3.27,
    stock: 37,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952974/mi_ecommerce/thumbnails/grxiujfkiyoozw8qhmgf.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952974/mi_ecommerce/mn0pm9skwk19iqaso1z1.webp',
    ],
  },
  {
    id: 49,
    title: 'Black Aluminium Cup',
    description:
      'The Black Aluminium Cup is a stylish and durable cup suitable for both hot and cold beverages. Its sleek black design adds a modern touch to your drinkware collection.',
    price: 5.99,
    discountPercentage: 15.65,
    rating: 4.46,
    stock: 75,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952976/mi_ecommerce/thumbnails/g7liajnkbex4i4ynx2ru.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952975/mi_ecommerce/kkirjtcdsgkxdpj7kufv.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952975/mi_ecommerce/hnptnisoc4a6zst7hw0g.webp',
    ],
  },
  {
    id: 50,
    title: 'Black Whisk',
    description:
      'The Black Whisk is a kitchen essential for whisking and beating ingredients. Its ergonomic handle and sleek design make it a practical and stylish tool.',
    price: 9.99,
    discountPercentage: 10.24,
    rating: 3.9,
    stock: 73,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952977/mi_ecommerce/thumbnails/hrdggnedngyxks6lirew.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952977/mi_ecommerce/pkkzef2ha5jkt9y2ywjj.webp',
    ],
  },
  {
    id: 51,
    title: 'Boxed Blender',
    description:
      'The Boxed Blender is a powerful and compact blender perfect for smoothies, shakes, and more. Its convenient design and multiple functions make it a versatile kitchen appliance.',
    price: 39.99,
    discountPercentage: 7.26,
    rating: 4.56,
    stock: 9,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952981/mi_ecommerce/thumbnails/d0wcpolnnkz8usiyynqo.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952978/mi_ecommerce/e85gxff3pi98tztxhgyo.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952979/mi_ecommerce/wofmndkumu2ojieczwh3.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952980/mi_ecommerce/oowab3dbluxnom6vjudu.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952981/mi_ecommerce/hzpngdwibh1ub6q46ncu.webp',
    ],
  },
  {
    id: 52,
    title: 'Carbon Steel Wok',
    description:
      'The Carbon Steel Wok is a versatile cooking pan suitable for stir-frying, sautéing, and deep frying. Its sturdy construction ensures even heat distribution for delicious meals.',
    price: 29.99,
    discountPercentage: 6.53,
    rating: 4.05,
    stock: 40,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952983/mi_ecommerce/thumbnails/azdkofxhwas0causif69.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952982/mi_ecommerce/lny7w0wmr4qnfvrpx1od.webp',
    ],
  },
  {
    id: 53,
    title: 'Chopping Board',
    description:
      'The Chopping Board is an essential kitchen accessory for food preparation. Made from durable material, it provides a safe and hygienic surface for cutting and chopping.',
    price: 12.99,
    discountPercentage: 8.03,
    rating: 3.7,
    stock: 14,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952984/mi_ecommerce/thumbnails/rtp6mqntpcfz3uwpmj9b.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952983/mi_ecommerce/wfjvcuzxgbxjebaemvfc.webp',
    ],
  },
  {
    id: 54,
    title: 'Citrus Squeezer Yellow',
    description:
      'The Citrus Squeezer in Yellow is a handy tool for extracting juice from citrus fruits. Its vibrant color adds a cheerful touch to your kitchen gadgets.',
    price: 8.99,
    discountPercentage: 12.1,
    rating: 4.63,
    stock: 22,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952985/mi_ecommerce/thumbnails/hharsbiraophziwgodcn.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952984/mi_ecommerce/gkdvn3dqjrcgmculg28h.webp',
    ],
  },
  {
    id: 55,
    title: 'Egg Slicer',
    description:
      "The Egg Slicer is a convenient tool for slicing boiled eggs evenly. It's perfect for salads, sandwiches, and other dishes where sliced eggs are desired.",
    price: 6.99,
    discountPercentage: 14.76,
    rating: 3.09,
    stock: 40,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952986/mi_ecommerce/thumbnails/kmpvhisfe0bdspccrzjq.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952985/mi_ecommerce/spthrmzmmcnn40ef3nqa.webp',
    ],
  },
  {
    id: 56,
    title: 'Electric Stove',
    description:
      'The Electric Stove provides a portable and efficient cooking solution. Ideal for small kitchens or as an additional cooking surface for various culinary needs.',
    price: 49.99,
    discountPercentage: 14.04,
    rating: 4.11,
    stock: 21,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952989/mi_ecommerce/thumbnails/oggbnx2ywdobtw0rrkwd.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952987/mi_ecommerce/sf4tznjk6wadepqgfvvw.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952987/mi_ecommerce/v7mocmqhz0u5fvppncoc.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952988/mi_ecommerce/jlluhnqkxnwnvyv4jdob.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952988/mi_ecommerce/eztfall11qlofuqvt9io.webp',
    ],
  },
  {
    id: 57,
    title: 'Fine Mesh Strainer',
    description:
      'The Fine Mesh Strainer is a versatile tool for straining liquids and sifting dry ingredients. Its fine mesh ensures efficient filtering for smooth cooking and baking.',
    price: 9.99,
    discountPercentage: 3.5,
    rating: 3.04,
    stock: 85,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952990/mi_ecommerce/thumbnails/dklpxj95mpm70g0tqnjt.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952989/mi_ecommerce/zoimnefuxm8nvo9wf4k9.webp',
    ],
  },
  {
    id: 58,
    title: 'Fork',
    description:
      'The Fork is a classic utensil for various dining and serving purposes. Its durable and ergonomic design makes it a reliable choice for everyday use.',
    price: 3.99,
    discountPercentage: 8.07,
    rating: 3.11,
    stock: 7,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952991/mi_ecommerce/thumbnails/mtvupx3fssv2v2prcslf.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952990/mi_ecommerce/wkrpegsfodgzhxgvxoqm.webp',
    ],
  },
  {
    id: 59,
    title: 'Glass',
    description:
      'The Glass is a versatile and elegant drinking vessel suitable for a variety of beverages. Its clear design allows you to enjoy the colors and textures of your drinks.',
    price: 4.99,
    discountPercentage: 7.92,
    rating: 4.02,
    stock: 46,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952992/mi_ecommerce/thumbnails/lgp5wwzuvwmhvhfcwczh.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952991/mi_ecommerce/ypcaaemm1ymcumob8ctl.webp',
    ],
  },
  {
    id: 60,
    title: 'Grater Black',
    description:
      'The Grater in Black is a handy kitchen tool for grating cheese, vegetables, and more. Its sleek design and sharp blades make food preparation efficient and easy.',
    price: 10.99,
    discountPercentage: 3.56,
    rating: 3.21,
    stock: 84,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952993/mi_ecommerce/thumbnails/annnvuknyy1yhqb8viza.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952993/mi_ecommerce/hmwkj2esd7hlt7qbaz1y.webp',
    ],
  },
  {
    id: 61,
    title: 'Hand Blender',
    description:
      'The Hand Blender is a versatile kitchen appliance for blending, pureeing, and mixing. Its compact design and powerful motor make it a convenient tool for various recipes.',
    price: 34.99,
    discountPercentage: 17.02,
    rating: 3.86,
    stock: 84,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952994/mi_ecommerce/thumbnails/bbsp53pmhvibwxfwks8u.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952994/mi_ecommerce/rzpolmg7x7yl6wizj34e.webp',
    ],
  },
  {
    id: 62,
    title: 'Ice Cube Tray',
    description:
      'The Ice Cube Tray is a practical accessory for making ice cubes in various shapes. Perfect for keeping your drinks cool and adding a fun element to your beverages.',
    price: 5.99,
    discountPercentage: 0.63,
    rating: 4.71,
    stock: 13,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952996/mi_ecommerce/thumbnails/bhdskiqqj8kerb2ikovr.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952995/mi_ecommerce/esjwxockrjtskpjk0ixe.webp',
    ],
  },
  {
    id: 63,
    title: 'Kitchen Sieve',
    description:
      'The Kitchen Sieve is a versatile tool for sifting and straining dry and wet ingredients. Its fine mesh design ensures smooth results in your cooking and baking.',
    price: 7.99,
    discountPercentage: 18.91,
    rating: 3.09,
    stock: 68,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952997/mi_ecommerce/thumbnails/izepmxld6rh5mtessym3.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952996/mi_ecommerce/rfryyanrfowbuabntykx.webp',
    ],
  },
  {
    id: 64,
    title: 'Knife',
    description:
      'The Knife is an essential kitchen tool for chopping, slicing, and dicing. Its sharp blade and ergonomic handle make it a reliable choice for food preparation.',
    price: 14.99,
    discountPercentage: 18.86,
    rating: 3.26,
    stock: 7,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952999/mi_ecommerce/thumbnails/w3xidktvrjrd3quhyzbz.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952997/mi_ecommerce/nzf3iojttsdpgwogrjym.webp',
    ],
  },
  {
    id: 65,
    title: 'Lunch Box',
    description:
      "The Lunch Box is a convenient and portable container for packing and carrying your meals. With compartments for different foods, it's perfect for on-the-go dining.",
    price: 12.99,
    discountPercentage: 10.34,
    rating: 4.93,
    stock: 94,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953000/mi_ecommerce/thumbnails/mxqojvbbbgefdra2k1we.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756952999/mi_ecommerce/ohfobpnqqlxfrszd0bge.webp',
    ],
  },
  {
    id: 66,
    title: 'Microwave Oven',
    description:
      'The Microwave Oven is a versatile kitchen appliance for quick and efficient cooking, reheating, and defrosting. Its compact size makes it suitable for various kitchen setups.',
    price: 89.99,
    discountPercentage: 12.13,
    rating: 4.82,
    stock: 59,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953003/mi_ecommerce/thumbnails/v9kdoxlbfsibd0obbnsr.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953000/mi_ecommerce/ui7owsqafkhomq0cy2hq.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953001/mi_ecommerce/lyedhcygrgv4cwglgqqt.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953002/mi_ecommerce/fpnm8g4jwyqwixn2wope.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953002/mi_ecommerce/vixltrnqlqjsqw0jfiwx.webp',
    ],
  },
  {
    id: 67,
    title: 'Mug Tree Stand',
    description:
      'The Mug Tree Stand is a stylish and space-saving solution for organizing your mugs. Keep your favorite mugs easily accessible and neatly displayed in your kitchen.',
    price: 15.99,
    discountPercentage: 9.25,
    rating: 2.64,
    stock: 88,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953004/mi_ecommerce/thumbnails/kcvsvhhtxdpzkrjghi16.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953003/mi_ecommerce/l8fedahjxpsajao5qpdn.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953004/mi_ecommerce/ilh6vlo1cavmkdlkufup.webp',
    ],
  },
  {
    id: 68,
    title: 'Pan',
    description:
      'The Pan is a versatile and essential cookware item for frying, sautéing, and cooking various dishes. Its non-stick coating ensures easy food release and cleanup.',
    price: 24.99,
    discountPercentage: 3,
    rating: 2.79,
    stock: 90,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953006/mi_ecommerce/thumbnails/libihakzshw1p070njzg.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953005/mi_ecommerce/bliloh9b1fighmhygxhw.webp',
    ],
  },
  {
    id: 69,
    title: 'Plate',
    description:
      'The Plate is a classic and essential dishware item for serving meals. Its durable and stylish design makes it suitable for everyday use or special occasions.',
    price: 3.99,
    discountPercentage: 7.31,
    rating: 3.65,
    stock: 66,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953007/mi_ecommerce/thumbnails/dixiidefcknkcu4rmtim.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953006/mi_ecommerce/xnnlyzcqqw3h9f6xkyeh.webp',
    ],
  },
  {
    id: 70,
    title: 'Red Tongs',
    description:
      'The Red Tongs are versatile kitchen tongs suitable for various cooking and serving tasks. Their vibrant color adds a pop of excitement to your kitchen utensils.',
    price: 6.99,
    discountPercentage: 14.52,
    rating: 4.42,
    stock: 82,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953008/mi_ecommerce/thumbnails/okg6uzusqxerlkp0gh2a.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953008/mi_ecommerce/vico95hvwbhlakrfw774.webp',
    ],
  },
  {
    id: 71,
    title: 'Silver Pot With Glass Cap',
    description:
      'The Silver Pot with Glass Cap is a stylish and functional cookware item for boiling, simmering, and preparing delicious meals. Its glass cap allows you to monitor cooking progress.',
    price: 39.99,
    discountPercentage: 5.7,
    rating: 3.22,
    stock: 40,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953010/mi_ecommerce/thumbnails/dp2jfpjksruiylngzor8.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953009/mi_ecommerce/vjyyjngfzcvgholigbq0.webp',
    ],
  },
  {
    id: 72,
    title: 'Slotted Turner',
    description:
      'The Slotted Turner is a kitchen utensil designed for flipping and turning food items. Its slotted design allows excess liquid to drain, making it ideal for frying and sautéing.',
    price: 8.99,
    discountPercentage: 13.35,
    rating: 3.4,
    stock: 88,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953011/mi_ecommerce/thumbnails/c0cumpoutmvrtifikjik.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953010/mi_ecommerce/qqq75qmqebksqyn41gep.webp',
    ],
  },
  {
    id: 73,
    title: 'Spice Rack',
    description:
      'The Spice Rack is a convenient organizer for your spices and seasonings. Keep your kitchen essentials within reach and neatly arranged with this stylish spice rack.',
    price: 19.99,
    discountPercentage: 12.09,
    rating: 4.87,
    stock: 79,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953012/mi_ecommerce/thumbnails/xvfkcbfsremmiymgn6sr.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953011/mi_ecommerce/nhigk6vgjlrynr8bxvrq.webp',
    ],
  },
  {
    id: 74,
    title: 'Spoon',
    description:
      'The Spoon is a versatile kitchen utensil for stirring, serving, and tasting. Its ergonomic design and durable construction make it an essential tool for every kitchen.',
    price: 4.99,
    discountPercentage: 1.53,
    rating: 4.03,
    stock: 59,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953013/mi_ecommerce/thumbnails/djumrpqegy4lbv3koykb.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953013/mi_ecommerce/dam6byi5ru47kp1kgkvc.webp',
    ],
  },
  {
    id: 75,
    title: 'Tray',
    description:
      'The Tray is a functional and decorative item for serving snacks, appetizers, or drinks. Its stylish design makes it a versatile accessory for entertaining guests.',
    price: 16.99,
    discountPercentage: 7.48,
    rating: 4.62,
    stock: 71,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953015/mi_ecommerce/thumbnails/ztrqbxokirqzuomeddru.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953014/mi_ecommerce/z7k4kvcaympyokzhwcxd.webp',
    ],
  },
  {
    id: 76,
    title: 'Wooden Rolling Pin',
    description:
      'The Wooden Rolling Pin is a classic kitchen tool for rolling out dough for baking. Its smooth surface and sturdy handles make it easy to achieve uniform thickness.',
    price: 11.99,
    discountPercentage: 9.75,
    rating: 2.92,
    stock: 80,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953017/mi_ecommerce/thumbnails/bgqwtuadc0cet8qosz0k.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953015/mi_ecommerce/y10xuodo62xqj94bqber.webp',
    ],
  },
  {
    id: 77,
    title: 'Yellow Peeler',
    description:
      'The Yellow Peeler is a handy tool for peeling fruits and vegetables with ease. Its bright yellow color adds a cheerful touch to your kitchen gadgets.',
    price: 5.99,
    discountPercentage: 12.48,
    rating: 4.24,
    stock: 35,
    brand: undefined,
    category: 'kitchen-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953018/mi_ecommerce/thumbnails/faehvprm4z3fpoqzb31q.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953017/mi_ecommerce/xuqcfdtnlrpkh62xwevm.webp',
    ],
  },
  {
    id: 78,
    title: 'Apple MacBook Pro 14 Inch Space Grey',
    description:
      "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
    price: 1999.99,
    discountPercentage: 4.69,
    rating: 3.65,
    stock: 24,
    brand: 'Apple',
    category: 'laptops',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953020/mi_ecommerce/thumbnails/oszsdgfckp8h7fjzomnb.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953018/mi_ecommerce/azcvdex0rqjmtr5vglo3.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953019/mi_ecommerce/k79kmrwrrhn6eqlw6o3t.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953020/mi_ecommerce/a6uqgzqfyd2olhr1olze.webp',
    ],
  },
  {
    id: 79,
    title: 'Asus Zenbook Pro Dual Screen Laptop',
    description:
      'The Asus Zenbook Pro Dual Screen Laptop is a high-performance device with dual screens, providing productivity and versatility for creative professionals.',
    price: 1799.99,
    discountPercentage: 11.14,
    rating: 3.95,
    stock: 45,
    brand: 'Asus',
    category: 'laptops',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953023/mi_ecommerce/thumbnails/k5n90kptcyyavgmuokjh.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953021/mi_ecommerce/i5bs3vfprstp53fm1bml.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953021/mi_ecommerce/jfdik1ysl3gatucwwjtu.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953022/mi_ecommerce/rxjtj41pqpzl2esmfsl8.webp',
    ],
  },
  {
    id: 80,
    title: 'Huawei Matebook X Pro',
    description:
      'The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.',
    price: 1399.99,
    discountPercentage: 9.38,
    rating: 4.98,
    stock: 75,
    brand: 'Huawei',
    category: 'laptops',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953025/mi_ecommerce/thumbnails/ayeancqlds8ci9bquudw.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953023/mi_ecommerce/cto4bv3iqagfeugrdsv8.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953024/mi_ecommerce/nzx6lgdhbhw8sruv0b1m.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953024/mi_ecommerce/mwqnq0aidxih2tdxwwlc.webp',
    ],
  },
  {
    id: 81,
    title: 'Lenovo Yoga 920',
    description:
      'The Lenovo Yoga 920 is a 2-in-1 convertible laptop with a flexible hinge, allowing you to use it as a laptop or tablet, offering versatility and portability.',
    price: 1099.99,
    discountPercentage: 6.55,
    rating: 2.86,
    stock: 40,
    brand: 'Lenovo',
    category: 'laptops',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953027/mi_ecommerce/thumbnails/vli4ocdsmkmehg80nqzh.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953025/mi_ecommerce/zdu9dzc0w8b01ar0rszo.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953026/mi_ecommerce/esmokocaiphhao4x6ihn.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953026/mi_ecommerce/jxnxtf5izbmv6u6ce5qq.webp',
    ],
  },
  {
    id: 82,
    title: 'New DELL XPS 13 9300 Laptop',
    description:
      'The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.',
    price: 1499.99,
    discountPercentage: 11.89,
    rating: 2.67,
    stock: 74,
    brand: 'Dell',
    category: 'laptops',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953030/mi_ecommerce/thumbnails/daaonwtkpcxcu3u8vash.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953028/mi_ecommerce/coym6mbcih2qz47s79ug.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953028/mi_ecommerce/lzxitxzl0sfrvphqjysq.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953029/mi_ecommerce/snzjcpyw4zdqlf6efqpa.webp',
    ],
  },
  {
    id: 83,
    title: 'Blue & Black Check Shirt',
    description:
      "The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern. Made from high-quality fabric, it's suitable for both casual and semi-formal occasions.",
    price: 29.99,
    discountPercentage: 15.35,
    rating: 3.64,
    stock: 38,
    brand: 'Fashion Trends',
    category: 'mens-shirts',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953033/mi_ecommerce/thumbnails/siehenccls7x1xcxzvun.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953030/mi_ecommerce/iz6oazcdgs3uls3xwepv.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953031/mi_ecommerce/ifcd9aajlxi9dommciyj.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953032/mi_ecommerce/cproyy7vyrsbrcmlihiz.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953032/mi_ecommerce/k1udqjjofs0eqqr9oqhi.webp',
    ],
  },
  {
    id: 84,
    title: 'Gigabyte Aorus Men Tshirt',
    description:
      "The Gigabyte Aorus Men Tshirt is a cool and casual shirt for gaming enthusiasts. With the Aorus logo and sleek design, it's perfect for expressing your gaming style.",
    price: 24.99,
    discountPercentage: 0.94,
    rating: 3.18,
    stock: 90,
    brand: 'Gigabyte',
    category: 'mens-shirts',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953036/mi_ecommerce/thumbnails/oi37iuzsckrclolc36jh.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953033/mi_ecommerce/rkgcu6u9raj7hfl5bdgq.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953034/mi_ecommerce/eh0x9yehcm3gyarplwfp.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953035/mi_ecommerce/gss93mw12tfhbxbulqx8.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953035/mi_ecommerce/e1bjwxkgzm5oelvlbv3d.webp',
    ],
  },
  {
    id: 85,
    title: 'Man Plaid Shirt',
    description:
      "The Man Plaid Shirt is a timeless and versatile men's shirt with a classic plaid pattern. Its comfortable fit and casual style make it a wardrobe essential for various occasions.",
    price: 34.99,
    discountPercentage: 19.5,
    rating: 3.46,
    stock: 82,
    brand: 'Classic Wear',
    category: 'mens-shirts',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953039/mi_ecommerce/thumbnails/vk0smauhuu1mtr5ffrqt.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953036/mi_ecommerce/elkmlq232ayzwh6cu6v8.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953037/mi_ecommerce/ie87sxkfosm7jpkcd3kc.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953038/mi_ecommerce/fdng6alk26l3pnc15fqt.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953039/mi_ecommerce/rtmilbe9o94czt3pg4ui.webp',
    ],
  },
  {
    id: 86,
    title: 'Man Short Sleeve Shirt',
    description:
      "The Man Short Sleeve Shirt is a breezy and stylish option for warm days. With a comfortable fit and short sleeves, it's perfect for a laid-back yet polished look.",
    price: 19.99,
    discountPercentage: 6.83,
    rating: 2.9,
    stock: 2,
    brand: 'Casual Comfort',
    category: 'mens-shirts',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953043/mi_ecommerce/thumbnails/ouyiwssbr0uzcbu18xtq.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953040/mi_ecommerce/zxwdqrxjnokk3snoaqdt.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953041/mi_ecommerce/laou8p6qzi5u4xp9dgrm.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953041/mi_ecommerce/sdqumvxlq6xw5cgpp2hg.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953042/mi_ecommerce/xhoi7vqkayj4gntkuyep.webp',
    ],
  },
  {
    id: 87,
    title: 'Men Check Shirt',
    description:
      'The Men Check Shirt is a classic and versatile shirt featuring a stylish check pattern. Suitable for various occasions, it adds a smart and polished touch to your wardrobe.',
    price: 27.99,
    discountPercentage: 11.38,
    rating: 2.72,
    stock: 95,
    brand: 'Urban Chic',
    category: 'mens-shirts',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953046/mi_ecommerce/thumbnails/ih5bv5hcxwrkfcut9hji.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953043/mi_ecommerce/lnsxx7o21ulxlown1vjq.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953044/mi_ecommerce/fpghexvfmloqwwhsvagv.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953045/mi_ecommerce/szktxhmel9uze5ssta26.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953045/mi_ecommerce/zzmpzewpzr2xin8iattg.webp',
    ],
  },
  {
    id: 88,
    title: 'Nike Air Jordan 1 Red And Black',
    description:
      'The Nike Air Jordan 1 in Red and Black is an iconic basketball sneaker known for its stylish design and high-performance features, making it a favorite among sneaker enthusiasts and athletes.',
    price: 149.99,
    discountPercentage: 4.12,
    rating: 4.77,
    stock: 7,
    brand: 'Nike',
    category: 'mens-shoes',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953049/mi_ecommerce/thumbnails/gygh23ecmtvd1t7z2zto.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953046/mi_ecommerce/u30uybkf1yblx1wfdvye.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953047/mi_ecommerce/hznkzd9m13ircze7b7xc.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953048/mi_ecommerce/ohvbigy6p1aqtpzirqdr.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953048/mi_ecommerce/bblzqsjq7gk2ptwze4m2.webp',
    ],
  },
  {
    id: 89,
    title: 'Nike Baseball Cleats',
    description:
      'Nike Baseball Cleats are designed for maximum traction and performance on the baseball field. They provide stability and support for players during games and practices.',
    price: 79.99,
    discountPercentage: 18.04,
    rating: 3.88,
    stock: 12,
    brand: 'Nike',
    category: 'mens-shoes',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953052/mi_ecommerce/thumbnails/hop59hl1uyvovjh4kycx.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953050/mi_ecommerce/uupbb7dklcws8v01oqay.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953050/mi_ecommerce/how2jxby6ymxcdzwglqi.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953051/mi_ecommerce/labupjsbtpvw2urhvswt.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953052/mi_ecommerce/ovymbaqhnhhylcrcocf0.webp',
    ],
  },
  {
    id: 90,
    title: 'Puma Future Rider Trainers',
    description:
      'The Puma Future Rider Trainers offer a blend of retro style and modern comfort. Perfect for casual wear, these trainers provide a fashionable and comfortable option for everyday use.',
    price: 89.99,
    discountPercentage: 4.2,
    rating: 4.9,
    stock: 90,
    brand: 'Puma',
    category: 'mens-shoes',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953056/mi_ecommerce/thumbnails/xrovj1lcotooqhgxmws0.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953053/mi_ecommerce/aszx0s0piefwtxfv6ioo.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953054/mi_ecommerce/vmzmc4gugcgjyjnfcbv1.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953054/mi_ecommerce/zglkfzprbsuu6bfkrv8r.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953055/mi_ecommerce/mkkzzgl51uleqsexxq4q.webp',
    ],
  },
  {
    id: 91,
    title: 'Sports Sneakers Off White & Red',
    description:
      'The Sports Sneakers in Off White and Red combine style and functionality, making them a fashionable choice for sports enthusiasts. The red and off-white color combination adds a bold and energetic touch.',
    price: 119.99,
    discountPercentage: 4.97,
    rating: 4.77,
    stock: 17,
    brand: 'Off White',
    category: 'mens-shoes',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953059/mi_ecommerce/thumbnails/fu5dyghmbdivj61mpx2z.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953056/mi_ecommerce/xearm6tek7ljdomvofkx.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953057/mi_ecommerce/nzy1fx4adhxhywnmkynw.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953058/mi_ecommerce/uqhzgyjxg9bxqb6ltypd.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953058/mi_ecommerce/g9qv6lcp1tlheeuoaomv.webp',
    ],
  },
  {
    id: 92,
    title: 'Sports Sneakers Off White Red',
    description:
      'Another variant of the Sports Sneakers in Off White Red, featuring a unique design. These sneakers offer style and comfort for casual occasions.',
    price: 109.99,
    discountPercentage: 0.04,
    rating: 4.69,
    stock: 62,
    brand: 'Off White',
    category: 'mens-shoes',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953062/mi_ecommerce/thumbnails/u9kfq4lf8mxdf9jtvm4o.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953060/mi_ecommerce/hkqcnrga9jrszauo0hmm.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953060/mi_ecommerce/wh5hccx2zrezlmrbsldv.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953061/mi_ecommerce/mmzagbe96mn0yrgkpb4w.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953061/mi_ecommerce/t8xzjzfytsgisigiyhbz.webp',
    ],
  },
  {
    id: 93,
    title: 'Brown Leather Belt Watch',
    description:
      'The Brown Leather Belt Watch is a stylish timepiece with a classic design. Featuring a genuine leather strap and a sleek dial, it adds a touch of sophistication to your look.',
    price: 89.99,
    discountPercentage: 5.99,
    rating: 4.19,
    stock: 32,
    brand: 'Fashion Timepieces',
    category: 'mens-watches',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953064/mi_ecommerce/thumbnails/tlo7pilh2x7du8r8tvtf.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953063/mi_ecommerce/ohfckhpy427s6iue2znj.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953063/mi_ecommerce/myipac7y45u7tpvwuqko.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953064/mi_ecommerce/onsjap4amqb3arndoj8f.webp',
    ],
  },
  {
    id: 94,
    title: 'Longines Master Collection',
    description:
      "The Longines Master Collection is an elegant and refined watch known for its precision and craftsmanship. With a timeless design, it's a symbol of luxury and sophistication.",
    price: 1499.99,
    discountPercentage: 17.24,
    rating: 3.87,
    stock: 100,
    brand: 'Longines',
    category: 'mens-watches',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953067/mi_ecommerce/thumbnails/dasze5izub1tvrjlqz2b.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953065/mi_ecommerce/npz5h9yuvvaxu3lujthx.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953066/mi_ecommerce/nxeqkd0zuac6hugxizy0.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953067/mi_ecommerce/yvz55gzcpu1etvtyk8ba.webp',
    ],
  },
  {
    id: 95,
    title: 'Rolex Cellini Date Black Dial',
    description:
      "The Rolex Cellini Date with Black Dial is a classic and prestigious watch. With a black dial and date complication, it exudes sophistication and is a symbol of Rolex's heritage.",
    price: 8999.99,
    discountPercentage: 8.88,
    rating: 4.97,
    stock: 40,
    brand: 'Rolex',
    category: 'mens-watches',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953070/mi_ecommerce/thumbnails/wyi8sgudajnhjkjb6zdn.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953068/mi_ecommerce/wgvoixuvjs3l7tbefmi0.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953068/mi_ecommerce/u2stybokjm3ojjwugyus.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953069/mi_ecommerce/pybkstqmaxgyruwsqxgw.webp',
    ],
  },
  {
    id: 96,
    title: 'Rolex Cellini Moonphase',
    description:
      "The Rolex Cellini Moonphase is a masterpiece of horology, featuring a moon phase complication and exquisite design. It reflects Rolex's commitment to precision and elegance.",
    price: 12999.99,
    discountPercentage: 17.52,
    rating: 2.58,
    stock: 36,
    brand: 'Rolex',
    category: 'mens-watches',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953072/mi_ecommerce/thumbnails/vmmqpsrtnok2mgr0af7m.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953070/mi_ecommerce/fd0g5blbruajzw34y9mv.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953071/mi_ecommerce/yudmcdv1lalcsmelwsnv.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953071/mi_ecommerce/nujupecvnz88xmv4cd4x.webp',
    ],
  },
  {
    id: 97,
    title: 'Rolex Datejust',
    description:
      "The Rolex Datejust is an iconic and versatile timepiece with a date window. Known for its timeless design and reliability, it's a symbol of Rolex's watchmaking excellence.",
    price: 10999.99,
    discountPercentage: 3.73,
    rating: 3.66,
    stock: 86,
    brand: 'Rolex',
    category: 'mens-watches',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953074/mi_ecommerce/thumbnails/bm0fmrzdtimafykcwale.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953073/mi_ecommerce/hz51geu5azgaqgaicmer.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953073/mi_ecommerce/ofj6ttdhw2pddulc7dr9.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953074/mi_ecommerce/ojfynebmo3dabznokou4.webp',
    ],
  },
  {
    id: 98,
    title: 'Rolex Submariner Watch',
    description:
      "The Rolex Submariner is a legendary dive watch with a rich history. Known for its durability and water resistance, it's a symbol of adventure and exploration.",
    price: 13999.99,
    discountPercentage: 5.05,
    rating: 2.69,
    stock: 55,
    brand: 'Rolex',
    category: 'mens-watches',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953077/mi_ecommerce/thumbnails/ptmwgwapbnsjkwrxrujv.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953075/mi_ecommerce/huqzb6cncvpill3iv5p1.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953076/mi_ecommerce/cf5i0l2fdfpun32cc2ke.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953076/mi_ecommerce/sw5r5townwfxw73jogys.webp',
    ],
  },
  {
    id: 99,
    title: 'Amazon Echo Plus',
    description:
      'The Amazon Echo Plus is a smart speaker with built-in Alexa voice control. It features premium sound quality and serves as a hub for controlling smart home devices.',
    price: 99.99,
    discountPercentage: 12.07,
    rating: 4.99,
    stock: 61,
    brand: 'Amazon',
    category: 'mobile-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953079/mi_ecommerce/thumbnails/vmxvy6aemx1y7eh5uu1v.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953077/mi_ecommerce/owd95rvbwo8z1pouctsf.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953078/mi_ecommerce/u7jtusztc9vdwnxjmjto.webp',
    ],
  },
  {
    id: 100,
    title: 'Apple Airpods',
    description:
      'The Apple Airpods offer a seamless wireless audio experience. With easy pairing, high-quality sound, and Siri integration, they are perfect for on-the-go listening.',
    price: 129.99,
    discountPercentage: 15.54,
    rating: 4.15,
    stock: 67,
    brand: 'Apple',
    category: 'mobile-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953081/mi_ecommerce/thumbnails/wxjinkmuzgmf1bfgnzyq.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953079/mi_ecommerce/qeaipt6mk0siyri8iknb.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953080/mi_ecommerce/gfdxhhidfnteltvordja.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953080/mi_ecommerce/uc93u0jl2pjoq55wwemx.webp',
    ],
  },
  {
    id: 101,
    title: 'Apple AirPods Max Silver',
    description:
      'The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.',
    price: 549.99,
    discountPercentage: 13.67,
    rating: 3.47,
    stock: 59,
    brand: 'Apple',
    category: 'mobile-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953082/mi_ecommerce/thumbnails/ftqqfqbkiwljq8i9fg22.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953082/mi_ecommerce/tofkngsmfv3wnbf9waak.webp',
    ],
  },
  {
    id: 102,
    title: 'Apple Airpower Wireless Charger',
    description:
      'The Apple AirPower Wireless Charger provides a convenient way to charge your compatible Apple devices wirelessly. Simply place your devices on the charging mat for effortless charging.',
    price: 79.99,
    discountPercentage: 4.48,
    rating: 3.68,
    stock: 1,
    brand: 'Apple',
    category: 'mobile-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953083/mi_ecommerce/thumbnails/aa1hncn5rtnzezafywna.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953083/mi_ecommerce/adxez80bbo9lxearht4u.webp',
    ],
  },
  {
    id: 103,
    title: 'Apple HomePod Mini Cosmic Grey',
    description:
      'The Apple HomePod Mini in Cosmic Grey is a compact smart speaker that delivers impressive audio and integrates seamlessly with the Apple ecosystem for a smart home experience.',
    price: 99.99,
    discountPercentage: 18.1,
    rating: 4.62,
    stock: 27,
    brand: 'Apple',
    category: 'mobile-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953084/mi_ecommerce/thumbnails/ihnn75yi51triqlmeuz5.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953084/mi_ecommerce/lkfwfmvyv0m4kvjvtdqk.webp',
    ],
  },
  {
    id: 104,
    title: 'Apple iPhone Charger',
    description:
      'The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.',
    price: 19.99,
    discountPercentage: 18.52,
    rating: 4.15,
    stock: 31,
    brand: 'Apple',
    category: 'mobile-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953086/mi_ecommerce/thumbnails/swzlwawpvi1x3ejycrsw.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953085/mi_ecommerce/saioukjjuecefikklmc1.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953085/mi_ecommerce/bsecipdwdjuobd57vipm.webp',
    ],
  },
  {
    id: 105,
    title: 'Apple MagSafe Battery Pack',
    description:
      'The Apple MagSafe Battery Pack is a portable and convenient way to add extra battery life to your MagSafe-compatible iPhone. Attach it magnetically for a secure connection.',
    price: 99.99,
    discountPercentage: 17.17,
    rating: 3.62,
    stock: 1,
    brand: 'Apple',
    category: 'mobile-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953088/mi_ecommerce/thumbnails/e1z0wzkgkiqd5eypfk2z.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953086/mi_ecommerce/gvf7qnhxba7r40pkmd5v.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953087/mi_ecommerce/yy7fjvpzd1ho0hyrqvji.webp',
    ],
  },
  {
    id: 106,
    title: 'Apple Watch Series 4 Gold',
    description:
      'The Apple Watch Series 4 in Gold is a stylish and advanced smartwatch with features like heart rate monitoring, fitness tracking, and a beautiful Retina display.',
    price: 349.99,
    discountPercentage: 12.02,
    rating: 2.74,
    stock: 33,
    brand: 'Apple',
    category: 'mobile-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953090/mi_ecommerce/thumbnails/ctfqc1x3g25eeiskmxay.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953089/mi_ecommerce/ftlfdmdrx5qncva0asq7.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953089/mi_ecommerce/f8a86wljz4zug8blees3.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953090/mi_ecommerce/ixga33mu18sfpihuxwpt.webp',
    ],
  },
  {
    id: 107,
    title: 'Beats Flex Wireless Earphones',
    description:
      'The Beats Flex Wireless Earphones offer a comfortable and versatile audio experience. With magnetic earbuds and up to 12 hours of battery life, they are ideal for everyday use.',
    price: 49.99,
    discountPercentage: 5.73,
    rating: 4.24,
    stock: 50,
    brand: 'Beats',
    category: 'mobile-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953091/mi_ecommerce/thumbnails/jfobewbdjfhrrnnis8sp.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953091/mi_ecommerce/xovdsg2it0wreyxd1jre.webp',
    ],
  },
  {
    id: 108,
    title: 'iPhone 12 Silicone Case with MagSafe Plum',
    description:
      'The iPhone 12 Silicone Case with MagSafe in Plum is a stylish and protective case designed for the iPhone 12. It features MagSafe technology for easy attachment of accessories.',
    price: 29.99,
    discountPercentage: 13.85,
    rating: 3.62,
    stock: 69,
    brand: 'Apple',
    category: 'mobile-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953094/mi_ecommerce/thumbnails/vpyvppswmdyt5pt2cjwc.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953092/mi_ecommerce/ypvandmrv7veykgoeqih.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953093/mi_ecommerce/epfsfuezd3psuxlihax4.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953093/mi_ecommerce/qh4rorzwbcfe5lqi59gq.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953094/mi_ecommerce/h94qfxvmobfewsryic9u.webp',
    ],
  },
  {
    id: 109,
    title: 'Monopod',
    description:
      'The Monopod is a versatile camera accessory for stable and adjustable shooting. Perfect for capturing selfies, group photos, and videos with ease.',
    price: 19.99,
    discountPercentage: 8.58,
    rating: 4.43,
    stock: 48,
    brand: 'TechGear',
    category: 'mobile-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953097/mi_ecommerce/thumbnails/uqli4fdurhloyobxsd3i.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953095/mi_ecommerce/stc4ehpymmrsox1zc8kg.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953096/mi_ecommerce/wlgxnwlzouajfjph8biq.webp',
    ],
  },
  {
    id: 110,
    title: 'Selfie Lamp with iPhone',
    description:
      'The Selfie Lamp with iPhone is a portable and adjustable LED light designed to enhance your selfies and video calls. Attach it to your iPhone for well-lit photos.',
    price: 14.99,
    discountPercentage: 19.4,
    rating: 3.55,
    stock: 58,
    brand: 'GadgetMaster',
    category: 'mobile-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953098/mi_ecommerce/thumbnails/t6rn6m5sgwqdkjjd6rcc.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953097/mi_ecommerce/aldh7ky2tbepwvqmq0t7.webp',
    ],
  },
  {
    id: 111,
    title: 'Selfie Stick Monopod',
    description:
      'The Selfie Stick Monopod is a extendable and foldable device for capturing the perfect selfie or group photo. Compatible with smartphones and cameras.',
    price: 12.99,
    discountPercentage: 19.12,
    rating: 3.88,
    stock: 11,
    brand: 'SnapTech',
    category: 'mobile-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953099/mi_ecommerce/thumbnails/bltlsxzuzby5hyolayoc.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953099/mi_ecommerce/g5luy2xgrpbbfjkefc0r.webp',
    ],
  },
  {
    id: 112,
    title: 'TV Studio Camera Pedestal',
    description:
      'The TV Studio Camera Pedestal is a professional-grade camera support system for smooth and precise camera movements in a studio setting. Ideal for broadcast and production.',
    price: 499.99,
    discountPercentage: 8.31,
    rating: 2.78,
    stock: 15,
    brand: 'ProVision',
    category: 'mobile-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953101/mi_ecommerce/thumbnails/ilwgmmnbxpta5mvhdhyy.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953100/mi_ecommerce/bfpwvbdouuagpjgjz3a4.webp',
    ],
  },
  {
    id: 113,
    title: 'Generic Motorcycle',
    description:
      'The Generic Motorcycle is a versatile and reliable bike suitable for various riding preferences. With a balanced design, it provides a comfortable and efficient riding experience.',
    price: 3999.99,
    discountPercentage: 12.1,
    rating: 4.91,
    stock: 34,
    brand: 'Generic Motors',
    category: 'motorcycle',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953104/mi_ecommerce/thumbnails/ja6y8qvryu3wtmudhgcm.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953101/mi_ecommerce/jroczxq9jylioficyf9c.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953102/mi_ecommerce/v6hfgfxugkq6vy7lujl2.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953103/mi_ecommerce/lvk80lpxgn5utdimpt2l.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953103/mi_ecommerce/znlx4qv58enu5gyxepo1.webp',
    ],
  },
  {
    id: 114,
    title: 'Kawasaki Z800',
    description:
      "The Kawasaki Z800 is a powerful and agile sportbike known for its striking design and performance. It's equipped with advanced features, making it a favorite among motorcycle enthusiasts.",
    price: 8999.99,
    discountPercentage: 9.77,
    rating: 3.98,
    stock: 52,
    brand: 'Kawasaki',
    category: 'motorcycle',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953107/mi_ecommerce/thumbnails/c0nwtzjaxlcpopuj11op.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953105/mi_ecommerce/nt26wh5bcth8kpkai0pu.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953105/mi_ecommerce/tscpjzyl6rdn9is6fiyr.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953106/mi_ecommerce/wpwwvtqmcnm2ezznt05j.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953106/mi_ecommerce/jl597gl3ftcmqbd1ksjo.webp',
    ],
  },
  {
    id: 115,
    title: 'MotoGP CI.H1',
    description:
      'The MotoGP CI.H1 is a high-performance motorcycle inspired by MotoGP racing technology. It offers cutting-edge features and precision engineering for an exhilarating riding experience.',
    price: 14999.99,
    discountPercentage: 6.92,
    rating: 2.97,
    stock: 10,
    brand: 'MotoGP',
    category: 'motorcycle',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953110/mi_ecommerce/thumbnails/d25ge4lcy2hgbszzsl4b.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953107/mi_ecommerce/wcij1hjzrjiidx49pjtp.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953108/mi_ecommerce/ioy11farrfbjbdnqmmuq.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953109/mi_ecommerce/philwdxoxtjmcfesy5qf.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953109/mi_ecommerce/c27kptgguzwkwwum1dfw.webp',
    ],
  },
  {
    id: 116,
    title: 'Scooter Motorcycle',
    description:
      'The Scooter Motorcycle is a practical and fuel-efficient bike ideal for urban commuting. It features a step-through design and user-friendly controls for easy maneuverability.',
    price: 2999.99,
    discountPercentage: 6.27,
    rating: 2.53,
    stock: 84,
    brand: 'ScootMaster',
    category: 'motorcycle',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953113/mi_ecommerce/thumbnails/z6gfmao4sdqaubyx1w2g.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953110/mi_ecommerce/eyuzmsfxjidxtqbhqmdp.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953111/mi_ecommerce/ptdexzfolywebnya7rwe.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953111/mi_ecommerce/nscopc0o627ckxmmfgjr.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953112/mi_ecommerce/f9mik22kehe85taylfsz.webp',
    ],
  },
  {
    id: 117,
    title: 'Sportbike Motorcycle',
    description:
      "The Sportbike Motorcycle is designed for speed and agility, with a sleek and aerodynamic profile. It's suitable for riders looking for a dynamic and thrilling riding experience.",
    price: 7499.99,
    discountPercentage: 11.58,
    rating: 3.94,
    stock: 0,
    brand: 'SpeedMaster',
    category: 'motorcycle',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953116/mi_ecommerce/thumbnails/fta21teajs7racne7bsm.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953113/mi_ecommerce/a3bpupgbslrxe1tdu9ii.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953114/mi_ecommerce/ov7fuwx8sxtn972drqgh.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953115/mi_ecommerce/lsybgg1jc2ppdhw9zeae.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953115/mi_ecommerce/to0vqaptc3emqrauemgg.webp',
    ],
  },
  {
    id: 118,
    title: 'Attitude Super Leaves Hand Soap',
    description:
      'Attitude Super Leaves Hand Soap is a natural and nourishing hand soap enriched with the goodness of super leaves. It cleanses and moisturizes your hands, leaving them feeling fresh and soft.',
    price: 8.99,
    discountPercentage: 18.49,
    rating: 3.19,
    stock: 94,
    brand: 'Attitude',
    category: 'skin-care',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953118/mi_ecommerce/thumbnails/qvbha8o1x6tkuo94ngpp.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953117/mi_ecommerce/yurfoaiufbypu381cpno.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953117/mi_ecommerce/gc6zbvlcxlq9qtafhbiz.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953118/mi_ecommerce/jmfqedqgelpyvzvwkptr.webp',
    ],
  },
  {
    id: 119,
    title: 'Olay Ultra Moisture Shea Butter Body Wash',
    description:
      'Olay Ultra Moisture Shea Butter Body Wash is a luxurious body wash that hydrates and nourishes your skin with the moisturizing power of shea butter. Enjoy a rich lather and silky-smooth skin.',
    price: 12.99,
    discountPercentage: 16.39,
    rating: 4.51,
    stock: 34,
    brand: 'Olay',
    category: 'skin-care',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953121/mi_ecommerce/thumbnails/ma5tbg4x8z4ajphscf9j.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953119/mi_ecommerce/oqnffsrnperlod3mfv0a.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953120/mi_ecommerce/uhhjet0n5jmc4af7skmc.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953121/mi_ecommerce/dzhocyolfctpz90krdyb.webp',
    ],
  },
  {
    id: 120,
    title: 'Vaseline Men Body and Face Lotion',
    description:
      "Vaseline Men Body and Face Lotion is a specially formulated lotion designed to provide long-lasting moisture to men's skin. It absorbs quickly and helps keep the skin hydrated and healthy.",
    price: 9.99,
    discountPercentage: 13.39,
    rating: 3.16,
    stock: 95,
    brand: 'Vaseline',
    category: 'skin-care',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953124/mi_ecommerce/thumbnails/tgp0gzgw08tjxqax98vp.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953122/mi_ecommerce/tai8e9pjppgyta7vdper.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953122/mi_ecommerce/lttjvn12ra7kgrxwp1tp.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953123/mi_ecommerce/tcu3ljckvr0kbeowtxiw.webp',
    ],
  },
  {
    id: 121,
    title: 'iPhone 5s',
    description:
      "The iPhone 5s is a classic smartphone known for its compact design and advanced features during its release. While it's an older model, it still provides a reliable user experience.",
    price: 199.99,
    discountPercentage: 12.91,
    rating: 2.83,
    stock: 25,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953126/mi_ecommerce/thumbnails/ndeykx1jebpqo33ntaty.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953124/mi_ecommerce/ejofdcfigarwxinzsxlg.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953125/mi_ecommerce/xcdpj36eieyvxzrmriae.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953126/mi_ecommerce/z6zzbggotuk1zdnfxjhp.webp',
    ],
  },
  {
    id: 122,
    title: 'iPhone 6',
    description:
      'The iPhone 6 is a stylish and capable smartphone with a larger display and improved performance. It introduced new features and design elements, making it a popular choice in its time.',
    price: 299.99,
    discountPercentage: 6.69,
    rating: 3.41,
    stock: 60,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953129/mi_ecommerce/thumbnails/jbi0tpujsxe5irlqd54h.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953127/mi_ecommerce/toyehzw2kipigsfmfnd4.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953127/mi_ecommerce/j48kbhncgrte00zw1k2h.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953128/mi_ecommerce/rl4uybzicjfjlrozvz24.webp',
    ],
  },
  {
    id: 123,
    title: 'iPhone 13 Pro',
    description:
      'The iPhone 13 Pro is a cutting-edge smartphone with a powerful camera system, high-performance chip, and stunning display. It offers advanced features for users who demand top-notch technology.',
    price: 1099.99,
    discountPercentage: 9.37,
    rating: 4.12,
    stock: 56,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953131/mi_ecommerce/thumbnails/ou85qik1123nrdy5itd7.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953129/mi_ecommerce/k1735l3hz0sisbrhunjy.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953130/mi_ecommerce/cyep4lzji5j6qkz8dvcm.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953130/mi_ecommerce/ijlltwsqiffa44ngvnml.webp',
    ],
  },
  {
    id: 124,
    title: 'iPhone X',
    description:
      'The iPhone X is a flagship smartphone featuring a bezel-less OLED display, facial recognition technology (Face ID), and impressive performance. It represents a milestone in iPhone design and innovation.',
    price: 899.99,
    discountPercentage: 19.59,
    rating: 2.51,
    stock: 37,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953134/mi_ecommerce/thumbnails/rrq0vfmjh8zdzjcrmb3q.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953132/mi_ecommerce/uoxzbt8uo9ecljdbxwe2.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953133/mi_ecommerce/yapmlmepzh7dcs5lubkt.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953133/mi_ecommerce/nq0xerbllqsbalmttxfg.webp',
    ],
  },
  {
    id: 125,
    title: 'Oppo A57',
    description:
      'The Oppo A57 is a mid-range smartphone known for its sleek design and capable features. It offers a balance of performance and affordability, making it a popular choice.',
    price: 249.99,
    discountPercentage: 2.43,
    rating: 3.94,
    stock: 19,
    brand: 'Oppo',
    category: 'smartphones',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953136/mi_ecommerce/thumbnails/xogaezvxenod5vj0fx4d.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953135/mi_ecommerce/twq9ftxazuu8najkdl0z.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953135/mi_ecommerce/dsoijkivdesdpilltht8.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953136/mi_ecommerce/koci5sgk1rey2ij26gai.webp',
    ],
  },
  {
    id: 126,
    title: 'Oppo F19 Pro Plus',
    description:
      'The Oppo F19 Pro Plus is a feature-rich smartphone with a focus on camera capabilities. It boasts advanced photography features and a powerful performance for a premium user experience.',
    price: 399.99,
    discountPercentage: 18.64,
    rating: 3.51,
    stock: 78,
    brand: 'Oppo',
    category: 'smartphones',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953139/mi_ecommerce/thumbnails/jjfwwwypl8jhp8ruxktf.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953137/mi_ecommerce/jusouuqqh7cbtmkmtxwv.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953138/mi_ecommerce/k3amharpp7htoqb07x2i.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953138/mi_ecommerce/qqoiaqdi6qi51lsft28m.webp',
    ],
  },
  {
    id: 127,
    title: 'Oppo K1',
    description:
      'The Oppo K1 series offers a range of smartphones with various features and specifications. Known for their stylish design and reliable performance, the Oppo K1 series caters to diverse user preferences.',
    price: 299.99,
    discountPercentage: 18.29,
    rating: 4.25,
    stock: 55,
    brand: 'Oppo',
    category: 'smartphones',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953141/mi_ecommerce/thumbnails/m0ppmdppooqxhi7smdcv.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953139/mi_ecommerce/mhcclmtz0kxy4wtbqpwi.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953140/mi_ecommerce/lt3dpiorh11vsobjkng6.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953140/mi_ecommerce/rqcdl0rlo2ay7z7ayj1d.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953141/mi_ecommerce/nkqx9n5qiata98za4hpf.webp',
    ],
  },
  {
    id: 128,
    title: 'Realme C35',
    description:
      'The Realme C35 is a budget-friendly smartphone with a focus on providing essential features for everyday use. It offers a reliable performance and user-friendly experience.',
    price: 149.99,
    discountPercentage: 15.3,
    rating: 4.2,
    stock: 48,
    brand: 'Realme',
    category: 'smartphones',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953143/mi_ecommerce/thumbnails/kpdmphoytmnrzvmdwyoy.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953142/mi_ecommerce/v5yhwouvfk1cqndsubgk.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953142/mi_ecommerce/rs0o9kb2zhncg1itcynl.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953143/mi_ecommerce/j8pw2askculedhmed4mo.webp',
    ],
  },
  {
    id: 129,
    title: 'Realme X',
    description:
      'The Realme X is a mid-range smartphone known for its sleek design and impressive display. It offers a good balance of performance and camera capabilities for users seeking a quality device.',
    price: 299.99,
    discountPercentage: 6.95,
    rating: 3.7,
    stock: 12,
    brand: 'Realme',
    category: 'smartphones',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953146/mi_ecommerce/thumbnails/vnbmsdhtvhawsu7nobcv.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953144/mi_ecommerce/ry1ckv1hdjkmftpjlsfi.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953145/mi_ecommerce/fhczbtgldvygxlsmejys.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953145/mi_ecommerce/vl4wpiiokppbaltamwst.webp',
    ],
  },
  {
    id: 130,
    title: 'Realme XT',
    description:
      'The Realme XT is a feature-rich smartphone with a focus on camera technology. It comes equipped with advanced camera sensors, delivering high-quality photos and videos for photography enthusiasts.',
    price: 349.99,
    discountPercentage: 11.51,
    rating: 4.58,
    stock: 80,
    brand: 'Realme',
    category: 'smartphones',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953148/mi_ecommerce/thumbnails/pklup6f0alybxwvtyoty.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953146/mi_ecommerce/zssn6oyfwhss6misieea.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953147/mi_ecommerce/osxd77cynebexy9kjmdg.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953148/mi_ecommerce/eity3r5axtlbcoiynpfo.webp',
    ],
  },
  {
    id: 131,
    title: 'Samsung Galaxy S7',
    description:
      'The Samsung Galaxy S7 is a flagship smartphone known for its sleek design and advanced features. It features a high-resolution display, powerful camera, and robust performance.',
    price: 299.99,
    discountPercentage: 19.55,
    rating: 3.3,
    stock: 67,
    brand: 'Samsung',
    category: 'smartphones',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953151/mi_ecommerce/thumbnails/buvdwqqnhh3sur4d1cpl.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953149/mi_ecommerce/vo2mndfik4qojx0no3zf.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953149/mi_ecommerce/pjli1m94nrelion9xxc5.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953150/mi_ecommerce/oh5uoky3u47udbtfmy4e.webp',
    ],
  },
  {
    id: 132,
    title: 'Samsung Galaxy S8',
    description:
      'The Samsung Galaxy S8 is a premium smartphone with an Infinity Display, offering a stunning visual experience. It boasts advanced camera capabilities and cutting-edge technology.',
    price: 499.99,
    discountPercentage: 19.45,
    rating: 4.4,
    stock: 0,
    brand: 'Samsung',
    category: 'smartphones',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953153/mi_ecommerce/thumbnails/zbjj0vjc4hyjwhtsbhlu.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953151/mi_ecommerce/mb3emq3s7ry5luzoat8h.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953152/mi_ecommerce/habbywa21lwqqvdrviqr.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953152/mi_ecommerce/srohfnlwflq2zeazcadm.webp',
    ],
  },
  {
    id: 133,
    title: 'Samsung Galaxy S10',
    description:
      'The Samsung Galaxy S10 is a flagship device featuring a dynamic AMOLED display, versatile camera system, and powerful performance. It represents innovation and excellence in smartphone technology.',
    price: 699.99,
    discountPercentage: 5.59,
    rating: 3.06,
    stock: 19,
    brand: 'Samsung',
    category: 'smartphones',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953156/mi_ecommerce/thumbnails/gh8bjwxodt5pgrv96fvb.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953154/mi_ecommerce/qbrcjq2xibabdxomyh7g.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953155/mi_ecommerce/baz44vusdrr8ogzlzaru.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953155/mi_ecommerce/i7g0kyfhlybmmiycgvvy.webp',
    ],
  },
  {
    id: 134,
    title: 'Vivo S1',
    description:
      'The Vivo S1 is a stylish and mid-range smartphone offering a blend of design and performance. It features a vibrant display, capable camera system, and reliable functionality.',
    price: 249.99,
    discountPercentage: 10.17,
    rating: 3.5,
    stock: 50,
    brand: 'Vivo',
    category: 'smartphones',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953159/mi_ecommerce/thumbnails/dvxbfaod1sjfvrjl0z2x.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953157/mi_ecommerce/w8knr1kmfchlorsyon6s.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953158/mi_ecommerce/tadshpywhl5iivvyzd0j.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953159/mi_ecommerce/ygcsnmtzajpwvi1guopa.webp',
    ],
  },
  {
    id: 135,
    title: 'Vivo V9',
    description:
      'The Vivo V9 is a smartphone known for its sleek design and emphasis on capturing high-quality selfies. It features a notch display, dual-camera setup, and a modern design.',
    price: 299.99,
    discountPercentage: 17.67,
    rating: 3.6,
    stock: 82,
    brand: 'Vivo',
    category: 'smartphones',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953162/mi_ecommerce/thumbnails/aphp9tik1vnvmezjt8aw.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953160/mi_ecommerce/u7pquamxf8yon97svlad.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953161/mi_ecommerce/ybjmybezethsj59bi9nu.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953161/mi_ecommerce/pm3c9rlb5mxkkuccbaig.webp',
    ],
  },
  {
    id: 136,
    title: 'Vivo X21',
    description:
      'The Vivo X21 is a premium smartphone with a focus on cutting-edge technology. It features an in-display fingerprint sensor, a high-resolution display, and advanced camera capabilities.',
    price: 499.99,
    discountPercentage: 17.41,
    rating: 4.26,
    stock: 7,
    brand: 'Vivo',
    category: 'smartphones',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953165/mi_ecommerce/thumbnails/lwg8kxkoxzou9lyocsap.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953163/mi_ecommerce/yj6zjl1wnwhkexc0icx8.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953164/mi_ecommerce/seqmoyagq2ofpp9zwgk0.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953164/mi_ecommerce/bqx84rexmutuqhkaak2h.webp',
    ],
  },
  {
    id: 137,
    title: 'American Football',
    description:
      'The American Football is a classic ball used in American football games. It is designed for throwing and catching, making it an essential piece of equipment for the sport.',
    price: 19.99,
    discountPercentage: 4.93,
    rating: 4.91,
    stock: 53,
    brand: undefined,
    category: 'sports-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953166/mi_ecommerce/thumbnails/pinzu45bxqqh6mjs9jiy.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953165/mi_ecommerce/dvvbazzn8s43y5zwexpu.webp',
    ],
  },
  {
    id: 138,
    title: 'Baseball Ball',
    description:
      'The Baseball Ball is a standard baseball used in baseball games. It features a durable leather cover and is designed for pitching, hitting, and fielding in the game of baseball.',
    price: 8.99,
    discountPercentage: 1.71,
    rating: 2.57,
    stock: 100,
    brand: undefined,
    category: 'sports-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953167/mi_ecommerce/thumbnails/fw4yssnjhxoatdm1xqpb.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953167/mi_ecommerce/cwi1bc7z22zgopyueb2t.webp',
    ],
  },
  {
    id: 139,
    title: 'Baseball Glove',
    description:
      'The Baseball Glove is a protective glove worn by baseball players. It is designed to catch and field the baseball, providing players with comfort and control during the game.',
    price: 24.99,
    discountPercentage: 2.9,
    rating: 3.96,
    stock: 22,
    brand: undefined,
    category: 'sports-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953170/mi_ecommerce/thumbnails/yp8cttczoeaab6xeroqu.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953168/mi_ecommerce/hjfywskvbvzhe8vesv8e.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953169/mi_ecommerce/mzmevniowtn7ethfpk7c.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953169/mi_ecommerce/nzngggtyfg9zqhcp6yxz.webp',
    ],
  },
  {
    id: 140,
    title: 'Basketball',
    description:
      'The Basketball is a standard ball used in basketball games. It is designed for dribbling, shooting, and passing in the game of basketball, suitable for both indoor and outdoor play.',
    price: 14.99,
    discountPercentage: 7.44,
    rating: 4.66,
    stock: 75,
    brand: undefined,
    category: 'sports-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953171/mi_ecommerce/thumbnails/x0c8ayyo9zvbparbb9yi.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953170/mi_ecommerce/xpexus52enj6lc5o6ys3.webp',
    ],
  },
  {
    id: 141,
    title: 'Basketball Rim',
    description:
      'The Basketball Rim is a sturdy hoop and net assembly mounted on a basketball backboard. It provides a target for shooting and scoring in the game of basketball.',
    price: 39.99,
    discountPercentage: 7.74,
    rating: 4.6,
    stock: 43,
    brand: undefined,
    category: 'sports-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953172/mi_ecommerce/thumbnails/jufcwcbl59kkcrjnsf9g.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953172/mi_ecommerce/lllt8b4kahta51zvho2z.webp',
    ],
  },
  {
    id: 142,
    title: 'Cricket Ball',
    description:
      'The Cricket Ball is a hard leather ball used in the sport of cricket. It is bowled and batted in the game, and its hardness and seam contribute to the dynamics of cricket play.',
    price: 12.99,
    discountPercentage: 8.63,
    rating: 3.53,
    stock: 30,
    brand: undefined,
    category: 'sports-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953173/mi_ecommerce/thumbnails/azo1x6jnna00hpxcgnoo.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953173/mi_ecommerce/dk6f8mowa71crnvilp0m.webp',
    ],
  },
  {
    id: 143,
    title: 'Cricket Bat',
    description:
      'The Cricket Bat is an essential piece of cricket equipment used by batsmen to hit the cricket ball. It is made of wood and comes in various sizes and designs.',
    price: 29.99,
    discountPercentage: 3.29,
    rating: 3.17,
    stock: 98,
    brand: undefined,
    category: 'sports-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953174/mi_ecommerce/thumbnails/ijkyzdouwfn439segqo9.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953174/mi_ecommerce/lat1qtl8an4bdpwkdk4t.webp',
    ],
  },
  {
    id: 144,
    title: 'Cricket Helmet',
    description:
      'The Cricket Helmet is a protective headgear worn by cricket players, especially batsmen and wicketkeepers. It provides protection against fast bowling and bouncers.',
    price: 44.99,
    discountPercentage: 9.64,
    rating: 4.69,
    stock: 10,
    brand: undefined,
    category: 'sports-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953177/mi_ecommerce/thumbnails/h9vb84pdgs2jsarn8gtp.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953175/mi_ecommerce/tuzrfwxxxbkd7q4dhsnc.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953176/mi_ecommerce/faydumienjkwkqgorcfb.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953176/mi_ecommerce/inyziea8pdc4om5ox1ub.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953177/mi_ecommerce/fvmwlkqmlcgj6nryldoy.webp',
    ],
  },
  {
    id: 145,
    title: 'Cricket Wicket',
    description:
      'The Cricket Wicket is a set of three stumps and two bails, forming a wicket used in the sport of cricket. Batsmen aim to protect the wicket while scoring runs.',
    price: 29.99,
    discountPercentage: 16.93,
    rating: 4.73,
    stock: 25,
    brand: undefined,
    category: 'sports-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953179/mi_ecommerce/thumbnails/il6lzhymrm0szng7umw9.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953178/mi_ecommerce/eoinobd81kjifv67tidu.webp',
    ],
  },
  {
    id: 146,
    title: 'Feather Shuttlecock',
    description:
      'The Feather Shuttlecock is used in the sport of badminton. It features natural feathers and is designed for high-speed play, providing stability and accuracy during matches.',
    price: 5.99,
    discountPercentage: 2.95,
    rating: 2.85,
    stock: 95,
    brand: undefined,
    category: 'sports-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953180/mi_ecommerce/thumbnails/bgesknmy7juw51id65nn.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953179/mi_ecommerce/tysbsk1mjsm6iskrbore.webp',
    ],
  },
  {
    id: 147,
    title: 'Football',
    description:
      'The Football, also known as a soccer ball, is the standard ball used in the sport of football (soccer). It is designed for kicking and passing in the game.',
    price: 17.99,
    discountPercentage: 5.15,
    rating: 3.28,
    stock: 96,
    brand: undefined,
    category: 'sports-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953181/mi_ecommerce/thumbnails/qhoxaabt88cvtieapj9r.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953181/mi_ecommerce/jbnu0hhfhbmfhcuv5gac.webp',
    ],
  },
  {
    id: 148,
    title: 'Golf Ball',
    description:
      'The Golf Ball is a small ball used in the sport of golf. It features dimples on its surface, providing aerodynamic lift and distance when struck by a golf club.',
    price: 9.99,
    discountPercentage: 17.37,
    rating: 4.3,
    stock: 84,
    brand: undefined,
    category: 'sports-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953182/mi_ecommerce/thumbnails/lrdyl4j4pwjhtxugel1w.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953182/mi_ecommerce/paofelsukci6qapcvne7.webp',
    ],
  },
  {
    id: 149,
    title: 'Iron Golf',
    description:
      'The Iron Golf is a type of golf club designed for various golf shots. It features a solid metal head and is used for approach shots, chipping, and other golfing techniques.',
    price: 49.99,
    discountPercentage: 6.53,
    rating: 4.41,
    stock: 90,
    brand: undefined,
    category: 'sports-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953184/mi_ecommerce/thumbnails/pd3dx7gzzeemcpv7wyym.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953183/mi_ecommerce/qeilkkpchuuhkcheotsw.webp',
    ],
  },
  {
    id: 150,
    title: 'Metal Baseball Bat',
    description:
      'The Metal Baseball Bat is a durable and lightweight baseball bat made from metal alloys. It is commonly used in baseball games for hitting and batting practice.',
    price: 29.99,
    discountPercentage: 19.51,
    rating: 4.66,
    stock: 16,
    brand: undefined,
    category: 'sports-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953185/mi_ecommerce/thumbnails/fpi0enyzisxxstiyghir.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953184/mi_ecommerce/j2leewnln3lb8h2m4847.webp',
    ],
  },
  {
    id: 151,
    title: 'Tennis Ball',
    description:
      'The Tennis Ball is a standard ball used in the sport of tennis. It is designed for bouncing and hitting with tennis rackets during matches or practice sessions.',
    price: 6.99,
    discountPercentage: 11.76,
    rating: 4.06,
    stock: 28,
    brand: undefined,
    category: 'sports-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953186/mi_ecommerce/thumbnails/lk2do2ilrg00hcgehg5s.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953185/mi_ecommerce/zlmqroqhxfa9jn7wmj8r.webp',
    ],
  },
  {
    id: 152,
    title: 'Tennis Racket',
    description:
      'The Tennis Racket is an essential piece of equipment used in the sport of tennis. It features a frame with strings and a grip, allowing players to hit the tennis ball.',
    price: 49.99,
    discountPercentage: 19.61,
    rating: 4.03,
    stock: 6,
    brand: undefined,
    category: 'sports-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953187/mi_ecommerce/thumbnails/atqvkwqveqfywpobwb1p.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953187/mi_ecommerce/ff6r79crw6p5aemhk57q.webp',
    ],
  },
  {
    id: 153,
    title: 'Volleyball',
    description:
      'The Volleyball is a standard ball used in the sport of volleyball. It is designed for passing, setting, and spiking over the net during volleyball matches.',
    price: 11.99,
    discountPercentage: 12.25,
    rating: 3.84,
    stock: 0,
    brand: undefined,
    category: 'sports-accessories',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953189/mi_ecommerce/thumbnails/kflsvkc5hng5dn2u2qte.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953189/mi_ecommerce/lrnigavzg3hqw6ykmona.webp',
    ],
  },
  {
    id: 154,
    title: 'Black Sun Glasses',
    description:
      'The Black Sun Glasses are a classic and stylish choice, featuring a sleek black frame and tinted lenses. They provide both UV protection and a fashionable look.',
    price: 29.99,
    discountPercentage: 4.94,
    rating: 4.41,
    stock: 60,
    brand: 'Fashion Shades',
    category: 'sunglasses',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953192/mi_ecommerce/thumbnails/iwdvb0fl9f2estbttomy.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953190/mi_ecommerce/vtvmkqkhjfnnon7rujes.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953191/mi_ecommerce/po4h1ac8h60esz8uayyf.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953191/mi_ecommerce/uns9fykmas4nzryudj7s.webp',
    ],
  },
  {
    id: 155,
    title: 'Classic Sun Glasses',
    description:
      'The Classic Sun Glasses offer a timeless design with a neutral frame and UV-protected lenses. These sunglasses are versatile and suitable for various occasions.',
    price: 24.99,
    discountPercentage: 4.94,
    rating: 3.86,
    stock: 1,
    brand: 'Fashion Shades',
    category: 'sunglasses',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953195/mi_ecommerce/thumbnails/ncbv74gbclx4nbgpx7gf.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953192/mi_ecommerce/eakiq2fjdqhllvyysp33.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953194/mi_ecommerce/wyteeqktc5ynhmomt0sz.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953194/mi_ecommerce/e4cepeuamipncsloy3j0.webp',
    ],
  },
  {
    id: 156,
    title: 'Green and Black Glasses',
    description:
      'The Green and Black Glasses feature a bold combination of green and black colors, adding a touch of vibrancy to your eyewear collection. They are both stylish and eye-catching.',
    price: 34.99,
    discountPercentage: 1.01,
    rating: 4.55,
    stock: 24,
    brand: 'Fashion Shades',
    category: 'sunglasses',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953197/mi_ecommerce/thumbnails/iuqnczcryr9chhp46rkn.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953196/mi_ecommerce/yzqrvskr5fjheg8rivhs.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953196/mi_ecommerce/jxml5t647w7qogi7a6fe.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953197/mi_ecommerce/rkqbzcafmi2xlitfsgf0.webp',
    ],
  },
  {
    id: 157,
    title: 'Party Glasses',
    description:
      "The Party Glasses are designed to add flair to your party outfit. With unique shapes or colorful frames, they're perfect for adding a playful touch to your look during celebrations.",
    price: 19.99,
    discountPercentage: 11.22,
    rating: 2.79,
    stock: 86,
    brand: 'Fashion Fun',
    category: 'sunglasses',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953200/mi_ecommerce/thumbnails/nqzth8sy1ief5yanwkvt.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953198/mi_ecommerce/rvbym0dxvjk3nssvdbs2.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953199/mi_ecommerce/s0rcpqkdydhl34b0sx1i.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953199/mi_ecommerce/czezlrr5rswkizrj0o4c.webp',
    ],
  },
  {
    id: 158,
    title: 'Sunglasses',
    description:
      'The Sunglasses offer a classic and simple design with a focus on functionality. These sunglasses provide essential UV protection while maintaining a timeless look.',
    price: 22.99,
    discountPercentage: 1.51,
    rating: 3.02,
    stock: 27,
    brand: 'Fashion Shades',
    category: 'sunglasses',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953202/mi_ecommerce/thumbnails/krtynuqykkwxjwxunhah.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953200/mi_ecommerce/mzzkvkzjb4wm8pkjyi4u.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953201/mi_ecommerce/dcr3lqid8wl0sjdvfh9q.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953202/mi_ecommerce/opbokmjdkfdulhzp9xwa.webp',
    ],
  },
  {
    id: 159,
    title: 'iPad Mini 2021 Starlight',
    description:
      'The iPad Mini 2021 in Starlight is a compact and powerful tablet from Apple. Featuring a stunning Retina display, powerful A-series chip, and a sleek design, it offers a premium tablet experience.',
    price: 499.99,
    discountPercentage: 3.64,
    rating: 3.18,
    stock: 47,
    brand: 'Apple',
    category: 'tablets',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953206/mi_ecommerce/thumbnails/dyy2x8vr3lgzbimqll3e.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953203/mi_ecommerce/lypwhxdlpdsl9bldppft.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953204/mi_ecommerce/nh7cdhg9cym1bhnrrqrq.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953204/mi_ecommerce/xfxramtnlmxkh175kycw.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953205/mi_ecommerce/c8lconfgjqbuwedxnjch.webp',
    ],
  },
  {
    id: 160,
    title: 'Samsung Galaxy Tab S8 Plus Grey',
    description:
      "The Samsung Galaxy Tab S8 Plus in Grey is a high-performance Android tablet by Samsung. With a large AMOLED display, powerful processor, and S Pen support, it's ideal for productivity and entertainment.",
    price: 599.99,
    discountPercentage: 13.31,
    rating: 4.68,
    stock: 62,
    brand: 'Samsung',
    category: 'tablets',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953208/mi_ecommerce/thumbnails/s2wrdw6ceutt18p2tkgy.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953206/mi_ecommerce/a4yrh8y4au7vqao3qxnr.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953207/mi_ecommerce/ujixlw7pxuxxi61efto2.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953207/mi_ecommerce/k6knh0bahuzyj6xgwkot.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953208/mi_ecommerce/z8ubdabscgkubzouicoh.webp',
    ],
  },
  {
    id: 161,
    title: 'Samsung Galaxy Tab White',
    description:
      'The Samsung Galaxy Tab in White is a sleek and versatile Android tablet. With a vibrant display, long-lasting battery, and a range of features, it offers a great user experience for various tasks.',
    price: 349.99,
    discountPercentage: 18.2,
    rating: 3.72,
    stock: 92,
    brand: 'Samsung',
    category: 'tablets',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953212/mi_ecommerce/thumbnails/pgso9pp7dgvf60g8vhxr.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953209/mi_ecommerce/fsncypxmw5jpkwzin1be.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953209/mi_ecommerce/bgq8e8c9qielxtvgxwiw.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953210/mi_ecommerce/bgf0ojfpfrqf9mtp8fxp.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953211/mi_ecommerce/fel4wr7kjdkrewxy3awg.webp',
    ],
  },
  {
    id: 162,
    title: 'Blue Frock',
    description:
      'The Blue Frock is a charming and stylish dress for various occasions. With a vibrant blue color and a comfortable design, it adds a touch of elegance to your wardrobe.',
    price: 29.99,
    discountPercentage: 12.13,
    rating: 4.17,
    stock: 52,
    brand: undefined,
    category: 'tops',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953215/mi_ecommerce/thumbnails/zgvucu2qmzfsvojbmfoe.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953212/mi_ecommerce/rmbeyvpo3b68byho4z9i.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953213/mi_ecommerce/xafjwlh423dd9ri4arj7.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953214/mi_ecommerce/wo6ie2ecrnjsw0ltswhv.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953214/mi_ecommerce/ravngqrnhg8m3babj3u1.webp',
    ],
  },
  {
    id: 163,
    title: 'Girl Summer Dress',
    description:
      "The Girl Summer Dress is a cute and breezy dress designed for warm weather. With playful patterns and lightweight fabric, it's perfect for keeping cool and stylish during the summer.",
    price: 19.99,
    discountPercentage: 19.2,
    rating: 4.77,
    stock: 43,
    brand: undefined,
    category: 'tops',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953218/mi_ecommerce/thumbnails/rejr6wqz1vhzooywtqfc.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953215/mi_ecommerce/a46blf0zjmwcdextjtms.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953216/mi_ecommerce/gikxm14f2hkfc1fs6xlx.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953217/mi_ecommerce/lfic0neqeaowguiylkb5.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953217/mi_ecommerce/g4go41d4qvnjpb2k4iui.webp',
    ],
  },
  {
    id: 164,
    title: 'Gray Dress',
    description:
      'The Gray Dress is a versatile and chic option for various occasions. With a neutral gray color, it can be dressed up or down, making it a wardrobe staple for any fashion-forward individual.',
    price: 34.99,
    discountPercentage: 14.28,
    rating: 2.72,
    stock: 55,
    brand: undefined,
    category: 'tops',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953221/mi_ecommerce/thumbnails/cgjl6rtjwu2nokgfecuu.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953219/mi_ecommerce/e7ajxnbilb1q5yqkkhxk.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953219/mi_ecommerce/zm5bwer2vbeybipttpeu.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953220/mi_ecommerce/yfg0fkw9z0rckwbmno1u.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953221/mi_ecommerce/gvqhaivcvfpzi4g4cylm.webp',
    ],
  },
  {
    id: 165,
    title: 'Short Frock',
    description:
      'The Short Frock is a playful and trendy dress with a shorter length. Ideal for casual outings or special occasions, it combines style and comfort for a fashionable look.',
    price: 24.99,
    discountPercentage: 13.45,
    rating: 3.23,
    stock: 22,
    brand: undefined,
    category: 'tops',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953225/mi_ecommerce/thumbnails/wuague4s5tg3jk7eetmz.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953222/mi_ecommerce/k7i29emsxrn0ogolcnnn.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953223/mi_ecommerce/jnqcbw5rmlsb5zztepon.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953223/mi_ecommerce/qlpskes8ne2j6yqaqgpg.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953224/mi_ecommerce/tqv71zucq0fl2mzaqozi.webp',
    ],
  },
  {
    id: 166,
    title: 'Tartan Dress',
    description:
      'The Tartan Dress features a classic tartan pattern, bringing a timeless and sophisticated touch to your wardrobe. Perfect for fall and winter, it adds a hint of traditional charm.',
    price: 39.99,
    discountPercentage: 12.95,
    rating: 4.05,
    stock: 73,
    brand: undefined,
    category: 'tops',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953228/mi_ecommerce/thumbnails/me8a43hwgnwrdxkd9uqk.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953225/mi_ecommerce/paql5duxnsgzujngisgj.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953226/mi_ecommerce/yurxwyzryel5h4q6ie0j.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953226/mi_ecommerce/efgyu9vgqkeudfk1a9rf.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953227/mi_ecommerce/dwocf862jssudzkg46vi.webp',
    ],
  },
  {
    id: 167,
    title: '300 Touring',
    description:
      'The 300 Touring is a stylish and comfortable sedan, known for its luxurious features and smooth performance.',
    price: 28999.99,
    discountPercentage: 3.98,
    rating: 4.05,
    stock: 54,
    brand: 'Chrysler',
    category: 'vehicle',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953232/mi_ecommerce/thumbnails/czc36tlazy6ntwoa3dkb.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953228/mi_ecommerce/n311at71sezaohoz4qcq.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953229/mi_ecommerce/rydpb5hwrzrbe7nrhvax.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953229/mi_ecommerce/vs9qixizacvm3j9bkywy.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953230/mi_ecommerce/b41rxiyfjtevwqessub8.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953230/mi_ecommerce/erixsn4wxilxn6dxqphc.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953231/mi_ecommerce/xqrjj59mq67jhsafxd5q.webp',
    ],
  },
  {
    id: 168,
    title: 'Charger SXT RWD',
    description:
      'The Charger SXT RWD is a powerful and sporty rear-wheel-drive sedan, offering a blend of performance and practicality.',
    price: 32999.99,
    discountPercentage: 8.23,
    rating: 2.58,
    stock: 57,
    brand: 'Dodge',
    category: 'vehicle',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953236/mi_ecommerce/thumbnails/wdybmgvxt9esvzducje9.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953232/mi_ecommerce/imrbyxppo0glsn1n0lvo.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953233/mi_ecommerce/ih2vcbgngwbjprbfjhgy.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953233/mi_ecommerce/dhilzxozpwi3ijv777ip.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953234/mi_ecommerce/hzykvtjngbyumr16wbfw.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953234/mi_ecommerce/er8d7bpmnttl36iz2dwb.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953235/mi_ecommerce/ypyr39c8gt7wuvmhdez6.webp',
    ],
  },
  {
    id: 169,
    title: 'Dodge Hornet GT Plus',
    description:
      'The Dodge Hornet GT Plus is a compact and agile hatchback, perfect for urban driving with a touch of sportiness.',
    price: 24999.99,
    discountPercentage: 2.63,
    rating: 2.65,
    stock: 82,
    brand: 'Dodge',
    category: 'vehicle',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953240/mi_ecommerce/thumbnails/l7garrlbd6xerbtg2n1r.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953236/mi_ecommerce/frifilfha6ftybzyvpkc.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953237/mi_ecommerce/w7nlyj5dy8ilc8iurkl2.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953238/mi_ecommerce/wquspbso7zxbhu70otyf.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953238/mi_ecommerce/bfy45wiqieohduc7pz8i.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953239/mi_ecommerce/lfmdtq4grofq8scrkn6h.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953239/mi_ecommerce/gntfsda1aj4ox8i54uay.webp',
    ],
  },
  {
    id: 170,
    title: 'Durango SXT RWD',
    description:
      'The Durango SXT RWD is a spacious and versatile SUV, known for its strong performance and family-friendly features.',
    price: 36999.99,
    discountPercentage: 16.44,
    rating: 4.07,
    stock: 95,
    brand: 'Dodge',
    category: 'vehicle',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953244/mi_ecommerce/thumbnails/hmyxmllpzmsiskglnwau.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953240/mi_ecommerce/apdcjfibsmhgykcfogk1.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953241/mi_ecommerce/sel7ifywaik3w4ovmxvf.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953242/mi_ecommerce/ma8vowkqzcautnu8ocp7.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953242/mi_ecommerce/ww3v5atbc7gspshekowk.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953243/mi_ecommerce/los30yuvoxuef3bhrxgg.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953244/mi_ecommerce/t00mthtkv1poc3bhfgyn.webp',
    ],
  },
  {
    id: 171,
    title: 'Pacifica Touring',
    description:
      'The Pacifica Touring is a stylish and well-equipped minivan, offering comfort and convenience for family journeys.',
    price: 31999.99,
    discountPercentage: 14.76,
    rating: 3.62,
    stock: 53,
    brand: 'Chrysler',
    category: 'vehicle',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953249/mi_ecommerce/thumbnails/eluvdtswlovgxzn9ujep.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953245/mi_ecommerce/iho2wmkisivmkvexmrua.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953245/mi_ecommerce/e0nmtz5btconfchxc8rn.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953246/mi_ecommerce/joghyaxoqg6bvruxrqzc.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953247/mi_ecommerce/ngiarerspcmhz2qmfak2.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953248/mi_ecommerce/snj9axvracuyvtsufqkv.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953248/mi_ecommerce/csdh9vdp9vjjkks2oct5.webp',
    ],
  },
  {
    id: 172,
    title: "Blue Women's Handbag",
    description:
      "The Blue Women's Handbag is a stylish and spacious accessory for everyday use. With a vibrant blue color and multiple compartments, it combines fashion and functionality.",
    price: 49.99,
    discountPercentage: 17.88,
    rating: 2.92,
    stock: 76,
    brand: 'Fashionista',
    category: 'womens-bags',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953252/mi_ecommerce/thumbnails/qfd8zqvtrtmpvgeyj5jt.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953250/mi_ecommerce/iejkou7ogeiygl031skq.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953250/mi_ecommerce/vyg65eikcpf2fdbs4cbt.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953251/mi_ecommerce/qdarfpt2vydhpkmnpfw7.webp',
    ],
  },
  {
    id: 173,
    title: "Heshe Women's Leather Bag",
    description:
      "The Heshe Women's Leather Bag is a luxurious and high-quality leather bag for the sophisticated woman. With a timeless design and durable craftsmanship, it's a versatile accessory.",
    price: 129.99,
    discountPercentage: 3.87,
    rating: 4.92,
    stock: 99,
    brand: 'Heshe',
    category: 'womens-bags',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953255/mi_ecommerce/thumbnails/ap2ovnq5f48fbr4jre9m.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953253/mi_ecommerce/cyghhndomcbqbkh7o1tq.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953253/mi_ecommerce/clhbkt1kxm78ex2uigz7.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953254/mi_ecommerce/bgzy3mknqnzlmndtpzg6.webp',
    ],
  },
  {
    id: 174,
    title: 'Prada Women Bag',
    description:
      "The Prada Women Bag is an iconic designer bag that exudes elegance and luxury. Crafted with precision and featuring the Prada logo, it's a statement piece for fashion enthusiasts.",
    price: 599.99,
    discountPercentage: 14.09,
    rating: 2.71,
    stock: 75,
    brand: 'Prada',
    category: 'womens-bags',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953257/mi_ecommerce/thumbnails/p2wqahulpu0riatkjdfn.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953255/mi_ecommerce/qsecb8ga7dozjbfpqgys.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953256/mi_ecommerce/rk9eaa0n2undenihirhi.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953256/mi_ecommerce/tco6mtqbvhqsqmta947z.webp',
    ],
  },
  {
    id: 175,
    title: 'White Faux Leather Backpack',
    description:
      "The White Faux Leather Backpack is a trendy and practical backpack for the modern woman. With a sleek white design and ample storage space, it's perfect for both casual and on-the-go styles.",
    price: 39.99,
    discountPercentage: 15.2,
    rating: 3.36,
    stock: 39,
    brand: 'Urban Chic',
    category: 'womens-bags',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953259/mi_ecommerce/thumbnails/fpjyf1kjtvd7nxdouk2k.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953258/mi_ecommerce/akcd0ek5auujjzwvllqc.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953258/mi_ecommerce/crzy0fzircez4cijghpq.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953259/mi_ecommerce/htsxujsg53exc3gfu9tk.webp',
    ],
  },
  {
    id: 176,
    title: 'Women Handbag Black',
    description:
      "The Women Handbag in Black is a classic and versatile accessory that complements various outfits. With a timeless black color and functional design, it's a must-have in every woman's wardrobe.",
    price: 59.99,
    discountPercentage: 11.63,
    rating: 2.89,
    stock: 11,
    brand: 'Elegance Collection',
    category: 'womens-bags',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953261/mi_ecommerce/thumbnails/vnvzkshymbzktqpr1l8t.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953260/mi_ecommerce/f1i5uemfxe61lm8ckaxv.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953260/mi_ecommerce/q2vg2gkkm1ndioyydrc4.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953261/mi_ecommerce/lgxoo5yfetjjj2at5ipz.webp',
    ],
  },
  {
    id: 177,
    title: "Black Women's Gown",
    description:
      "The Black Women's Gown is an elegant and timeless evening gown. With a sleek black design, it's perfect for formal events and special occasions, exuding sophistication and style.",
    price: 129.99,
    discountPercentage: 10.48,
    rating: 3.64,
    stock: 25,
    brand: undefined,
    category: 'womens-dresses',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953265/mi_ecommerce/thumbnails/baefimho6toed8f4kwy4.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953262/mi_ecommerce/bilmaxuj4rpp9gcftcen.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953263/mi_ecommerce/xrxec46czgzkv2vjoyuk.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953263/mi_ecommerce/ru6tp51w8jem3lsspmnx.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953264/mi_ecommerce/zsvjqyffi8upqahmmnat.webp',
    ],
  },
  {
    id: 178,
    title: 'Corset Leather With Skirt',
    description:
      'The Corset Leather With Skirt is a bold and edgy ensemble that combines a stylish corset with a matching skirt. Ideal for fashion-forward individuals, it makes a statement at any event.',
    price: 89.99,
    discountPercentage: 16.26,
    rating: 3.05,
    stock: 30,
    brand: undefined,
    category: 'womens-dresses',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953267/mi_ecommerce/thumbnails/oltolq8lc3tuo02kfqbq.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953265/mi_ecommerce/zvy8it7fdtvynrymicxn.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953266/mi_ecommerce/oigincpgocruo5otfhh4.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953266/mi_ecommerce/vbjf1u4sr8xrhy7xvjzm.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953267/mi_ecommerce/w3w6cr901rt8jxayybt3.webp',
    ],
  },
  {
    id: 179,
    title: 'Corset With Black Skirt',
    description:
      'The Corset With Black Skirt is a chic and versatile outfit that pairs a fashionable corset with a classic black skirt. It offers a trendy and coordinated look for various occasions.',
    price: 79.99,
    discountPercentage: 15.06,
    rating: 4.52,
    stock: 33,
    brand: undefined,
    category: 'womens-dresses',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953271/mi_ecommerce/thumbnails/zabwufuwqnpma665ioro.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953268/mi_ecommerce/j5sykrnel5w1k2zl4thu.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953268/mi_ecommerce/xejbuzajjxunwzjstrau.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953269/mi_ecommerce/psoj5qqdede0tfy8caos.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953270/mi_ecommerce/qx4agi4yb3c76kdznmga.webp',
    ],
  },
  {
    id: 180,
    title: 'Dress Pea',
    description:
      'The Dress Pea is a stylish and comfortable dress with a pea pattern. Perfect for casual outings, it adds a playful and fun element to your wardrobe, making it a great choice for day-to-day wear.',
    price: 49.99,
    discountPercentage: 17.68,
    rating: 4.88,
    stock: 6,
    brand: undefined,
    category: 'womens-dresses',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953274/mi_ecommerce/thumbnails/ropjkh3qcp1yscutoj0p.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953271/mi_ecommerce/ah07gcggzr7lr21hircn.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953272/mi_ecommerce/u2avzh98f3evvzneyiuf.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953273/mi_ecommerce/xbzrpmfyae4awimbwumz.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953273/mi_ecommerce/v7jzo88qes7vu1ghso61.webp',
    ],
  },
  {
    id: 181,
    title: 'Marni Red & Black Suit',
    description:
      'The Marni Red & Black Suit is a sophisticated and fashion-forward suit ensemble. With a combination of red and black tones, it showcases a modern design for a bold and confident look.',
    price: 179.99,
    discountPercentage: 19.02,
    rating: 4.48,
    stock: 62,
    brand: undefined,
    category: 'womens-dresses',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953277/mi_ecommerce/thumbnails/kprdkxjc73ba0ska8nud.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953274/mi_ecommerce/qpgb2eoakumyxnuozdkl.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953275/mi_ecommerce/qvxakrmha41kbgv3ill2.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953276/mi_ecommerce/yrrms4uwow38g8nxbslr.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953276/mi_ecommerce/pqalpoqo8xr3p9a1lldp.webp',
    ],
  },
  {
    id: 182,
    title: 'Green Crystal Earring',
    description:
      'The Green Crystal Earring is a dazzling accessory that features a vibrant green crystal. With a classic design, it adds a touch of elegance to your ensemble, perfect for formal or special occasions.',
    price: 29.99,
    discountPercentage: 15.24,
    rating: 3.96,
    stock: 54,
    brand: undefined,
    category: 'womens-jewellery',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953279/mi_ecommerce/thumbnails/pdqbnjiivpjl9d8rksie.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953277/mi_ecommerce/v8f9943hdtgvornnzmu2.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953278/mi_ecommerce/rlkmfqmnkwx9xvphrrni.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953279/mi_ecommerce/cwrv7x51wzspbcny9srb.webp',
    ],
  },
  {
    id: 183,
    title: 'Green Oval Earring',
    description:
      'The Green Oval Earring is a stylish and versatile accessory with a unique oval shape. Whether for casual or dressy occasions, its green hue and contemporary design make it a standout piece.',
    price: 24.99,
    discountPercentage: 15.18,
    rating: 3.57,
    stock: 73,
    brand: undefined,
    category: 'womens-jewellery',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953282/mi_ecommerce/thumbnails/jdgexjdzpa8np8ordcio.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953280/mi_ecommerce/gjejrvxxlazodt6sdgnj.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953280/mi_ecommerce/vrhyshswhvr9vbomypvh.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953281/mi_ecommerce/zra7eoradbkbwa95w4mo.webp',
    ],
  },
  {
    id: 184,
    title: 'Tropical Earring',
    description:
      "The Tropical Earring is a fun and playful accessory inspired by tropical elements. Featuring vibrant colors and a lively design, it's perfect for adding a touch of summer to your look.",
    price: 19.99,
    discountPercentage: 0.76,
    rating: 4.4,
    stock: 1,
    brand: undefined,
    category: 'womens-jewellery',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953284/mi_ecommerce/thumbnails/e6ti2wy9xvrtqzfyebfx.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953282/mi_ecommerce/b0ccszt53iyada6kfmzj.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953283/mi_ecommerce/t3qk90pcrnuhbozb7adz.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953284/mi_ecommerce/okfanywfwmhocnzxidju.webp',
    ],
  },
  {
    id: 185,
    title: 'Black & Brown Slipper',
    description:
      'The Black & Brown Slipper is a comfortable and stylish choice for casual wear. Featuring a blend of black and brown colors, it adds a touch of sophistication to your relaxation.',
    price: 19.99,
    discountPercentage: 3.33,
    rating: 2.53,
    stock: 3,
    brand: 'Comfort Trends',
    category: 'womens-shoes',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953287/mi_ecommerce/thumbnails/keaqjm1adte5toljymve.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953285/mi_ecommerce/lljjannglh0zkanemzbf.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953285/mi_ecommerce/zvberfyqn4zy9t6fockk.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953286/mi_ecommerce/a3lhf6qvwcnkxde2mjj0.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953287/mi_ecommerce/oqmzfvpjzcfjq7jyyf8m.webp',
    ],
  },
  {
    id: 186,
    title: 'Calvin Klein Heel Shoes',
    description:
      'Calvin Klein Heel Shoes are elegant and sophisticated, designed for formal occasions. With a classic design and high-quality materials, they complement your stylish ensemble.',
    price: 79.99,
    discountPercentage: 3.19,
    rating: 4.92,
    stock: 93,
    brand: 'Calvin Klein',
    category: 'womens-shoes',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953290/mi_ecommerce/thumbnails/vlpv21dt7rk5ap94mfy0.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953288/mi_ecommerce/jet6cgtbpd2ymxjkwdk2.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953288/mi_ecommerce/ttv0gqahbolujmxgmvck.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953289/mi_ecommerce/boahud51ylc6fyoxsuxa.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953290/mi_ecommerce/rfr3llxgehcehzmbpkwq.webp',
    ],
  },
  {
    id: 187,
    title: 'Golden Shoes Woman',
    description:
      'The Golden Shoes for Women are a glamorous choice for special occasions. Featuring a golden hue and stylish design, they add a touch of luxury to your outfit.',
    price: 49.99,
    discountPercentage: 13.93,
    rating: 3.26,
    stock: 88,
    brand: 'Fashion Diva',
    category: 'womens-shoes',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953293/mi_ecommerce/thumbnails/esoheetqexnc9ow5lpgh.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953291/mi_ecommerce/hpj54rqxjkus2ovkvk1l.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953291/mi_ecommerce/j1mws845nkjdaygy6mj7.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953292/mi_ecommerce/vupcfqcxrxxqy5dn1qbm.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953293/mi_ecommerce/g38nctavfczumzjhqjdu.webp',
    ],
  },
  {
    id: 188,
    title: 'Pampi Shoes',
    description:
      'Pampi Shoes offer a blend of comfort and style for everyday use. With a versatile design, they are suitable for various casual occasions, providing a trendy and relaxed look.',
    price: 29.99,
    discountPercentage: 14.14,
    rating: 3.05,
    stock: 49,
    brand: 'Pampi',
    category: 'womens-shoes',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953296/mi_ecommerce/thumbnails/y08dsojyvnctm7gcvhjr.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953294/mi_ecommerce/o62uc1dohjrz8idi48hc.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953294/mi_ecommerce/iicbht3jsattcqx2wl3p.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953295/mi_ecommerce/omqm7azndhbyjo8wnbgg.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953296/mi_ecommerce/k7s93buywaobjtdo4jah.webp',
    ],
  },
  {
    id: 189,
    title: 'Red Shoes',
    description:
      'The Red Shoes make a bold statement with their vibrant red color. Whether for a party or a casual outing, these shoes add a pop of color and style to your wardrobe.',
    price: 34.99,
    discountPercentage: 17.69,
    rating: 3.25,
    stock: 7,
    brand: 'Fashion Express',
    category: 'womens-shoes',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953299/mi_ecommerce/thumbnails/lalifpdr93pe5xjkuull.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953297/mi_ecommerce/vwzvsuh5j2b2mrxedy3g.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953297/mi_ecommerce/zxa0uys6ry2z2ckvwc36.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953298/mi_ecommerce/wyrjtivhzqmiokvcgksz.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953298/mi_ecommerce/tkt27utnzrugs91zhyfz.webp',
    ],
  },
  {
    id: 190,
    title: 'IWC Ingenieur Automatic Steel',
    description:
      'The IWC Ingenieur Automatic Steel watch is a durable and sophisticated timepiece. With a stainless steel case and automatic movement, it combines precision and style for watch enthusiasts.',
    price: 4999.99,
    discountPercentage: 9.45,
    rating: 2.93,
    stock: 90,
    brand: 'IWC',
    category: 'womens-watches',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953301/mi_ecommerce/thumbnails/advjanbq0ixorus11t4j.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953300/mi_ecommerce/p9w4atkkxfse5iicgt0y.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953300/mi_ecommerce/ievuzxz7wbrjd7y2csii.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953301/mi_ecommerce/vanjaz4svjsajjlird8y.webp',
    ],
  },
  {
    id: 191,
    title: 'Rolex Cellini Moonphase',
    description:
      'The Rolex Cellini Moonphase watch is a masterpiece of horology. Featuring a moon phase complication, it showcases the craftsmanship and elegance that Rolex is renowned for.',
    price: 15999.99,
    discountPercentage: 4.11,
    rating: 3.83,
    stock: 52,
    brand: 'Rolex',
    category: 'womens-watches',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953304/mi_ecommerce/thumbnails/w4dv4mjvtfcsazddlfl3.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953302/mi_ecommerce/rtb9vmk97gvebdliixvt.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953303/mi_ecommerce/m2y9ngg3sdynpmi5tw3w.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953304/mi_ecommerce/yr7anhm3zrvxfruxnqwu.webp',
    ],
  },
  {
    id: 192,
    title: 'Rolex Datejust Women',
    description:
      "The Rolex Datejust Women's watch is an iconic timepiece designed for women. With a timeless design and a date complication, it offers both elegance and functionality.",
    price: 10999.99,
    discountPercentage: 15.94,
    rating: 2.86,
    stock: 4,
    brand: 'Rolex',
    category: 'womens-watches',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953307/mi_ecommerce/thumbnails/p2e8xazamp8mjzjfestx.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953305/mi_ecommerce/v9nkb4il3kfq5inlwfch.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953305/mi_ecommerce/edfg9mkxy90zvm0mivqx.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953306/mi_ecommerce/zytxxfvazmfhdfrfodfm.webp',
    ],
  },
  {
    id: 193,
    title: 'Watch Gold for Women',
    description:
      "The Gold Women's Watch is a stunning accessory that combines luxury and style. Featuring a gold-plated case and a chic design, it adds a touch of glamour to any outfit.",
    price: 799.99,
    discountPercentage: 18.34,
    rating: 4.24,
    stock: 0,
    brand: 'Fashion Gold',
    category: 'womens-watches',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953309/mi_ecommerce/thumbnails/r1whhgetloeuyhwdzlwt.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953307/mi_ecommerce/hnbrs12ntrjd4ebjk4f3.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953308/mi_ecommerce/f0lhkxiguh4t0znsxzaa.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953309/mi_ecommerce/ejblnzqvhmcgeyggopw5.webp',
    ],
  },
  {
    id: 194,
    title: "Women's Wrist Watch",
    description:
      "The Women's Wrist Watch is a versatile and fashionable timepiece for everyday wear. With a comfortable strap and a simple yet elegant design, it complements various styles.",
    price: 129.99,
    discountPercentage: 12.6,
    rating: 3.52,
    stock: 12,
    brand: 'Fashion Co.',
    category: 'womens-watches',
    thumbnail:
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953312/mi_ecommerce/thumbnails/tjjkrqqoixy4ajz8xm0v.webp',
    images: [
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953310/mi_ecommerce/dgfvsdxeqz1gwidgqgve.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953311/mi_ecommerce/dbaa03wbrbx4d4mhepme.webp',
      'https://res.cloudinary.com/dfz6wfwef/image/upload/v1756953311/mi_ecommerce/h7jupa7xu15yhuhs7ak2.webp',
    ],
  },
];
module.exports = products;
