import ReactMarkdown from 'react-markdown';

const AboutDetailsRenderer = ({ img, imgAlt, content }) => {
  return (
    <>
      {img && (
        <div className="max-container flex gap-8 px-8 py-12 max-lg:flex-col max-lg:items-center ">
          <div className="max-w-lg min-w-[50%] self-center max-lg:px-2">
            <img src={img} alt={imgAlt} className="rounded-sm shadow" />
          </div>
          <div className="prose text-black max-xs:text-sm max-xs:leading-6">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      )}
      {img === "" && (
        <div className="max-container px-8 py-12 ">

          <article className="prose text-black max-xs:text-sm max-xs:leading-6 mx-auto"
          >
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
        </div>
      )}

    </>
  );
};

export default AboutDetailsRenderer;
