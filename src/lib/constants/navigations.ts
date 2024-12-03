export class NavList { 

    public static readonly HOME = {
        id : '/',
        value: 'Home'
    };
    public static readonly PRODUCTS = {
         id : '/products',
        value: 'Products'
    };
    public static readonly CART = {
        id : '/cart',
        value: 'Cart'
    };
    public static readonly LOGIN = {
        id : '/login',
        value: 'Login'
    };
    
    public static readonly list = [this.HOME,this.PRODUCTS,this.CART]
}