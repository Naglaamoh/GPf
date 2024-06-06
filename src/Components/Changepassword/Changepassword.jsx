import React from 'react'
import { Link } from 'react-router-dom';

export default function Changepassword() {
  return (
    <>
            <div className="bodyhome2">
                <section className="section-formchange">
            <h2 className="info">Change Password</h2>
    
            <form>
                <p className="password">Current Password</p>
                <input type="password" placeholder="" id="password"/>
                <p className="password">New Password</p>
                <input type="password" placeholder="at least 8 character" id="password"/>
                <p className="password">Confirm Password</p>
                <input type="password" placeholder="at least 8 character" id="password"/>
                <button className="btnchange">Update Password</button>
    
            </form>
</section>

                    </div>

    
    
    </>
  )
}
