export default function Banner({ image, text }) {
  return (
    <section id="Banner">
      <ul className="filter">
        <li>
          <img src={image} alt="" />
          <h1>{text}</h1>
        </li>
      </ul>
    </section>
  );
}
