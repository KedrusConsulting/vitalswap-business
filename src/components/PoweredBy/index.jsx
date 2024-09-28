import plaidLogo from "../../assets/plaid-logo-horizontal-RGB 1@2x.png";
import dojahLogo from "../../assets/dojah.png";

import googleLogo from "../../assets/google.png";
import awsLogo from "../../assets/aws.png";

const images = [
  { name: "Dojah logo", src: dojahLogo },
  { name: "Google logo", src: googleLogo },
  { name: "Plaid logo", src: plaidLogo },
  { name: "AWS logo", src: awsLogo },
];

const PoweredBy = () => {
  return (
    <div className="powered-by">
      <h4 data-aos="fade-up">Powered By</h4>

      <div className="powered-by__logos">
        {images.map((img) => (
          <img
            className="powered-by__logo"
            key={img.name}
            src={img.src}
            alt={img.name}
            data-aos="fade-up"
          />
        ))}
      </div>
    </div>
  );
};

export default PoweredBy;
