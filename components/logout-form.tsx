export function LogoutForm() {
  return (
    <form action="/api/auth/logout" method="post">
      <button className="btn btn-secondary" type="submit">
        Logout
      </button>
    </form>
  );
}
