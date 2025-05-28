import { Link } from "react-router-dom";

function Signin() {
  return (
    <div
      style={{
        height: "100vh", // full screen height
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
          height: "90vh",
        }}
      >
        <div className="text-start mb-3" style={{ width: "250px" }}>
          <h2 className="mb-3 fw-bold">
            Signin to your <br />
            PopX account
          </h2>
          <p
            className="mb-4"
            style={{
              color: "#6B7280",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <form>
          <div
            style={{
              position: "relative",
              marginBottom: "1.5rem",
            }}
            className="mb-4"
          >
            <label
              htmlFor="Email"
              style={{
                position: "absolute",
                top: "-10px",
                left: "12px",
                backgroundColor: "#f8f9fa",
                padding: "0 4px",
                fontSize: "0.9rem",
                fontWeight: "500",
                color: "#6c25ff",
                paddingRight: "12px",
              }}
            >
              Email Address
            </label>
            <input
              style={{
                border: "2px solid #dee2e6",
                borderRadius: "8px",
                padding: "16px 12px 8px",
                backgroundColor: "#f8f9fa",
                width: "100%",
              }}
              type="text"
              className="form-control"
              placeholder="Enter Email Address"
              required
            />
          </div>

          <div
            style={{
              position: "relative",
              marginBottom: "1.5rem",
            }}
            className="mb-3"
          >
            <label
              htmlFor="Password"
              style={{
                position: "absolute",
                top: "-10px",
                left: "12px",
                backgroundColor: "#f8f9fa",
                padding: "0 4px",
                fontSize: "0.9rem",
                fontWeight: "500",
                color: "#6c25ff",
                paddingRight: "12px",
              }}
            >
              Password
            </label>
            <input
              style={{
                border: "2px solid #dee2e6",
                borderRadius: "8px",
                padding: "16px 12px 8px",
                backgroundColor: "#f8f9fa",
                width: "100%",
              }}
              type="text"
              className="form-control"
              placeholder="Enter Password"
              required
            />
          </div>

          <Link
            to="/profile"
            type="submit"
            className="btn w-100"
            style={{
              backgroundColor: "#CBCBCB",
              color: "#fff",
              fontWeight: "bold",
              padding: "12px",
              fontSize: "1rem",
              width: "100%",
            }}
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signin;
