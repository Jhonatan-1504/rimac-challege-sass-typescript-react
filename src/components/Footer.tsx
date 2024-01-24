import RimacBlack from "@/assets/rimac-black.svg";
import RimacBlackLeft from "@/assets/rimac-black-left.svg";
import Divider from "./Atom/Divider";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img className="footer__content--max-md" src={RimacBlackLeft} alt="rimac black left" />
        <img className="footer__content--normal" src={RimacBlack} alt="rimac black" />

        <div className="footer__content--max-md">
          <Divider />{" "}
        </div>

        <p>© 2023 RIMAC Seguros y Reaseguros.</p>
      </div>
    </footer>
  );
}
