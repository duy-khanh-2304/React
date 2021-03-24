var initialState = [{
        id: 1,
        name: 'Iphone 6 plus',
        image: '',
        description: 'San pham xach tay ',
        price: 50,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Iphone 7 plus',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fiprice.vn%2Fgia-ban%2Fapple-iphone-6%2F&psig=AOvVaw1fFByF2WS8hFD3C9xhEU6F&ust=1616060531148000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCuouGEt-8CFQAAAAAdAAAAABAG',
        description: 'San pham xach tay ',
        price: 60,
        inventory: 20,
        rating:3
    },
    {
        id: 3,
        name: 'Iphone 8 plus',
        image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fiphonebinhphuoc.vn%2Fwp-content%2Fuploads%2F2021%2F01%2Fdien-thoai-iphone-8-plus-gold-1.jpg&imgrefurl=https%3A%2F%2Fiphonebinhphuoc.vn%2Fsan-pham%2Fiphone-8-plus-64gb-99%2F&tbnid=x2HSKd8NkTNadM&vet=12ahUKEwi9haaBhbfvAhVKXZQKHStRC7EQMygIegUIARCyAg..i&docid=9bwHLeS1Xs9J6M&w=500&h=500&q=iphone%208&ved=2ahUKEwi9haaBhbfvAhVKXZQKHStRC7EQMygIegUIARCyAg',
        description: 'San pham xach tay ',
        price: 70,
        inventory: 30,
        rating:5
    }

]

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
};

export default products;