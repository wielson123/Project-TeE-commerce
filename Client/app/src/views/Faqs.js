import React from "react";

const Faqs = () => {
  return (
    <div>
      <h1 className="footertitle"> FAQs</h1>
      <div className="footersections">
        <section className="fabric-ink">
          <h2>T-SHIRT FABRIC &amp; INK</h2>
          <p>
            Our unisex t-shirts are all 100% cotton, made of fine Portuguese
            jersey which has been treated to provide softness and durability.
          </p>
          <p>
            Our female fit is made with a blend of cotton and modal Portuguese
            jersey.
          </p>
          <p>
            We only print with high-quality water-based inks, which are not only
            environmentally friendly but also give a soft touch to every design.
          </p>
          <p>
            Check our <a href="#size-guide">Size Guide</a> and T-shirt Care for
            more information about our tees.
          </p>
        </section>

        <section className="availability">
          <h2>T-SHIRT AVAILABILITY</h2>
          <p>
            In every local Typographia store we have a different t-shirt design
            selection. This means that in our online store you will find
            different designs from the ones you can find in our physical stores
            and vice-versa.
          </p>
          <p>
            We post a fresh selection of new designs in our online store
            regularly. Sign your e-mail here to receive our updates.
          </p>
        </section>

        <section className="returns-exchanges">
          <h2>RETURNS &amp; EXCHANGES</h2>
          <p>
            You can exchange t-shirts within 30 days of receiving the order,
            provided the items are in their original condition. Returns and
            refunds are only possible 14 days after receiving the order.
          </p>
          <p>
            If you bought the t-shirt(s) in our physical stores, it's possible
            to exchange them for another size within 30 days of the purchase
            date. For any purchase made in a store that is temporarily closed,
            we will extend the exchange period.
          </p>
          <p>
            In case of returns or exchanges, please note that we do not handle
            nor cover any shipping charges.
          </p>
          <p>
            Check out all details about this topic{" "}
            <a href="#returns-exchanges-details">here</a>.
          </p>
        </section>

        <section className="payments">
          <h2>PAYMENTS</h2>
          <p>
            At the moment we accept payments via Paypal, Visa, Mastercard, and
            American Express.
          </p>
        </section>

        <section className="privacy-cookies">
          <h2>PRIVACY &amp; COOKIES</h2>
          <p>
            The data you provide to us via this website will only be used for
            order management purposes, and it won’t be shared with any other
            company.
          </p>
          <p>
            Only in the case that you have subscribed to our Newsletter we will
            store your e-mail so that you can receive updates on new designs and
            other Typographia related communication. We promise we will never
            spam you.
          </p>
          <p>
            Our website will automatically issue cookies only to establish
            traffic statistics (number of visits, page views, etc.). This
            information helps us improve the quality of our service.
          </p>
          <p>
            To know more information about our privacy policy, please contact us
            at <a href="mailto:bert.gryson@gmail.com">bert.gryson@gmail.com</a>.
          </p>
        </section>

        <section className="contact-us">
          <h2>CONTACT US</h2>
          <p>
            If you have a special request, any other question, or a suggestion,
            reach us at{" "}
            <a href="mailto:bert.gryson@gmail.com">bert.gryson@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Faqs;
