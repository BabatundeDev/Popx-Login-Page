import womanPic from '../assets/images/woman.jpg';
import cameraIcon from '../assets/icons/camera.svg';

function Profile() {
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
          backgroundColor: "#f8f9fa",
          maxWidth: "400px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          height: "90vh",
        }}
      >
        <header
          style={{
            background: "white",
            padding: "10px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <p style={{ fontSize: "1.2rem", fontWeight: "500", paddingTop: "5px" }}>
            Account Settings
          </p>
        </header>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              padding: "20px",
              position: "relative",
            }}
          >
            <div style={{ position: "relative", width: "90px", height: "90px" }}>
              <img
                src={womanPic}
                alt="profile"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <button
                style={{
                  padding: "5px",
                  border: "none",
                  background: "#6c25ff",
                  color: "white",
                  borderRadius: "50%",
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={cameraIcon}
                  alt="camera icon"
                  style={{ width: "15px" }}
                />
              </button>
            </div>

            <div>
              <p style={{ fontSize: "17px", fontWeight: "bold", margin: "0" }}>
                Marry Doe
              </p>
              <p style={{ fontSize: "16px", padding: "0", margin: "0" }}>
                Marry@gmail.com
              </p>
            </div>
          </div>

          <div>
            <p style={{ fontWeight: "500", padding: "0 20px", margin: "0" }}>
              Lorem ipsum dolor sit amet, consectetur sadip scing elitr. Sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam.
            </p>
          </div>

          <div style={{ border: "1px dashed #d3d3d3", marginTop: "20px" }}></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
