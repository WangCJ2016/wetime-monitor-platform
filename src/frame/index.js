import React from 'react'
import './index.less'

export default ({children}) => {
    return (
        <div className="frame">
            <header className='header'>
                wetime-monitor-platform
            </header>
            {
                children
            }
            <footer className='footer'>
                © 版权所有 wuxiaoxiao wangchaojian
            </footer>
        </div>
    )
}