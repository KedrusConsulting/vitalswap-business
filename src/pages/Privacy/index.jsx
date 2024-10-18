import React from "react";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

function Privacy() {
  return (
    <>
      <header className="header--terms">
        <Navigation />

        <div className="hero--terms">
          <h1 className="heading--primary">Privacy Policy</h1>
          <p>Effective date: 3rd of June, 2022</p>
        </div>
      </header>

      <main className="main--terms">
        <div className="wrapper">
          <div className="text-block">
            <h5 className="text-block__heading">Scope of Privacy Policy.</h5>
            <p>
              This privacy policy ("Privacy Policy") sets forth how your
              personal data collected from your use of the platform
              vitalswap.com (Website) and associated mobile application
              ‘’VitalSwap’’ (App) will be processed and does not cover any
              matters irrelevant to the website and application or apply to any
              persons not commissioned by us or not involved in the management
              of this website and application.
            </p>
          </div>

          <div className="text-block">
            <h5 className="text-block__heading">
              Collection and Use of Personal Data.
            </h5>
            <p>
              To provide you with optimal interactive services, we may ask you
              to provide your personal data, the scope of which is as follows:
            </p>

            <p>
              We may collect e-mail address, Full Name, Bank Account Number,
              Credit and Debit card details, address, contact, contact list,
              images, selfie, date of birth, location, location data, and any
              other data that you provide while using the features of this app
              or website.
            </p>

            <p>
              Images and Identification documents: We may collect copies of your
              identification documents and images, such as your driver's license
              or passport, for verification and KYC (know your customer)
              purposes.
            </p>

            <p>
              Selfie: We may collect a selfie of you for verification and KYC
              purposes.
            </p>

            <p>
              Contact list: We may collect information about your contacts from
              your phone's contact list if you choose to import this information
              into the Service.
            </p>

            <p>
              If you provide your personal data such as email or phone number,
              such data will be used to contact you as part of the functionality
              of our services.
            </p>

            <p>
              We may share all or part of your data with 3rd party as part of
              the functionality of our services
            </p>

            <p>
              Location and Location Data: We may collect information about your
              location and location data both in the foreground and background,
              to comply with regulatory requirements, enhance app functionality,
              and provide relevant services including sharing with 3rd party
              partners to provide service or comply to regulations.
            </p>

            <p>
              When you use this app or website, our server will automatically
              track your activities, including your IP address, visit time, the
              type of your browser, your browsing of and clicking on certain
              information, and others. These records will be used to improve our
              service on this website and will be kept for internal use only. We
              will not disclose these records to the public but might share with
              our partner service providers to provide you with services.
            </p>

            <p>
              We will collect and use your personal data solely for the
              operation of the app.
            </p>

            <p>
              Whether to provide your personal data is at your sole discretion.
              However, if the personal data you provided is reported or found to
              be insufficient to identify you, stolen from or in the name of any
              other person(s), or untrue, you will be deprived of rights or
              interest related to use of our website or the App.
            </p>

            <p>
              You may, pursuant to the Personal Data Protection Act, request
              that we check, supplement or correct, stop collecting, processing,
              or using, duplicate, and/or delete your personal data collected
              from this event (on this website). Submit your request on contact
              us section of vitalswap.com.
            </p>

            <p>
              If you ask that we stop collecting, processing, or using or delete
              your personal data collected in the event (on this website),
              thereby causing our failure to provide the service, We shall
              discontinue rendering services to you and we do not take
              responsibility for any difficulty this may cause you.
            </p>

            <p>
              Unless with your consent or otherwise provided by law, in this
              event (on this website) we will not disclose your personal data to
              any third party or use them beyond the scope of the purpose(s) of
              collection.
            </p>
          </div>

          <div className="text-block">
            <h5 className="text-block__heading">
              Protection of Personal Data.
            </h5>
            <p>
              This website or app may contain links to other websites, but they
              will not be subject to this Privacy Policy.
            </p>

            <p>
              To ensure that we provide you with the best quality service, this
              website may place a cookie in your browser. If you refuse to
              accept the cookie, you may block it by setting the privacy level
              in your browser to high. However, several features of this website
              may be disabled because of the new setting.
            </p>

            <p>
              This Privacy Policy may be amended from time to time for
              compliance with the Personal Data Protection Act or other relevant
              laws and regulations, or as needed. The amendments to this Privacy
              Policy will be posted as relevant information on this event (this
              website).
            </p>

            <p>
              You may launch complaints in connection with personal data
              protection with us by E-mail: contact@vitalswap.com
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Privacy;
