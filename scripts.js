const products = {
    //Cards & Stationary
    bookmark: {
        name: "Bookmarks",
        price: 50,
        image: "bookmarks.png",

        sizes: [
            "Select",
            "50mm x 155mm",
            "50mm x 203mm"
        ],
        material: [
            "Select",
            "350 GSM Card Stock",
            "400 GSM Card Stock"
        ],

        colour: [
            "Select",
            "Full Colour",
            "Black & White"
        ],

        hole: [
            "Select",
            "No Holes",
            "6.35mm Hole",
            "4.75mm Hole"
        ],
        tassel: [
            "Select",
            "None",
            "Black Tassel",
            "Blue Tassel",
            "Red Tassel",
            "Green Tassel"
        ],
        quantity: [
            "Select",
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
            "Left Flap"
        ],

        quantity: [
            "Select",
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
            "Select",
            "350 GSM Card Stock",
            "400 GSM Card Stock"
        ],


        quantity: [
            "Select",
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
            "310 GSM Cardstock"
        ],

        colour: [
            "Select",
            "Full Colour",
            "Black & White"
        ],

        finish: [
            "Select",
            "Standard Gloss Finish",
            "Matt Finish",
            "High Gloss Finish"
        ],

        quantity: [
            "Select",
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
            "Select",
            "108mm x 140mm",
            "89mm x 216mm",
            "140mm x 216mm",
            "216mm x 280mm"

        ],

        material: [
            "Select",
            "50 GSM Art Paper"
        ],

        colour: [
            "Select",
            "Full Colour",
            "Black & White"
        ],

        sheetsPerPad: [
            "Select",
            "25",
            "50",
            "75",
            "100"
        ],

        quantity: [
            "Select",
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
            "Select",
            "300 GSM Card Stock",
            "400 GSM Card Stock"
        ],

        window: [
            "Select",
            "Yes Window",
            "No Window"
        ],


        quantity: [
            "Select",
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

    //Custom Stickers (don't need selections as stickers have their own page with specific selections)
    diecutstickers: {
        name: "Die Cut Stickers",
        price: 50,
        image: "diecut.png",
        description: "High-quality custom round stickers designed for branding, packaging, promotions, or personal use. Made from premium vinyl, paper, or polyester, they’re available in matte, gloss, or transparent finishes and sizes from 25mm to 100mm (or custom).Printed in full colour with UV-resistant technology, these stickers offer sharp, vibrant results that won’t fade. They’re waterproof, weatherproof, and suitable for both indoor and outdoor use, with strong adhesive options (permanent or removable)."
    },

    clearstickers: {
        name: "Clear Stickers",
        price: 50,
        image: "clearsticker.png",
        description: "Clear vinyl stickers offer a sleek, modern, and professional look, making them perfect for a variety of applications. Whether you’re using them for product labeling, window decals, or promotional giveaways, clear vinyl stickers provide a unique, transparent backdrop that enhances the design without overwhelming it. High-quality clear vinyl sticker printing, delivering durable, vibrant, and fully customizable stickers that reflect your brand in the best possible light."
    },

    embossedstickers: {
        name: "Embossed Stickers",
        price: 50,
        image: "embossedstickers.webp",
        description: "Embossed labels and stickers offer a unique, tactile experience that elevates your branding and product packaging. The raised design creates a sophisticated, high-end look, ensuring your brand stands out with style and elegance."
    },

    heavydutystickers: {
        name: "Heavy Duty Stickers",
        price: 50,
        image: "heavyduty.png",
        description: "Heavy-duty stickers are built to handle tough conditions without losing quality. At The Sticker Printing, we offer strong, long-lasting heavy duty stickers perfect for vehicles, equipment, outdoor use, and industrial needs."
    },

    //Gift card

    giftcards: {
        name: "Gift Cards",
        price: 50,
        image: "giftcards.png",

        size: [
            "Select",
            "85mm x 55mm (Standard)",
            "90mm x 50mm",
            "100mm x 70mm",
            "120mm x 60mm"

        ],

        finish: [
            "Select",
            "Gold",
            "Silver",
            "Rose Gold",
            "None"
        ],

        cornerStyle: [
            "Select",
            "Sharp",
            "Rounded"
        ],

       quantity: [
            "Select",
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
        description: "Gift cards are more than just a present—they’re a thoughtful experience. At The Sticker Printing, we offer high-quality custom gift card printing that’s perfect for businesses and personal gifting. Whether you need branded gift cards for your store or a custom card for someone special, we’ve got you covered."
    },

    //Label & Tags 

    assetlabels: {
        name: "Asset Labels",
        price: 50,
        image: "assetlabels.png",

        size: [
            "Select",
            "20mm x 10mm",
            "40mm x 20mm",
            "50mm x 25mm",
            "60mm x 30mm",
            "80mm x 40mm",
            "100mm x 50mm",
        ],

        material: [
            "Select",
            "White Vinyl",
             "Clear Vinyl"
        ],

        finish: [
            "Select",
            "Matte",
            "Gloss"
        ],

        corners: [
            "Select",
            "Rounded Corners",
            "Square Corners"
        ],

        quantity: [
            "Select",
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

        description: "Protect your valuable assets with custom asset labels, tags, and stickers designed for long-lasting durability and security. At The Sticker Printing, we specialize in high-quality asset labeling solutions that help businesses efficiently track, manage, and safeguard their equipment, tools, and inventory. Our labels are built to withstand harsh environments, ensuring clear readability and strong adhesion on a variety of surfaces."
    },

    doorhangers: {
        name: "Door Hangers",
        price: 50,
        image: "doorhangers.png",

        size: [
            "Select",
            "88mm x 215mm",
            "88mm x 280mm",
            "105mm x 280mm",
            "105mm x 360mm"
        ],

        material: [
            "Select",
            "310 GSM Art Card",
            "350 GSM Art Card"
        ],
        colour: [
            "Select",
            "Full Colour",
            "Black & White"
        ],

        finish: [
            "Select",
            "Standard Gloss Finish",
            "High Gloss Finish",
            "Matt Finish"
        ],

        quantity: [
            "Select",
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

        description: "Door Hangers are a fantastic way to grab attention and deliver important messages directly to your audience. Whether for business promotions, event invitations, or personal use, The Sticker Printing offers high-quality custom door hanger printing that ensures your message stands out."
    },

    standardcustomlabels: {
        name: "Standard Custom Labels",
        price: 50,
        image: "standardcustomlabels.png",
        size: [
            "Select",
            "50mm x 50mm",
            "75mm x 128mm",
            "75mm x 150mm",
            "101mm x 101mm",
            "101mm x 155mm",
            "127mm x 127mm",
            "127mm x 178mm",
            "228mm x 75mm",
            "255mm x 75mm"
        ],

        material: [
            "Select",
            "White Vinyl",
             "Clear Vinyl"
        ],

        colour: [
            "Select",
            "Full Colour",
            "Black & White"
        ],

        finish: [
            "Select",
            "Matte",
            "Gloss"
        ],

        quantity: [
            "Select",
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
        description: "Labels do more than share info—they showcase your brand. At The Sticker Printing, we create high-quality custom labels that make your products stand out. Perfect for bottles, jars, packaging, or promos, our labels are designed to boost your brand and leave a lasting impression."
    },

    //Large Sinage

    posters: {
        name: "Posters",
        price: 50,
        image: "posters.png",

        size: [
            "Select",
            "28cm x 44cm",
            "30.5cm x 46cm",
            "46cm x 60cm",
            "56cm x 72cm",
            "60cm x 90cm"

        ],
        
        material: [
            "Select",
            "150 GSM Poster Paper",
            "310 GSM Poster Card",
            "350 GSM Poster Card"

        ],

        colour: [
            "Select",
            "Full Colour",
            "Black & White"
        ],

        finish: [
            "Select",
            "Standard Gloss Finish",
            "High Gloss Finish"

        ],

        quantity: [
            "Select",
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


        description: "Posters are a powerful marketing tool, perfect for grabbing attention and spreading your message. Whether you’re promoting an event, showcasing your brand, or creating eye-catching artwork."
    },

    vinybanner: {
        name: "Vinyl Banner",
        price: 50,
        image: "vinylbanner.png",
        size : [
            "Select",
            "0.3m x 0.3m",
            "0.5m x 0.5m",
            "0.5m x 1m",
            "0.5m x 1.5m",
            "0.5m x 2m",
            "0.5m x 3m",
            "1m x 1.5m",
            "1m x 2m",
            "1m x 2.5m",
            "1m x 3m",
            "1.5m x 1.5m",
            "1.5m x 2m",
            "1.5m x 3m",
            "2m x 3m",
            "2m x 4m",
            "2m x 5m",
            "3m x 3m",
            "3m x 3.5m"
        ],

        material: [
            "Select",
            "9 Oz Matt Vinyl",
            "13 Oz Matt Vinyl"
        ],

        colour: [
            "Select",
            "Full Colour",
            "Black & White"
        ],

        finish: [
            "Select",
            "Raw Edges (No Grommets & Hem)",
            "Grommets & Hem",
            "75mm Pole Pocket (Left & Right)",
            "75mm Pole Pocket (Top & Bottom)"
        ],

        quantity: [
            "Select",
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

        description: "Vinyl banners are an exceptional way to make a bold statement at events, in-store promotions, or outdoor advertising campaigns. At The Sticker Printing, we specialize in custom vinyl banner printing, providing high-quality, weather-resistant banners that ensure your message stands out and lasts."
    },

    // Marketing Materials

    businesscards: {
        name: "Business Cards",
        price: 50,
        image: "businesscards.png",

        size: [
            "Select",
            "90mm x 50mm (Standard)",
            "50mm x 50mm (Mini Square)",
            "90mm x 90mm (Jumbo Square)",
            "90mm x 25mm (Slim)"
        ],

        material: [
            "Select",
            "310 GSM Card Stock",
            "350 GSM Card Stock",
            "400 GSM Card Stock",
            "600 GSM Card Stock"
        ],

        colour: [
            "Select",
            "Full Colour",
            "Black & White"
        ],

        finish: [
            "Select",
            "Standard Gloss Finish",
            "Matt Finish"
        ],
        specialEffects: [
            "Select",
            "Emboss or Deboss ( Single Side)",
            "Foil Stamping ( Single Sided)",
            "Spot UV (Single Sided)"
        ],

        quantity: [
            "Select",
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
        
        description: "Business cards are more than just contact details; they are a powerful tool to represent your business. At The Sticker Printing, we ensure that your custom business card printing experience is not only informative but also memorable, leaving a lasting impression on clients."
    },

    brochures: {
        name: "Brochures",
        price: 50,
        image: "brochure.png",

        size: [
            "Select",
            "DL",
            "A6",
            "A5",
            "A4",
            "Square 210mm x 210mm"
        ],

        colour: [
            "Select",
            "Full Colour",
            "Black & White"
        ],

        foldType: [
            "Select",
            "Bi-Fold",
            "Tri-Fold",
            "Z-Fold",
            "Gate Fold",
            "Half Fold"
        ],

        material: [
            "Select",
            "150 GSM Gloss",
            "170 GSM Gloss",
            "250 GSM Gloss",
            "300 GSM Matte"
        ],

        printing: [
            "Select",
            "Single Sided",
            "Double Sided"
        ],

        finish: [
            "Select",
            "Matte",
            "Gloss",
            "Soft Touch"
        ],

        quantity: [
            "Select",
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
    
        description: "Brochures are one of the most effective marketing tools, allowing you to showcase your brand, products, and services in a professional and engaging way. At The Sticker Printing, we specialize in high-quality custom brochure printing that is not only affordable but designed to capture audience’s attention."
    },

    eventtickets: {
        name: "Event Tickets",
        price: 50,
        image: "eventtickets.png",

        size: [
            "Select",
            "50mm x 140mm",
            "55mm x 150mm",
            "70mm x 150mm",
            "80mm x 200mm",
        ],

        material: [
            "Select",
            "250 GSM Gloss",
            "300 GSM Matte",
            "350 GSM Card Stock",
            "Synthetic Waterproof Stock"
        ],

        colour: [
            "Select",
            "Full Colour",
            "Black & White"
        ],

        finish: [
            "Select",
            "Matte",
            "Gloss"
        ],

        quantity: [
            "Select",
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

        description: "Event tickets are more than just entry passes—they help set the tone for your event. At The Sticker Printing, we offer high-quality custom event ticket printing that leaves a lasting impression. Whether it’s a concert, festival, conference, or any special event, our custom tickets are made to look great and stand out."
    },

    menus: {
        name: "Menus",
        price: 50,
        image: "menus.png",

        size: [
            "Select",
            "108mm x 280mm",
            "140mm x 216mm",
            "216mm x 280mm",
            "216mm x 356mm",
            "229mm x 309mm",
            "280mm x 432mm"
        ],

        material: [
            "Select",
            "150 GSM Art Paper",
            "350 GSM Art Card",
            "310 GSM Art Card",
            "150 GSM Art Paper"
        ],

        colour: [
            "Select",
            "Full Colour",
            "Black & White"
        ],

        finish: [
            "Select",
            "Standard Gloss Finish",
            "High Gloss Finish"
        ],

        quantity: [
            "Select",
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

        description: "Menus do more than list food—they showcase your brand and set the tone for your dining experience. At The Sticker Printing, we create high-quality custom menus that highlight your dishes and make a lasting impression."
    },

    tabletents: {
        name: "Table Tents",
        price: 50,
        image: "tabletents.png",

        size: [
            "Select",
            "72mm x 280mm (Flat Size: 72mm X 666mm)",
            "101mm x 155mm (Flat Size: 101mm X 415mm)"
        ],

        material: [
            "Select",
            "260 GSM Art Card",
            "280 GSM Matt Card",
            "310 GSM Art Card",
            "350 GSM Art Card"
        ],

        colour: [
            "Select",
            "Full Colour",
            "Black & White"
        ],

        finish: [
            "Select",
            "Standard Gloss Finish",
            "High Gloss Finish"
        ],

        quantity: [
            "Select",
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
        description: "Table tents are an effective and stylish way to capture attention in any setting, whether at a restaurant, event, or retail space. At The Sticker Printing, we specialize in high-quality custom table tent printing, offering vibrant designs that allow your message to shine, creating an impactful presence on any table."
    },

    //Speciality Finishes
    foilstamping: {
        name: "Foil Stamping",
        price: 50,
        image: "foilstamping.png",
        foilColour: [
            "Select",
            "Gold",
            "Silver",
            "Rose Gold",
            "Copper",
            "Holographic",
            "Black"
        ],

        application: [
            "Select",
            "Logo",
            "Text",
            "Border"
        ],

        side: [
            "Select",
            "Front Only",
            "Front & Back"
        ],

        description: "At The Sticker Printing, we specialize in high-quality foil stamping and gold foil printing, offering stunning, metallic finishes that make your designs pop. Whether you’re creating business cards, invitations, packaging, or marketing materials, foil stamping is the perfect way to elevate your brand’s visual appeal."
    }

};

//get product id from URL

const params = new URLSearchParams(window.location.search);

const productID = params.get("id");

//find the product that matches id
const product = products[productID];

//create selections for products
const selections = document.querySelector(".selections");

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
        title.textContent = key;


        //create selections element
        const select = document.createElement("select");

        // add select options
        for (let i = 0; i < product[key].length; i++) {
            let option = product[key][i];

            select.add(new Option(option));


        }

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
        select.addEventListener("change", selectionChanged);

        // detects selection change
        function selectionChanged(){
        if (select.value === "Select") { // this is placeholder so doesn't count as a change
                return;
            }

            const currentIndex = sections.indexOf(section); // track current selection avail.
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

if (uploadBtn && input && fileName){
    uploadBtn.addEventListener("click", function() {
        input.click();

    });


    input.addEventListener("change", function(){
        if (input.value) {
            fileName.innerHTML = input.value;
        }else {
            fileName.innerHTML = "";
        }

        if (fileName.innerHTML !== "") {
            document.getElementById("addToCart").disabled = false; /*if design is uploaded add to cart is now avail */
        }
    });
}

//CART FUNCTIONS
const addToCartBtn = document.getElementById("addToCart");

if (addToCartBtn){
    addToCartBtn.addEventListener("click", function () {
        //get existing cart
        let cart = JSON.parse(sessionStorage.getItem("cart")) || []; //restarts when tab reopened only

        //create product object for cart
        const cartItem = {
            id: productID,
            name: product.name,
            image: product.image,
            price: product.price,
            quantity: 1
        };

        //check if item is already in cart 
        const alreadyAdded = cart.find(item => item.id === productID);

        if (alreadyAdded) {
            alreadyAdded.quantity += 1;
        }else {
            //add the item to cart
            cart.push(cartItem);
        }
        

        //save updated cart so it doesn't restart on refresh
        sessionStorage.setItem("cart", JSON.stringify(cart));

        alert("Added to Cart");
    });
}


//load items into cart
const cartList = document.querySelector(".items");
if (cartList){
    //get saved cart
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    if (cart.length === 0){
        cartList.innerHTML = `
        <section class= "empty">
            <a href="Categories.html">Continue Shopping</a>
            </section>
            `;
    }else { 
        //item and index to keep track of item actions (quantity changes etc)
        cart.forEach((item, index) => {
            const itemSection = document.createElement("section");
            itemSection.classList.add("buyItem");
            
            itemSection.innerHTML = `
            <img src="${item.image}" class="itemImage">

            <section class="productDetails">

                <h2 class="itemName">${item.name}</h2>

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
                let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

                cart[index].quantity += 1;

                sessionStorage.setItem("cart", JSON.stringify(cart));

                document.querySelectorAll(".number")[index].textContent = cart[index].quantity;
                document.querySelectorAll(".itemPrice")[index].textContent = '$' + cart[index].price * cart[index].quantity; //update price

            });
        });

        //decrease quantity
        document.querySelectorAll(".decreasebtn").forEach((button, index) => {
            button.addEventListener("click", function() {
                let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

                cart[index].quantity -= 1;

                sessionStorage.setItem("cart", JSON.stringify(cart)); //save

                document.querySelectorAll(".number")[index].textContent = cart[index].quantity;
                document.querySelectorAll(".itemPrice")[index].textContent = '$' + cart[index].price * cart[index].quantity; //update price
                
            });
        });


    }
}