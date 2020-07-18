function Publication(title,author,pubDate) {
  const publicAPI = {
    print() {
      console.log(`
        Title: ${ title }
        By: ${ author }
        ${ pubDate }
      `);
    }
  };

  return publicAPI;
}

function Book(bookDetails) {
  const pub = Publication(
    bookDetails.title,
    bookDetails.author,
    bookDetails.publishedOn
  );

  const publicAPI = {
    print() {
      pub.print();
      console.log(`
        Publisher: ${ bookDetails.publisher }
        ISBN: ${ bookDetails.ISBN }
      `);
    }
  };

  return publicAPI;
}

function BlogPost(title,author,pubDate,URL) {
  const pub = Publication(title,author,pubDate);

  const publicAPI = {
    print() {
      pub.print();
      console.log(URL);
    }
  };

  return publicAPI;
}

const YDKJS = Book({
  title: "You Don't Know JS",
  author: "Kyle Simpson",
  publishedOn: "June 2014",
  publisher: "O'Reilly",
  ISBN: "123456-789"
});

console.log(YDKJS.print());
// Title: You Don't Know JS
// By: Kyle Simpson
// June 2014
// Publisher: O'Reilly
// ISBN: 123456-789

const forAgainstLet = BlogPost(
  "For and against let",
  "Kyle Simpson",
  "October 27, 2014",
  "https://davidwalsh.name/for-and-against-let"
);

console.log(forAgainstLet.print());
// Title: For and against let
// By: Kyle Simpson
// October 27, 2014
// https://davidwalsh.name/for-and-against-let