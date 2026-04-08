export default function AdminLoginPage() {
  return (
    <div className="page stack">
      <h1>Admin Login</h1>
      <form className="card stack" action="/api/auth/login" method="post">
        <input type="hidden" name="role" value="ADMIN" />
        <label>
          Email
          <input className="input" type="email" name="email" required />
        </label>
        <label>
          Password
          <input className="input" type="password" name="password" required />
        </label>
        <button className="btn" type="submit">
          Login as admin
        </button>
      </form>
    </div>
  );
}
