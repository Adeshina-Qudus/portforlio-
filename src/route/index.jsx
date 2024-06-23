import Layout from "../component/layout";
import Home from "../home";

export const Routes = [
    {
        path:"",
        element:<Layout/>,
        children:[
            {
                path : "",
                element:<Home/>
            },
        ]
    }

]