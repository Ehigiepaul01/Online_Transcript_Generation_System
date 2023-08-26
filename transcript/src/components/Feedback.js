
import feedbackImage from '../assets/Group 561.png';

function App() {
  return (
    <section className="feedback" id="testimonial">
      <div className="feedback-container">
        <h4>Feedback</h4>

        <div className="feedback-content">
          <img src={feedbackImage} alt="avatar" />
          <p>
            It is not easy to come across a wonderful platform like Roam. <br />
            Roam has made downloading my stranscripts so easy and stress free <br />
             as I no longer have to move from desk to desk before getting my trabscripts.
          </p>

          <h4 className="name">Marie Bolanle</h4>
          <h6>Student</h6>
        </div>
      </div>
    </section>
  );
}

export default App;
