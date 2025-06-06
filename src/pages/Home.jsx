import { Link } from "react-router-dom"; // ✅ Required import

function Home() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "1px solid #dee2e6",
          padding: "20px",
          backgroundColor: "#f8f9fa",
          maxWidth: "400px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          height: "90vh",
        }}
      >
        <div className="text-start mb-3">
          <h2 className="mb-3">Welcome to Popx</h2>
          <p
            className="mb-4"
            style={{
              color: "#6B7280",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="d-flex flex-column gap-3">
          <Link
            to="/signup"
            className="btn"
            style={{
              background: "#6c25ff",
              color: "white",
              padding: "12px 0px",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Create Account
          </Link>
          <Link
            to="/signin"
            className="btn"
            style={{
              background: "#CEBAFB",
              color: "black",
              padding: "12px 0px",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
