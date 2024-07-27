import ImageFeature from "./ImageFeature";

const data = [
  {
    image: "https://www.helloy.app/img/bg-showcase-1.jpg",
    title: "Fully Responsive Design",
    description:
      "When you use ta theme created by start Bootstrap, you know thet the theme will look great on any device, whether it's a phone, tablet or desktop the page will behave responsively!",
    imageFloat: "right",
  },
  {
    image:
      "https://vanseodesign.com/blog/wp-content/uploads/2018/08/source-code.jpg",
    title: "Updated For Bootstrap 5",
    description:
      "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the theme on start Bootstrap are now using Bootstrap 5!",
    imageFloat: "left",
  },
  {
    image:
      "https://www.northeastltd.com/wp-content/uploads/2021/02/business-2178566_1280.jpg",
    title: "Easy to Use & Customize",
    description:
      "Landing Page is just HTML and CSS with a splash of SCSS for users  who demand some deepercustomization options. Out of the box, Just add your content and images, and your new landing page will be ready to go",
    imageFloat: "right",
  },
];

const ImageFeatures = () => {
  return (
    <div className="imgfeature">
      {data.map((val) => (
        <ImageFeature
          key={val.title}
          image={val.image}
          title={val.title}
          description={val.description}
          imageFloat={val.imageFloat}
        />
      ))}
    </div>
  );
};

export default ImageFeatures;
