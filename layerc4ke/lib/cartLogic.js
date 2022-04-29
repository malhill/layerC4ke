import formatMoney from "./formatMoney";

export function cartTotal(cart) {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        total += (cart[i].quantity * cart[i].product.price)
        console.log(total)
    }

    return total;
}

export function taxEstimate(total) {
    const taxRate = .07;
    const estTax = total * taxRate;
    return estTax;
}

export function getTotal(total, tax) {
    return total + tax;
}
