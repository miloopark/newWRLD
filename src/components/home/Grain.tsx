// Film-grain overlay; relies on the single #gr turbulence filter defined in HomePage.
const Grain = () => (
  <svg className="grain" aria-hidden="true">
    <rect width="100%" height="100%" filter="url(#gr)" />
  </svg>
);

export default Grain;
