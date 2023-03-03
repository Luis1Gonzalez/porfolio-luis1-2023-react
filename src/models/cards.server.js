export async function getCards(){
    const response = await fetch(`http://localhost:1337/api/cards?populate=image`);

    return await response.json();
}