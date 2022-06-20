import * as FaIcons from 'react-icons/fa'
import { DiGoogleAnalytics } from 'react-icons/di'
import { BsFillPersonBadgeFill } from 'react-icons/bs'
export default[
{
    name: "Innovadores",
    icon: <FaIcons.FaUsers size="30px" className="nav-icons" />,
    path: "Innovators",
    class: 'nav-items',
    classActive: 'nav-items active',
    class2: "nav-items-untoggle",
    class2Active: 'nav-items-untoggle active',
},
{
    name: "Estadísticas",
    icon: <DiGoogleAnalytics size="30px" className="nav-icons" />,
    path: "Stadistics",
    class: 'nav-items',
    classActive: 'nav-items active',
    class2: "nav-items-untoggle",
    class2Active: 'nav-items-untoggle active',
},
{
    name: "Personal",
    icon: <BsFillPersonBadgeFill size="30px" className="nav-icons" />,
    path: '/personal',
    class: 'nav-items',
    classActive: 'nav-items active',
    class2: "nav-items-untoggle",
    class2Active: 'nav-items-untoggle active',
},
]
