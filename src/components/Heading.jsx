const Heading = ({ title }) => {
  return (

    <div className="bg-bgd py-6 md:py-12 ">
      <h1 className="h1 uppercase text-center font-bold text-4xl leading-8 text-black/80">
        {title}
      </h1>
    </div>
  );
};

export default Heading;
