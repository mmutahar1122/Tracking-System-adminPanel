
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
const layout=({component:Component, navbar, footer})=>{

    return <>
    {navbar && <Navbar/>}
    <Component/>
{footer && <Footer/>}
    </>
}
export default layout