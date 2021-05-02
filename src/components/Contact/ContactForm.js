import React from 'react';

const ContactForm = () => {
    return (
        <div>
            <form action="">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name >>" required />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Phone >>" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email Address >>" required />
                </div>
                <div className="form-group">
                    <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message >>"></textarea>
                </div>
                <div className="form-group text-center">
                    <div class="buttons">
                        <div class="container">
                            <a href="#" class="btn effect01"><span>Send Me Message</span></a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;