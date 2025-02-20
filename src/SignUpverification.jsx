import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OTPVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(43);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 1) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', textAlign: 'center', width: '400px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ color: 'green', fontSize: '24px', fontWeight: 'bold' }}>✔</span>
          <h2 style={{ marginLeft: '10px', fontSize: '18px', fontWeight: 'bold' }}>Please Verify Email ID</h2>
        </div>
        <div style={{ backgroundColor: '#e8f5e9', padding: '10px', borderRadius: '5px', fontSize: '14px', color: '#333' }}>
          <p>Enter the One Time Password (OTP) which has been sent to</p>
          <p style={{ fontWeight: 'bold' }}>(e*********@gmail.com)</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              value={digit}
              maxLength="1"
              onChange={(e) => handleChange(e, index)}
              style={{ width: '40px', height: '50px', textAlign: 'center', fontSize: '20px', fontWeight: 'bold', border: '1px solid #ccc', margin: '0 5px', borderRadius: '5px' }}
            />
          ))}
        </div>
        <p style={{ fontSize: '14px', color: '#666' }}>
          Don’t receive OTP? Resend in <span style={{ color: 'red' }}>{timer} sec</span>
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <button style={{ padding: '10px 20px', border: '1px solid #ccc', borderRadius: '25px', background: 'none'  }} onClick={handleGoBack}>Close</button>
          <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', borderRadius: '25px', border: 'none' }} onClick={() => navigate("/SUPC")}>Verify Email</button>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
