const products = [{
        id: 1,
        title: "Iphone 15 Promax",
        price: '33880000',
        image01: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg',
        category: "mobile",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat"
    },
    {
        id: 2,
        title: "Iphone 15 Pro",
        price: '28990000',
        image01: 'https://cdn.tgdd.vn/Products/Images/42/299033/iphone-15-pro-blue-thumbnew-600x600.jpg',
        category: "mobile",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat"
    },
    {
        id: 3,
        title: "Iphone 15 Plus",
        price: '25790000',
        image01: 'https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-hong-128gb-thumb-600x600.jpg',
        category: "mobile",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat"
    },
    {
        id: 4,
        title: "Xiaomi Redmi 13C",
        price: '2890000',
        image01: 'https://cdn.tgdd.vn/Products/Images/42/316771/xiaomi-redmi-13c-xanh-la-1-2-3-600x600.jpg',
        category: "mobile",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat"
    },
    {
        id: 5,
        title: "Oppo A38",
        price: '4490000',
        image01: 'https://cdn.tgdd.vn/Products/Images/42/313154/oppo-a38-gold-thumb-600x600.jpg',
        category: "mobile",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat"
    },
    {
        id: 6,
        title: "Oppo Reno10 5G",
        price: '10490000',
        image01: 'https://cdn.tgdd.vn/Products/Images/42/305695/oppo-reno10-blue-thumbnew-600x600.jpg',
        category: "mobile",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat"
    },
    {
        id: 7,
        title: "Honor Pad X9",
        price: '4690000',
        image01: 'https://cdn.tgdd.vn/Products/Images/522/318353/honor-pad-x9-thumb-1-600x600.jpg',
        category: "tablet",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat"
    },
    {
        id: 8,
        title: "Samsung Galaxy Tab A9+",
        price: '6990000',
        image01: 'https://cdn.tgdd.vn/Products/Images/522/317623/samsung-galaxy-a9-plus-den-thumb-600x600.jpg',
        category: "tablet",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat"
    },
    {
        id: 9,
        title: "Lenovo Tab M8",
        price: '2990000',
        image01: 'https://cdn.tgdd.vn/Products/Images/522/306924/tab_m8_gen4_thumb-600x600.jpg',
        category: "tablet",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat"
    },
    {
        id: 10,
        title: "Ipad 10 Wifi Cellular",
        price: '14390000',
        image01: 'https://cdn.tgdd.vn/Products/Images/522/295453/ipad-10-wifi-cellular-pink-thumb-600x600.jpeg',
        category: "tablet",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat"
    },
    {
        id: 11,
        title: "Oppo Pad 2",
        price: '13990000',
        image01: 'https://cdn.tgdd.vn/Products/Images/522/303146/oppo-pad-2-thumb-600x600.jpeg',
        category: "tablet",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat"
    },
    {
        id: 12,
        title: "Moell Tab 8.1",
        price: '1390000',
        image01: 'https://cdn.tgdd.vn/Products/Images/522/311039/mobell-tab-8,1-thumb-xanh-600x600.jpg',
        category: "tablet",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat"
    },
    {
        id: 13,
        title: "LG Smart TV Nanocell",
        price: '25800000',
        image01: 'https://cdn.tgdd.vn/Products/Images/1942/278572/smart-nanocell-lg-4k-75-inch-75nano76sqa-200223-095710-550x340.jpg',
        category: "tv",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat"
    },
    {
        id: 14,
        title: "Smart Tivi OLED LG 4K 48 inch 48A3PSA",
        price: '24990000',
        image01: 'https://cdn.tgdd.vn/Products/Images/1942/306571/smart-tivi-oled-lg-4k-48-inch-48a3psa-080523-101554-550x340.jpg',
        category: "tv",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat"
    },
    {
        id: 15,
        title: "Smart Tivi QLED 4K 75 inch",
        price: '40190000',
        image01: 'https://cdn.tgdd.vn/Products/Images/1942/303214/smart-tivi-qled-4k-75-inch-samsung-qa75q80c-020323-104430-550x340.jpg',
        category: "tv",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat"
    },
    {
        id: 16,
        title: "Smart Tivi OLED LG 4K 48 inch 48A3PSA",
        price: '24990000',
        image01: 'https://cdn.tgdd.vn/Products/Images/1942/306571/smart-tivi-oled-lg-4k-48-inch-48a3psa-080523-101554-550x340.jpg',
        category: "tv",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat"
    },
    {
        id: 17,
        title: "Google Tivi OLED Sony 4K 65 inch XR-65A80L",
        price: '62890000',
        image01: 'https://cdn.tgdd.vn/Products/Images/1942/304821/google-tivi-oled-sony-4k-65-inch-65a80l-280323-044654-550x340.jpg',
        category: "tv",  
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat"
    },
    {
        id: 18,
        title: "Google Tivi TCL 4K 43 inch 43P737",
        price: '7590000',
        image01: 'https://cdn.tgdd.vn/Products/Images/1942/272078/TimerThumb/android-tcl-4k-43-inch-43p737-(60).jpg',
        category: "tv",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat"
    },

    {
        id: 19,
        title: "Smart Tivi NanoCell LG 4K 43 inch",
        price: '10390000',
        image01: 'https://cdn.tgdd.vn/Products/Images/1942/278578/smart-nanocell-lg-4k-43-inch-43nano76sqa-230522-104925-550x340.jpg',
        category: "tv",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat"
    },

    {
        id: 20,
        title: "Điện thoại Samsung Galaxy S23 Ultra 5G 256GB",
        price: '10390000',
        image01: 'https://cdn.tgdd.vn/Products/Images/42/249948/samsung-galaxy-s23-ultra-thumb-xanh-600x600.jpg',
        category: "mobile",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat"
    },

    {
        id: 21,
        title: "Máy tính bảng iPad Pro M2 11 inch WiFi 128GB",
        price: '20190000',
        image01: 'https://cdn.tgdd.vn/Products/Images/522/294104/ipad-pro-m2-11-wifi-xam-thumb-600x600.jpg',
        category: "tablet",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt architecto quidem quaerat"
    },
    
    
]

export default products