import './NewsLetter.scss';

const NewsLetter = () => {
  return (
    <div className="news-letter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='your email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter;