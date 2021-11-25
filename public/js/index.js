async function deleteRestaurant(btn) {
    if (confirm(`Are you sure you want to delete ${btn.getAttribute("data-name")}?`)) {
        const url = `http://localhost:3001/api/restaurants/${btn.getAttribute("data-id")}`;
        const response = await fetch(url, { method: "DELETE"});
    
        if (response.ok) {
            window.location = "/restaurants"
        }
    }
};

async function deleteMenu(btn) {
    if (confirm(`Are you sure you want to delete ${btn.getAttribute("data-name")}?`)) {
        const url = `http://localhost:3001/api/menus/${btn.getAttribute("data-id")}`;
        const response = await fetch(url, { method: "DELETE"});
    
        if (response.ok) {
            window.location = "/restaurants"
        }
    }
};

async function updateRestaurant(event) {

    event.preventDefault();
    const form = event.target;

    const data = {
        id: form.restaurantId.value,
        name: form.name.value,
        imagelink: form.imagelink.value
    };

    const url = `http://localhost:3001/api/restaurants/${data.id}`;

    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body:  JSON.stringify(data),
    });
    
    if (response.ok) {
        window.location = `/restaurants`
    }
};