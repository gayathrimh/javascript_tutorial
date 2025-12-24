export const orders=JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order){
orders.unshift(order);
saveToStorage();
}

function saveToStorage(){
    localStorafe.setItem('orders',JSON.stringify(orders));
}