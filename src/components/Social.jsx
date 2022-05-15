import {memo} from "react";

const Social = memo(() =>{
  const icons = ["social__link_to_facebook", "social__link_to_vkontakte", "social__link_to_instagram", "social__link_to_youtube", "social__link_to_telegram", "social__link_to_tiktok"]

  return (
    <section className="social main__social" aria-label="Секция репостов в социальные сети">
      <ul className="social__list">
        {icons.map((icon, id) => (
          <li className="social__item" key={id}>
            <a className={`social__link ${icon}`} href="javascript:void(0)" />
          </li>
        ))}
      </ul>
    </section>
  )
});

export default Social;
