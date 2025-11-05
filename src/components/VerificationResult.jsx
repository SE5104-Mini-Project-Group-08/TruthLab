import React, { useState } from "react";
import { CheckCircle, XCircle, AlertTriangle, X } from "lucide-react";
import "./css/verificationResult.css";

function VerificationResult({ score, onVerifyAnother, contentType }) {
  const [showReportForm, setShowReportForm] = useState(false);

  let status = "";
  let resultClass = "";
  let message = "";
  let IconComponent;
  let resultStatement = "";

  if (score >= 70) {
    status = "Likely Real";
    resultClass = "result-success";
    message = "This content seems trustworthy.";
    resultStatement = "This is a true news.";
    IconComponent = CheckCircle;
  } else if (score >= 40) {
    status = "Uncertain";
    resultClass = "result-warning";
    message = "The content credibility is questionable.";
    resultStatement = "Hard to verify true or fake.";
    IconComponent = AlertTriangle;
  } else {
    status = "Likely Fake";
    resultClass = "result-danger";
    message = "This content is likely false.";
    resultStatement = "This is a fake news.";
    IconComponent = XCircle;
  }

  return (
    <div className="verification-card">
      {/* Close button */}
      <button className="close-btn" onClick={onVerifyAnother}>
        <X size={15} />
      </button>

      {/* If report form is open, show that instead */}
      {showReportForm ? (
        <div className="report-form">
          <button className="close-btn" onClick={() => setShowReportForm(false)}>
            <X size={15} />
          </button>
          <h2 className="verification-title">Report Issue</h2>

          <form className="report-form-inner">
            <input type="email" placeholder="Enter your email..." required />

            <label>How much you satisfy with the result?</label>
            <div className="radio-group">
              {["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"].map(
                (opt, i) => (
                  <label key={i}>
                    <input type="radio" name="satisfaction" /> {opt}
                  </label>
                )
              )}
            </div>

            <label>Report anything</label>
            <textarea placeholder="Write your issue here..." rows="6"></textarea>

            <button type="submit" className="report-submit-btn">
              Report
            </button>
          </form>
        </div>
      ) : (
        <>
          <h2 className="verification-title">Verification Results</h2>
          <p className="verification-time">
            Analysis completed on {new Date().toLocaleString()}
          </p>

          <div className={`result-box ${resultClass}`}>
            <IconComponent className="result-icon" size={60} />
            <h3 className="result-text">{status}</h3>
            <h4 className="result-score">Credibility Score: {score}/100</h4>
            <h3>{message}</h3>

            <div className="button-group">
              <button onClick={onVerifyAnother} className="verify-btn">
                Verify Another
              </button>
              <button className="report-btn" onClick={() => setShowReportForm(true)}>
                Report Issue
              </button>
            </div>
          </div>

          <div className="analyzed-section">
            <p className="analyzed-label">Content Analyzed</p>
            <div className="analyzed-box">
              <p>{resultStatement}</p>
              <small>Content Type: {contentType}</small>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default VerificationResult;
