import { supabase } from "./client"

export const getProducts = async () => {
    try {
        let { data: products, error } = await supabase
        .from('products')
        .select('*')
        return {
            products, 
            error
        }
    } catch (e) {
        console.log(e)
    }
}