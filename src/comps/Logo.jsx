import LogoImg from "../assets/rabbit.png";

export default function Logo() {
  return (
    <div className="Logo">
      <img src={LogoImg} alt="" />
      <p>
        <span className="j">J</span>ag<span className="m">M</span>ax
      </p>
    </div>
  );
}
