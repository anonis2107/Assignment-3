const products = {
    //Cards & Stationary
    bookmark: {
        name: "Bookmarks",
        price: 50,
        image: "bookmarks.png",

        sizes: [
            { name: "Select", price: 0 },
            { name: "50mm x 155mm (+ $0.00)", price: 0 },
            { name: "50mm x 203mm (+ $2.00)", price: 2 }
        ],
        material: [
            { name: "Select", price: 0 },
            { name: "350 GSM Card Stock (+ $10.00)", price: 10 },
            { name: "400 GSM Card Stock (+ $12.00)", price: 12 }
        ],

        colour: [
            { name: "Select", price: 0 },
            { name: "Black & White (+ $0.00)", price: 0 },
            { name: "Full Colour (+ $20.00)", price: 20 }
        ],

        hole: [
            { name: "Select", price: 0 },
            { name: "No Holes (+ $0.00)", price: 0 },
            { name: "6.35mm Hole (+ $2.00)", price: 2 },
            { name: "4.75mm Hole (+ $2.00)", price: 2 }
        ],
        tassel: [
            { name: "Select", price: 0 },
            { name: "None (+ $0.00)", price: 0 },
            { name: "Black Tassel (+ $10.00)", price: 10 },
            { name: "Blue Tassel (+ $10.00)", price: 10 },
            { name: "Red Tassel (+ $10.00)", price: 10 },
            { name: "Green Tassel (+ $10.00)", price: 10 }
        ],
        quantity: [
            { name: "Select", price: 0 },
            { name: "50 (+ $0.00)", price: 0 },
            { name: "100 (+ $10.00)", price: 10 },
            { name: "250 (+ $20.00)", price: 20 },
            { name: "500 (+ $40.00)", price: 40 },
            { name: "750 (+ $50.00)", price: 50 },
            { name: "1000 (+ $75.00)", price: 75 },
            { name: "1500 (+ $110.00)", price: 110 },
            { name: "2000 (+ $150.00)", price: 150 },
            { name: "3000 (+ $225.00)", price: 225 },
            { name: "4000 (+ $300.00)", price: 300 },
            { name: "5000 (+ $375.00)", price: 375 },
            { name: "6000 (+ $450.00)", price: 450 },
            { name: "7000 (+ $725.00)", price: 725 },
            { name: "8000 (+ $800.00)", price: 800 },
            { name: "9000 (+ $875.00)", price: 875 },
            { name: "10000 (+ $950.00)", price: 950 }
        ],

        description: "Bookmarks are more than just a way to mark your page; they are a creative tool to promote your brand, share a message, or add a personal touch to your reading experience. At The Sticker Printing, we specialize in high-quality custom bookmark printing that is affordable, vibrant, and tailored to your exact needs."
    },
    envelope: {
    name: "Envelopes",
    price: 50,
    image: "envelopes.png",

    size: [
            { name: "Select", price: 0 },
            { name: "A7 (+ $0.00)", price: 0 },
            { name: "A6 (+ $2.00)", price: 2 },
            { name: "100mm x 240mm (+ $4.00)", price: 4 },
            { name: "228mm x 325mm (+ $6.00)", price: 6 }
        ],

        flapStyle: [
            { name: "Select", price: 0 },
            { name: "No Flap Envelope (+ $0.00)", price: 0 },
            { name: "Top Flap (+ $5.00)", price: 5 },
            { name: "Left Flap (+ $5.00)", price: 5 }
        ],

        quantity: [
            { name: "Select", price: 0 },
            { name: "50 (+ $0.00)", price: 0 },
            { name: "100 (+ $10.00)", price: 10 },
            { name: "250 (+ $20.00)", price: 20 },
            { name: "500 (+ $40.00)", price: 40 },
            { name: "750 (+ $50.00)", price: 50 },
            { name: "1000 (+ $75.00)", price: 75 },
            { name: "1500 (+ $110.00)", price: 110 },
            { name: "2000 (+ $150.00)", price: 150 },
            { name: "3000 (+ $225.00)", price: 225 },
            { name: "4000 (+ $300.00)", price: 300 },
            { name: "5000 (+ $375.00)", price: 375 },
            { name: "6000 (+ $450.00)", price: 450 },
            { name: "7000 (+ $725.00)", price: 725 },
            { name: "8000 (+ $800.00)", price: 800 },
            { name: "9000 (+ $875.00)", price: 875 },
            { name: "10000 (+ $950.00)", price: 950 }
        ],

    description: "" 
    },
    invitation: {
        name: "Invitation Cards",
        price: 50,
        image: "invitations.png",
        size: [
            { name: "Select", price: 0 },
            { name: "A7 (+ $0.00)", price: 0 },
            { name: "A6 (+ $2.00)", price: 2 },
            { name: "100mm x 240mm (+ $4.00)", price: 4 },
            { name: "228mm x 325mm (+ $6.00)", price: 6 }
        ],

        material: [
            { name: "Select", price: 0 },
            { name: "350 GSM Card Stock (+ $10.00)", price: 10 },
            { name: "400 GSM Card Stock", price: 12 }
        ],


        quantity: [
            { name: "Select", price: 0 },
            { name: "50 (+ $0.00)", price: 0 },
            { name: "100 (+ $10.00)", price: 10 },
            { name: "250 (+ $20.00)", price: 20 },
            { name: "500 (+ $40.00)", price: 40 },
            { name: "750 (+ $50.00)", price: 50 },
            { name: "1000 (+ $75.00)", price: 75 },
            { name: "1500 (+ $110.00)", price: 110 },
            { name: "2000 (+ $150.00)", price: 150 },
            { name: "3000 (+ $225.00)", price: 225 },
            { name: "4000 (+ $300.00)", price: 300 },
            { name: "5000 (+ $375.00)", price: 375 },
            { name: "6000 (+ $450.00)", price: 450 },
            { name: "7000 (+ $725.00)", price: 725 },
            { name: "8000 (+ $800.00)", price: 800 },
            { name: "9000 (+ $875.00)", price: 875 },
            { name: "10000 (+ $950.00)", price: 950 }
        ],
        description: ""

    },
    postcard: {
        name: "Postcards",
        price: 50,
        image: "postcards.png",
        size: [
            { name: "Select", price: 0 },
            { name: "101mm x 155mm (+ $0.00)", price: 0 },
            { name: "127mm x 152mm (+ $2.00)", price: 2 },
            { name: "127mm x 178mm (+ $3.50)", price: 3.50 },
            { name: "155mm x 228mm (+ $4.00)", price: 4 }
        ],

        material: [
            { name: "Select", price: 0 },
            { name: "280 GSM Cardstock (+ $7.00)", price: 7 },
            { name: "310 GSM Cardstock (+ $11.00)", price: 11 }
        ],

        colour: [
            { name: "Select", price: 0 },
            { name: "Black & White (+ $0.00)", price: 0 },
            { name: "Full Colour (+ $20.00)", price: 20 }
        ],

        finish: [
            { name: "Select", price: 0 },
            { name: "Standard Gloss Finish (+ $0.00)", price: 0 },
            { name: "Matte Finish (+ $5.00)", price: 5 },
            { name: "High Gloss Finish (+ $5.00)", price: 5 }
        ],

        quantity: [
            { name: "Select", price: 0 },
            { name: "50 (+ $0.00)", price: 0 },
            { name: "100 (+ $10.00)", price: 10 },
            { name: "250 (+ $20.00)", price: 20 },
            { name: "500 (+ $40.00)", price: 40 },
            { name: "750 (+ $50.00)", price: 50 },
            { name: "1000 (+ $75.00)", price: 75 },
            { name: "1500 (+ $110.00)", price: 110 },
            { name: "2000 (+ $150.00)", price: 150 },
            { name: "3000 (+ $225.00)", price: 225 },
            { name: "4000 (+ $300.00)", price: 300 },
            { name: "5000 (+ $375.00)", price: 375 },
            { name: "6000 (+ $450.00)", price: 450 },
            { name: "7000 (+ $725.00)", price: 725 },
            { name: "8000 (+ $800.00)", price: 800 },
            { name: "9000 (+ $875.00)", price: 875 },
            { name: "10000 (+ $950.00)", price: 950 }
        ],

        description: "At The Sticker Printing, we offer high-quality custom postcard printing designed to help you grab attention and make a lasting impression. With vibrant colors, premium materials, and full customization options, our postcards are perfect for direct mail campaigns, event promotions, thank-you notes, and more."
    },
    notepad: {
        name: "Notepads",
        price: 50,
        image: "notepads.png",
        
        size: [
            { name: "Select", price: 0 },
            { name: "108mm x 140mm (+ $0.00)", price: 0 },
            { name: "89mm x 216mm (+ $2.00)", price: 2 },
            { name: "140mm x 216mm (+ $4.00)", price: 4 },
            { name: "216mm x 280mm (+ $6.00)", price: 6 }

        ],

        material: [
            { name: "Select", price: 0 },
            { name: "50 GSM Art Paper (+ $0.00)", price: 0 }
        ],

        colour: [
            { name: "Select", price: 0 },
            { name: "Black & White (+ $0.00)", price: 0 },
            { name: "Full Colour (+ $20.00)", price: 20 }
        ],

        sheetsPerPad: [
            { name: "Select", price: 0 },
            { name: "25 (+ $0.00)", price: 0 },
            { name: "50 (+ $5.00)", price: 5 },
            { name: "75 (+ $7.50)", price: 7.5 },
            { name: "100 (+ $10.00)", price: 10 }
        ],

        quantity: [
            { name: "Select", price: 0 },
            { name: "50 (+ $0.00)", price: 0 },
            { name: "100 (+ $10.00)", price: 10 },
            { name: "250 (+ $20.00)", price: 20 },
            { name: "500 (+ $40.00)", price: 40 },
            { name: "750 (+ $50.00)", price: 50 },
            { name: "1000 (+ $75.00)", price: 75 },
            { name: "1500 (+ $110.00)", price: 110 },
            { name: "2000 (+ $150.00)", price: 150 },
            { name: "3000 (+ $225.00)", price: 225 },
            { name: "4000 (+ $300.00)", price: 300 },
            { name: "5000 (+ $375.00)", price: 375 },
            { name: "6000 (+ $450.00)", price: 450 },
            { name: "7000 (+ $725.00)", price: 725 },
            { name: "8000 (+ $800.00)", price: 800 },
            { name: "9000 (+ $875.00)", price: 875 },
            { name: "10000 (+ $950.00)", price: 950 }
        ],
        description: "Notepads are a versatile tool for businesses, events, and personal use. At The Sticker Printing, we specialize in high-quality notepad printing, offering a wide range of customization options to help you create notepads that are as practical as they are stylish."
    },

    //CD & Packaging
    cdcover: {
        name: "CD Covers",
        price: 50,
        image: "cdcovers.png",

        size: [
            { name: "Select", price: 0 },
            { name: "A7 (+ $0.00)", price: 0 },
            { name: "A6 (+ $2.00)", price: 2 },
            { name: "100mm x 240mm (+ $4.00)", price: 4 },
            { name: "228mm x 325mm (+ $6.00)", price: 6 }
        ],

        material: [
            { name: "Select", price: 0 },
            { name: "300 GSM Card Stock (+ $0.00)", price: 0 },
            { name: "400 GSM Card Stock", price: 12 }
        ],

        window: [
            { name: "Select", price: 0 },
            { name: "No Window (+ $0.00)", price: 0 },
            { name: "Yes Window (+ $1.00)", price: 1 }
        ],


        quantity: [
            { name: "Select", price: 0 },
            { name: "50 (+ $0.00)", price: 0 },
            { name: "100 (+ $10.00)", price: 10 },
            { name: "250 (+ $20.00)", price: 20 },
            { name: "500 (+ $40.00)", price: 40 },
            { name: "750 (+ $50.00)", price: 50 },
            { name: "1000 (+ $75.00)", price: 75 },
            { name: "1500 (+ $110.00)", price: 110 },
            { name: "2000 (+ $150.00)", price: 150 },
            { name: "3000 (+ $225.00)", price: 225 },
            { name: "4000 (+ $300.00)", price: 300 },
            { name: "5000 (+ $375.00)", price: 375 },
            { name: "6000 (+ $450.00)", price: 450 },
            { name: "7000 (+ $725.00)", price: 725 },
            { name: "8000 (+ $800.00)", price: 800 },
            { name: "9000 (+ $875.00)", price: 875 },
            { name: "10000 (+ $950.00)", price: 950 }
        ],

        description: "CD covers are more than just protective cases—they’re a powerful branding tool for musicians, businesses, and artists alike. At The Sticker Printing, we offer high-quality custom CD cover printing that combines vibrant design, lasting durability, and professional appeal to help your CDs make a lasting impression."
    },

    //Custom Stickers
    diecutstickers: {
        name: "Die Cut Stickers",
        price: 50,
        image: "diecut.png",
        shape: [
            { name: "Select", price: 0 },
            { name: "Circle (+ $0.00)", price: 0 },
            { name: "Oval (+ $0.00)", price: 0 }
        ],

        circleSizes: [
            { name: "Select", price: 0 },
            { name: "13mm (+ $0.00)", price: 0 },
            { name: "19mm (+ $0.50)", price: 0.5 },
            { name: "25mm (+ $1.00)", price: 1 },
            { name: "32mm (+ $1.50)", price: 1.5 },
            { name: "38mm (+ $2.00)", price: 2 },
            { name: "50mm (+ $2.50)", price: 2.50 },
            { name: "64mm (+ $3.00)", price: 3 },
            { name: "70mm (+ $3.50)", price: 3.50 },
            { name: "76mm (+ $4.00)", price: 4 },
            { name: "101mm (+ $4.50)", price: 4.50 },
            { name: "115mm (+ $5.00)", price: 5 }
        ],

        ovalSizes: [
            { name: "Select", price: 0 },
            { name: "19mm x 38mm (+ $0.50)", price: 0.50 },
            { name: "32mm x 50mm (+ $1.00)", price: 1 },
            { name: "45mm x 64mm (+ $1.50)", price: 1.50 },
            { name: "50mm x 76mm (+ $2.00)", price: 2 },
            { name: "50mm x 83mm (+ $2.50)", price: 2.50 },
            { name: "76mm x 101mm (+ $3.00)", price: 3 },
            { name: "101mm x 152mm (+ $3.50)", price: 3.50 }
        ],

        material: [
            { name: "Select", price: 0 },
            { name: "Sticker Paper Gloss (+ $0.00)", price: 0 },
            { name: "Sticker Paper Matte (+ $0.00)", price: 0 },
            { name: "White Vinyl (+ $5.00)", price: 5 },
            { name: "Clear Vinyl (+ $5.00)", price: 5 }
        ],

        colour: [
            { name: "Select", price: 0 },
            { name: "Black & White (+ $0.00)", price: 0 },
            { name: "Full Colour (+ $20.00)", price: 20 }
        ],

        finish: [
            { name: "Select", price: 0 },
            { name: "Standard Finish (+ $0.00)", price: 0 },
            { name: "High UV Gloss Coating (+ $5.00)", price: 5 }
        ],
        effects:[
            { name: "Select", price: 0 },
            { name: "None (+ $0.00)", price: 0 },
            { name: "Emboss (single side) (+ $5.00)", price: 5 },
            { name: "Deboss (single side) (+ $5.00)", price: 5 },
            { name: "Foil Stamping (+ $15.00)", price: 15 },
            
            { name: "Spot UV (+ $15.00)", price: 15 }
        ],

        quantity: [
            { name: "Select", price: 0 },
            { name: "50 (+ $0.00)", price: 0 },
            { name: "100 (+ $10.00)", price: 10 },
            { name: "250 (+ $20.00)", price: 20 },
            { name: "500 (+ $40.00)", price: 40 },
            { name: "750 (+ $50.00)", price: 50 },
            { name: "1000 (+ $75.00)", price: 75 },
            { name: "1500 (+ $110.00)", price: 110 },
            { name: "2000 (+ $150.00)", price: 150 },
            { name: "3000 (+ $225.00)", price: 225 },
            { name: "4000 (+ $300.00)", price: 300 },
            { name: "5000 (+ $375.00)", price: 375 },
            { name: "6000 (+ $450.00)", price: 450 },
            { name: "7000 (+ $725.00)", price: 725 },
            { name: "8000 (+ $800.00)", price: 800 },
            { name: "9000 (+ $875.00)", price: 875 },
            { name: "10000 (+ $950.00)", price: 950 }
        ],


        description: "High-quality custom round stickers designed for branding, packaging, promotions, or personal use. Made from premium vinyl, paper, or polyester, they’re available in matte, gloss, or transparent finishes and sizes from 25mm to 100mm (or custom).Printed in full colour with UV-resistant technology, these stickers offer sharp, vibrant results that won’t fade. They’re waterproof, weatherproof, and suitable for both indoor and outdoor use, with strong adhesive options (permanent or removable)."
    },

    clearstickers: {
        name: "Clear Stickers",
        price: 50,
        image: "clearsticker.png",

        circleSizes: [
            { name: "Select", price: 0 },
            { name: "13mm (+ $0.00)", price: 0 },
            { name: "19mm (+ $0.50)", price: 0.5 },
            { name: "25mm (+ $1.00)", price: 1 },
            { name: "32mm (+ $1.50)", price: 1.5 },
            { name: "38mm (+ $2.00)", price: 2 },
            { name: "50mm (+ $2.50)", price: 2.50 },
            { name: "64mm (+ $3.00)", price: 3 },
            { name: "70mm (+ $3.50)", price: 3.50 },
            { name: "76mm (+ $4.00)", price: 4 },
            { name: "101mm (+ $4.50)", price: 4.50 },
            { name: "115mm (+ $5.00)", price: 5 }
        ], 

        ovalSizes: [
            { name: "Select", price: 0 },
            { name: "19mm x 38mm (+ $0.50)", price: 0.50 },
            { name: "32mm x 50mm (+ $1.00)", price: 1 },
            { name: "45mm x 64mm (+ $1.50)", price: 1.50 },
            { name: "50mm x 76mm (+ $2.00)", price: 2 },
            { name: "50mm x 83mm (+ $2.50)", price: 2.50 },
            { name: "76mm x 101mm (+ $3.00)", price: 3 },
            { name: "101mm x 152mm (+ $3.50)", price: 3.50 }
        ],

        material: [
            { name: "Select", price: 0 },
            { name: "Sticker Paper Gloss (+ $0.00)", price: 0 },
            { name: "Sticker Paper Matte (+ $0.00)", price: 0 },
            { name: "White Vinyl (+ $5.00)", price: 5 },
            { name: "Clear Vinyl (+ $5.00)", price: 5 }
        ],

        colour: [
            { name: "Select", price: 0 },
            { name: "Black & White (+ $0.00)", price: 0 },
            { name: "Full Colour (+ $20.00)", price: 20 }
        ],

        finish: [
            { name: "Select", price: 0 },
            { name: "Standard Finish (+ $0.00)", price: 0 },
            { name: "High UV Gloss Coating (+ $5.00)", price: 5 }
        ],
        effects:[
            { name: "Select", price: 0 },
            { name: "None (+ $0.00)", price: 0 },
            { name: "Emboss (single side) (+ $5.00)", price: 5 },
            { name: "Deboss (single side) (+ $5.00)", price: 5 },
            { name: "Foil Stamping (+ $15.00)", price: 15 },
            { name: "Spot UV (+ $15.00)", price: 15 }
        ],

        quantity: [
            { name: "Select", price: 0 },
            { name: "50 (+ $0.00)", price: 0 },
            { name: "100 (+ $10.00)", price: 10 },
            { name: "250 (+ $20.00)", price: 20 },
            { name: "500 (+ $40.00)", price: 40 },
            { name: "750 (+ $50.00)", price: 50 },
            { name: "1000 (+ $75.00)", price: 75 },
            { name: "1500 (+ $110.00)", price: 110 },
            { name: "2000 (+ $150.00)", price: 150 },
            { name: "3000 (+ $225.00)", price: 225 },
            { name: "4000 (+ $300.00)", price: 300 },
            { name: "5000 (+ $375.00)", price: 375 },
            { name: "6000 (+ $450.00)", price: 450 },
            { name: "7000 (+ $725.00)", price: 725 },
            { name: "8000 (+ $800.00)", price: 800 },
            { name: "9000 (+ $875.00)", price: 875 },
            { name: "10000 (+ $950.00)", price: 950 }
        ],

        description: "Clear vinyl stickers offer a sleek, modern, and professional look, making them perfect for a variety of applications. Whether you’re using them for product labeling, window decals, or promotional giveaways, clear vinyl stickers provide a unique, transparent backdrop that enhances the design without overwhelming it. High-quality clear vinyl sticker printing, delivering durable, vibrant, and fully customizable stickers that reflect your brand in the best possible light."
    },

    embossedstickers: {
        name: "Embossed Stickers",
        price: 50,
        image: "embossedstickers.webp",

        circleSizes: [
            { name: "Select", price: 0 },
            { name: "13mm (+ $0.00)", price: 0 },
            { name: "19mm (+ $0.50)", price: 0.5 },
            { name: "25mm (+ $1.00)", price: 1 },
            { name: "32mm (+ $1.50)", price: 1.5 },
            { name: "38mm (+ $2.00)", price: 2 },
            { name: "50mm (+ $2.50)", price: 2.50 },
            { name: "64mm (+ $3.00)", price: 3 },
            { name: "70mm (+ $3.50)", price: 3.50 },
            { name: "76mm (+ $4.00)", price: 4 },
            { name: "101mm (+ $4.50)", price: 4.50 },
            { name: "115mm (+ $5.00)", price: 5 }
        ], 

        ovalSizes: [
            { name: "Select", price: 0 },
            { name: "19mm x 38mm (+ $0.50)", price: 0.50 },
            { name: "32mm x 50mm (+ $1.00)", price: 1 },
            { name: "45mm x 64mm (+ $1.50)", price: 1.50 },
            { name: "50mm x 76mm (+ $2.00)", price: 2 },
            { name: "50mm x 83mm (+ $2.50)", price: 2.50 },
            { name: "76mm x 101mm (+ $3.00)", price: 3 },
            { name: "101mm x 152mm (+ $3.50)", price: 3.50 }
        ],

        material: [
            { name: "Select", price: 0 },
            { name: "Sticker Paper Gloss (+ $0.00)", price: 0 },
            { name: "Sticker Paper Matte (+ $0.00)", price: 0 },
            { name: "White Vinyl (+ $5.00)", price: 5 },
            { name: "Clear Vinyl (+ $5.00)", price: 5 }
        ],

        colour: [
            { name: "Select", price: 0 },
            { name: "Black & White (+ $0.00)", price: 0 },
            { name: "Full Colour (+ $20.00)", price: 20 }
        ],

        finish: [
            { name: "Select", price: 0 },
            { name: "Standard Finish (+ $0.00)", price: 0 },
            { name: "High UV Gloss Coating (+ $5.00)", price: 5 }
        ],
        effects:[
            { name: "Select", price: 0 },
            { name: "None (+ $0.00)", price: 0 },
            { name: "Emboss (single side) (+ $5.00)", price: 5 },
            { name: "Deboss (single side) (+ $5.00)", price: 5 },
            { name: "Foil Stamping (+ $15.00)", price: 15 },
            { name: "Spot UV (+ $15.00)", price: 15 }
        ],

        quantity: [
            { name: "Select", price: 0 },
            { name: "50 (+ $0.00)", price: 0 },
            { name: "100 (+ $10.00)", price: 10 },
            { name: "250 (+ $20.00)", price: 20 },
            { name: "500 (+ $40.00)", price: 40 },
            { name: "750 (+ $50.00)", price: 50 },
            { name: "1000 (+ $75.00)", price: 75 },
            { name: "1500 (+ $110.00)", price: 110 },
            { name: "2000 (+ $150.00)", price: 150 },
            { name: "3000 (+ $225.00)", price: 225 },
            { name: "4000 (+ $300.00)", price: 300 },
            { name: "5000 (+ $375.00)", price: 375 },
            { name: "6000 (+ $450.00)", price: 450 },
            { name: "7000 (+ $725.00)", price: 725 },
            { name: "8000 (+ $800.00)", price: 800 },
            { name: "9000 (+ $875.00)", price: 875 },
            { name: "10000 (+ $950.00)", price: 950 }
        ],

        description: "Embossed labels and stickers offer a unique, tactile experience that elevates your branding and product packaging. The raised design creates a sophisticated, high-end look, ensuring your brand stands out with style and elegance."
    },

    heavydutystickers: {
        name: "Heavy Duty Stickers",
        price: 50,
        image: "heavyduty.png",

        circleSizes: [
            { name: "Select", price: 0 },
            { name: "13mm (+ $0.00)", price: 0 },
            { name: "19mm (+ $0.50)", price: 0.5 },
            { name: "25mm (+ $1.00)", price: 1 },
            { name: "32mm (+ $1.50)", price: 1.5 },
            { name: "38mm (+ $2.00)", price: 2 },
            { name: "50mm (+ $2.50)", price: 2.50 },
            { name: "64mm (+ $3.00)", price: 3 },
            { name: "70mm (+ $3.50)", price: 3.50 },
            { name: "76mm (+ $4.00)", price: 4 },
            { name: "101mm (+ $4.50)", price: 4.50 },
            { name: "115mm (+ $5.00)", price: 5 }
        ],

        ovalSizes: [
            { name: "Select", price: 0 },
            { name: "19mm x 38mm (+ $0.50)", price: 0.50 },
            { name: "32mm x 50mm (+ $1.00)", price: 1 },
            { name: "45mm x 64mm (+ $1.50)", price: 1.50 },
            { name: "50mm x 76mm (+ $2.00)", price: 2 },
            { name: "50mm x 83mm (+ $2.50)", price: 2.50 },
            { name: "76mm x 101mm (+ $3.00)", price: 3 },
            { name: "101mm x 152mm (+ $3.50)", price: 3.50 }
        ],

        material: [
            { name: "Select", price: 0 },
            { name: "Sticker Paper Gloss (+ $0.00)", price: 0 },
            { name: "Sticker Paper Matte (+ $0.00)", price: 0 },
            { name: "White Vinyl (+ $5.00)", price: 5 },
            { name: "Clear Vinyl (+ $5.00)", price: 5 }
        ],

        colour: [
            { name: "Select", price: 0 },
            { name: "Black & White (+ $0.00)", price: 0 },
            { name: "Full Colour (+ $20.00)", price: 20 }
        ],

        finish: [
            { name: "Select", price: 0 },
            { name: "Standard Finish (+ $0.00)", price: 0 },
            { name: "High UV Gloss Coating (+ $5.00)", price: 5 }
        ],
        effects:[
            { name: "Select", price: 0 },
            { name: "None (+ $0.00)", price: 0 },
            { name: "Emboss (single side) (+ $5.00)", price: 5 },
            { name: "Deboss (single side) (+ $5.00)", price: 5 },
            { name: "Foil Stamping (+ $15.00)", price: 15 },
            { name: "Spot UV (+ $15.00)", price: 15 }
        ],

        quantity: [
            { name: "Select", price: 0 },
            { name: "50 (+ $0.00)", price: 0 },
            { name: "100 (+ $10.00)", price: 10 },
            { name: "250 (+ $20.00)", price: 20 },
            { name: "500 (+ $40.00)", price: 40 },
            { name: "750 (+ $50.00)", price: 50 },
            { name: "1000 (+ $75.00)", price: 75 },
            { name: "1500 (+ $110.00)", price: 110 },
            { name: "2000 (+ $150.00)", price: 150 },
            { name: "3000 (+ $225.00)", price: 225 },
            { name: "4000 (+ $300.00)", price: 300 },
            { name: "5000 (+ $375.00)", price: 375 },
            { name: "6000 (+ $450.00)", price: 450 },
            { name: "7000 (+ $725.00)", price: 725 },
            { name: "8000 (+ $800.00)", price: 800 },
            { name: "9000 (+ $875.00)", price: 875 },
            { name: "10000 (+ $950.00)", price: 950 }
        ],

        description: "Heavy-duty stickers are built to handle tough conditions without losing quality. At The Sticker Printing, we offer strong, long-lasting heavy duty stickers perfect for vehicles, equipment, outdoor use, and industrial needs."
    },

    //Gift card

    giftcards: {
        name: "Gift Cards",
        price: 50,
        image: "giftcards.png",

        size: [
            { name: "Select", price: 0 },
            { name: "85mm x 55mm (Standard) (+ $0.00)", price: 0 },
            { name: "90mm x 50mm (+ $0.50)", price: 0.50 },
            { name: "100mm x 70mm (+ $1.00)", price: 1 },
            { name: "120mm x 60mm (+ $1.50)", price: 1.50 }

        ],

        finish: [
            { name: "Select", price: 0 },
            { name: "None (+ $0.00)", price: 0 },
            { name: "Gold (+ $1.50)", price: 1.50 },
            { name: "Silver (+ $1.50)", price: 1.50 },
            { name: "Rose Gold (+ $1.50)", price: 1.50 }
        ],

        cornerStyle: [
            { name: "Select", price: 0 },
            { name: "Sharp (+ $0.00)", price: 0 },
            { name: "Rounded (+ $0.00)", price: 0 }
        ],

       quantity: [
            { name: "Select", price: 0 },
            { name: "50 (+ $0.00)", price: 0 },
            { name: "100 (+ $10.00)", price: 10 },
            { name: "250 (+ $20.00)", price: 20 },
            { name: "500 (+ $40.00)", price: 40 },
            { name: "750 (+ $50.00)", price: 50 },
            { name: "1000 (+ $75.00)", price: 75 },
            { name: "1500 (+ $110.00)", price: 110 },
            { name: "2000 (+ $150.00)", price: 150 },
            { name: "3000 (+ $225.00)", price: 225 },
            { name: "4000 (+ $300.00)", price: 300 },
            { name: "5000 (+ $375.00)", price: 375 },
            { name: "6000 (+ $450.00)", price: 450 },
            { name: "7000 (+ $725.00)", price: 725 },
            { name: "8000 (+ $800.00)", price: 800 },
            { name: "9000 (+ $875.00)", price: 875 },
            { name: "10000 (+ $950.00)", price: 950 }
        ],
        description: "Gift cards are more than just a present—they’re a thoughtful experience. At The Sticker Printing, we offer high-quality custom gift card printing that’s perfect for businesses and personal gifting. Whether you need branded gift cards for your store or a custom card for someone special, we’ve got you covered."
    },

    //Label & Tags 

    assetlabels: {
        name: "Asset Labels",
        price: 50,
        image: "assetlabels.png",

        size: [
            { name: "Select", price: 0 },
            { name: "20mm x 10mm (+ $0.00)", price: 0 },
            { name: "40mm x 20mm (+ $0.50)", price: 0.50 },
            { name: "50mm x 25mm (+ $1.00)", price: 1 },
            { name: "60mm x 30mm (+ $1.50)", price: 1.50 },
            { name: "80mm x 40mm (+ $2.00)", price: 2 },
            { name: "100mm x 50mm (+ $2.50)", price: 2.50 },
        ],

        material: [
            { name: "Select", price: 0 },
            { name: "White Vinyl (+ $5.00)", price: 5 },
             { name: "Clear Vinyl (+ $5.00)", price: 5 }
        ],

        finish: [
            { name: "Select", price: 0 },
            { name: "Matte (+ $0.00)", price: 0 },
            { name: "Gloss (+ $2.00)", price: 0 }
        ],

        cornerStyle: [
            { name: "Select", price: 0 },
            { name: "Sharp (+ $0.00)", price: 0 },
            { name: "Rounded (+ $0.00)", price: 0 }
        ],

        quantity: [
            { name: "Select", price: 0 },
            { name: "50 (+ $0.00)", price: 0 },
            { name: "100 (+ $10.00)", price: 10 },
            { name: "250 (+ $20.00)", price: 20 },
            { name: "500 (+ $40.00)", price: 40 },
            { name: "750 (+ $50.00)", price: 50 },
            { name: "1000 (+ $75.00)", price: 75 },
            { name: "1500 (+ $110.00)", price: 110 },
            { name: "2000 (+ $150.00)", price: 150 },
            { name: "3000 (+ $225.00)", price: 225 },
            { name: "4000 (+ $300.00)", price: 300 },
            { name: "5000 (+ $375.00)", price: 375 },
            { name: "6000 (+ $450.00)", price: 450 },
            { name: "7000 (+ $725.00)", price: 725 },
            { name: "8000 (+ $800.00)", price: 800 },
            { name: "9000 (+ $875.00)", price: 875 },
            { name: "10000 (+ $950.00)", price: 950 }
        ],

        description: "Protect your valuable assets with custom asset labels, tags, and stickers designed for long-lasting durability and security. At The Sticker Printing, we specialize in high-quality asset labeling solutions that help businesses efficiently track, manage, and safeguard their equipment, tools, and inventory. Our labels are built to withstand harsh environments, ensuring clear readability and strong adhesion on a variety of surfaces."
    },

    doorhangers: {
        name: "Door Hangers",
        price: 50,
        image: "doorhangers.png",

        size: [
            { name: "Select", price: 0 },
            { name: "88mm x 215mm (+ $0.00)", price: 0 },
            { name: "88mm x 280mm (+ $0.50)", price: 0.50 },
            { name: "105mm x 280mm (+ $1.00)", price: 1 },
            { name: "105mm x 360mm (+ $1.50)", price: 1.50 }
        ],

        material: [
            { name: "Select", price: 0 },
            { name: "310 GSM Art Card (+ $11.00)", price: 11 },
            { name: "350 GSM Art Card (+ $12.00)", price: 12 }
        ],
        colour: [
            { name: "Select", price: 0 },
            { name: "Black & White (+ $0.00)", price: 0 },
            { name: "Full Colour (+ $20.00)", price: 20 }
        ],

        finish: [
            { name: "Select", price: 0 },
            { name: "Standard Gloss Finish (+ $0.00)", price: 0 },
            { name: "High Gloss Finish (+ $5.00)", price: 5 },
            { name: "Matte Finish (+ $5.00)", price: 5 }
        ],

        quantity: [
            { name: "Select", price: 0 },
            { name: "50 (+ $0.00)", price: 0 },
            { name: "100 (+ $10.00)", price: 10 },
            { name: "250 (+ $20.00)", price: 20 },
            { name: "500 (+ $40.00)", price: 40 },
            { name: "750 (+ $50.00)", price: 50 },
            { name: "1000 (+ $75.00)", price: 75 },
            { name: "1500 (+ $110.00)", price: 110 },
            { name: "2000 (+ $150.00)", price: 150 },
            { name: "3000 (+ $225.00)", price: 225 },
            { name: "4000 (+ $300.00)", price: 300 },
            { name: "5000 (+ $375.00)", price: 375 },
            { name: "6000 (+ $450.00)", price: 450 },
            { name: "7000 (+ $725.00)", price: 725 },
            { name: "8000 (+ $800.00)", price: 800 },
            { name: "9000 (+ $875.00)", price: 875 },
            { name: "10000 (+ $950.00)", price: 950 }
        ],

        description: "Door Hangers are a fantastic way to grab attention and deliver important messages directly to your audience. Whether for business promotions, event invitations, or personal use, The Sticker Printing offers high-quality custom door hanger printing that ensures your message stands out."
    },

    standardcustomlabels: {
        name: "Standard Custom Labels",
        price: 50,
        image: "standardcustomlabel.png",
        size: [
            { name: "Select", price: 0 },
            { name: "50mm x 50mm (+ $0.00)", price: 0 },
            { name: "75mm x 128mm (+ $0.50)", price: 0.50 },
            { name: "75mm x 150mm (+ $1.00)", price: 1 },
            { name: "101mm x 101mm (+ $1.50)", price: 1.50 },
            { name: "101mm x 155mm (+ $2.00)", price: 2 },
            { name: "127mm x 127mm (+ $2.50)", price: 2.50 },
            { name: "127mm x 178mm (+ $3.00)", price: 3 },
            { name: "228mm x 75mm (+ $3.50)", price: 3.50 },
            { name: "255mm x 75mm (+ $4.00)", price: 4 }
        ],

        material: [
            { name: "Select", price: 0 },
            { name: "White Vinyl (+ $5.00)", price: 5 },
             { name: "Clear Vinyl (+ $5.00)", price: 5 }
        ],

        colour: [
            { name: "Select", price: 0 },
            { name: "Black & White (+ $0.00)", price: 0 },
            { name: "Full Colour (+ $20.00)", price: 20 }
        ],

        finish: [
            { name: "Select", price: 0 },
            { name: "Matte (+ $0.00)", price: 0 },
            { name: "Gloss (+ $2.00)", price: 0 }
        ],

        quantity: [
            { name: "Select", price: 0 },
            { name: "50 (+ $0.00)", price: 0 },
            { name: "100 (+ $10.00)", price: 10 },
            { name: "250 (+ $20.00)", price: 20 },
            { name: "500 (+ $40.00)", price: 40 },
            { name: "750 (+ $50.00)", price: 50 },
            { name: "1000 (+ $75.00)", price: 75 },
            { name: "1500 (+ $110.00)", price: 110 },
            { name: "2000 (+ $150.00)", price: 150 },
            { name: "3000 (+ $225.00)", price: 225 },
            { name: "4000 (+ $300.00)", price: 300 },
            { name: "5000 (+ $375.00)", price: 375 },
            { name: "6000 (+ $450.00)", price: 450 },
            { name: "7000 (+ $725.00)", price: 725 },
            { name: "8000 (+ $800.00)", price: 800 },
            { name: "9000 (+ $875.00)", price: 875 },
            { name: "10000 (+ $950.00)", price: 950 }
        ],
        description: "Labels do more than share info—they showcase your brand. At The Sticker Printing, we create high-quality custom labels that make your products stand out. Perfect for bottles, jars, packaging, or promos, our labels are designed to boost your brand and leave a lasting impression."
    },

    //Large Signage

    posters: {
        name: "Posters",
        price: 150,
        image: "posters.png",

        size: [
            { name: "Select", price: 0 },
            { name: "28cm x 44cm (+ $0.00)", price: 0 },
            { name: "30.5cm x 46cm (+ $0.50)", price: 0.50 },
            { name: "46cm x 60cm (+ $1.00)", price: 1 },
            { name: "56cm x 72cm (+ $1.50)", price: 1.50 },
            { name: "60cm x 90cm (+ $2.00)", price: 2 }

        ],
        
        material: [
            { name: "Select", price: 0 },
            { name: "150 GSM Poster Paper (+ $0.00)", price: 0 },
            { name: "310 GSM Poster Card (+ $11.00)", price: 11 },
            { name: "350 GSM Poster Card (+ $13.00)", price: 13 }

        ],

        colour: [
            { name: "Select", price: 0 },
            { name: "Black & White (+ $0.00)", price: 0 },
            { name: "Full Colour (+ $20.00)", price: 20 }
        ],

        finish: [
            { name: "Select", price: 0 },
            { name: "Standard Gloss Finish (+ $0.00)", price: 0 },
            { name: "Standard Matte Finish (+ $3.00)", price: 3 },
            { name: "High Gloss Finish (+ $5.00)", price: 5 }

        ],

        quantity: [
            { name: "Select", price: 0 },
            { name: "50 (+ $0.00)", price: 0 },
            { name: "100 (+ $10.00)", price: 10 },
            { name: "250 (+ $20.00)", price: 20 },
            { name: "500 (+ $40.00)", price: 40 },
            { name: "750 (+ $50.00)", price: 50 },
            { name: "1000 (+ $75.00)", price: 75 },
            { name: "1500 (+ $110.00)", price: 110 },
            { name: "2000 (+ $150.00)", price: 150 },
            { name: "3000 (+ $225.00)", price: 225 },
            { name: "4000 (+ $300.00)", price: 300 },
            { name: "5000 (+ $375.00)", price: 375 },
            { name: "6000 (+ $450.00)", price: 450 },
            { name: "7000 (+ $725.00)", price: 725 },
            { name: "8000 (+ $800.00)", price: 800 },
            { name: "9000 (+ $875.00)", price: 875 },
            { name: "10000 (+ $950.00)", price: 950 }
        ],


        description: "Posters are a powerful marketing tool, perfect for grabbing attention and spreading your message. Whether you’re promoting an event, showcasing your brand, or creating eye-catching artwork."
    },

    vinylbanner: {
        name: "Vinyl Banner",
        price: 250,
        image: "vinylbanner.png",
        size : [
            { name: "Select", price: 0 },
            { name: "0.3m x 0.3m (+ $0.00)", price: 0 },
            { name: "0.5m x 0.5m (+ $5.00)", price: 5 },
            { name: "0.5m x 1m (+ $5.00)", price: 5 },
            { name: "0.5m x 1.5m (+ $5.00)", price: 5 },
            { name: "0.5m x 2m (+ $5.00)", price: 5 },
            { name: "0.5m x 3m (+ $5.00)", price: 5 },
            { name: "1m x 1.5m (+ $10.00)", price: 10 },
            { name: "1m x 2m (+ $10.00)", price: 10 },
            { name: "1m x 2.5m (+ $10.00)", price: 10 },
            { name: "1m x 3m (+ $10.00)", price: 10 },
            { name: "1.5m x 1.5m (+ $15.00)", price: 15 },
            { name: "1.5m x 2m (+ $15.00)", price: 15 },
            { name: "1.5m x 3m (+ $15.00)", price: 15 },
            { name: "2m x 3m (+ $20.00)", price: 20 },
            { name: "2m x 4m (+ $20.00)", price: 20 },
            { name: "2m x 5m (+ $20.00)", price: 20 },
            { name: "3m x 3m (+ $25.00)", price: 25 },
            { name: "3m x 3.5m (+ $25.00)", price: 25 }
        ],

        material: [
            { name: "Select", price: 0 },
            { name: "9 Oz Matt Vinyl (+ $5.00)", price: 5 },
            { name: "13 Oz Matt Vinyl (+ $7.00)", price: 7 }
        ],

        colour: [
            { name: "Select", price: 0 },
            { name: "Black & White (+ $0.00)", price: 0 },
            { name: "Full Colour (+ $20.00)", price: 20 }
        ],

        finish: [
            { name: "Select", price: 0 },
            { name: "Raw Edges (No Grommets & Hem) (+ $0.00)", price: 0 },
            { name: "Grommets & Hem (+ $5.00)", price: 5 },
            { name: "75mm Pole Pocket (Left & Right) (+ $5.00)", price: 5 },
            { name: "75mm Pole Pocket (Top & Bottom) (+ $5.00)", price: 5 }
        ],

        quantity: [
            { name: "Select", price: 0 },
            { name: "50 (+ $0.00)", price: 0 },
            { name: "100 (+ $10.00)", price: 10 },
            { name: "250 (+ $20.00)", price: 20 },
            { name: "500 (+ $40.00)", price: 40 },
            { name: "750 (+ $50.00)", price: 50 },
            { name: "1000 (+ $75.00)", price: 75 },
            { name: "1500 (+ $110.00)", price: 110 },
            { name: "2000 (+ $150.00)", price: 150 },
            { name: "3000 (+ $225.00)", price: 225 },
            { name: "4000 (+ $300.00)", price: 300 },
            { name: "5000 (+ $375.00)", price: 375 },
            { name: "6000 (+ $450.00)", price: 450 },
            { name: "7000 (+ $725.00)", price: 725 },
            { name: "8000 (+ $800.00)", price: 800 },
            { name: "9000 (+ $875.00)", price: 875 },
            { name: "10000 (+ $950.00)", price: 950 }
        ],

        description: "Vinyl banners are an exceptional way to make a bold statement at events, in-store promotions, or outdoor advertising campaigns. At The Sticker Printing, we specialize in custom vinyl banner printing, providing high-quality, weather-resistant banners that ensure your message stands out and lasts."
    },

    // Marketing Materials

    businesscards: {
        name: "Business Cards",
        price: 50,
        image: "businesscards.png",

        size: [
            { name: "Select", price: 0 },
            { name: "90mm x 50mm (Standard) (+ $0.00)", price: 0 },
            { name: "50mm x 50mm (Mini Square) (+ $1.00)", price: 1 },
            { name: "90mm x 90mm (Jumbo Square) (+ $2.00)", price: 2 },
            { name: "90mm x 25mm (Slim) (+ $3.00)", price: 3 }
        ],

        material: [
            { name: "Select", price: 0 },
            { name: "310 GSM Card Stock (+ $8.00)", price: 8 },
            { name: "350 GSM Card Stock (+ $10.00)", price: 10 },
            { name: "400 GSM Card Stock", price: 12 },
            { name: "600 GSM Card Stock (+ $15.00)", price: 15 }
        ],

        colour: [
            { name: "Select", price: 0 },
            { name: "Black & White (+ $0.00)", price: 0 },
            { name: "Full Colour (+ $20.00)", price: 20 }
        ],

        finish: [
            { name: "Select", price: 0 },
            { name: "Standard Gloss Finish (+ $0.00)", price: 0 },
            { name: "Standard Matte Finish (+ $3.00)", price: 3 },
            { name: "Matte Finish (+ $5.00)", price: 5 }
        ],
        specialEffects: [
            { name: "Select", price: 0 },
            { name: "Emboss ( Single Side) (+ $5.00)", price: 5 },
            { name: "Deboss ( Single Side) (+ $5.00)", price: 5 },
            { name: "Foil Stamping ( Single Sided) (+ $5.00)", price: 5 },
            { name: "Spot UV ( Single Sided) (+ $5.00)", price: 5 }
        ],

        quantity: [
            { name: "Select", price: 0 },
            { name: "50 (+ $0.00)", price: 0 },
            { name: "100 (+ $10.00)", price: 10 },
            { name: "250 (+ $20.00)", price: 20 },
            { name: "500 (+ $40.00)", price: 40 },
            { name: "750 (+ $50.00)", price: 50 },
            { name: "1000 (+ $75.00)", price: 75 },
            { name: "1500 (+ $110.00)", price: 110 },
            { name: "2000 (+ $150.00)", price: 150 },
            { name: "3000 (+ $225.00)", price: 225 },
            { name: "4000 (+ $300.00)", price: 300 },
            { name: "5000 (+ $375.00)", price: 375 },
            { name: "6000 (+ $450.00)", price: 450 },
            { name: "7000 (+ $725.00)", price: 725 },
            { name: "8000 (+ $800.00)", price: 800 },
            { name: "9000 (+ $875.00)", price: 875 },
            { name: "10000 (+ $950.00)", price: 950 }
        ],
        
        description: "Business cards are more than just contact details; they are a powerful tool to represent your business. At The Sticker Printing, we ensure that your custom business card printing experience is not only informative but also memorable, leaving a lasting impression on clients."
    },

    brochures: {
        name: "Brochures",
        price: 50,
        image: "brochure.png",

        size: [
            { name: "Select", price: 0 },
            { name: "DL (+ $1.00)", price: 1 },
            { name: "A6 (+ $2.00)", price: 2 },
            { name: "A5 (+ $3.00)", price: 3 },
            { name: "A4 (+ $4.00)", price: 4 },
            { name: "Square 210mm x 210mm (+ $5.00)", price: 5 }
        ],

        colour: [
            { name: "Select", price: 0 },
            { name: "Black & White (+ $0.00)", price: 0 },
            { name: "Full Colour (+ $20.00)", price: 20 }
        ],

        foldType: [
            { name: "Select", price: 0 },
            { name: "Bi-Fold (+ $0.00)", price: 0 },
            { name: "Tri-Fold (+ $0.00)", price: 0 },
            { name: "Z-Fold (+ $0.00)", price: 0 },
            { name: "Gate Fold (+ $0.00)", price: 0 },
            { name: "Half Fold (+ $0.00)", price: 0 }
        ],

        material: [
            { name: "Select", price: 0 },
            { name: "150 GSM Gloss (+ $0.00)", price: 0 },
            { name: "170 GSM Gloss (+ $2.00)", price: 2 },
            { name: "250 GSM Gloss (+ $4.00)", price: 4 },
            { name: "300 GSM Gloss (+ $6.00)", price: 6 }
        ],

        printing: [
            { name: "Select", price: 0 },
            { name: "Single Sided (+ $0.00)", price: 0 },
            { name: "Double Sided (+ $5.00)", price: 5 }
        ],

        finish: [
            { name: "Select", price: 0 },
            { name: "Matte (+ $0.00)", price: 0 },
            { name: "Gloss (+ $2.00)", price: 0 },
            { name: "Soft Touch (+ $5.00)", price: 5 }
        ],

        quantity: [
            { name: "Select", price: 0 },
            { name: "50 (+ $0.00)", price: 0 },
            { name: "100 (+ $10.00)", price: 10 },
            { name: "250 (+ $20.00)", price: 20 },
            { name: "500 (+ $40.00)", price: 40 },
            { name: "750 (+ $50.00)", price: 50 },
            { name: "1000 (+ $75.00)", price: 75 },
            { name: "1500 (+ $110.00)", price: 110 },
            { name: "2000 (+ $150.00)", price: 150 },
            { name: "3000 (+ $225.00)", price: 225 },
            { name: "4000 (+ $300.00)", price: 300 },
            { name: "5000 (+ $375.00)", price: 375 },
            { name: "6000 (+ $450.00)", price: 450 },
            { name: "7000 (+ $725.00)", price: 725 },
            { name: "8000 (+ $800.00)", price: 800 },
            { name: "9000 (+ $875.00)", price: 875 },
            { name: "10000 (+ $950.00)", price: 950 }
        ],
    
        description: "Brochures are one of the most effective marketing tools, allowing you to showcase your brand, products, and services in a professional and engaging way. At The Sticker Printing, we specialize in high-quality custom brochure printing that is not only affordable but designed to capture audience’s attention."
    },

    eventtickets: {
        name: "Event Tickets",
        price: 50,
        image: "eventtickets.png",

        size: [
            { name: "Select", price: 0 },
            { name: "50mm x 140mm (+ $0.00)", price: 0 },
            { name: "55mm x 150mm (+ $1.00)", price: 1 },
            { name: "70mm x 150mm (+ $2.00)", price: 3 },
            { name: "80mm x 200mm (+ $3.00)", price: 4 }
        ],

        material: [
            { name: "Select", price: 0 },
            { name: "250 GSM Gloss (+ $4.00)", price: 4 },
            { name: "300 GSM Gloss (+ $6.00)", price: 6 },
            { name: "350 GSM Card Stock (+ $10.00)", price: 10 },
            { name: "Synthetic Waterproof Stock (+ $12.00)", price: 12 }
        ],

        colour: [
            { name: "Select", price: 0 },
            { name: "Black & White (+ $0.00)", price: 0 },
            { name: "Full Colour (+ $20.00)", price: 20 }
        ],

        finish: [
            { name: "Select", price: 0 },
            { name: "Matte (+ $0.00)", price: 0 },
            { name: "Gloss (+ $2.00)", price: 0 }
        ],

        quantity: [
            { name: "Select", price: 0 },
            { name: "50 (+ $0.00)", price: 0 },
            { name: "100 (+ $10.00)", price: 10 },
            { name: "250 (+ $20.00)", price: 20 },
            { name: "500 (+ $40.00)", price: 40 },
            { name: "750 (+ $50.00)", price: 50 },
            { name: "1000 (+ $75.00)", price: 75 },
            { name: "1500 (+ $110.00)", price: 110 },
            { name: "2000 (+ $150.00)", price: 150 },
            { name: "3000 (+ $225.00)", price: 225 },
            { name: "4000 (+ $300.00)", price: 300 },
            { name: "5000 (+ $375.00)", price: 375 },
            { name: "6000 (+ $450.00)", price: 450 },
            { name: "7000 (+ $725.00)", price: 725 },
            { name: "8000 (+ $800.00)", price: 800 },
            { name: "9000 (+ $875.00)", price: 875 },
            { name: "10000 (+ $950.00)", price: 950 }
        ],

        description: "Event tickets are more than just entry passes—they help set the tone for your event. At The Sticker Printing, we offer high-quality custom event ticket printing that leaves a lasting impression. Whether it’s a concert, festival, conference, or any special event, our custom tickets are made to look great and stand out."
    },

    menus: {
        name: "Menus",
        price: 50,
        image: "menus.png",

        size: [
            { name: "Select", price: 0 },
            { name: "108mm x 280mm (+ $2.00)", price: 2 },
            { name: "140mm x 216mm (+ $4.00)", price: 4 },
            { name: "216mm x 280mm (+ $6.00)", price: 6 },
            { name: "216mm x 356mm (+ $8.00)", price: 8 },
            { name: "280mm x 432mm (+ $10.00)", price: 10 },
            { name: "280mm x 432mm (+ $12.00)", price: 12 }
        ],

        material: [
            { name: "Select", price: 0 },
            { name: "150 GSM Art Paper (+ $10.00)", price: 10 },
            { name: "310 GSM Art Card (+ $11.00)", price: 11 },
            { name: "350 GSM Art Card (+ $12.00)", price: 12 }
        ],

        colour: [
            { name: "Select", price: 0 },
            { name: "Black & White (+ $0.00)", price: 0 },
            { name: "Full Colour (+ $20.00)", price: 20 }
        ],

        finish: [
            { name: "Select", price: 0 },
            { name: "Standard Gloss Finish (+ $0.00)", price: 0 },
            { name: "Standard Matte Finish (+ $3.00)", price: 3 },
            { name: "High Gloss Finish (+ $5.00)", price: 5 }
        ],

        quantity: [
            { name: "Select", price: 0 },
            { name: "50 (+ $0.00)", price: 0 },
            { name: "100 (+ $10.00)", price: 10 },
            { name: "250 (+ $20.00)", price: 20 },
            { name: "500 (+ $40.00)", price: 40 },
            { name: "750 (+ $50.00)", price: 50 },
            { name: "1000 (+ $75.00)", price: 75 },
            { name: "1500 (+ $110.00)", price: 110 },
            { name: "2000 (+ $150.00)", price: 150 },
            { name: "3000 (+ $225.00)", price: 225 },
            { name: "4000 (+ $300.00)", price: 300 },
            { name: "5000 (+ $375.00)", price: 375 },
            { name: "6000 (+ $450.00)", price: 450 },
            { name: "7000 (+ $725.00)", price: 725 },
            { name: "8000 (+ $800.00)", price: 800 },
            { name: "9000 (+ $875.00)", price: 875 },
            { name: "10000 (+ $950.00)", price: 950 }
        ],

        description: "Menus do more than list food—they showcase your brand and set the tone for your dining experience. At The Sticker Printing, we create high-quality custom menus that highlight your dishes and make a lasting impression."
    },

    tabletents: {
        name: "Table Tents",
        price: 50,
        image: "tabletents.png",

        size: [
            { name: "Select", price: 0 },
            { name: "72mm x 280mm (Flat Size: 72mm X 666mm (+ $0.00)", price: 0 },
            { name: "101mm x 155mm (Flat Size: 101mm X 415mm) (+ $5.00)", price: 5 }
        ],

        material: [
            { name: "Select", price: 0 },
            { name: "260 GSM Art Card (+ $9.00)", price: 9 },
            { name: "280 GSM Art Card (+ $10.00)", price: 10 },
            { name: "310 GSM Art Card (+ $11.00)", price: 11 },
            { name: "350 GSM Art Card (+ $12.00)", price: 12 }
        ],

        colour: [
            { name: "Select", price: 0 },
            { name: "Black & White (+ $0.00)", price: 0 },
            { name: "Full Colour (+ $20.00)", price: 20 }
        ],

        finish: [
            { name: "Select", price: 0 },
            { name: "Standard Gloss Finish (+ $0.00)", price: 0 },
            { name: "Standard Matte Finish (+ $3.00)", price: 3 },
            { name: "High Gloss Finish (+ $5.00)", price: 5 }
        ],

        quantity: [
            { name: "Select", price: 0 },
            { name: "50 (+ $0.00)", price: 0 },
            { name: "100 (+ $10.00)", price: 10 },
            { name: "250 (+ $20.00)", price: 20 },
            { name: "500 (+ $40.00)", price: 40 },
            { name: "750 (+ $50.00)", price: 50 },
            { name: "1000 (+ $75.00)", price: 75 },
            { name: "1500 (+ $110.00)", price: 110 },
            { name: "2000 (+ $150.00)", price: 150 },
            { name: "3000 (+ $225.00)", price: 225 },
            { name: "4000 (+ $300.00)", price: 300 },
            { name: "5000 (+ $375.00)", price: 375 },
            { name: "6000 (+ $450.00)", price: 450 },
            { name: "7000 (+ $725.00)", price: 725 },
            { name: "8000 (+ $800.00)", price: 800 },
            { name: "9000 (+ $875.00)", price: 875 },
            { name: "10000 (+ $950.00)", price: 950 }
        ],
        description: "Table tents are an effective and stylish way to capture attention in any setting, whether at a restaurant, event, or retail space. At The Sticker Printing, we specialize in high-quality custom table tent printing, offering vibrant designs that allow your message to shine, creating an impactful presence on any table."
    },

    //Speciality Finishes
    foilstamping: {
        name: "Foil Stamping",
        price: 20,
        image: "foilstamping.png",
        foilColour: [
            { name: "Select", price: 0 },
            { name: "Gold (+ $1.50)", price: 1.50 },
            { name: "Silver (+ $1.50)", price: 1.50 },
            { name: "Rose Gold (+ $1.50)", price: 1.50 },
            { name: "Copper (+ $1.50)", price: 1.50 },
            { name: "Holographic (+ $1.50)", price: 1.50 },
            { name: "Black (+ $1.50)", price: 1.50 }
        ],

        application: [
            { name: "Select", price: 0 },
            { name: "Logo (+ $0.00)", price: 0 },
            { name: "Text (+ $0.00)", price: 0 },
            { name: "Border (+ $0.00)", price: 0 }
        ],

        side: [
            { name: "Select", price: 0 },
            { name: "Front Only (+ $0.00)", price: 0 },
            { name: "Front & Back (+ $10.00)", price: 10 }
        ],

        description: "At The Sticker Printing, we specialize in high-quality foil stamping and gold foil printing, offering stunning, metallic finishes that make your designs pop. Whether you’re creating business cards, invitations, packaging, or marketing materials, foil stamping is the perfect way to elevate your brand’s visual appeal."
    }

};


