import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <h1>GreenSpots - Find Electrical Charging Points Near You</h1>
      <div className="about-box d-flex  justify-content-between">
        <div>
          <h1 className="pb-4">About Us</h1>
          <p className="">
            GreenSpots is a user-friendly and comprehensive online platform that
            empowers electric vehicle (EV) owners to effortlessly locate
            electrical charging points based on their current location. With an
            intuitive interface and a vast database of charging stations,
            ElectraMap is your go-to resource for finding the nearest and most
            convenient charging spots for your EV.
            <br></br>
            Upon accessing the GreenSpots webpage, users are greeted with an
            interactive map display, intelligently populated with markers
            representing available charging stations. The map is capable of
            seamlessly zooming in and out, allowing users to navigate with ease
            and precision. The website automatically detects your location or
            can be manually set to a specific area of interest.
          </p>
        </div>

        <img
          className=""
          src="https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
          alt="A group of People"
        />
      </div>

      <div className="about-box d-flex justify-content-between">
        <img
          className=""
          src="https://images.unsplash.com/photo-1594535182308-8ffefbb661e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
          alt="A group of People"
        />
        <p className=" ">
          Using advanced geolocation technology, GreenSpots employs real-time
          data integration to provide accurate and up-to-date information about
          charging stations. Each marker on the map displays key details, such
          as the type of charging connector available (e.g., Type 2, CHAdeMO,
          CCS), the charging speed, and the charging network operator. This
          wealth of information allows users to make informed decisions and plan
          their charging sessions accordingly.
          <br></br>
          GreenSpots offers several filtering options to refine your search
          results. Users can narrow down their choices based on charging speed,
          connector type, and network operator preferences. Additionally, the
          platform incorporates user ratings and feedback, enabling EV owners to
          share their experiences and recommend charging stations based on
          factors such as reliability, accessibility, and amenities.
        </p>
      </div>

      <div className="about-box d-flex  justify-content-between">
        <div>
          <p className="">
            To enhance the user experience further, GeenSpots provides
            additional features and services. Users can create an account to
            save their favorite charging stations, set alerts for station
            availability, and receive notifications about charging
            infrastructure updates. The platform also includes a comprehensive
            FAQ section, guiding users through the charging process, addressing
            common concerns, and providing tips for efficient charging.
            <br></br>
            <br></br>
            GreenSpots is not only useful for individual EV owners but also for
            businesses and organizations seeking to incorporate EV charging
            infrastructure into their facilities. The platform offers a
            dedicated section for businesses to register and showcase their
            charging stations, attracting EV drivers to their locations and
            contributing to the growth of a sustainable transportation
            ecosystem.
          </p>
        </div>

        <img
          className=""
          src="https://images.unsplash.com/photo-1607197109166-3ab4ee4b468f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="A group of People"
        />
      </div>

      <div className="about-box d-flex justify-content-between">
        <img
          className=""
          src="https://images.unsplash.com/photo-1617886322207-6f504e7472c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="A group of People"
        />
        <p className=" ">
          Whether you are planning a long-distance trip or simply need a quick
          top-up, GreenSpots empowers you with the information you need to
          charge your electric vehicle conveniently and reliably. Join the
          ever-expanding community of EV owners and let GreenSpots guide you to
          the nearest electrical charging points, ensuring a smooth and
          stress-free EV charging experience.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
