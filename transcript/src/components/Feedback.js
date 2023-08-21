
import feedbackImage from '../assets/Group 561.png';

function App() {
  return (
    <section className="feedback" id="testimonial">
      <div className="feedback-container">
        <h4>Feedback</h4>

        <div className="feedback-content">
          <img src={feedbackImage} alt="avatar" />
          <p>
            It is not everyday that you come across a passionate and
            trustworthy financial advisor <br />
            John has encompassed that really well has provided us with the
            helping hand to <br />
            dream that much more and make that dream a possible reality.
          </p>

          <h4 className="name">Marie Bolanle</h4>
          <h6>Student</h6>
        </div>
      </div>
    </section>
  );
}

export default App;
