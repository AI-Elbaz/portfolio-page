const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: 'How to organize your CSS',
      img: 'https://picsum.photos/id/690/320/275',
      description: 'In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.'
    }
  ];

  return (
    <section className="blogs">
      <h2>Blogs</h2>

      {blogs.map(b => 
        <div key={b.id} className="card blog">
          <div className="info">
            <p className="title">{b.title}</p>
            <p className="description">{b.description}</p>
            <button className="read-more">Read More &rarr;</button>
          </div>
          <img src={b.img} alt={b.title} />
        </div>
      )}
    </section>
  );
}

export default Blogs;