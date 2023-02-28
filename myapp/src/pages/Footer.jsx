import React from 'react'

const Footer = () => {
    return (
        <>
            <section className='footer'>
                <div className="type d-flex mt-5">
                    <p>HOME  .</p>
                    <p>ABOUT US   .</p>
                    <p>CONTACT US  .</p>
                    <p>CHECKOUT  .</p>
                    <p>WHISHLIST  .</p>
                    <p>COLUMN     .</p>
                    <br />
                    <p>TYPOGHRAPHY</p>
                </div>

                <div className="logo">

                    <img className='orio' src="https://wpbingosite.com/wordpress/oritina/wp-content/uploads/2017/09/logo.png" alt="" />

                    <p className='mt-4'>Copyright 2017,wpbingo.All Rights Reserved.</p>
                    <img src="https://wpbingosite.com/wordpress/oritina/wp-content/uploads/2017/09/payment.png" alt="" />
                </div>

                <div className="end">
                    <h4>FOLLOW US:</h4>

                </div>
            </section>
        </>
    )
}

export default Footer