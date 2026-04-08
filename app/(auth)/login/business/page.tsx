export default function BusinessLoginPage() {
  return (
    <div className="page stack">
      <h1>Business Login</h1>
      <form className="card stack" action="/api/auth/login" method="post">
        <input type="hidden" name="role" value="BUSINESS" />
        <label>
          Email
          <input className="input" type="email" name="email" required />
        </label>
        <label>
          Password
          <input className="input" type="password" name="password" required />
        </label>
        <button className="btn" type="submit">
          Login as business
        </button>
      </form>
      <p style={{ fontSize: "0.85rem", color: "#666" }}>
        Demo: owner@demoauto.com / Business123!
      </p>
    </div>
  );
}
