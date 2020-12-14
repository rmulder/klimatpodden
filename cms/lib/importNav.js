const Nav = async () => {
  const markdownFiles = require
    .context("../content/pages", false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));

  const posts = await Promise.all(
    markdownFiles.map(async (path) => {
      const { attributes } = await import(`../content/pages/${path}`);
      return { ...attributes, slug: path.substring(0, path.length - 3) };
    })
  );
  return posts;
};

export default Nav;

// TODO: when getStaticProps is supported in _app this can be removed along with markdown loader, and use functions in /cms/lib/api instead
