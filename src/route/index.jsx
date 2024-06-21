import Layout from "../component/layout";
import Home from "../home";
import FeaturedProject from "../featuredProject";

export const Routes = [
    {
        path:"",
        element:<Layout/>,
        children:[
            {
                path : "",
                element:<Home/>
            },
            {
                path: "",
                element:<FeaturedProject/>
            }
        ]
    }

]