export default function PricingEntry({
  heading,
  Price,
  btnheading,
  text1,
  text2,
  Priceheading,
  style,
  btnStyle,
  hstyle,
  discount,
}) {
  return (
    <div className="pricing__section__content" style={style}>
      <div className="pricing__section__content__subheading" style={hstyle}>
        {heading}
        {discount ? <div className="disocunt">SAVE 25%</div> : null}
      </div>
      <div className="pricing__section__content__heading">
        {Price}
        <span>{Priceheading}</span>
      </div>
      <div className="pricing__section__content__btn" style={btnStyle}>
        {btnheading}
        <svg
          width="19"
          height="14"
          viewBox="0 0 19 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.6452 7.64517C19.0015 7.28885 19.0015 6.71115 18.6452 6.35483L12.8386 0.548256C12.4823 0.191936 11.9046 0.191936 11.5483 0.548256C11.1919 0.904576 11.1919 1.48229 11.5483 1.8386L16.7097 7L11.5483 12.1614C11.1919 12.5177 11.1919 13.0954 11.5483 13.4517C11.9046 13.8081 12.4823 13.8081 12.8386 13.4517L18.6452 7.64517ZM0 7.91241L18 7.91241V6.08759L0 6.08759L0 7.91241Z"
            fill="CurrentColor"
          />
        </svg>
      </div>
      <div className="pricing__section__content__text">
        {text1}
        <br />
        {text2}
      </div>
    </div>
  );
}
