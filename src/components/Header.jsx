import {memo} from "react";

const Header = memo(() => {
  return (
    <header className="header">
      <h1 className="header__title">Платим больше, чем думаем</h1>
    </header>
  )
});

export default Header;
