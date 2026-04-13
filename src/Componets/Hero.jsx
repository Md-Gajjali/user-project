import { useContext } from "react"
import { User } from "../Context/UseContext"
import ProfileCard from "./ProfileCard"

const Hero = () => {
    const { user } = useContext(User)
  return (
    <div className='container mt-20'>
      <div className="flex  flex-wrap lg:justify-between justify-center gap-5 ">
          {
            user.map((item,idx)=>{
                return(
                    <ProfileCard 
                    key={idx}
                      img={item.image} 
                      name={item.firstName}
                      work={item.email}
                    />
                )
            })
          }

      </div>

    </div>
  )
}

export default Hero
