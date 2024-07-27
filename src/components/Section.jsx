const Section = () => {
  return (
    <div
      className="sec"
      style={{
        backgroundImage:
          "https://thumbs.dreamstime.com/b/wavy-water-17002407.jpg",
      }}
    >
      <h2>Ready to get started? Sign up now!</h2>
      <div>
        <form>
          <input type="email" placeholder="Email Address" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Section;
