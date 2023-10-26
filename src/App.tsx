import React from "react";
import { useRef } from "react";
import logo from "./images/logo.png";
import microsoft from "./images/microsoft.png";
import technician from "./images/technician.png";
import serviceRadius from "./images/serviceradius.jpg";
import Appointment from "./Appointment";
import "./App.css";
import {
  FluentProvider,
  webLightTheme,
  Title1,
  Button,
} from "@fluentui/react-components";

function App() {
  const elementRef1 = useRef<HTMLDivElement>(null);
  const elementRef2 = useRef<HTMLDivElement>(null);
  const elementRef3 = useRef<HTMLDivElement>(null);
  const handleClick1 = () => {
    if (elementRef1.current != null) {
      elementRef1.current.scrollIntoView();
    }
  };
  const handleClick2 = () => {
    if (elementRef2.current != null) {
      elementRef2.current.scrollIntoView();
    }
  };
  const handleClick3 = () => {
    if (elementRef3.current != null) {
      elementRef3.current.scrollIntoView();
    }
  };

  return (
    <FluentProvider theme={webLightTheme}>
      <div>
        <body>
          <header>
            <div>
              <img src={logo} alt="logo" width="175" height="175"></img>
              <img
                src={microsoft}
                alt="microsoft certified"
                width="128"
                height="64"
              ></img>
              <br></br>

              <Title1>
                Mobile Computer Repair Services in the Tampa Bay Area
              </Title1>

              <p>Professional, Knowledgeable, and Affordable</p>
              <a href="https://tampabaycomputerrepairllc.com/#review">
                4.8 / 5 stars from 25 reviews ⭐️⭐️⭐️⭐️⭐️
              </a>
              <p>Mon-Sat 8:00am - 7:00pm</p>
              <p>
                Call <a href="tel:813-506-3416">813-506-3416</a>
              </p>
              <Appointment></Appointment>
            </div>
          </header>
          <nav>
            <ul>
              <li>
                <Button className="a" onClick={handleClick1}>
                  About Us
                </Button>
              </li>

              <li>
                <Button className="a" onClick={handleClick2}>
                  Our Services
                </Button>
              </li>

              <li>
                <Button className="a" onClick={handleClick3}>
                  Contact Us
                </Button>
              </li>
            </ul>
          </nav>
          <section ref={elementRef1} id="about">
            <h2>We come to you</h2>

            <p>
              The phrase "mobile computer repair" means that we visit your
              location, to solve any computer-related issues you may have.
            </p>
            <img
              src={technician}
              alt="Trustworthy Technician"
              width="275"
              height="275"
            ></img>

            <h3>Who is Tampa Bay Computer Repair?</h3>

            <p>
              We are your Local Mobile Computer Repair Engineers that provides
              fast and affordable solutions to all your computer problems. Our
              team of experts is knowledgeable and experienced in handling all
              types of computer issues, from hardware to software, networking
              and security. We pride ourselves on providing friendly and
              reliable service to businesses and business clients in their home
              in the Greater Tampa Bay area. Call now at{" "}
              <a href="tel:813-506-3416">813-506-3416</a> or{" "}
              <Appointment></Appointment>
            </p>
          </section>

          <section ref={elementRef2} id="services">
            <h2>Introducing Tampa Bay's Premier Computer Experts!</h2>

            <p>🔧 Need Computer Help or Tech Support? We've got you covered!</p>
            <p>
              🖥️ Facing issues? Our Computer Repair and PC Troubleshooting
              experts are here to help!
            </p>
            <p>
              💼 Looking for reliable IT Services and Computer Assistance? Look
              no further!
            </p>
            <p>
              💻 Our dedicated team provides expert Computer Support and Tech
              Help!
            </p>
            <p>
              🔍 For all your PC Help needs, we offer Computer Problem Solving
              and Computer Maintenance!
            </p>
            <p>
              🌐 Explore cutting-edge IT Solutions tailored to your business!
            </p>
            <p>
              🦠 Worried about viruses? We specialize in Virus Removal and
              Software Installation!
            </p>
            <p>
              🔨 Hardware troubles? Our Hardware Repair services have you
              covered!
            </p>
            <p>🌐 Need a seamless Network Setup? We're the pros you need!</p>
            <p>
              🔍 Lost data? We excel at Data Recovery and Computer Diagnostics!
            </p>
            <p>🌐 Offering Remote Tech Support for your convenience!</p>
            <p>
              👩‍💻 Trust the Tampa Bay Computer Experts for all your tech needs!
            </p>

            <p>
              Contact us today at <a href="tel:813-506-3416">813-506-3416</a>{" "}
              and experience top-notch computer solutions!
            </p>

            <p>
              {" "}
              We aim to resolve all computer issues same day on-site and we
              offer a 7 day guarantee on our services. If you're seeking a
              Computer Engineer capable of resolving all your computer issues,
              as opposed to a computer technician, enthusiast, or a geek who can
              only address a subset of your problems, please reach out to us at{" "}
              <a href="tel:813-506-3416">813-506-3416</a> or{" "}
              <Appointment></Appointment>
            </p>
          </section>

          <section ref={elementRef3} id="contact">
            <h2>Contact Us</h2>

            <p>
              If you need help with your computer, don't hesitate to contact us.
              You can reach us by phone at{" "}
              <a href="tel:813-506-3416">813-506-3416</a> or by{" "}
              <a href="mailto:JohnRubio@TampaBayComputerRepairllc.com">
                E-mail
              </a>{" "}
              . We often offer same-day service and can come to your address to
              fix your computer problem. Let us take care of your computer so
              you can get back to what's important.
            </p>

            <img
              src={serviceRadius}
              alt="service area"
              width="300"
              height="300"
            ></img>
          </section>
          <div className="keywords">
            <p className="servicearea">
              {" "}
              We provide on-site mobile services in the Greater Tampa Bay area,
              Brandon, Carrollwood, Cheval, Citrus Park, Clearwater, Dunedin,
              East Lake, East Lake-Orient Park, Egypt Lake-Leto, Gibsonton,
              Gulfport, Holiday, Hudson, Jasmine Estates, Keystone, Lake
              Magdalene, Land O' Lakes, Largo, Lutz, Mango, New Port Richey,
              Northdale, Oldsmar, Palm Harbor, Palm River-Clair Mel, Pinellas
              Park, Plant City, Riverview, Ruskin, Safety Harbor, Seminole,
              Spring Hill, St. Pete Beach, St. Petersburg, Sun City Center,
              Tampa, Tarpon Springs, Temple Terrace, Thonotosassa, Town 'n'
              Country, Trinity, University, Valrico, Wesley Chapel, Westchase
              and Zephyrhills.
            </p>
          </div>
          <footer>
            <p>© 2023 Tampa Bay Computer Repair LLC. All rights reserved.</p>
          </footer>
        </body>
      </div>
    </FluentProvider>
  );
}

export default App;
