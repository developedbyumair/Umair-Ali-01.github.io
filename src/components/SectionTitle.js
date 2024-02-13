const SectionTitle = ({ heading, subHeading, text }) => {
  return (
    <div className="row section-heading">
      <div className="col-lg-10">
        <h6>
          <span>{subHeading}</span>
        </h6>
        <h3>
          <span>{heading}</span>
        </h3>
        {text && (
          <p
            style={{
              whiteSpace: "pre-line",
            }}
          >
            {text}
          </p>
        )}
      </div>
    </div>
  );
};
export default SectionTitle;
