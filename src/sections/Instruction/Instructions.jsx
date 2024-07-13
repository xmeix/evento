import "./Instructions.css";
const Instructions = () => {
  return (
    <div className="instructions">
      <video className="inst-vid" controls>
        <source src="./Videos/video1.mp4" type="video/mp4" />
      </video>

      <div className="inst-desc">
        <p className="section-title">How to Add an Event on Our Platform</p>
        <div className="inst-steps">
          <div className="inst-step">
            <span className="step-number">1</span>
            <p>Register or log in to your account.</p>
          </div>
          <div className="inst-step">
            <span className="step-number">2</span>
            <p>
              Navigate to the <b>Add Place | Event</b> section.
            </p>
          </div>
          <div className="inst-step">
            <span className="step-number">3</span>
            <p>
              Fill in the event details such as name, date, location, and
              description.
            </p>
          </div>
          <div className="inst-step">
            <span className="step-number">4</span>
            <p>Upload any relevant images or files.</p>
          </div>
          <div className="inst-step">
            <span className="step-number">5</span>
            <p>Review and submit your event.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
