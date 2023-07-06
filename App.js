import React from 'react'
import ReactDOM from 'react-dom/client'

// React Element 
/*
* Header
  - Logo
  - Navigation
* Body
  - Search
  - RestrauntContainer
    -restrount cards
        - img
        - name of restraunt
        - cuisine
        - time for delivery
        - star ratings
* Footer
  - Copyright
  - Links
  - Address
  - Contact
*/ 

const resList = [
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "129366",
                  "name": "Ganesh Bhojnalaya - Jyoti Nagar",
                  "uuid": "6f379bfe-05e2-4c78-b368-ad79f50eda46",
                  "city": "12",
                  "area": "Lal Kothi",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "ebqewymo7zx4kdsslxdw",
                  "cuisines": [
                    "North Indian",
                    "Thalis",
                    "Chinese",
                    "Mughlai",
                    "Chaat",
                    "Punjabi",
                    "Desserts",
                    "Snacks",
                    "Rajasthani",
                    "Tandoor",
                    "Sweets",
                    "Indian",
                    "Beverages",
                    "Ice Cream",
                    "Italian",
                    "Pastas"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 19,
                  "minDeliveryTime": 19,
                  "maxDeliveryTime": 19,
                  "slaString": "19 MINS",
                  "lastMileTravel": 2.700000047683716,
                  "slugs": {
                    "restaurant": "ganesh-bhojnalaya-lal-kothi-lal-kothi",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "Shop 2, Gate 1, Jyoti Nagar, Lal Kothi, Jaipur",
                  "locality": "Jyoti Nagar",
                  "parentId": 85926,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2300,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2300,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2300",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=7381264~p=1~eid=00000189-1fa9-fae2-2daf-fe9c00dc0112~srvts=1688453380834",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "2.7 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "129366",
                    "deliveryTime": 19,
                    "minDeliveryTime": 19,
                    "maxDeliveryTime": 19,
                    "lastMileTravel": 2.700000047683716,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.1",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "249749",
                  "name": "McDonald's",
                  "uuid": "7a53e1b3-02fd-4ab7-8a02-97ac75cdf807",
                  "city": "12",
                  "area": "Bais Godam",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "08eee882fda81b68e5c36e3a5d89d8c0",
                  "cuisines": [
                    "American", "Spanish"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 40000,
                  "costForTwoString": "₹400 FOR TWO",
                  "deliveryTime": 19,
                  "minDeliveryTime": 19,
                  "maxDeliveryTime": 19,
                  "slaString": "19 MINS",
                  "lastMileTravel": 1.399999976158142,
                  "slugs": {
                    "restaurant": "mcdonalds-rj-jaipur-crystal-palm-c-scheme",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "RJ Jaipur Crystal Palm, Plot no-2, Shakar Circle, Sardar Patel Marg,C-scheme, Jaipur - 302004",
                  "locality": "Crystal Palm Mall",
                  "parentId": 630,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2300,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2300,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2300",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.3 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "249749",
                    "deliveryTime": 19,
                    "minDeliveryTime": 19,
                    "maxDeliveryTime": 19,
                    "lastMileTravel": 1.399999976158142,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.1",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "194796",
                  "name": "Kanha",
                  "uuid": "5f2084d0-e65f-43fc-9203-35f97bd35f97",
                  "city": "12",
                  "area": "Vidhyadhar Nagar",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "qdsex48yldowovlix3ku",
                  "cuisines": [
                    "Sweets",
                    "North Indian",
                    "South Indian",
                    "Chinese",
                    "Continental",
                    "Desserts",
                    "Thalis",
                    "Beverages",
                    "Pizzas",
                    "Punjabi"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 37,
                  "minDeliveryTime": 37,
                  "maxDeliveryTime": 37,
                  "slaString": "37 MINS",
                  "lastMileTravel": 7.400000095367432,
                  "slugs": {
                    "restaurant": "kanha-vidhyadhar-nagar-vidhyadhar-nagar-vidhyadhar-nagar",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "Kanha Sweets & Restaurant, Sector 2, Central Spine, Vidhyadhar Nagar, Jaipur, Rajasthan, India",
                  "locality": "Vidhyadhar Nagar",
                  "parentId": 4650,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 5800,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 5800,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "5800",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=7382294~p=10~eid=00000189-1fa9-fae2-2daf-fe9f00dc0a3d~srvts=1688453380834",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "7.4 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "194796",
                    "deliveryTime": 37,
                    "minDeliveryTime": 37,
                    "maxDeliveryTime": 37,
                    "lastMileTravel": 7.400000095367432,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.2",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "54532",
                  "name": "Agarwal Caterers - Shastri Nagar",
                  "uuid": "4a96e999-23ed-4f99-90fe-6649afefd4a0",
                  "city": "12",
                  "area": "Shashtri Nagar",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "igynbxeggu4dexnrlxxd",
                  "cuisines": [
                    "Desserts",
                    "Sweets"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 25,
                  "minDeliveryTime": 25,
                  "maxDeliveryTime": 25,
                  "slaString": "25 MINS",
                  "lastMileTravel": 4.800000190734863,
                  "slugs": {
                    "restaurant": "agarwal-caterers-shastri-nagar-sindhi-camp",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "E53, Near Science Park, Shastri Nagar, Jaipur",
                  "locality": "Science Park",
                  "parentId": 27555,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3000",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=7381247~p=4~eid=00000189-1fa9-fae2-2daf-fe9d00dc0422~srvts=1688453380834",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "4.8 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "30% OFF",
                    "subHeader": "UPTO ₹75",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "54532",
                    "deliveryTime": 25,
                    "minDeliveryTime": 25,
                    "maxDeliveryTime": 25,
                    "lastMileTravel": 4.800000190734863,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.3",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "346621",
                  "name": "Pizza Bar",
                  "uuid": "872a4c60-784c-485a-aa0e-3e50be31b116",
                  "city": "12",
                  "area": "Sodala",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "cwfxgvszchj8oelgv09r",
                  "cuisines": [
                    "Pizzas",
                    "Beverages"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 25000,
                  "costForTwoString": "₹250 FOR TWO",
                  "deliveryTime": 27,
                  "minDeliveryTime": 27,
                  "maxDeliveryTime": 27,
                  "slaString": "27 MINS",
                  "lastMileTravel": 2.9000000953674316,
                  "slugs": {
                    "restaurant": "pizza-bar-lal-kothi-lal-kothi",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "45 kailashpuri,just before Sri Sri Girls PG, Shiv Puri Colony, Sodala, Jaipur, Rajasthan, India",
                  "locality": "Shiv Puri Colony",
                  "parentId": 158340,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2300,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2300,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2300",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "2.9 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "",
                    "discountTag": "FLAT DEAL",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "346621",
                    "deliveryTime": 27,
                    "minDeliveryTime": 27,
                    "maxDeliveryTime": 27,
                    "lastMileTravel": 2.9000000953674316,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.7",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "143095",
                  "name": "Mughal Restaurant",
                  "uuid": "e3f04716-9586-42a2-b0a8-058736e7fd42",
                  "city": "12",
                  "area": "Hasanpura",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "cke86uanz4tbdpdumgei",
                  "cuisines": [
                    "North Indian",
                    "Biryani",
                    "Mughlai",
                    "Kebabs",
                    "Tandoor",
                    "Thalis"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 17,
                  "minDeliveryTime": 17,
                  "maxDeliveryTime": 17,
                  "slaString": "17 MINS",
                  "lastMileTravel": 1.899999976158142,
                  "slugs": {
                    "restaurant": "mughal-hotel-hasanpura-lal-kothi",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "55 & 56, NBC, Hasanpura, Jaipur",
                  "locality": "",
                  "parentId": 19456,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2300,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2300,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2300",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.8 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "143095",
                    "deliveryTime": 17,
                    "minDeliveryTime": 17,
                    "maxDeliveryTime": 17,
                    "lastMileTravel": 1.899999976158142,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.4",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "44421",
                  "name": "Agarwal Caterers",
                  "uuid": "627d843d-b3f4-430a-8f11-5e406500d8c9",
                  "city": "12",
                  "area": "Vaishali Nagar",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "nttatsmqh2xrgckpi53k",
                  "cuisines": [
                    "Sweets",
                    "North Indian",
                    "Italian"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 27,
                  "minDeliveryTime": 27,
                  "maxDeliveryTime": 27,
                  "slaString": "27 MINS",
                  "lastMileTravel": 5,
                  "slugs": {
                    "restaurant": "agarwal-sweets-caterers-crown-square-vaishali-nagar-vaishali-nagar",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "Gandhi Path, Moti Nagar, Scheme Number 8, Girnar Colony South, Vaishali Nagar, Jaipur, Rajasthan 302021",
                  "locality": "Crown Square",
                  "parentId": 16883,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 4400,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 4400,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "4400",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=7381238~p=7~eid=00000189-1fa9-fae2-2daf-fe9e00dc0708~srvts=1688453380834",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "5 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "30% OFF",
                    "subHeader": "UPTO ₹75",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "44421",
                    "deliveryTime": 27,
                    "minDeliveryTime": 27,
                    "maxDeliveryTime": 27,
                    "lastMileTravel": 5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.2",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "45977",
                  "name": "Burger Farm",
                  "uuid": "1d358b51-3727-434f-a9f0-a7e27ac39cae",
                  "city": "12",
                  "area": "C Scheme",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "nzcyy3dllok64io32kva",
                  "cuisines": [
                    "American",
                    "Continental",
                    "Italian-American",
                    "Snacks",
                    "Grill",
                    "Beverages",
                    "Bakery",
                    "Desserts",
                    "Barbecue"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 18,
                  "minDeliveryTime": 18,
                  "maxDeliveryTime": 18,
                  "slaString": "18 MINS",
                  "lastMileTravel": 1.2000000476837158,
                  "slugs": {
                    "restaurant": "burger-farm-c-scheme-c-scheme",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "GROUND FLOOR PLOT NO.F-30, AZAD MARG C-SCHEME JAIPUR, Jaipur, Jaipur, Rajasthan-302001",
                  "locality": "Azad Marg",
                  "parentId": 4660,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2300,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2300,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2300",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.2 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "30% OFF",
                    "subHeader": "UPTO ₹75",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "45977",
                    "deliveryTime": 18,
                    "minDeliveryTime": 18,
                    "maxDeliveryTime": 18,
                    "lastMileTravel": 1.2000000476837158,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.2",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "60482",
                  "name": "Roll Express",
                  "uuid": "b05af642-e240-45fc-9cfa-662a9181e54a",
                  "city": "12",
                  "area": "C Scheme",
                  "totalRatingsString": "5000+ ratings",
                  "cloudinaryImageId": "de58cec62dcd253e469655455e70b8ff",
                  "cuisines": [
                    "Fast Food",
                    "Snacks",
                    "North Indian",
                    "Chinese",
                    "Bengali",
                    "Beverages",
                    "Lucknowi",
                    "Mughlai",
                    "Indian",
                    "Continental"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 29,
                  "minDeliveryTime": 29,
                  "maxDeliveryTime": 29,
                  "slaString": "29 MINS",
                  "lastMileTravel": 1.2999999523162842,
                  "slugs": {
                    "restaurant": "roll-express-ramesh-marg-c-scheme",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": " J-23 Subhash Marg, Bhagadiya bhawan, C-scheme, Jaipur",
                  "locality": "Ramesh Marg",
                  "parentId": 16561,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2300,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2300,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2300",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.2 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "",
                    "discountTag": "FLAT DEAL",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "60482",
                    "deliveryTime": 29,
                    "minDeliveryTime": 29,
                    "maxDeliveryTime": 29,
                    "lastMileTravel": 1.2999999523162842,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.8",
                  "totalRatings": 5000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "44215",
                  "name": "Ghar Ka Swad",
                  "uuid": "f13a90b2-e4bc-4c5b-a716-9d686a49128b",
                  "city": "12",
                  "area": "C Scheme",
                  "totalRatingsString": "5000+ ratings",
                  "cloudinaryImageId": "lvbcoyeqin1gub0tycax",
                  "cuisines": [
                    "North Indian",
                    "Thalis",
                    "Mughlai",
                    "Punjabi",
                    "Rajasthani",
                    "Desserts"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 25000,
                  "costForTwoString": "₹250 FOR TWO",
                  "deliveryTime": 22,
                  "minDeliveryTime": 22,
                  "maxDeliveryTime": 22,
                  "slaString": "22 MINS",
                  "lastMileTravel": 1.2000000476837158,
                  "slugs": {
                    "restaurant": "ghar-ka-swad-civil-lines-lal-kothi",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "23 Civil Lines Road, Shivaji Nagar, Madrampur,,jaipur",
                  "locality": "Civil Lines Road",
                  "parentId": 4439,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2300,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2300,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2300",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.2 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
                    "subHeader": "UPTO ₹80",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "44215",
                    "deliveryTime": 22,
                    "minDeliveryTime": 22,
                    "maxDeliveryTime": 22,
                    "lastMileTravel": 1.2000000476837158,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.4",
                  "totalRatings": 5000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "375271",
                  "name": "Burger Shack by Brown Sugar",
                  "uuid": "a5461352-9194-42b8-add3-ca6ce038674e",
                  "city": "12",
                  "area": "Subhash Nagar",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "b500d3558320c44fa781543edbe7eac6",
                  "cuisines": [
                    "American",
                    "Continental",
                    "Burgers",
                    "Snacks",
                    "Fast Food",
                    "Desserts",
                    "Beverages",
                    "Pizzas"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 15,
                  "minDeliveryTime": 15,
                  "maxDeliveryTime": 15,
                  "slaString": "15 MINS",
                  "lastMileTravel": 1.2000000476837158,
                  "slugs": {
                    "restaurant": "burger-shack-c-scheme-c-scheme",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "J-2 Shubhash Marg, Jamna Lal Bajaj Marg C-Scheme Jaipur",
                  "locality": "",
                  "parentId": 11388,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2300,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2300,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2300",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.2 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "375271",
                    "deliveryTime": 15,
                    "minDeliveryTime": 15,
                    "maxDeliveryTime": 15,
                    "lastMileTravel": 1.2000000476837158,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.0",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "57722",
                  "name": "DMB(Doodh Misthan Bhandar)- Bani Park",
                  "uuid": "494b7749-71d5-4a2d-bff6-afed7639a8fd",
                  "city": "12",
                  "area": "Bani Park",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "mwxhhhmz9gdap5zrcojj",
                  "cuisines": [
                    "Navratri Special",
                    "Thalis",
                    "Chinese",
                    "Continental",
                    "Snacks",
                    "Punjabi"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 26,
                  "minDeliveryTime": 26,
                  "maxDeliveryTime": 26,
                  "slaString": "26 MINS",
                  "lastMileTravel": 4.099999904632568,
                  "slugs": {
                    "restaurant": "dmb-restaurant-bani-park-sindhi-camp-2",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "718, First Floor, Meera Marg, Jhotwara Road, Bani Park, Jaipur",
                  "locality": "Jhotwara Road",
                  "parentId": 7093,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3000",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=7381250~p=13~eid=00000189-1fa9-fae2-2daf-fea000dc0d2a~srvts=1688453380834",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "4 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "57722",
                    "deliveryTime": 26,
                    "minDeliveryTime": 26,
                    "maxDeliveryTime": 26,
                    "lastMileTravel": 4.099999904632568,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.3",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "55887",
                  "name": "Rawat Mishthan Bhandar",
                  "uuid": "137609bc-bd8f-4a70-914e-7dea1b2e49d8",
                  "city": "12",
                  "area": "Sindhi Camp",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "uzklu7r1dd7kc1lto5l5",
                  "cuisines": [
                    "North Indian",
                    "Thalis",
                    "Chinese",
                    "Mughlai",
                    "Chaat",
                    "Punjabi",
                    "Desserts",
                    "Snacks",
                    "Rajasthani",
                    "Tandoor",
                    "Sweets",
                    "Indian",
                    "Beverages",
                    "Ice Cream",
                    "Italian",
                    "Pastas"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 23,
                  "minDeliveryTime": 23,
                  "maxDeliveryTime": 23,
                  "slaString": "23 MINS",
                  "lastMileTravel": 2.200000047683716,
                  "slugs": {
                    "restaurant": "rawat-mishthan-bhandar-sindhi-camp-sindhi-camp",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "Opposite Polovictory Cinema, Station Road, Sindhi Camp, Jaipur",
                  "locality": "Kanti Nagar",
                  "parentId": 167813,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2300,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2300,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2300",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "2.2 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "55887",
                    "deliveryTime": 23,
                    "minDeliveryTime": 23,
                    "maxDeliveryTime": 23,
                    "lastMileTravel": 2.200000047683716,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.3",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "513749",
                  "name": "Mughal Hotel",
                  "uuid": "95615765-bc71-40c4-8db8-e47a06f64172",
                  "city": "12",
                  "area": "C Scheme",
                  "totalRatingsString": "100+ ratings",
                  "cloudinaryImageId": "vxtpeqs2unxmwytfst3h",
                  "cuisines": [
                    "North Indian",
                    "Mughlai",
                    "Biryani",
                    "Snacks",
                    "Thalis"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 29,
                  "minDeliveryTime": 29,
                  "maxDeliveryTime": 29,
                  "slaString": "29 MINS",
                  "lastMileTravel": 1.899999976158142,
                  "slugs": {
                    "restaurant": "mughal-hotel-c-scheme-c-scheme",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "Shop No 56,Shri Ram Market, Jaipur, Rajasthan -302012",
                  "locality": "",
                  "parentId": 140947,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2300,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2300,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2300",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.8 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "513749",
                    "deliveryTime": 29,
                    "minDeliveryTime": 29,
                    "maxDeliveryTime": 29,
                    "lastMileTravel": 1.899999976158142,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.4",
                  "totalRatings": 100,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "47395",
                  "name": "Subway",
                  "uuid": "daad04db-f345-470e-90db-cc4584af47ec",
                  "city": "12",
                  "area": "Elements Mall",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
                  "cuisines": [
                    "Fast Food",
                    "Healthy Food",
                    "Salads",
                    "Desserts",
                    "Beverages",
                    "Snacks",
                    "Continental",
                    "Italian",
                    "Italian-American",
                    "American"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 33,
                  "minDeliveryTime": 33,
                  "maxDeliveryTime": 33,
                  "slaString": "33 MINS",
                  "lastMileTravel": 4.800000190734863,
                  "slugs": {
                    "restaurant": "subway-ajmer-road-vaishali-nagar",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "Subway Elements mall, Ajmer Rd, DCM, Jaipur, Rajasthan 302021",
                  "locality": "Bopal",
                  "parentId": 2,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  
        }
      }
]

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://marketplace.canva.com/EAFN6Q3nIfE/1/0/1600w/canva-beige-modern-food-logo-KnS0Ou7vY4M.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestrauntCard = (props) => {
    const {resData} = props
    const {name, cuisines, avgRating, cloudinaryImageId, costForTwo, deliveryTime} = resData.data

    console.log({name, cuisines, avgRating, cloudinaryImageId})
 return (
    <div className='res-card' style={{
        backgroundColor: "lightGray"
    }}>
        <img className='res-logo' alt="res-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_350,c_fill/"+ cloudinaryImageId}/>
        <h3>{name}</h3>
        <h5 >{cuisines.join(", ")}</h5>
        <h5>{avgRating}</h5>
        <h5>{costForTwo}</h5>
        <h5>{deliveryTime}</h5>
    </div>
 )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
             { resList.map((res, i) =>  <RestrauntCard key={res.data.id} resData={res} />)}
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)