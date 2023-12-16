import React from 'react';
import './Header.css'

const Header = () => {

    return (
        <div className='bg-header p-2 shadow d-flex justify-content-between'> 
        
            {/* 左边logo区 */}
            <div className='text-light'>
                <i className='bi bi-heart' />
                <span className='fs-5 ps-2'>小马学React.js</span>
            </div>

            {/* 右边按钮区 */}
            <div>
                <button className='btn btn-primary btn-sm mx-1'> 登录</button>
                <button className='btn btn-danger btn-sm mx-1'> 退出</button>
            </div>
         </div>


    )



}

export default Header;