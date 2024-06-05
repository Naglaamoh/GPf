import React from 'react'

export default function Contact() {
  return (
<>
<body className='bodybird'>
<div class="container-fluid flex p-5">
        <div class="row row-cols-2 p-5">
            <div class="col contact-form form login-form shadow-lg">
                <h2>Contact Us</h2>
                <div>
                    <label for="contact-username">username</label>
                    <input type="text" id="contact-username" class="form-control shadow-lg"/>
                </div>
                <div>
                    <label for="contact-password">password</label>
                    <input type="password" id="contact-password" class="form-control shadow-lg"/>
                </div>
                <div>
                    <label for="contact-phone">phone</label>
                    <input type="tel" id="contact-phone" class="form-control shadow-lg"/>
                </div>
                <div>
                    <label for="contact-msg" class="textareaLab">comment</label>
                    <textarea name="contact-msg" id="contact-msg" cols="40" rows="3" class="form-control shadow-lg"></textarea>
                </div>
            </div>
            <div class="col icon-btn d-flex flex-column mb-3 justify-content-center align-items-center">
                <div class="animated">

                    <div class="icon-flip">
                        <i class="fas fa-dove bird"></i>
                    </div>
                    <div class="submit-btn">
                        <button type="button" onclick="" class="loginBtn">Send</button>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>
    </body>

</>
  )
}
