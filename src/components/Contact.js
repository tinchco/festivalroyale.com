import React from 'react'
import SubscribeForm from 'react-mailchimp-subscribe'

const formProps = {
  action:
    "https://festivalroyale.us17.list-manage.com/subscribe/post?u=34c7d2e011c20603d9ac75c4b&amp;id=3e8057e3ae",
  messages: {
    btnLabel: "Subscribe",
    sending: "Reaching into the sea...",
    success: "You are subscribed! Stay tuned for updates.",
    error: "Oops, wasn't able to register your email address."
  },
  className:
    "subscribe-form",
  styles: {
    sending: {
      fontSize: 18,
      color: "#FFC000"
    },
    success: {
      fontSize: 18,
      color: "#00D3A7"
    },
    error: {
      fontSize: 18,
      color: "#FF0048"
    }
  }
};

const Form = () => <SubscribeForm {...formProps} />;

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <label htmlFor="email">Enter Email for Updates</label>
                <Form />

                {/*
                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
                */}

            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-user"></span>
                        <h3>Contact</h3>
                        <div className="name">Jason Michael Berman</div>
                        <a className="email" href="mailto:jason@festivalroyale.com">jason@festivalroyale.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-user"></span>
                        <h3>Contact</h3>
                        <div className="name">Trevor Groth</div>
                        <a className="email" href="mailto:trevor@festivalroyale.com">trevor@festivalroyale.com</a>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
