import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";

let all_product = [
  {
    id: 1,
    name: "PEDIGREE Puppy Chicken, Milk Dry New Born Dog Food",
    category: "supplement",
    image: p1_img,
    small_price: 500.0,
    small_old_price: 574.0,
    medium_price: 620.0,
    medium_old_price: 678.0,
    large_price: 735.0,
    large_old_price: 790.0,
    description:"For Dog,Shelf Life 12 Months, Suitable for New Born"
  ,},
  {
    id: 2,
    name: "Chappi Chicken, Rice Dry Adult Dog Food",
    category: "supplement",
    image: p2_img,
    small_price: 453.0,
    small_old_price: 470.0,
    medium_price: 553.0,
    medium_old_price: 570.0,
    large_price: 653.0,
    large_old_price: 670.0,
    description:"For Dog,Shelf Life 12 Months, Suitable for Adult",
  },
  {
    id: 3,
    name: "Active Adult Chicken and Vegetables Vegetable Dry Adult Dog Food",
    category: "supplement",
    image: p3_img,
    small_price: 710,
    small_old_price: 789,
    medium_price: 810,
    medium_old_price: 889,
    large_price: 918,
    large_old_price: 1009,
    description:"For Dog, Shelf Life 25 Months, Suitable for Adult, Vegetable Flavour",
  },
  {
    id: 4,
    name: "Purepet CV ADULT Chicken, Vegetable Dry Adult Food",
    category: "supplement",
    image: p4_img,
    small_price: 1054.0,
    small_old_price: 1199.0,
    medium_price: 1200,
    medium_old_price: 1240,
    large_price: 1450,
    large_old_price: 1455,
    description:"For Dog, Shelf Life 34 Months, Suitable for Adult, Chicken Flavour",
  },
  {
    id: 5,
    name: "Pedigree with Meat and Rice, For adults",
    category: "supplement",
    image: p5_img,
    small_price: 463.0,
    small_old_price: 589.0,
    medium_price: 523.0,
    medium_old_price: 620.0,
    large_price: 600.0,
    large_old_price: 710.0,
    description:"For Dog, Shelf Life 24 Months, Suitable for Adult, Meat and Rice Flavour",
  },
  {
    id: 6,
    name: "Aviean International Dog Puppy Biscuits Combo",
    category: "supplement",
    image: p6_img,
    small_price: 560.0,
    small_old_price: 700.0,
    medium_price: 640.0,
    medium_old_price: 780.0,
    large_price: 780.0,
    large_old_price: 820.0,
    description:"For Dog, flavour chicken, Shelf Life 34 months, Pack of 2"
  },
  {
    id: 7,
    name: "SUPER chain Amazing Quality Super Premium Dog Chain Heavy Strength",
    category: "accessories",
    image: p7_img,
    small_price: 200.0,
    small_old_price: 278.0,
    medium_price: 220.0,
    medium_old_price: 288.0,
    large_price: 230.0,
    large_old_price: 288.0,
    description:"Stainless steel, length 160 cm, weight 100g"
  },
  {
    id: 8,
    name: "DRILLY Modern OvalBed with soft blanket BLUE",
    category: "accessories",
    image: p8_img,
    small_price: 1078.0,
    small_old_price: 1568.0,
    medium_price: 1145.0,
    medium_old_price: 1700.0,
    large_price: 1230.0,
    large_old_price: 1780.0,
    description:"Pet bed, comfy,Blue and black"
  },
  {
    id: 9,
    name: "SENAPATI Dog Cord Leash RED",
    category: "accessories",
    image: p9_img,
    small_price: 190,
    small_old_price: 449,
    medium_price: 220,
    medium_old_price: 489,
    large_price: 250,
    large_old_price: 510,
    description:"Polyester, Retractable, Multicolor"
  },
  {
    id: 10,
    name: "SENAPATI Dog Cord Leash BLUE",
    category: "accessories",
    image: p10_img,
    small_price: 190.0,
    small_old_price: 449.0,
    medium_price: 210.0,
    medium_old_price: 480.0,
    large_price: 225.0,
    large_old_price: 560.0,
    description:"Polyester, Retractable, Multicolor"
  },
  {
    id: 11,
    name: "DRILLY Modern OvalBed with soft blanket BLUE",
    category: "accessories",
    image: p11_img,
    small_price: 1230.0,
    small_old_price: 1789.5,
    medium_price: 1340.0,
    medium_old_price: 1889.5,
    large_price: 1530.0,
    large_old_price: 1879.5,
    description:"Pet bed, comfy,Red and black"
  },
  {
    id: 12,
    name: "PETS PLANET Winter Jacket, Coat for Dog, Reversible Dog Jacket",
    category: "accessories",
    image: p12_img,
    small_price: 549.0,
    small_old_price: 900.0,
    medium_price: 649.0,
    medium_old_price: 1000.0,
    large_price: 699.0,
    large_old_price: 1200.0,
    
    description:"Winter Jacket, Reversible,"
  },
  {
    id: 13,
    name: "Emily Pets Frock, Dress for Dog (Multicolor)",
    category:"accessories",
    image: p13_img,
    small_price: 499.0,
    small_old_price: 524.0,
    medium_price: 520.0,
    medium_old_price: 555.0,
    small_price: 560.0,
    small_old_price: 624.0,
    description:"Cute Multicolor Frock for your female dog"
  },
  {
    id: 14,
    name: "Pets Life COTTON T-shirt for Dogs NAVY BLUE",
    category:"accessories",
    image: p14_img,
    small_price: 200.0,
    small_old_price: 258.0,
    medium_price: 200.0,
    medium_old_price: 258.0,
    large_price: 200.0,
    large_old_price: 258.0,
   description:"Comfy cotton T-shirt for Summers"
  },
  {
    id: 15,
    name: "Pil Neem Plus Herbal Pet Shampoo| Antibacterial | Antiseptic",
    category: "hygine",
    image: p15_img,
    small_price: 185.0,
    small_old_price: 190.0,
    medium_price: 205.0,
    medium_old_price: 290.0,
    large_price: 225.0,
    large_old_price: 300.0,
    description:"Anti-fungal, Anti-itching, Flea and Tick, Allergy Relief"
  },
  {
    id: 16,
    name: "PetVit Anti Tick And Flea SPRAY for Dogs",
    category: "hygine",
    image: p16_img,
    small_price: 180.0,
    small_old_price: 199.0,
    medium_price: 200.0,
    medium_old_price: 279.0,
    large_price: 210.0,
    large_old_price: 299.0,
    description:"Anti-fungal, Anti-itching, Flea and Tick, Allergy Relief"
  },
  {
    id: 17,
    name: "Pet Mom Shampoo and Conditioner for Dogs",
    category: "hygine",
    image: p17_img,
    small_price: 198.0,
    small_old_price: 300.0,
    medium_price: 220.0,
    medium_old_price: 310.0,
    large_price: 228.0,
    large_old_price: 320.0,
    description:"Anti-fungal, Anti-itching, Flea and Tick, Allergy Relief"
  },
  {
    id: 18,
    name: "Hachiko 5-in-1 Dog Wash",
    category: "hygine",
    image: p18_img,
    small_price: 399.0,
    small_old_price: 500.0,
    medium_price: 499.0,
    medium_old_price: 600.0,
    large_price: 599.0,
    large_old_price: 700.0,
    description:"Anti-fungal, Anti-itching, Flea and Tick, Allergy Relief"
  },
  {
    id: 19,
    name: "TICK FREE anti-tick Dog shampoo",
    category: "hygine",
    image: p19_img,
    small_price: 210.0,
    small_old_price: 246.5,
    medium_price: 230.0,
    medium_old_price: 286.5,
    large_price: 250.0,
    large_old_price: 300.5,
    description:"Anti-fungal, Anti-itching, Flea and Tick, Allergy Relief"
  },
  {
    id: 20,
    name: "Self Cleaning Slicker Brush for Dogs | Suitable for all breeds",
    category: "hygine",
    image: p20_img,
    small_price: 199.0,
    small_old_price: 220.0,
    medium_price: 219.0,
    medium_old_price: 230.0,
    large_price: 229.0,
    large_old_price: 250.0,
    description:"Smooth working, comb for dogs, BLUE"
  },
  {
    id: 21,
    name: "SENAPATI Dog Cord Leash ORANGE",
    category: "accessories",
    image: p21_img,
    small_price: 85.0,
    small_old_price: 120.5,
    medium_price: 105.0,
    medium_old_price: 135.5,
    large_price: 125.0,
    large_old_price: 156.5,
    description:"Polyester, Retractable, Multicolor"

  },
  {
    id: 22,
    name: "DOG Neem soap for flea and tick removal",
    category: "hygine",
    image: p22_img,
    small_price: 185.0,
    small_old_price: 220.5,
    medium_price: 235.0,
    medium_old_price: 270.5,
    large_price: 285.0,
    large_old_price: 320.5,
    description:"Anti-fungal, Anti-itching, Flea and Tick, Allergy Relief"
  },
];

export default all_product;
