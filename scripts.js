const products = {
    //Cards & Stationary
    bookmark: {
        name: "Bookmarks",
        price: 50,
        image: "bookmarks.png",

        sizes: [
            "50mm x 155mm",
            "50mm x 203mm"
        ],
        material: [
            "350 GSM Card Stock",
            "400 GSM Card Stock"
        ],

        colour: [
            "Full Colour",
            "Black & White"
        ],

        hole: [
            "No Holes",
            "6.35mm Hole",
            "4.75mm Hole"
        ],
        tassel: [
            "None",
            "Black Tassel",
            "Blue Tassel",
            "Red Tassel",
            "Green Tassel"
        ],
        quantity: [
            "50",
            "100",
            "250",
            "500",
            "750",
            "1000",
            "1500",
            "2000",
            "3000",
            "4000",
            "5000",
            "6000",
            "7000",
            "8000",
            "9000",
            "10000"
        ],

        description: "Bookmarks are more than just a way to mark your page; they are a creative tool to promote your brand, share a message, or add a personal touch to your reading experience. At The Sticker Printing, we specialize in high-quality custom bookmark printing that is affordable, vibrant, and tailored to your exact needs."
    },
    envelope: {
    name: "Envelopes",
    price: 50,
    image: "envelopes.png",

    size: [
            "Select",
            "A7",
            "A6",
            "100mm x 240mm",
            "228mm x 325mm"
        ],

        flapStyle: [
            "Select",
            "No Flap Envelope",
            "Top Flap",
            "Left Flap",
        ],

        quantity: [
            "50",
            "100",
            "250",
            "500",
            "750",
            "1000",
            "1500",
            "2000",
            "3000",
            "4000",
            "5000",
            "6000",
            "7000",
            "8000",
            "9000",
            "10000"
        ],

    description: "" 
    },
    invitation: {
        name: "Invitation Cards",
        price: 50,
        image: "invitations.png",
        size: [
            "Select",
            "A7",
            "A6",
            "100mm x 240mm",
            "228mm x 325mm"
        ],

        material: [
            "350 GSM Card Stock",
            "400 GSM Card Stock"
        ],


        quantity: [
            "50",
            "100",
            "250",
            "500",
            "750",
            "1000",
            "1500",
            "2000",
            "3000",
            "4000",
            "5000",
            "6000",
            "7000",
            "8000",
            "9000",
            "10000"
        ],
        description: ""

    },
    postcard: {
        name: "Postcards",
        price: 50,
        image: "postcards.png",
        size: [
            "Select",
            "101mm x 155mm",
            "127mm x 152mm",
            "127mm x 178mm",
            "155mm x 228mm"
        ],

        material: [
            "Select",
            "280 GSM Cardstock",
            "310 GSM Cardstock",
        ],

        colour: [
            "Full Colour",
            "Black & White"
        ],

        finish: [
            "Standard Gloss Finish"
            "Matt Finish"
            "High Gloss Finish"
        ],

        quantity: [
            "50",
            "100",
            "250",
            "500",
            "750",
            "1000",
            "1500",
            "2000",
            "3000",
            "4000",
            "5000",
            "6000",
            "7000",
            "8000",
            "9000",
            "10000"
        ],

        description: "At The Sticker Printing, we offer high-quality custom postcard printing designed to help you grab attention and make a lasting impression. With vibrant colors, premium materials, and full customization options, our postcards are perfect for direct mail campaigns, event promotions, thank-you notes, and more."
    },
    notepad: {
        name: "Notepads",
        price: 50,
        image: "notepads.png",
        
        size: [
            "108mm x 140mm",
            "89mm x 216mm",
            "140mm x 216mm",
            "216mm x 280mm"

        ],

        material: [
            "50 GSM Art Paper"
        ],

        colour: [
            "Full Colour",
            "Black & White"
        ],

        sheetsPerPad [
            "25",
            "50",
            "75",
            "100"
        ]

        quantity: [
            "50",
            "100",
            "250",
            "500",
            "750",
            "1000",
            "1500",
            "2000",
            "3000",
            "4000",
            "5000",
            "6000",
            "7000",
            "8000",
            "9000",
            "10000"
        ],
        description: "Notepads are a versatile tool for businesses, events, and personal use. At The Sticker Printing, we specialize in high-quality notepad printing, offering a wide range of customization options to help you create notepads that are as practical as they are stylish."
    },

    //CD & Packaging
    cdcover: {
        name: "CD Covers",
        price: 50,
        image: "cdcovers.png",

        size: [
            "Select",
            "A7",
            "A6",
            "100mm x 240mm",
            "228mm x 325mm"
        ],

        material: [
            "300 GSM Card Stock",
            "400 GSM Card Stock"
        ],

        window: [
            "Yes Window",
            "No Window"
        ]


        quantity: [
            "50",
            "100",
            "250",
            "500",
            "750",
            "1000",
            "1500",
            "2000",
            "3000",
            "4000",
            "5000",
            "6000",
            "7000",
            "8000",
            "9000",
            "10000"
        ],

        description: "CD covers are more than just protective cases—they’re a powerful branding tool for musicians, businesses, and artists alike. At The Sticker Printing, we offer high-quality custom CD cover printing that combines vibrant design, lasting durability, and professional appeal to help your CDs make a lasting impression."
    },

    //Custom Stickers
    diecutstickers: {
        name: "Die Cut Stickers",
        price: 50,
        image: "diecut.png",
        description: ""
    },

    clearstickers: {
        name: "Clear Stickers",
        price: 50,
        image: "clearsticker.png",
        description: ""
    },

    embossedstickers: {
        name: "Embossed Stickers",
        price: 50,
        image: "embossedstickers.webp",
        description: ""
    },

    heavydutystickers: {
        name: "Heavy Duty Stickers",
        price: 50,
        image: "heavyduty.png",
        description: ""
    },

    //Gift card

    giftcards: {
        name: "Gift Cards",
        price: 50,
        image: "giftcards.png",
        description: ""
    },

    //Label & Tags

    assetlabels: {
        name: "Asset Labels",
        price: 50,
        image: "assetlabels.png",
        description: ""
    },

    doorhangers: {
        name: "Door Hangers",
        price: 50,
        image: "doorhangers.png",
        description: ""
    },

    standardcustomlabels: {
        name: "Standard Custom Labels",
        price: 50,
        image: "standardcustomlabels.png",
        description: ""
    },

    //Large Sinage

    posters: {
        name: "Posters",
        price: 50,
        image: "posters.png",
        description: ""
    },

    vinybanner: {
        name: "Vinyl Banner",
        price: 50,
        image: "vinylbanner.png",
        description: ""
    },

    // Marketing Materials

    businesscards: {
        name: "Business Cards",
        price: 50,
        image: "businesscards.png",
        description: ""
    },

    brochures: {
        name: "Brochures",
        price: 50,
        image: "brochures.png",
        description: ""
    },

    eventtickets: {
        name: "Event Tickets",
        price: 50,
        image: "eventtickets.png",
        description: ""
    },

    menus: {
        name: "Menus",
        price: 50,
        image: "menus.png",
        description: ""
    },

    tabletents: {
        name: "Table Tents",
        price: 50,
        image: "tabletents.png",
        description: ""
    },

    //Speciality Finishes
    foilstamping: {
        name: "Foil Stamping",
        price: 50,
        image: "foilstamping.png",
        description: ""
    }

};

//get product id from URL

const params = new URLSearchParams(window.location.search);

const productID = params.get("id");

//find the product that matches id
const product = products[productID];

// if the product exists update content
if (product) {

    //image
    document.getElementById("productImage").src = product.image;

    //productname
    document.getElementById("productName").textContent = product.name;

    //price
    document.getElementById("startingPrice").textContent = "$" + product.price;

    //product description
    document.getElementById("productDescription").textContent = product.description;

    
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