const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("headNav");

if (hamburger && nav) {
    //expand menu on mobile
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

//close navigation when touching outside
document.addEventListener("click", (touch) => {
    if (!nav.contains(touch.target) && !hamburger.contains(touch.target)){
        nav.classList.remove("active");
    }
});





//show search dropdown
const searchBtn = document.querySelector(".searchBtn");
const search = document.querySelector(".search");

//if the page has the search and it is clicked open the input bar
if (searchBtn && search){
    searchBtn.addEventListener("click", () => {
        //mobile only
        if (window.innerWidth <= 400) { 
            search.classList.toggle("active");
        }
        
    });

}

document.addEventListener("click", (touch) => {
    const input = document.querySelector(".search input");

    //touching outside the search bar closes it
    if (!search.contains(touch.target)) {
        input.getBoundingClientRect(); //closes focus and dropdown
        search.classList.remove("active");
    }

});

//MENU mobile
//on mobile don't auto open categories page, open sub dropdown for categories
const productsLinks = document.getElementById("productLinks");

if (productsLinks) {
    productsLinks.addEventListener("click", function(open) {
        if (window.innerWidth <= 480) {
            open.preventDefault();
            this.parentElement.classList.toggle("open");
        }
    });
}

//cart icon update (empty/not empty)
function updateCartIcon() {
    const cartIcon = document.getElementById("cartIcon");

    //if there is a cart on the page
    if (cartIcon) {
        const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        if (cart.length > 0) {
            cartIcon.src = "cartFilled.png";
        }
        else{
            cartIcon.src = "cartEmpty.png";
        }
    }
}

updateCartIcon();

//get product id from URL

const params = new URLSearchParams(window.location.search);

const productID = params.get("id");

//find the product that matches id
const product = products[productID];

//create selections for products
const selections = document.querySelector(".selections");

//for tracking price of each product
let currentTotalPrice = 0;
let currentSelections = {}; //store selections for cart

// if the product exists update content
if (product) {
    currentTotalPrice = product.price;

    //image
    document.getElementById("productImage").src = product.image;

    //productname
    document.getElementById("productName").textContent = product.name;

    //price
    document.getElementById("startingPrice").textContent = "$" + product.price;

    //product description
    document.getElementById("productDescription").textContent = product.description;

    function updateProductPrice() {
        let total = product.price;

        document.querySelectorAll(".selections select").forEach(select => {
            const selected = select.options[select.selectedIndex];

            total += Number(selected.dataset.price || 0);
        });

        currentTotalPrice = total; 
        document.getElementById("startingStatement").textContent = "$" + total.toFixed(2) + " AUD";
    
    }
    
    // group of selections
        const sections = []

    for (let key in product) {

        //skip product info only need selections options
        if ( key=== "name" || key === "price" || key === "image" || key ==="description" ) {
            continue;
        }

        //create section for each selection
        const section = document.createElement("section");
        section.classList.add("d-none"); // hide all at first

        //create label
        const title = document.createElement("h3");
        const formattedTitle = key
            .replace(/[A-Z]/g, ' $&')
            .replace(/^./, str => str.toUpperCase());
        title.textContent = formattedTitle + " *";


        //create selections element
        const select = document.createElement("Select");

        // add select options
        product[key].forEach(item => {
            const option = document.createElement("option");

            option.textContent = item.name;
            option.value = item.name;
            option.dataset.price = item.price;

            select.appendChild(option);
        });

        //add the title and each selection to a section
        section.appendChild(title); // put the element inside element
        section.appendChild(select);

        // add the section to the page
        selections.appendChild(section);

        // record position of section
        const index = sections.length;
        // add the section to array of sections
        sections.push(section);

         // reveal next selection after previous one is made
        select.addEventListener("change", () => {
            selectionChanged();
            updateProductPrice();
        });

        // detects selection change
        function selectionChanged(){
            const currentIndex = sections.indexOf(section); // track current selection avail.
            
            if (select.value === "Select") { // this is placeholder so doesn't count as a change
                return;
            }

            //track the selections made
            currentSelections[key] = select.value;
            
            //specific process for sticker products
            if (productID === "standardstickers" || productID === "heavydutystickers" || productID === "clearstickers" || productID === "embossedstickers" || productID === "diecutstickers") {
                //if current selection is shape
                if (key === "shape") {
                    //if circle was selected only show sizes for circle
                    if (select.value === "Circle (+ $0.00)") {
                        sections[currentIndex + 1].classList.remove("d-none");
                    //open oval sizes (next is material anyway so no need for seperate skip logic)   
                    }else if (select.value === "Oval (+ $0.00)") {
                        sections[currentIndex + 2].classList.remove("d-none");

                    }
                    return;
                }
                //if circle sizes then skip to material
                if (key === "circleSizes") {
                    sections[currentIndex + 2].classList.remove("d-none");
                    return;
                }
            }

            
            const nextSection = sections[currentIndex + 1]; // find next avail selection

            // enable upload design button after completing last selection
            if (currentIndex === sections.length - 1) {
                document.getElementById("uploadDesign").disabled = false;
            }
            else {
                nextSection.classList.remove("d-none"); // remove visibility marker
            }
        }

        
    }

    // always show first selection 
    if (sections.length > 0) {
        sections[0].classList.remove("d-none");
    }

}


//if shape is selected show appropriate sizing selections
function openSize(shape){

    //intiialise it to always have it unless selection made
    document.getElementById('sizeSelectionCircle').classList.add('d-none');
    document.getElementById('sizeSelectionOval').classList.add('d-none');


    if (shape.value == "0") {
        document.getElementById('sizeSelectionCircle').classList.remove('d-none');
    }
    if (shape.value == "1") {
        document.getElementById('sizeSelectionOval').classList.remove('d-none');
    }

}

//show new selection after previous one is made
function showNext(next){
            document.getElementById(next).classList.remove('d-none');


}

//UPLOAD DESIGN BUTTON
const input = document.getElementById("fileInput");
const uploadBtn = document.getElementById("uploadDesign");
const fileName = document.getElementById("fileName");
const replaceBtn = document.getElementById("replaceFile");

if (uploadBtn && input && fileName){
    uploadBtn.addEventListener("click", function() {
        input.click();

    });


    input.addEventListener("change", function(){
        if (input.value) {
            fileName.innerHTML = "✅ " + input.files[0].name + " [uploaded]";
        }else {
            fileName.innerHTML = "";
        }

        if (fileName.innerHTML !== "") {
            replaceBtn.classList.remove("d-none");
            document.getElementById("addToCart").disabled = false; /*if design is uploaded add to cart is now avail */
        }

    });
}


//CART FUNCTIONS
const addToCartBtn = document.getElementById("addToCart");

if (addToCartBtn){
    addToCartBtn.addEventListener("click", function () {
        //get existing / create new if none already cart
        let cart = JSON.parse(sessionStorage.getItem("cart")) || []; //restarts when tab reopened only

        let selectionsArray = [];
        document.querySelectorAll(".selections select").forEach(select => {
            const key = select.previousElementSibling.textContent.replace(' *', ''); //make as key and also remove astricks
            const value = select.value;

            //only include if not 'Select'
            if (value !== "Select") {
                //check if key already exists in the array
                const existingIndex = selectionsArray.findIndex(s => s.key === key);
                if (existingIndex >= 0) {
                    selectionsArray[existingIndex].value = value; //update if selection was changed
                }
                else {
                    selectionsArray.push({key, value}); //add the newly made one
                }
            }
        });

        //create product object for cart
        const cartItem = {
            id: productID,
            name: product.name,
            image: product.image,
            price: currentTotalPrice,
            quantity: 1,
            selections: selectionsArray
        };

        //check if item is already in cart 
        const alreadyAdded = cart.find(item => item.id === productID);

        if (alreadyAdded) {
            alreadyAdded.quantity += 1;
            alreadyAdded.selections = selectionsArray; // update selections if re-added
        }else {
            //add the item to cart
            cart.push(cartItem);
        }
        

        //save updated cart so it doesn't restart on refresh
        sessionStorage.setItem("cart", JSON.stringify(cart));
        updateCartIcon();

        alert("Added to Cart");
    });
}



//load items into cart
const cartList = document.querySelector(".items");
function calculateSubtotal(cart) {
    return cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);
}
if (cartList){
    //get saved/ if empty a new cart
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    function updateSummary() {
        let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

        let subtotal = calculateSubtotal(cart);
        let delivery = 10;
        let total = subtotal > 0 ? (subtotal + delivery) : 0;

        document.getElementById("subtotalCost").textContent = "$" + subtotal;
        document.getElementById("deliveryCost").textContent = "From $" + delivery;
        document.getElementById("totalPrice").textContent = "$" + total;

        sessionStorage.setItem("subtotal", subtotal);
        sessionStorage.setItem("delivery", delivery);
        sessionStorage.setItem("total", total);
    }

    if (cart.length === 0){
        cartList.innerHTML = `
        <section class= "empty">
            <a href="Categories.html">Continue Shopping</a>
            </section>
            `;
        document.getElementById("checkoutBtn").disabled = true;
    }else { 
        //item and index to keep track of item actions (quantity changes etc)
        cart.forEach((item, index) => {
            const itemSection = document.createElement("section");
            itemSection.classList.add("buyItem");

            let selectionsHTML = "";
            if (item.selections && item.selections.length > 0) {
                item.selections.forEach(sel => {
                    selectionsHTML += `<p><span class="selKey">${sel.key}:</span> ${sel.value}</p>`;
                });
            }
            
            itemSection.innerHTML = `
            <img src="${item.image}" class="itemImage">

            <section class="productDetails">

                <h2 class="itemName">${item.name}</h2>

                <details class="selectionSummary">
                    <summary id="reviewSelections">Selections</summary>
                    ${selectionsHTML}
                </details>

                <div class="itemQuantity">

                    <button class="decreasebtn">-</button>

                    <span class="number">${item.quantity}</span>

                    <button class="increasebtn">+</button>

                    <img src="deleteBin.png"
                         class="deleteBin"
                         data-index="${index}">

                </div>

            </section>

            <span class="itemPrice">
                $${item.price}
            </span>
            `;
            cartList.appendChild(itemSection);
        });

        //increase quantity
        document.querySelectorAll(".increasebtn").forEach((button, index) => {
            button.addEventListener("click", function() {
                let cart = JSON.parse(sessionStorage.getItem("cart")) || []; //get cart

                cart[index].quantity += 1;

                sessionStorage.setItem("cart", JSON.stringify(cart)); //save cart

                document.querySelectorAll(".number")[index].textContent = cart[index].quantity;
                document.querySelectorAll(".itemPrice")[index].textContent = '$' + cart[index].price * cart[index].quantity; //update price
                updateSummary();
                updateCartIcon();

            });
        });

        //decrease quantity
        document.querySelectorAll(".decreasebtn").forEach((button, index) => {
            button.addEventListener("click", function() {
                let cart = JSON.parse(sessionStorage.getItem("cart")) || []; //get cart or if cart doesnt exist yet a new cart created

                if (cart[index].quantity > 1){
                    cart[index].quantity -= 1;

                sessionStorage.setItem("cart", JSON.stringify(cart)); //save item
                document.querySelectorAll(".number")[index].textContent = cart[index].quantity;
                document.querySelectorAll(".itemPrice")[index].textContent = '$' + cart[index].price * cart[index].quantity; //update price
                }
                else {
                    cart.splice(index, 1); // remove specified item from array cart

                    sessionStorage.setItem("cart", JSON.stringify(cart)); // save updated cart in storage
                    updateCartIcon();

                    document.querySelectorAll(".buyItem")[index].remove(); //update page
                    updateSummary();
                
                    //update immediately on deletion
                    if (cart.length === 0){
                        cartList.innerHTML = `
                        <section class= "empty">
                            <a href="Categories.html">Continue Shopping</a>
                        </section>
                        `;
                        document.getElementById("checkoutBtn").disabled = true;
                    }

                }
                
                updateSummary();
                
            });
        });


        //Delete item from cart
        document.querySelectorAll(".deleteBin").forEach((button, index) => {
            button.addEventListener("click", function() {
                let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

                cart.splice(index, 1); // remove specified item from array cart

                sessionStorage.setItem("cart", JSON.stringify(cart)); // save updated cart in storage

                document.querySelectorAll(".buyItem")[index].remove(); //update page
                updateSummary();
                updateCartIcon();
                
                //update immediately on deletion
                if (cart.length === 0){
                    cartList.innerHTML = `
                    <section class= "empty">
                        <a href="Categories.html">Continue Shopping</a>
                    </section>
                    `;
                    document.getElementById("checkoutBtn").disabled = true;
                }


            });
        });



    }
    if (cart.length > 0) {
        document.getElementById("checkoutBtn").disabled = false;
    }
    updateSummary();
}

