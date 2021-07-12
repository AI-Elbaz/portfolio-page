const Progress = () => {
  return (
    <section className="card progress">
      <h2>Front end</h2>
      <ProgressBar title="React" progress={0.65} />
      <ProgressBar title="Javascript" progress={0.85} />
      <ProgressBar title="CSS" progress={0.9} />
      <ProgressBar title="Vue" progress={0.6} />
      <ProgressBar title="Redux" progress={0.85} />
      <ProgressBar title="React Native" progress={0.95} />
    </section>
  );
}
 
const ProgressBar = ({title, progress=0.5}) => {
  return (
    <div className="progress-bar">
      <p>{title}</p>
      <div className="progress" style={{'--progress': progress}}></div>
    </div>
  );
}
 
export default Progress;