import React from 'react';

const Bio = () => {
    return (
        <div className='container'>
            <div className='mt-4'>
                <h2 style={{ color: 'white' }}>PERSONAL INFORMATION</h2>
                <div className='row d-flex justify-content-between mt-4'>
                    <div className='col-md-5'>
                        <p>First Name: MD Nahidul Islam</p>
                        <p>Last Name: Eraz</p>
                        <p>Nationality: Bangladeshi</p>
                        <p>Language: Bangle(Native), English, Hindi</p>
                        <p>Job: Ready to Hire</p>
                    </div>
                    <div className='col-md-5'>
                        <p>Address: H#22, Block-B, Jatrabari, Dhaka - 1362</p>
                        <p>Email: nahidulislameraz@gmail.com</p>
                        <p>Mobile: +880 152 143 1791</p>
                        <p>Zoom: 668 908 1418</p>
                        <p>Skype: +8801521431791</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bio;