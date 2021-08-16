import React from 'react'
import './widgetSm.css'
import {VisibilityRounded} from '@material-ui/icons'

function WidgetSm() {
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/8624308/pexels-photo-8624308.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle"> Software Engineer </span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityRounded className= 'widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/8624308/pexels-photo-8624308.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle"> Software Engineer </span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityRounded className= 'widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/8624308/pexels-photo-8624308.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle"> Software Engineer </span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityRounded className= 'widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/8624308/pexels-photo-8624308.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle"> Software Engineer </span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityRounded className= 'widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/8624308/pexels-photo-8624308.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle"> Software Engineer </span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityRounded className= 'widgetSmIcon' />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm
