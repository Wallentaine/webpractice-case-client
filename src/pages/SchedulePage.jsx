import React from 'react'
import ScheduleTable from "../components/schedule/ScheduleTable/ScheduleTable"

const SchedulePage = () => {



    return (
        <div className="page">
            <div className="pageTitle">
                <h2>Расписание</h2>
            </div>
            <ScheduleTable/>
        </div>
    )
}

export default SchedulePage