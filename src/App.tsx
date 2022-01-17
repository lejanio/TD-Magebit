import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.scss';
import image from './assets/images/image_summer.png';
import trophy from './assets/images/trophy.png';

type FormErrorsType = {
  email?: string;
}

const emailCheckRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/i;
const emailCheckRegexCo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.co$/;

const App = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [formErrors, setFormErrors] = useState<FormErrorsType>({});
  const [subscriptionSuccessful, setSubscriptionSuccessful] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (!formErrors.email && isChecked) {
      setButtonDisabled(false);
    } else { setButtonDisabled(true); }
  }, [formErrors, isChecked]);

  const validate = (value: string) => {
    const errors = {} as FormErrorsType;

    if (emailCheckRegexCo.test(value)) {
      errors.email = 'We are not accepting subscriptions from Colombia emails';
    } else if (!emailCheckRegex.test(value)) {
      errors.email = 'Please provide a valid e-mail address';
    } else {
      errors.email = '';
    }
    return errors;
  };

  const validateEmail = () => {
    setFormErrors(validate(emailValue));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSubscriptionSuccessful(true);
  };

  return (
    <>
      <div className="page">
        <div className="section__information">
          <header className="header">
            <div className="logo--container" />
            <div className="nav">
              <a href="#" className="nav__item">About</a>
              <a href="#" className="nav__item">How it works</a>
              <a href="#" className="nav__item">Contact</a>
            </div>
          </header>
          <section className="mobile-main">
            {!subscriptionSuccessful ? (
              <>
                <main className="main main--form-view">
                  <div className="main__text main__text--form-view">
                    <h1 className="heading">Subscribe to newsletter</h1>
                    <p className="paragraph">
                      Subscribe to our newsletter and get 10% discount on pineapple
                      glasses.
                    </p>
                  </div>
                  <form
                    noValidate
                    onSubmit={handleSubmit}
                    className="form"
                  >
                    <label className="custom-field">
                      <input
                        type="email"
                        placeholder="Type your email address here..."
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                        onBlur={validateEmail}
                        className="input"
                      />
                      <button
                        disabled={buttonDisabled}
                        className="button"
                      >
                        <svg
                          width="24"
                          height="14"
                          viewBox="0 0 24 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="var(--icon-opacity)"
                            d="M17.7071 0.2929C17.3166 -0.0976334 16.6834 -0.0976334 16.2929 0.2929C15.9023 0.683403 15.9023 1.31658 16.2929 1.70708L20.5858 5.99999H1C0.447693 5.99999 0 6.44772 0 6.99999C0 7.55227 0.447693 7.99999 1 7.99999H20.5858L16.2929 12.2929C15.9023 12.6834 15.9023 13.3166 16.2929 13.7071C16.6834 14.0976 17.3166 14.0976 17.7071 13.7071L23.7071 7.70708C24.0977 7.31658 24.0977 6.6834 23.7071 6.2929L17.7071 0.2929Z"
                            fill="var(--icon-fill)"
                          />
                        </svg>
                      </button>
                      {!emailValue ? (<div className="validation-error">Email address is required</div>) : (<div className="validation-error">{formErrors.email}</div>) }

                    </label>
                    <div className="checkbox--wrapper">
                      <label className="checkbox">
                        <input
                          type="checkbox"
                          className="checkbox__input"
                          checked={isChecked}
                          onChange={() => setIsChecked(!isChecked)}
                        />
                        <div className="checkbox__box" />
                        <span>
                          I agree to
                          {' '}
                          <a href="#" className="link">terms of service</a>
                        </span>
                      </label>
                      <div className="validation-error" style={{ visibility: isChecked ? 'hidden' : 'visible' }}>You must accept the terms and conditions</div>
                    </div>
                  </form>
                </main>
              </>
            ) : (
              <>
                <main className="main main--success">
                  <div className="trophy-image">
                    <img src={trophy} alt="trophy" />
                  </div>
                  <div className="main__text main__text--success">
                    <h1 className="heading">Thanks for subscribing!</h1>
                    <div className="paragraph--wrapper">
                      <p className="paragraph">
                        You have successfully subscribed to our email listing.
                        Check your email for the discount code.
                      </p>
                    </div>
                  </div>
                </main>
              </>
            )}
            <footer className="footer">
              <a href="#">
                <svg
                  className="social-icon fb-icon"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="23" cy="23" r="22" stroke="var(--icon-stroke)" strokeWidth="2" />
                  <path
                    opacity="var(--icon-opacity)"
                    d="M24 20V18.5C24 18.2348 24.1054 17.9804 24.2929 17.7929C24.4804 17.6054 24.7348 17.5 25 17.5H26V15H24C23.2044 15 22.4413 15.3161 21.8787 15.8787C21.3161 16.4413 21 17.2044 21 18V20H19V23H21V31H24V23H26L27 20H24Z"
                    fill="var(--icon-fill)"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  className="social-icon instagram-icon"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="23" cy="23" r="22" stroke="var(--icon-stroke)" strokeWidth="2" />
                  <path
                    opacity="var(--icon-opacity)"
                    d="M16.3514 29.6498C14.8354 28.1338 15.0085 26.1079 15.0085 22.9959C15.0085 19.9559 14.8084 17.8821 16.3514 16.3441C17.2591 15.4926 18.4631 15.0283 19.7075 15.0506C21.1805 14.9846 24.8274 14.9816 26.2994 15.0506C29.3104 15.1896 30.8184 16.892 30.9504 19.702C31.0154 21.174 31.0194 24.8198 30.9504 26.2928C30.8414 28.6718 29.7224 29.9931 28.2394 30.5721C27.1504 30.9941 26.0865 30.992 23.0035 30.992C22.3785 30.992 21.7925 31.0008 21.2425 31.0008C19.1485 30.9988 17.5744 30.8728 16.3514 29.6498ZM28.6295 28.6307C29.6215 27.6307 29.5585 26.2909 29.5585 22.9959C29.5585 20.8609 29.5505 20.608 29.5115 19.765C29.3445 16.065 26.5565 16.4398 23.0045 16.4398L22.9734 16.4198C20.8364 16.4198 20.5854 16.4308 19.7364 16.4598C16.0364 16.6498 16.4195 19.3027 16.4195 22.9847C16.4195 25.7077 16.2195 27.5029 17.3395 28.6209C18.3145 29.5989 19.6505 29.5487 22.9835 29.5487C26.2215 29.5497 27.6215 29.6387 28.6295 28.6307ZM18.9015 22.9989C18.9008 22.4595 19.0066 21.9255 19.2127 21.4271C19.4188 20.9287 19.7212 20.4759 20.1027 20.0946C20.4841 19.7132 20.937 19.4109 21.4355 19.2049C21.9339 18.9989 22.4681 18.8931 23.0074 18.8939C24.0962 18.8939 25.1403 19.3262 25.9102 20.096C26.68 20.8659 27.1125 21.9102 27.1125 22.9989C27.1109 24.0877 26.6769 25.1314 25.9059 25.9002C25.135 26.6691 24.0903 27.1003 23.0015 27.099C21.9141 27.099 20.8713 26.6667 20.1024 25.8978C19.3335 25.1289 18.9015 24.0863 18.9015 22.9989ZM20.3415 22.9989C20.3414 23.3489 20.4102 23.6954 20.5441 24.0189C20.6779 24.3423 20.8742 24.6366 21.1216 24.8841C21.3691 25.1317 21.663 25.3278 21.9864 25.4618C22.3098 25.5958 22.6564 25.6649 23.0065 25.6649C23.3565 25.665 23.7031 25.5962 24.0265 25.4623C24.3499 25.3283 24.6437 25.1317 24.8912 24.8841C25.1386 24.6365 25.3348 24.3424 25.4685 24.0189C25.6022 23.6954 25.6709 23.3489 25.6705 22.9989C25.6706 22.649 25.6018 22.3026 25.468 21.9793C25.3341 21.6561 25.1379 21.3625 24.8905 21.1151C24.6431 20.8677 24.3493 20.6713 24.0261 20.5374C23.7028 20.4036 23.3563 20.3347 23.0065 20.3348C22.6563 20.3343 22.3094 20.4028 21.9858 20.5365C21.6621 20.6701 21.3679 20.8662 21.1201 21.1136C20.8723 21.361 20.6758 21.6549 20.5416 21.9784C20.4075 22.3018 20.3384 22.6487 20.3384 22.9989H20.3415ZM26.3155 18.7318C26.3156 18.6058 26.3405 18.4814 26.3889 18.3651C26.4372 18.2488 26.5079 18.143 26.597 18.054C26.6862 17.9651 26.792 17.8946 26.9084 17.8465C27.0248 17.7985 27.1495 17.7736 27.2754 17.7738C27.5296 17.7738 27.7734 17.8749 27.9532 18.0545C28.1331 18.2342 28.2342 18.4776 28.2344 18.7318C28.2346 18.8578 28.2099 18.9826 28.1617 19.099C28.1136 19.2154 28.0429 19.3214 27.9539 19.4105C27.8648 19.4996 27.759 19.5699 27.6426 19.618C27.5262 19.6662 27.4014 19.6909 27.2754 19.6908C27.1489 19.6913 27.0236 19.6666 26.9066 19.6185C26.7895 19.5704 26.6832 19.4999 26.5937 19.4105C26.5042 19.3211 26.4333 19.2145 26.385 19.0975C26.3367 18.9805 26.312 18.8554 26.3124 18.7289L26.3155 18.7318Z"
                    fill="var(--icon-fill)"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  className="social-icon twitter-icon"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="23" cy="23" r="22" stroke="var(--icon-stroke)" strokeWidth="2" />
                  <path
                    opacity="var(--icon-opacity)"
                    d="M31 18.5378C30.3981 18.8003 29.7616 18.9748 29.11 19.0558C29.7967 18.6484 30.3101 18.0034 30.553 17.2428C29.91 17.6241 29.2065 17.8927 28.473 18.0368C28.0232 17.5569 27.4395 17.2234 26.7977 17.0795C26.1559 16.9356 25.4856 16.9879 24.874 17.2298C24.2623 17.4716 23.7375 17.8917 23.3677 18.4356C22.9978 18.9795 22.8 19.6221 22.8 20.2798C22.7974 20.5312 22.8229 20.7821 22.876 21.0278C21.5711 20.9642 20.2942 20.6259 19.129 20.035C17.9638 19.4441 16.9364 18.614 16.114 17.5988C15.6919 18.3204 15.5611 19.176 15.7484 19.9907C15.9358 20.8055 16.4271 21.518 17.122 21.9828C16.6031 21.9701 16.0948 21.833 15.64 21.5828V21.6188C15.6418 22.376 15.9039 23.1095 16.3824 23.6963C16.8609 24.2832 17.5267 24.6876 18.268 24.8418C17.9874 24.9158 17.6982 24.9521 17.408 24.9498C17.1996 24.9535 16.9914 24.9347 16.787 24.8938C16.9989 25.5448 17.4075 26.1141 17.9564 26.5234C18.5053 26.9326 19.1676 27.1616 19.852 27.1788C18.691 28.0871 17.2591 28.5801 15.785 28.5788C15.5225 28.5783 15.2603 28.5609 15 28.5268C16.4999 29.4933 18.2477 30.0046 20.032 29.9988C21.2602 30.0073 22.4779 29.7717 23.6143 29.3057C24.7507 28.8396 25.7832 28.1524 26.6518 27.284C27.5204 26.4156 28.2078 25.3833 28.6741 24.247C29.1404 23.1107 29.3762 21.893 29.368 20.6648C29.368 20.5198 29.363 20.3798 29.356 20.2408C30.003 19.7778 30.5601 19.2007 31 18.5378Z"
                    fill="var(--icon-fill)"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  className="social-icon youtube-icon"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="23" cy="23" r="22" stroke="var(--icon-stroke)" strokeWidth="2" />
                  <path
                    opacity="var(--icon-opacity)"
                    d="M23.0039 28C21.0569 28 18.556 27.97 17.543 27.913C16.615 27.849 16.1287 27.7321 15.6787 26.9351C15.2287 26.1381 15 24.735 15 22.507V22.4969C15 20.2369 15.2087 18.869 15.6787 18.061C16.1127 17.294 16.5839 17.147 17.5449 17.092C18.5659 17.024 21.1239 17 23.0039 17C24.8839 17 27.435 17.024 28.458 17.092C29.419 17.147 29.8913 17.292 30.3203 18.061C30.7913 18.861 31.001 20.228 31.001 22.499V22.506C31.001 24.778 30.7923 26.145 30.3223 26.937C29.8923 27.699 29.422 27.849 28.458 27.913C27.448 27.969 24.9499 28 23.0039 28ZM21.0039 19.5V25.5L26.0039 22.5L21.0039 19.5Z"
                    fill="var(--icon-fill)"
                  />
                </svg>
              </a>
            </footer>
          </section>
        </div>
        <div className="section__image">
          <img src={image} alt="pineapples" />
        </div>
      </div>
    </>
  );
};

export default App;
