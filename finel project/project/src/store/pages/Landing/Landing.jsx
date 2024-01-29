import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBIcon } from 'mdb-react-ui-kit';

const LandingPage = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="6">
          <h1 className="font-weight-bold">Welcome to Pockers</h1>
          <p className="lead">Discover the world of Pockers and enjoy your favorite pocket-sized games!</p>
        </MDBCol>
        <MDBCol md="6">
          {/* You can add a call-to-action here, like a button to explore games */}
          <MDBBtn color="primary">Explore Games</MDBBtn>
        </MDBCol>
      </MDBRow>
  
      <MDBRow className="mt-5">
        <MDBCol md="12" className="text-center">
          <h2 className="font-weight-bold mb-4">Featured Games</h2>
          {/* Add your featured games or content here */}
          {/* Example: */}
          <div className="card-deck">
            <div className="card">
              <img src="game1.jpg" className="card-img-top" alt="Game 1" />
              <div className="card-body">
                <h5 className="card-title">Game 1</h5>
                <p className="card-text">Description of Game 1.</p>
              </div>
            </div>
            {/* Add more game cards as needed */}
          </div>
        </MDBCol>
      </MDBRow>

      <MDBRow className="mt-5">
        <MDBCol md="12" className="text-center">
          <h2 className="font-weight-bold mb-4">How It Works</h2>
          {/* Add a section explaining how Pockers works */}
          <p>
            Explore a wide range of pocket-sized games. Sign up, choose your favorites, and start playing instantly. 
            Pockers provides a seamless gaming experience on the go.
          </p>
        </MDBCol>
      </MDBRow>

      <MDBRow className="mt-5">
        <MDBCol md="12" className="text-center">
          <h2 className="font-weight-bold mb-4">Contact Us</h2>
          {/* Add a contact form or contact information */}
          <form>
            <MDBInput label="Your Name" group type="text" validate />
            <MDBInput label="Your Email" group type="email" validate />
            <MDBInput type="textarea" label="Your Message" rows="4" />
            <MDBBtn color="primary">Send Message</MDBBtn>
          </form>
        </MDBCol>
      </MDBRow>

      <MDBRow className="mt-5">
        <MDBCol md="12" className="text-center">
          <h2 className="font-weight-bold mb-4">About Pockers</h2>
          <p>
            Pockers is a platform dedicated to providing you with a collection of amazing pocket-sized games. 
            Enjoy gaming on the go with Pockers!
          </p>
        </MDBCol>
      </MDBRow>
      {/* Add more sections as needed */}
    </MDBContainer>
  );
};

export default LandingPage;
