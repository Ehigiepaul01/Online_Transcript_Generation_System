
import cardImage1 from '../assets/Rectangle 26.png'; 
import cardImage2 from '../assets/Rectangle 26 (1).png';
import cardImage3 from '../assets/Rectangle 26 (2).png';

function App() {
  return (
    <section id="service">
      <h3>Why you should use Roam</h3>
      <div className="service-container">
        <div className="card-container">
          <div className="card">
            <div className="image">
              <img src={cardImage1} alt="card" />
              <p>pay school fees</p>
            </div>
            <h6>No more bank queues.</h6>
            <p>
              Pay your school fees securely with our service and keep close
              track.
            </p>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <div className="image">
              <img src={cardImage2} alt="card" />
              <p>get transcript easily</p>
            </div>
            <h6>Skip the long line of administration.</h6>
            <p>Apply for your transcript and we will handle the rest.</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <div className="image">
              <img src={cardImage3} alt="card" />
              <p>keep track</p>
            </div>
            <h6>Keep close track.</h6>
            <p>You can monitor all your activity on your user dashboard.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
