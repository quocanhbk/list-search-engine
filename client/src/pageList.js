import React from 'react'
import {BsHouse, BsSearch, BsClock, BsBarChart} from 'react-icons/bs'
import OverallDashboardPage from './components/OverallDashboard'
import SearchEnginePage from './components/SearchEngine'
import TimelineViewPage from './components/TimelineView'
import StaffPerformancePage from './components/StaffPerformance'
const pageList = [
    {icon: <BsHouse size="24px"/>, text: "Overall Dashboard", path: "/", comp: <OverallDashboardPage/>},
    {icon: <BsSearch size="24px"/>, text: "Search Engine", path: "/search", comp: <SearchEnginePage/>},
    {icon: <BsClock size="24px"/>, text: "Timeline View", path: "/timeline", comp: <TimelineViewPage/>},
    {icon: <BsBarChart size="24px"/>, text: "Staff's Performance", path: "/performance", comp: <StaffPerformancePage/>}
]

export default pageList