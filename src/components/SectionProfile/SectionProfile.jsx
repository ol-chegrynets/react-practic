import css from "./SectionProfile.module.css";

const SectionProfile = ({ title, children }) => {
  return (
    <section className={css.section}>
      {title && <h2 className={css.title}>{title}</h2>}
      <div className={css.container}>{children}</div>
    </section>
  );
};

export default SectionProfile;
