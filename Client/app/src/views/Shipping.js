const Shipping = () => {
  return (
    <div>
      <h1 className="footertitle">Shipping</h1>
      <div className="footersections">
        <section className="expedited-shipping">
          <h2>EXPEDITED SHIPPING VIA UPS & FedEx</h2>
          <p>
            We work with this option to ship your order via carrier for faster,
            more reliable shipping.
          </p>
          <p>
            We work with UPS for all countries, except for US, Canada, and
            Mexico, where we ship via FedEx.
          </p>
          <p>
            Our platform automatically calculates the exact shipping price
            according to your address.
          </p>
        </section>

        <section className="important-information">
          <h2>IMPORTANT INFORMATION</h2>
          <p>
            We do our best to prepare your order with care. However, from the
            moment it gets dispatched from our offices, we cannot control the
            delivery service. That is why we do not refund shipping fees for
            delayed, misplaced, or lost orders.
          </p>
          <p>
            In case of an issue with your delivery, please contact UPS or FedEx
            directly.
          </p>
        </section>

        <section className="delivery-time">
          <h2>DELIVERY TIME</h2>
          <p>
            We might take up to 8 business days to prepare your order in
            addition to the expected delivery time of each shipping service.
          </p>
        </section>

        <section className="store-pickup">
          <h2>STORE PICKUP</h2>
          <p>At the moment this option is not available.</p>
        </section>

        <section className="customs-duties-taxes">
          <h2>CUSTOMS DUTIES AND TAXES</h2>
          <p>IMPORTANT INFORMATION</p>
          <p>
            All countries outside the European Union have their own legal tax
            system. That is why there might be customs, duties, or other import
            or collection fees charged upon the arrival of your package. Please
            note that these charges are not included in our prices nor shipping
            fees.
          </p>
          <p>
            All customs clearing procedures and payments must be handled with
            your local border authority. For more information, please contact
            them directly.
          </p>
        </section>
      </div>
    </div>
  );
};
export default Shipping;
