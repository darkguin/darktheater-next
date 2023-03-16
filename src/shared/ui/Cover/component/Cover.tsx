import './Cover.scss';

interface Props {
  image: string;
}

function Cover({ image }: Props) {
  return <div className="cover" style={{ backgroundImage: `url(${image})` }}></div>;
}

export default Cover;
