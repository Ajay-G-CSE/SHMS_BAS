import "./Login.css";

export default function Login() {
  return (
    <div className="login-page">
      {/* LEFT PANEL */}
      <div className="login-left">
        <div className="login-card">
          <h2 className="logo">MHC</h2>

          <h3>Welcome!</h3>
          <p className="subtitle">
            Continue with Google or enter your details
          </p>

          <form>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <div className="password-field">
              <input type="password" placeholder="Password" />
              <span className="eye">👁</span>
            </div>
            <div className="password-field">
              <input type="password" placeholder="Confirm Password" />
              <span className="eye">👁</span>
            </div>

            <button className="primary-btn">Sign up</button>

            <div className="divider">or</div>

            <button className="google-btn">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
              />
              Continue with Google
            </button>
          </form>

          <p className="footer-text">
            Already have an account? <span>Login</span>
          </p>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="login-right">
        <div className="overlay">
          <h2>Smart Healthcare,</h2>
          <h2>Seamless Management!</h2>
          <p>
            “Transforming healthcare with seamless and intelligent hospital
            management”
          </p>
        </div>
      </div>
    </div>
  );
}
