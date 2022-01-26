import '../style/page_styles/ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      {/* <strong>{name}</strong> */}
      <p>Content for <strong>{name}</strong> goes here.</p>
    </div>
  );
};

export default ExploreContainer;
