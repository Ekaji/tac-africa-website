/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from "next/link"
import { useState } from "react"
import LatestNews from "../../components/latestNews"

const Events = () => {
    const data = [
        {
            event: "Drone Safety Day ",
            date: "April 29 2023",
            image: "https://res.cloudinary.com/tacafrica/image/upload/v1682950714/drone_safety_day/IMG_1556_vh0q4l.jpg",
            link: "DroneSafetyDay"
        },
        {
            event: "UN International Day of ZERO WASTE ",
            date: "Mar 24 2023",
            image: "https://res.cloudinary.com/tacafrica/image/upload/v1679668747/mr_tidy/WhatsApp_Image_2023-03-24_at_3.14.16_PM_hap5oi.jpg",
            link: "tac_events/UN_Intl_Day_of_ZERO_WASTE"
        }, 
        {
            event: "TAC Events - 1st October 2022",
            date: "",
            image: "/projects/oct12022.png",
            link: "https://www.icloud.com/sharedalbum/#B0f532ODWGV71e"
        }, 
        {
            event: "World Humanitarian Day 2022",
            date: "",
            image: "/projects/humanitarian_day.png",
            link: "tac_events/World_Humanitarian_Day"
        },
        {
            event: "International Day of remembrance and tribute to the victims of Terrorism  2022",
            date: "",
            image: "/projects/victims_of_terror.png",
            link: "tac_events/International_Day_of_remembrance_and_tribute_to_the_victims_of_Terrorism2022"
        },
        {
            event: "International Youth Day 2022",
            date: "",
            image: "/projects/int_youth_day2022.png",
            link: "tac_events/international_youth_day2022"
        },
        {
            event: "Nelson Mandela and Chess Day 2022",
            date: "",
            image: "/projects/mandela_and_chess_day.jpeg",
            link: "tac_events/mandella_and_chess_day_2022"
        },
        {
            event: "Friendship Day 2022",
            date: "",
            image: "/projects/friendship2022.jpg",
            link: "tac_events/international_day_of_friendship2022"
        },
        {
            event: "International Day In Support Of Victims Of Torture 2022",
            date: "",
            image: "/projects/day_against_tourture.jpg",
            link: "tac_events/international_day_in_support_of_victims_torture2022"
        },
        {
            event: "Youth Skill Day 2022",
            date: "",
            image: "/projects/youth_skill_day.png",
            link: "tac_events/youth_skill_day2022"
        },
        {
            event: "Tennis Championship 2022",
            date: "",
            image: "/projects/tennis_championship.png",
            link: "tac_events/tennis_championship2022"
        },

    ]

    const tabList = [
        {   tabName: 'International',
            animation: 'translate-x-[-100%]'
        },
        {   tabName: 'Local',
            animation: 'translate-x-[0%]'
        },
        {   
            tabName: 'UN',
            animation: 'translate-x-[100%]'
        },    
    ]

    const [animate, setAnimate] = useState(tabList[0].animation)

    const handleActiveTab = i => {
        setAnimate(tabList[i].animation)
    }

    return(
        <>
        <LatestNews />
            <h2 className="text-sweet_blue mx-auto pt-1.5 font-bold text-4xl text-center my-12">
            Events
            </h2>
        <div className="mx-auto w-11/12"
        >
          
                {
                    data.map(({ event, date, image, link}, i ) => (
                        <div className="text-4xl">
                            <Link href={link}>
                                <a>
                                    <span className="flex justify-between border-b">
                                        <p className="my-4 md:my-auto">{event}</p>
                                        <img src={image} alt={image} className='w-[200px] h-[100px] m-4 hidden md:inline object-fill' />
                                    </span>
                                </a>
                            </Link>
                        </div> 
                    ))
                }
            </div>
        </>
    )
}

export default Events