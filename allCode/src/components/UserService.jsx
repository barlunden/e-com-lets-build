async function getUsers() {
    try {
        const response = await fetch(`https://dummyjson.com/users?limit=40&skip=25&sortBy=age&order=asc`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.users;
    } catch (error) {
        console.error(`Error fetching users:`, error);
        throw error;
    }
}

async function getUser(id) {
    const url = `https://dummyjson.com/users/${id}`;
    console.log("Hentar frå", url)
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error(`Error fetching user ${id}:`, error);
        throw error;
    }
}

export { getUser, getUsers };