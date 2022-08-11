/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from "next/link"
import { useState } from "react"

const Events = () => {
    const data = [
        {
            event: "Nelson Mandela and Chess day",
            date: "",
            image: "/projects/mandela_and_chess_day.jpeg",
            link: "tac_events/mandella_and_chess_day_2022"
        },
        {
            event: "Friendship day",
            date: "",
            image: "/projects/friendship2022.jpg",
            link: "tac_events/international_day_of_friendship2022"
        },
        {
            event: "International Day in Support of Victims of Torture",
            date: "",
            image: "/projects/day_against_tourture.jpg",
            link: "tac_events/international_day_in_support_of_victims_torture2022"
        },
        {
            event: "Youth skill day",
            date: "",
            image: "/projects/youth_skill_day.png",
            link: "tac_events/youth_skill_day2022"
        },
        {
            event: "Tennis championship",
            date: "",
            image: "/projects/tennis_championship.png",
            link: "tac_events/youth_skill_day2022"
        }
    ]

    const tabList = [
        {   tabName: 'Previous',
            animation: 'translate-x-[-100%]'
        },
        {   tabName: 'Ongoing',
            animation: 'translate-x-[0%]'
        },
        {   
            tabName: 'Upcoming',
            animation: 'translate-x-[100%]'
        },
        
    ]

    const [animate, setAnimate] = useState(tabList[0].animation)

    const handleActiveTab = i => {
        setAnimate(tabList[i].animation)
    }

    return(
        <>
            <h2 className="text-sweet_blue mx-auto pt-1.5 font-bold text-4xl text-center my-12">
            Events
            </h2>
        <div className="mx-auto w-11/12"
        >
            {/*  */}
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap reverse -mb-px text-sm font-medium justify-center md:w-fit mx-0.5">
                <span className="flex justify-center  ">
                    {
                        tabList.map(({ tabName }, i) => (
                        <li className="mr-2 text-right " key={i} role="presentation" >
                        <span key={i} onClick={() => handleActiveTab(i)} className="inline-block p-4 rounded-t-lg cursor-pointer">{tabName }</span>
                        </li>
                        ))
                    }
                </span>
                <span className={`border-b-2 border-primary w-[33%] transition-transform ease-linear ${animate} `}></span>
            </ul>
        </div>
{/*  */}


                
                {
                    data.map(({ event, date, image, link}, i ) => (
                        <div className="text-4xl">
                            <Link href={link}>
                                <a>
                                    <span className="flex justify-between border-b">
                                        <p className="my-4 md:my-auto">{event}</p>
                                        <img src={image} alt={image} className='w-[200px] h-[100px] m-4 hidden md:inline ' />
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