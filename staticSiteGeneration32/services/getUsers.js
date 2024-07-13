export default async function getUserData() {
    const result = await fetch("https://dummyjson.com/users")
    return result.json();
}