import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';

class Footer extends Component{
render(){
    return(
        <Jumbotron>
        <div className="container">
        <div className="row row-content">
            <div className="col-12 col-sm-4 offset-sm-1">
                <h3>LINKS</h3>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/aboutus'>About Us</Link></li>
                <li><Link to='/menu'>Menu</Link></li>
                <li><Link to='/contactus'>Contact Us</Link></li>
            </ul>
            </div>
            <div className="col-12 col-sm-6 offset-sm-1">
            
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                
                
                
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info" href='/'><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
        </Jumbotron>
    );
}
}

export default Footer;