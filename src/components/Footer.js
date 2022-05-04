function Footer(props) {
  const {isMobile} = props;

  return (
    <footer className="footer">
      <div className="footer__copyright-icon"></div>
      {isMobile ? (
        <div className="footer__copyright-text second-template">
          <p className="footer__copyright-paragraph">Сайт сделали <a className="footer__link" href="#">Леонид Андрухов</a>,
          </p>
          <p className="footer__copyright-paragraph"><a className="footer__link" href="#">Иван Сорокин</a> и <a
            className="footer__link" href="#">Семён Силкин</a></p>
          <p className="footer__copyright-paragraph">на чистом энтузиазме, а вы можете</p>
        </div>
      ) : (
        <div className="footer__copyright-text first-template">
          <p className="footer__copyright-paragraph">Сайт сделали <a className="footer__link" href="#">Леонид
            Андрухов</a>, <a className="footer__link" href="#">Иван Сорокин</a></p>
          <p className="footer__copyright-paragraph">и <a className="footer__link" href="#">Семён Силкин</a> на чистом
            энтузиазме, а вы можете</p>
        </div>
      )}
      <a className="footer__link footer__link_type_donate">Поддержать проект</a>
    </footer>
  );
}

export default Footer;
