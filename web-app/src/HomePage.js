export default function HomePage(){
    return(
        <div className="navbar">
        <div className="nav-header">
          <p className="nav-title">Booking.com</p>
          <div className="nav-con">
            <li>?</li>
            <button className="primary-btn">Register</button>
            <button className="primary-btn">sign-in</button>
          </div>
        </div>
        <div className="items">
          <li>Stays</li>
          <li className="active">Flights</li>
          <li>Car rentals</li>
          <li>Attractions</li>
          <li>Airport Taxis</li>
        </div>
      </div>
    )
}