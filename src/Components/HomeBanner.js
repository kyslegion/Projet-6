import Section1 from "../Assets/Main/Section1.png";
export default function HomeBanner() {
  return (
    <>
    <section>
      <ul className="filter">
        <li>
          <h1>Chez vous, partout et ailleurs</h1>
          <img id="filterimg" src={Section1} alt="" />
        </li>
      </ul>
    </section>
    </>
  );
}
