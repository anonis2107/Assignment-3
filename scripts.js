const products = {
    //Cards & Stationary
    bookmark: {
        name: "Bookmarks",
        price: 50,
        image: "bookmarks.png",
        description: "Bookmarks are more than just a way to mark your page; they are a creative tool to promote your brand, share a message, or add a personal touch to your reading experience. At The Sticker Printing, we specialize in high-quality custom bookmark printing that is affordable, vibrant, and tailored to your exact needs."
    },
    envelope: {
    name: "Envelopes",
    price: 50,
    image: "envelopes.png",
    description: "" 
    },
    invitation: {
        name: "Invitation Cards",
        price: 50,
        image: "invitations.png",
        description: ""
    },
    postcard: {
        name: "Postcards",
        price: 50,
        image: "postcards.png",
        description: ""
    },
    notepad: {
        name: "Notepads",
        price: 50,
        image: "notepads.png",
        description: ""
    },

    //CD & Packaging
    cdcover: {
        name: "CD Covers",
        price: 50,
        image: "cdcovers.png",
        description: ""
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

