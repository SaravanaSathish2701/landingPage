import "bootstrap-icons/font/bootstrap-icons.css";
import Feature from "./Feature";

const data = [
  {
    image: <i className="bi-window m-auto text-primary"></i>,
    title: "Fully Responsive",
    description:
      "This theme will look great on any device, no matter the size!",
  },
  {
    image: <i className="bi-layers m-auto text-primary"></i>,
    title: "Bootstrap 5 Ready",
    description: "Featuring the latest build of the new Bootstrap 5 framework!",
  },
  {
    image: <i className="bi-terminal m-auto text-primary"></i>,
    title: "Easy to use",
    description:
      "Ready to use with your own content, or customize the source files!",
  },
];

const Features = () => {
  return (
    <div className="feature">
      {data.map((val) => (
        <Feature
          key={val.title}
          title={val.title}
          image={val.image}
          description={val.description}
        />
      ))}
    </div>
  );
};

export default Features;
