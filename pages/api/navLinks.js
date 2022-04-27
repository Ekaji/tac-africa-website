export const data = [
    {
        label: 'Home',
        content: [
            {href: ''}
        ],
        type: 'nav link'
    },
    {
        label: 'about',
        content : [
            {href: '/about_us', name: 'About Us'},
            {href: '/founder', name: 'Founder'},
            {href: '/our_team', name: 'Our Team'},
            {href: '/partners_and_supporters', name: 'partners and supporters'},
            {href: '/gallery', name: 'Gallery'}
        ], 
        type: 'dropdown button' 
    },
    {
        label: 'labs',
        content : [
            {href: '/drone_and_counter_drone', name: 'Drone And Counter Drone'},
            {href: '/cyber_security_and_cyber_defense', name: 'Cyber Security And Cyber Defense'},
            {href: '/artificial_intelligence_and_robotics', name: 'AI And Robotics Lab'},
            {href: '/blockchain_and_crypto_lab', name: 'Blockchain And Crypto Lab'},
            {href: '/satellite_and_remote_sensing_lab', name: 'Satellite And Remote Sensing Lab'}
        ],
        type: 'dropdown button'
    },
    // {
    //     label: 'projects',
    //     content : [
    //         {href: '/projects/policing_the_cyber_space', name: 'Policing the Cyberspace' },
    //         {href: '/projects/innovation_in_policing', name: 'Innovation in Policing' },
    //         {href: '/projects/drone_alliance_africa', name: 'Drone Alliance Africa' },
    //         {href: '/artificial_intelligence_and_robotics', name: 'Artificial Intelligence' },
    //         {href: '/projects/afri_agric_tech_project', name: 'AfriAgriTech project' },
    //         {href: '/projects/crawler', name: 'Crawler' },
    //         {href: '/volunteer', name: 'Volunteer Management' },
    //         {href: '/projects/cyber_peace_dialouge_2020', name: 'CyberPeace Dialogue 2020' },
    //         {href: '/projects/research_on_cyber_security', name: 'Research on Cyber Security' }       
    //     ],
    //     type: 'dropdown button'
    // },
    {
        label: 'contact',
        content: [
            {href: 'contact'}
        ],
        type: 'nav link'
    },
    {
        label: 'blog',
        content: [
            {href: 'blog'}
        ],
        type: 'button',
        details: {variant: 'primary'}

    },
    {
        label: 'donate',
        content: [
            {href: 'donate'}
        ],
        type: 'button',
        details: {variant: 'outline-primary'}
    }

];