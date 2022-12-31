const FirstPage = () => {
  return (
    <div>
      <nav>
        {/* <h3>Grafisches Deutsch-Wörterbuch</h3> */}
        <h3>Graphical German Dictionary</h3>
        <div>
          {/* <h1>Lernen Sie deutsche Wörter auf einfache Art und Weise</h1> */}
          <h1>Learn German words in an easy way</h1>
          {/* <p>
            Wenn Sie ein Wort suchen, erhalten Sie eine Mindmap mit verwandten
            Wörtern, so dass Sie 10 Wörter mit einer Suche lernen können.
          </p> */}
          <p>
            When you search for a word, you get a mind map of related words so
            that you can learn words, so you can learn 10 words with one search.
          </p>
        </div>
        <div>
          <form action="">
            <input type="search" />
            <button>Try it now</button>
          </form>
        </div>
      </nav>
      <div>
        <div>
          <h2>Related words</h2>
          <p></p>
        </div>
        <div>
          <h2>Similar words</h2>
        </div>
        <div>
          <h2>Synonym</h2>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
