const cars = [

{
    id: 1,
    name: "BMW X5",
    brand: "BMW",
    year: 2024,
    owner: "Showroom Vehicle",
    kmsDriven: "0 km",
    price: 5500000,
    type: "new",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "13 kmpl",
    engine: "2998 cc",
    seats: 5,
    color: "Black",

    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e",

    images: [
        "https://images.unsplash.com/photo-1555215695-3004980ad54e",
        "https://bmw.scene7.com/is/image/BMW/g05_spaciousness_fb?qlt=80&wid=1024&fmt=webp",
        "https://cdn-s3.autocarindia.com/BMW/X5/_AAB6063.JPG?w=728&q=75",
        "https://hips.hearstapps.com/mtg-prod/68796725fa06e90002dfc7bf/lead-001-2025-bmw-x5-xdrive40i-silver-anniversary-edition.jpg"
    ]
},

{
    id: 2,
    name: "Audi A4",
    brand: "Audi",
    year: 2021,
    owner: "Second Owner",
    kmsDriven: "42,000 km",
    price: 3200000,
    type: "old",
    fuel: "Diesel",
    transmission: "Automatic",
    mileage: "18 kmpl",
    engine: "1968 cc",
    seats: 5,
    color: "White",

    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9sy1xzf-Vci9KNfkyU8A6QjovMdaIVBHG4Z3LL8EDzq3CZJogjCVfRE6X&s=10",

    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9sy1xzf-Vci9KNfkyU8A6QjovMdaIVBHG4Z3LL8EDzq3CZJogjCVfRE6X&s=10",
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/A4/10548/1732257078935/rear-view-119.jpg",
        "https://media.audi.com/is/image/audi/nemo/in/models/a4-sedan/01-%20B5081-001658-00_AUdi-A4-Tango-red_Website-Banner_1920X1920.jpg?width=1440",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6DA_2cd5dnJdc0L33SHqSzxd6upfNUNef8QtqJlcY83Jnnfk6eYhUq-s2&s=10",
        "https://www.motorverso.com/wp-content/uploads/2016/01/2436x1552_all_new_a4_saloon_front_angle-1-671x427.jpg"
    ]
},

{
    id: 3,
    name: "Mercedes C-Class",
    brand: "Mercedes",
    year: 2025,
    owner: "Showroom Vehicle",
    kmsDriven: "0 km",
    price: 6200000,
    type: "new",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "14 kmpl",
    engine: "1991 cc",
    seats: 5,
    color: "Silver",

    image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/C-Class/10858/1774342866770/front-left-side-47.jpg",

    images: [
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/C-Class/10858/1774342866770/front-left-side-47.jpg",
        "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/178535/c-class-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80&q=80",
        "https://cdn-s3.autocarindia.com/legacy/cdni/ExtraImages/20220509113429_Mercedes_C_class_9.jpg",
        "https://images.indianexpress.com/2018/09/mercedes-c-class.jpg"
    ]
},

{
    id: 4,
    name: "Honda City",
    brand: "Honda",
    year: 2020,
    owner: "Third Owner",
    kmsDriven: "68,500 km",
    price: 1200000,
    type: "old",
    fuel: "Petrol",
    transmission: "Manual",
    mileage: "17 kmpl",
    engine: "1498 cc",
    seats: 5,
    color: "Grey",

    image: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcms%2Farticles%2F2025%2F6%2F3217478%2Fhonda_city_sport_launched_in_india_at_rs_14_89_lakh_carandbike_1_4c57580bc7.jpg&w=1920&q=90",

    images: [
        "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcms%2Farticles%2F2025%2F6%2F3217478%2Fhonda_city_sport_launched_in_india_at_rs_14_89_lakh_carandbike_1_4c57580bc7.jpg&w=1920&q=90",
        "https://motoringworld.in/wp-content/uploads/2023/03/2023-Honda-City-Facelift-5-Copy.jpg",
        "https://5.imimg.com/data5/TI/QD/MY-11082818/honda-city-i-vtec-cvt-v-car-500x500.png",
        "https://www.magnumhonda.com/wp-content/uploads/2024/01/Radiant-Red-Metallic-3.webp"
    ]
},

{
    id: 5,
    name: "Hyundai Creta",
    brand: "Hyundai",
    year: 2025,
    owner: "Showroom Vehicle",
    kmsDriven: "0 km",
    price: 1800000,
    type: "new",
    fuel: "Diesel",
    transmission: "Automatic",
    mileage: "19 kmpl",
    engine: "1493 cc",
    seats: 5,
    color: "Blue",

    image: "https://www.team-bhp.com/sites/default/files/styles/check_extra_large_for_review/public/2024_hyundai_creta_facelift_exterior_05_7.jpg",

    images: [
        "https://www.team-bhp.com/sites/default/files/styles/check_extra_large_for_review/public/2024_hyundai_creta_facelift_exterior_05_7.jpg",
        "https://mda.spinny.com/sp-file-system/public/2025-02-28/90bb1678265a496699f46794674747b7/raw/file.jpg?q=85",
        "https://img-cdn.evfy.in/products/Honda%20Creta%20EV.webp?ops=f_auto,w_480,q_70",
        "https://static-cdn.cars24.com/prod/new-car-cms/Hyundai_Creta_2024_Exterior_8_da06cee07d.jpg?w=640&dpr=3&optimize=low&format=auto&quality=50"
    ]
},

{
    id: 6,
    name: "Toyota Fortuner",
    brand: "Toyota",
    year: 2019,
    owner: "First Owner",
    kmsDriven: "73,000 km",
    price: 4500000,
    type: "old",
    fuel: "Diesel",
    transmission: "Automatic",
    mileage: "14 kmpl",
    engine: "2755 cc",
    seats: 7,
    color: "White",

    image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Fortuner/10904/1755846017683/front-left-side-47.jpg",

    images: [
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Fortuner/10904/1755846017683/front-left-side-47.jpg",
        "https://cdn.motor1.com/images/mgl/02EE3/s3/toyota-fortuner-gr-sport-indonesia.jpg",
        "https://cdn-s3.autocarindia.com/legacy/cdni/mmv_images/colors/20250714023958_Toyota_Fortuner_Super_White[1].jpg?w=728&q=75",
        "https://media.istockphoto.com/id/1007947546/photo/private-toyota-fortuner-suv-car.jpg?s=612x612&w=0&k=20&c=KykkgIFRShN72i1CCrv3z09bzgLm2pjau4Wk4xghbuY="
    ]
}

];