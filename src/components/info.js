import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import Avatar from './avatar.jpg';

const Info = () => {
  return (
    <section className="card info">
      <img src={Avatar} alt="" />
      <div className="info-content">
        <h2 className="name">Billy Pearson</h2>
        <p className="job">Front-end developer</p>
        <div className="contact">
          <div className="email">
            <EmailIcon />
            <p>billy@example.com</p>
          </div>
          <div className="phone">
            <PhoneIcon />
            <p>(+603) 546 624 342</p>
          </div>
        </div>
        <p className="description">
          Self-motivated developer, who is willing to learn and create outstanding UI applications.
        </p>
      </div>
      
    </section>
  );
}

export default Info;