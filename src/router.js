import Admin from "./pages/Admin"
import Order from "./order/Order"



const routes = [{
    path: "/",
    redirect: "/admin",
}, {
    path: "/admin",
    component: Admin,
    name: "admin",
    meta: "管理后台",
    children:[
        {
            path: "/order",
            component: Order,
            name: "order",
            meta: "订单管理",
        }
    ]
}]





export default routes;