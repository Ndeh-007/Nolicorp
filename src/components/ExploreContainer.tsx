import '../style/page_styles/ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container"> 
      <p> <strong>./{name}</strong> is not a valid URL</p>
    </div>
  );
};

export default ExploreContainer;
