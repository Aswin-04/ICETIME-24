const Heading = ({ title }) => {
  return (

    <div className="bg-bgd py-6 md:py-12 font-montserrat">
      <h1 className="h1 uppercase text-center font-bold text-4xl text-tx leading-8">
        {title}
      </h1>
    </div>
  );
};

export default Heading;
