import FeaturedProject from "./featuredProject";
import Profile from "./profile";
import Skills from "./skills";


const Home = () =>{
    return(
        <>
            <Profile />
            <FeaturedProject/>
            <Skills/>
            {/*<AboutMe/>*/}
        </>
    )
}

export default Home