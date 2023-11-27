import { supabase } from "./client"

export const getOrders = async (user_id) => {
    try {
        let { data: products, error } = await supabase
        .from('orders')
        .eq('user_id', user_id)
        .select('*')
        return {
            products, 
            error
        }
    } catch (e) {
        console.log(e)
    }
}