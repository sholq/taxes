import {memo} from "react";

const Social = memo(() =>{
  return (
    <section className="social main__social" aria-label="Секция репостов в социальные сети">
      <ul className="social__list">
        <li className="social__item">
          <a className="social__link social__link_to_facebook" href="javascript:void(0)" />
        </li>
        <li className="social__item">
          <a className="social__link social__link_to_vkontakte" href="javascript:void(0)" />
        </li>
        <li className="social__item">
          <a className="social__link social__link_to_instagram" href="javascript:void(0)" />
        </li>
        <li className="social__item">
          <a className="social__link social__link_to_youtube" href="javascript:void(0)" />
        </li>
        <li className="social__item">
          <a className="social__link social__link_to_telegram" href="javascript:void(0)" />
        </li>
        <li className="social__item">
          <a className="social__link social__link_to_tiktok" href="javascript:void(0)" />
        </li>
      </ul>
    </section>
  )
});

export default Social;
