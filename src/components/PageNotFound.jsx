function PageNotFound() {
  return (
    <main className="main">
      <section className="description" aria-label="Описание проекта">
        <p className="description__paragraph">404 - Страница не найдена</p>
        <a href="/">
          <p className="description__paragraph">На главную</p>
        </a>
      </section>
    </main>

  )
}

export default PageNotFound;
