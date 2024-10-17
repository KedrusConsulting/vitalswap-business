import React, { useEffect } from "react";
import userImg01 from "../../assets/user-3.png";
import userImg02 from "../../assets/user-5.png";
import userImg03 from "../../assets/user-7.png";

const GetInTouch = () => {
  useEffect(() => {
    (function (d, w, c) {
      w.BrevoConversationsID = "613fed0170e3861a7377a46a";
      w[c] =
        w[c] ||
        function () {
          (w[c].q = w[c].q || []).push(arguments);
        };
      var s = d.createElement("script");
      s.async = true;
      s.src = "https://conversations-widget.brevo.com/brevo-conversations.js";
      if (d.head) d.head.appendChild(s);
    })(document, window, "BrevoConversations");
  }, []);

  useEffect(() => {
    window.BrevoConversationsSetup = {
      customWidgetButton: ".custom-chat-button",
      chatWidth: 400,
      chatHeight: 550,
    };
  }, []);

  const handleGetInTouch = () => {
    if (window.BrevoConversations) {
      window.BrevoConversations("openChat", true);
    } else {
      console.log("Brevo Conversations widget is not loaded yet.");
    }
  };

  return (
    <section className="get-in-touch" id="get-in-touch">
      <div className="container">
        <div className="get-in-touch__inner" data-aos="fade-up">
          <div className="avatars">
            <div className="avatar avatar--1">
              <img src={userImg01} alt="User avatar" />
            </div>

            <div className="avatar avatar--2">
              <img src={userImg02} alt="User avatar" />
            </div>

            <div className="avatar avatar--3">
              <img src={userImg03} alt="User avatar" />
            </div>
          </div>
          <h4>Still have questions?</h4>
          <p>
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>

          <button
            onClick={handleGetInTouch}
            className="btn btn--secondary custom-chat-button"
          >
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
