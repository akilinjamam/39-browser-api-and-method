// coockies: it stores data of the users when you visit in the website. as like as login information and others 

const getCookie = () => {
    const cookie = document.cookie;
    const allCookie = cookie.split('; ');
    const findCookie = allCookie.find(c => c.includes(name));
    if (findCookie) {
        'country=US';
        const cookieNameValue = findCookie.split('=');
        return cookieNameValue[1]
    }

}