//CHECKOUT
if (document.getElementById("itemSummaries")) {
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    const itemSummaries = document.getElementById("itemSummaries");
    const subtotalPrice = document.getElementById("subtotalPrice");
    const orderSummaryTitle = document.getElementById("orderSummary");

    //calculate total of cart items only (no shipping etc)
    function calculateSubtotal(cart) {
        let subtotal = 0;
        for (let item of cart) {
            subtotal += item.price * item.quantity;
        }
        return subtotal;
    }

    //create order summary section
    function createCheckSummary() {
        //create summary header
        orderSummaryTitle.textContent = `Order Summary (${cart.length} items)`;
        
        //add each item to summary
        itemSummaries.innerHTML = "";
        cart.forEach(item => {
            const row = document.createElement("div");
            row.classList.add("summaryItem");

            row.innerHTML = `
            <img src="${item.image}" class="summaryImage">
            <div class="nameQuant">
                <span>${item.name}</span>
                <span>Qty: ${item.quantity}</span>
            </div>
            
            <span class="summaryPrice">$${item.price * item.quantity}</span>
            `;
            itemSummaries.appendChild(row);
        });


        //summary subtotal display
        const subtotal = calculateSubtotal(cart);
        subtotalPrice.textContent = "$" + subtotal;

        
    }

    function getDeliveryCost() {
        const selectedShipping = document.querySelector('input[name="shipping"]:checked'); //find the shipping option that's been selected

        if (selectedShipping) { //if selection was actioned
            return Number(selectedShipping.value); //return the value of the shipping method
        }
        return 0;
    }

    function updateFinalTotal(){
        const subtotal = calculateSubtotal(cart);
        const delivery = getDeliveryCost();
        const total = subtotal + delivery;

        document.getElementById("finalAmount").textContent = "$" + total;
    }


    //live update of final shipping cost
    document.querySelectorAll('input[name="shipping"]').forEach(option => {
        option.addEventListener("change", updateFinalTotal);
    });



    const cardSelected = document.getElementById("card");
    const cardFields = document.querySelectorAll(".cardContent input");
    const placeOrderBtn = document.querySelector(".placeOrderBtn");

    function updatePaymentReqs() {
        cardFields.forEach(field => {
            //if the selected payment method is card ONLY
            field.required = cardSelected.checked;
        });

        //if all inputs not filled then do not allow place order to be available
        placeOrderBtn.disabled = !form.checkValidity();
    }

    const form = document.querySelector(".paymentForm");

    form.addEventListener("input", updatePaymentReqs);
    form.addEventListener("change", updatePaymentReqs);

    updatePaymentReqs();
    


    form.addEventListener("submit", function (event) {
        event.preventDefault(); //stop reloading page


        //if any inputs cause warning then do not leave/allow place order
        if (!form.checkValidity()){
            form.reportValidity();
            return;
        }

        //place order
        sessionStorage.setItem("orderPlaced", "true"); // for marking order
        sessionStorage.removeItem("cart");
        updateCartIcon();
        window.location.href = "OrderConfirmation.html"; // if required inputs are filled then change page
    });

    //run order summary creation
    createCheckSummary(); //inner content

    updateFinalTotal(); //final final order total with delivery
    
}

