const Header = () => {
  return (
    <div
      className="header"
      style={{
        backgroundImage:
          "https://thumbs.dreamstime.com/b/wavy-water-17002407.jpg",
      }}
    >
      <h2>
        Generate more leads with a <br />
        professional landing page!
      </h2>
      <div>
        <form className="form">
          <input type="email" placeholder="Email Address" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
