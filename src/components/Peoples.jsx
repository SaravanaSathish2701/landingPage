import People from "./People";

const data = [
  {
    icon: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg",
    name: "Margaret E.",
    description: "This is fantastic! Thanks so much guys!",
  },
  {
    icon: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg",
    name: "Fred S.",
    description:
      "Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
  },
  {
    icon: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg",
    name: "Sarah w.",
    description:
      "Thanks so much for making these free resources available to us!",
  },
];

const Peoples = () => {
  return (
    <div className="people">
      {data.map((val) => (
        <People
          key={val.title}
          icon={val.icon}
          name={val.name}
          description={val.description}
        />
      ))}
    </div>
  );
};

export default Peoples;