const hiddenOrder = document.querySelector(".notAdded");
if (hiddenOrder && sessionStorage.getItem("orderPlaced") === "true") {
    hiddenOrder.classList.remove("notAdded");
}

const cardNumber = document.getElementById("cardNumber");
const cvc = document.getElementById("cvc");
const expiryDate = document.getElementById("expiryDate");
const cardName = document.getElementById("cardName");
const postcode = document.getElementById("postcode");

if (postcode) {
    postcode.addEventListener("input", function () {
        //if not a digit then alert user can't do that
        if (/\D/.test(this.value)) {
            alert("Postcode cannot contain non-numerical values");
            this.value = this.value.replace(/\D/g, "");

        }
        

    });
}

if (cardNumber) {
    cardNumber.addEventListener("input", function () {
        //if not a digit then alert user can't do that
        if (/\D/.test(this.value)) {
            alert("Card number cannot contain non-numerical values");
            this.value = this.value.replace(/\D/g, "");

        }
        

    });
}

if (cvc) {
    cvc.addEventListener("input", function () {
        
        //if not a digit then alert user can't do that
        if (/\D/.test(this.value)) {
            alert("CVC cannot contain non-numerical values");
            this.value = this.value.replace(/\D/g, "");

        }
    });
    
}

if (expiryDate) {
    expiryDate.addEventListener("change", function () {
        const selectedDate = new Date(this.value);
        const today = new Date(); //curent date

        if (selectedDate < today) {
            alert("Expiry date cannot be in the past.");
            this.value="";
        }
    });
}

if (cardName) {
    cardName.addEventListener("input", function () {
        //if not a digit then alert user can't do that
        if (/\d/.test(this.value)) {
            alert("Please enter the cardholder's name");
            this.value = this.value.replace(/\d/g, "");

        }
        

    });
}




