const Hobbies = () => {
  const hobbies = [
    {
      id: 1,
      title: 'Gaming',
      img: 'https://picsum.photos/id/680/370/140',
      description: 'Quisque feugiat malesuada molestie.'
    },
    {
      id: 2,
      title: 'Cooking',
      img: 'https://picsum.photos/id/681/370/140',
      description: 'Quisque feugiat malesuada molestie.'
    },
    {
      id: 3,
      title: 'Biking',
      img: 'https://picsum.photos/id/691/370/140',
      description: 'Quisque feugiat malesuada molestie.'
    },
  ];

  return (
    <section className="card hobbies">
      <h2>Hobbies</h2>
      {hobbies.map(h => 
        <div key={h.id} className="hobby">
          <img src={h.img} alt={h.title}/>
          <p className="title">{h.title}</p>
          <p className="description">{h.description}</p>
        </div>  
      )}
    </section>
  );
}
 
export default Hobbies;