export const add = (x, y) => {
    return x + y;
};

// export const add = (x, y) => x + y;

export const total = (shipping, subTotal) => {
    return "$" + add(shipping, subTotal);
};